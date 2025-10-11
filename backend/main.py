"""
VISIBI - AI Brand Monitor FastAPI Application
Main application entry point with API endpoints
"""

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime
from typing import List
import sys
from pathlib import Path

# Add parent directory to path for imports
sys.path.insert(0, str(Path(__file__).parent.parent))

from backend.config import config
from backend.services.brand_analyzer import BrandAnalyzer
from backend.services.sentiment_analyzer import SentimentAnalyzer
from backend.models.schemas import (
    URLRequest,
    AnalysisResponse,
    QueryAnalysis,
    SummaryMetrics,
    SentimentResult,
    UsageMetrics,
    HealthResponse,
    HistoryResponse
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
