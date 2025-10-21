"""
VISIBI - AI Brand Monitor FastAPI Application
Main application entry point with API endpoints
"""

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime
from typing import List
import sys
import os
from pathlib import Path

# Add parent directory to path for imports
sys.path.insert(0, str(Path(__file__).parent.parent))

from backend.config import config
from backend.services.brand_analyzer import BrandAnalyzer
from backend.services.sentiment_analyzer import SentimentAnalyzer
from backend.services.waitlist_service import WaitlistService
from backend.services.email_service import EmailService
from backend.models.schemas import (
    URLRequest,
    AnalysisResponse,
    QueryAnalysis,
    SummaryMetrics,
    SentimentResult,
    UsageMetrics,
    HealthResponse,
    HistoryResponse,
    WaitlistRequest,
    WaitlistResponse,
    PreviewData
)

try:
    from openai import OpenAI
except ImportError:
    print("Warning: OpenAI package not installed. Install with: pip install openai")
    OpenAI = None

# Initialize FastAPI app
app = FastAPI(
    title=config.APP_NAME,
    description="Monitor brand mentions and sentiment across AI models",
    version=config.VERSION,
    docs_url="/docs",
    redoc_url="/redoc"
)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify actual origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize services
brand_analyzer = BrandAnalyzer()
sentiment_analyzer = SentimentAnalyzer()
waitlist_service = WaitlistService()
email_service = EmailService()

# Initialize OpenAI client if available
openai_client = None
if OpenAI and config.OPENAI_API_KEY:
    try:
        openai_client = OpenAI(api_key=config.OPENAI_API_KEY)
    except Exception as e:
        print(f"Warning: Failed to initialize OpenAI client: {e}")

# In-memory storage for MVP (will be replaced with database in Phase 2)
analysis_history: List[dict] = []


def get_chatgpt_response(query: str):
    """
    Get response from ChatGPT for a given query
    Returns tuple of (response_text, usage_data)
    """
    if not openai_client:
        raise HTTPException(
            status_code=500,
            detail="OpenAI client not initialized. Check OPENAI_API_KEY in .env file"
        )
    
    try:
        response = openai_client.chat.completions.create(
            model=config.OPENAI_MODEL,
            messages=[
                {
                    "role": "user",
                    "content": query
                }
            ],
            max_tokens=config.MAX_TOKENS,
            temperature=config.TEMPERATURE
        )
        
        # Extract usage data
        usage_data = {
            "prompt_tokens": response.usage.prompt_tokens,
            "completion_tokens": response.usage.completion_tokens,
            "total_tokens": response.usage.total_tokens
        }
        
        return response.choices[0].message.content, usage_data
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"ChatGPT API Error: {str(e)}"
        )


@app.get("/", tags=["Root"])
async def root():
    """Root endpoint"""
    return {
        "message": "VISIBI - AI Brand Monitor API",
        "version": config.VERSION,
        "docs": "/docs"
    }


@app.get("/health", response_model=HealthResponse, tags=["Health"])
async def health_check():
    """
    Health check endpoint
    Returns application status and version
    """
    return HealthResponse(
        status="ok",
        version=config.VERSION,
        timestamp=datetime.now()
    )


@app.post("/api/brands/analyze", response_model=AnalysisResponse, tags=["Analysis"])
async def analyze_brand(request: URLRequest):
    """
    Main endpoint: Analyze brand mentions and sentiment
    
    This endpoint:
    1. Extracts brand name from URL
    2. Generates or uses provided monitoring queries
    3. Sends queries to ChatGPT
    4. Analyzes sentiment in responses
    5. Returns comprehensive analysis with metrics
    """
    try:
        # Fetch brand info
        brand_info = await brand_analyzer.fetch_brand_info(request.url)
        brand_name = brand_info["brand_name"]
        
        # Generate or use provided queries
        if request.queries:
            queries = request.queries
        else:
            queries = brand_analyzer.generate_monitoring_queries(
                brand_name,
                custom_keywords=request.custom_keywords
            )
        
        # Analyze each query
        analysis_results = []
        total_prompt_tokens = 0
        total_completion_tokens = 0
        
        for query in queries:
            # Get ChatGPT response with usage data
            response, usage_data = get_chatgpt_response(query)
            
            # Accumulate token usage
            total_prompt_tokens += usage_data["prompt_tokens"]
            total_completion_tokens += usage_data["completion_tokens"]
            
            # Analyze sentiment
            sentiment_analysis = sentiment_analyzer.analyze_sentiment(response, brand_name)
            
            query_result = QueryAnalysis(
                query=query,
                response=response,
                sentiment_analysis=SentimentResult(**sentiment_analysis)
            )
            
            analysis_results.append(query_result)
        
        # Calculate summary metrics
        mentions_count = sum(1 for a in analysis_results if a.sentiment_analysis.mentioned)
        positive_count = sum(1 for a in analysis_results if a.sentiment_analysis.sentiment == "POSITIVE")
        negative_count = sum(1 for a in analysis_results if a.sentiment_analysis.sentiment == "NEGATIVE")
        neutral_count = sum(1 for a in analysis_results if a.sentiment_analysis.sentiment == "NEUTRAL")
        
        # Determine overall sentiment
        overall_sentiment = "POSITIVE" if positive_count > negative_count else \
                          "NEGATIVE" if negative_count > positive_count else "NEUTRAL"
        
        # Calculate average confidence
        mentioned_analyses = [a for a in analysis_results if a.sentiment_analysis.mentioned]
        avg_confidence = (
            sum(a.sentiment_analysis.confidence for a in mentioned_analyses) / len(mentioned_analyses)
            if mentioned_analyses else 0.0
        )
        
        summary = SummaryMetrics(
            total_queries=len(queries),
            mentions_count=mentions_count,
            visibility=(mentions_count / len(queries)) * 100 if queries else 0,
            positive=positive_count,
            negative=negative_count,
            neutral=neutral_count,
            overall_sentiment=overall_sentiment,
            average_confidence=round(avg_confidence, 2)
        )
        
        # Calculate usage metrics and estimated cost
        # gpt-4o-mini pricing: $0.150/1M input tokens, $0.600/1M output tokens
        total_tokens = total_prompt_tokens + total_completion_tokens
        estimated_cost = (
            (total_prompt_tokens / 1_000_000) * 0.150 +
            (total_completion_tokens / 1_000_000) * 0.600
        )
        
        usage_metrics = UsageMetrics(
            model=config.OPENAI_MODEL,
            total_tokens=total_tokens,
            prompt_tokens=total_prompt_tokens,
            completion_tokens=total_completion_tokens,
            estimated_cost=round(estimated_cost, 6)
        )
        
        # Create response
        analysis_response = AnalysisResponse(
            brand_name=brand_name,
            url=request.url,
            timestamp=datetime.now(),
            queries_analyzed=len(queries),
            analysis=analysis_results,
            summary=summary,
            usage=usage_metrics
        )
        
        # Store in history
        analysis_history.append(analysis_response.model_dump())
        
        return analysis_response
        
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Analysis failed: {str(e)}")


@app.get("/api/brands/history", response_model=HistoryResponse, tags=["History"])
async def get_analysis_history(limit: int = 10):
    """
    Get analysis history
    
    Args:
        limit: Maximum number of results to return (default: 10)
    
    Returns:
        List of past analyses
    """
    # Return most recent analyses first
    recent_analyses = analysis_history[-limit:][::-1]
    
    return HistoryResponse(
        analyses=recent_analyses,
        total_count=len(analysis_history)
    )


@app.delete("/api/brands/history", tags=["History"])
async def clear_history():
    """Clear all analysis history (for testing purposes)"""
    global analysis_history
    count = len(analysis_history)
    analysis_history = []
    return {
        "message": "History cleared",
        "items_deleted": count
    }


@app.post("/api/waitlist", response_model=WaitlistResponse, tags=["Waitlist"])
async def join_waitlist(request: WaitlistRequest):
    """
    Join the waitlist for early access

    This endpoint:
    1. Validates email and brand URL
    2. Runs a quick brand analysis for preview
    3. Saves to waitlist (JSON file)
    4. Sends confirmation email to user
    5. Sends notification email to admin (if configured)
    6. Returns preview analytics
    """
    try:
        # Validate email format
        if not request.email or '@' not in request.email:
            raise HTTPException(status_code=400, detail="Invalid email address")

        # Fetch brand info and run quick analysis
        brand_info = await brand_analyzer.fetch_brand_info(request.brand_url)
        brand_name = brand_info["brand_name"]

        # Generate queries based on custom inputs or defaults
        if request.custom_queries or request.custom_keywords:
            # Use custom queries/keywords if provided
            preview_queries = brand_analyzer.generate_monitoring_queries(
                brand_name,
                custom_queries=request.custom_queries,
                custom_keywords=request.custom_keywords
            )[:10]  # Allow up to 10 queries for custom analysis
        else:
            # Generate a subset of queries for quick preview (only 5 queries)
            preview_queries = brand_analyzer.generate_monitoring_queries(brand_name)[:5]

        # Quick sentiment analysis
        preview_results = []
        for query in preview_queries:
            try:
                response, _ = get_chatgpt_response(query)
                sentiment_analysis = sentiment_analyzer.analyze_sentiment(response, brand_name)
                preview_results.append(sentiment_analysis)
            except:
                # If OpenAI fails, provide fallback data
                preview_results.append({
                    "mentioned": False,
                    "sentiment": "NEUTRAL",
                    "confidence": 0.0,
                    "position": -1,
                    "positive_indicators": 0,
                    "negative_indicators": 0
                })

        # Calculate preview metrics
        mentions_count = sum(1 for r in preview_results if r["mentioned"])
        positive_count = sum(1 for r in preview_results if r["sentiment"] == "POSITIVE")
        negative_count = sum(1 for r in preview_results if r["sentiment"] == "NEGATIVE")

        # Determine overall sentiment
        overall_sentiment = "POSITIVE" if positive_count > negative_count else \
                          "NEGATIVE" if negative_count > positive_count else "NEUTRAL"

        visibility = (mentions_count / len(preview_queries)) * 100 if preview_queries else 0

        preview_data = PreviewData(
            brand_name=brand_name,
            sentiment=overall_sentiment,
            mentions=mentions_count,
            visibility=round(visibility, 1)
        )

        # Save to waitlist
        waitlist_service.add_to_waitlist(
            email=request.email,
            brand_url=request.brand_url,
            preview_data=preview_data.model_dump()
        )

        # Send confirmation email to user
        try:
            email_service.send_waitlist_confirmation(
                to_email=request.email,
                brand_url=request.brand_url,
                preview_data=preview_data.model_dump()
            )
        except Exception as e:
            print(f"Warning: Failed to send confirmation email: {e}")

        # Send notification to admin (if configured)
        admin_email = os.getenv('ADMIN_EMAIL')
        if admin_email:
            try:
                email_service.send_admin_notification(
                    admin_email=admin_email,
                    user_email=request.email,
                    brand_url=request.brand_url,
                    preview_data=preview_data.model_dump()
                )
            except Exception as e:
                print(f"Warning: Failed to send admin notification: {e}")

        return WaitlistResponse(
            message="Successfully added to waitlist! Check your email for confirmation.",
            email=request.email,
            brand_url=request.brand_url,
            preview=preview_data
        )

    except HTTPException:
        raise
    except Exception as e:
        import traceback
        print(f"ERROR in waitlist endpoint: {str(e)}")
        print(traceback.format_exc())
        raise HTTPException(
            status_code=500,
            detail=f"Failed to join waitlist: {str(e)}"
        )


@app.get("/api/waitlist/stats", tags=["Waitlist"])
async def get_waitlist_stats():
    """Get waitlist statistics (admin endpoint)"""
    stats = waitlist_service.get_stats()
    return {
        "message": "Waitlist statistics",
        **stats
    }


# Startup event
@app.on_event("startup")
async def startup_event():
    """Run on application startup"""
    print(f"🚀 Starting {config.APP_NAME} v{config.VERSION}")
    print(f"📝 API Documentation: http://localhost:8000/docs")
    print(f"🔍 Debug mode: {config.DEBUG}")
    
    # Validate configuration
    try:
        config.validate()
        print("✅ Configuration validated")
    except ValueError as e:
        print(f"❌ Configuration error: {e}")


# Shutdown event
@app.on_event("shutdown")
async def shutdown_event():
    """Run on application shutdown"""
    print(f"👋 Shutting down {config.APP_NAME}")


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        reload=config.DEBUG
    )
