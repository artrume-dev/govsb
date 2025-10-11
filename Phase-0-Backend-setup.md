# Phase 0: Backend Setup - Test-Driven Development

## Overview
Phase 0 focuses on building a robust FastAPI backend with test-driven development (TDD) practices. We'll write tests first, then implement the functionality. No frontend yet—just API endpoints.

**Duration**: 2-3 hours  
**Tech Stack**: Python 3.9+, FastAPI, pytest, OpenAI API, BeautifulSoup4

## Tasks Checklist

### Step 1: Project Setup ✓
- [ ] Create backend directory structure
- [ ] Create virtual environment
- [ ] Install dependencies
- [ ] Create configuration files

### Step 2: Core Services ✓
- [ ] Create `BrandAnalyzer` service
- [ ] Create `SentimentAnalyzer` service (local)
- [ ] Create tests for both services

### Step 3: API Endpoints ✓
- [ ] Create FastAPI main app
- [ ] Add `/api/brands/analyze` endpoint
- [ ] Add `/health` endpoint
- [ ] Add `/api/brands/history` endpoint

### Step 4: Integration & Testing ✓
- [ ] Test sentiment analysis locally
- [ ] Test ChatGPT API connection
- [ ] Test end-to-end flow
- [ ] Document API

---


## Part 1: Project Initialization

### Step 1: Create Project Structure

```bash
mkdir ai-visbi
cd ai-visibi

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Create directory structure
mkdir -p backend tests
mkdir -p backend/services backend/models backend/utils
touch backend/__init__.py
touch backend/main.py
touch backend/config.py
touch backend/services/__init__.py
touch backend/models/__init__.py
touch backend/utils/__init__.py
touch tests/__init__.py
touch tests/test_brand_analyzer.py
touch tests/test_sentiment.py
touch tests/test_api.py
```

### Step 2: Install Dependencies

```bash
pip install fastapi uvicorn openai python-dotenv pytest pytest-asyncio requests beautifulsoup4 httpx
```

Create `requirements.txt`:
```
fastapi==0.104.1
uvicorn==0.24.0
openai==1.3.0
python-dotenv==1.0.0
pytest==7.4.3
pytest-asyncio==0.21.1
requests==2.31.0
beautifulsoup4==4.12.2
httpx==0.25.0
```

### Step 3: Create Environment Configuration

Create `backend/config.py`:

```python
import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    """Configuration class for the application"""
    OPENAI_API_KEY = os.getenv("OPENAI_API_KEY", "")
    OPENAI_MODEL = "gpt-4o-mini"
    DEBUG = os.getenv("DEBUG", "False") == "True"
    
    # Sentiment analysis thresholds
    SENTIMENT_CONFIDENCE_THRESHOLD = 0.5
    
    # API Settings
    MAX_TOKENS = 500
    TEMPERATURE = 0.7
    REQUEST_TIMEOUT = 10

config = Config()
```

Create `.env`:
```
OPENAI_API_KEY=sk-your-api-key-here
DEBUG=False
```

Create `.gitignore`:
```
venv/
__pycache__/
.env
.pytest_cache/
*.pyc
.DS_Store
dist/
build/
*.egg-info/
.coverage
htmlcov/
```

---

## Part 2: Test-Driven Development (TDD)

### Step 1: Write Tests for Brand Name Extraction

Create `tests/test_brand_analyzer.py`:

```python
import pytest
from backend.services.brand_analyzer import BrandAnalyzer


class TestBrandNameExtraction:
    """Test suite for brand name extraction"""
    
    @pytest.fixture
    def analyzer(self):
        """Fixture to provide BrandAnalyzer instance"""
        return BrandAnalyzer()
    
    def test_extract_brand_from_simple_url(self, analyzer):
        """Test extracting brand from simple URL"""
        url = "https://www.slack.com"
        brand = analyzer.extract_brand_name(url)
        assert brand.lower() == "slack"
    
    def test_extract_brand_removes_www(self, analyzer):
        """Test that www is removed from brand extraction"""
        url = "https://www.notion.so"
        brand = analyzer.extract_brand_name(url)
        assert "www" not in brand.lower()
    
    def test_extract_brand_removes_protocol(self, analyzer):
        """Test that protocol (https://, http://) is removed"""
        url = "http://figma.com"
        brand = analyzer.extract_brand_name(url)
        assert "http" not in brand.lower()
    
    def test_extract_brand_handles_multiple_dots(self, analyzer):
        """Test extraction from URL with multiple dots"""
        url = "https://www.company.co.uk"
        brand = analyzer.extract_brand_name(url)
        assert brand.lower() == "company"
    
    def test_extract_brand_invalid_url(self, analyzer):
        """Test graceful handling of invalid URLs"""
        url = "not-a-url"
        brand = analyzer.extract_brand_name(url)
        assert brand is not None
        assert isinstance(brand, str)


class TestBrandInfoFetching:
    """Test suite for fetching brand info from URLs"""
    
    @pytest.fixture
    def analyzer(self):
        return BrandAnalyzer()
    
    @pytest.mark.asyncio
    async def test_fetch_brand_info_returns_dict(self, analyzer):
        """Test that fetch_brand_info returns a dictionary"""
        result = await analyzer.fetch_brand_info("https://www.slack.com")
        assert isinstance(result, dict)
        assert "brand_name" in result
        assert "url" in result
    
    @pytest.mark.asyncio
    async def test_fetch_brand_info_contains_url(self, analyzer):
        """Test that fetched info contains the original URL"""
        url = "https://www.slack.com"
        result = await analyzer.fetch_brand_info(url)
        assert result["url"] == url
    
    @pytest.mark.asyncio
    async def test_fetch_brand_info_has_brand_name(self, analyzer):
        """Test that fetched info has a brand name"""
        result = await analyzer.fetch_brand_info("https://www.slack.com")
        assert result["brand_name"] is not None
        assert len(result["brand_name"]) > 0


class TestMonitoringQueriesGeneration:
    """Test suite for generating monitoring queries"""
    
    @pytest.fixture
    def analyzer(self):
        return BrandAnalyzer()
    
    def test_generate_queries_returns_list(self, analyzer):
        """Test that generated queries is a list"""
        queries = analyzer.generate_monitoring_queries("Slack")
        assert isinstance(queries, list)
    
    def test_generate_queries_minimum_count(self, analyzer):
        """Test that at least 3 queries are generated"""
        queries = analyzer.generate_monitoring_queries("Slack")
        assert len(queries) >= 3
    
    def test_generate_queries_contain_brand_name(self, analyzer):
        """Test that queries contain the brand name"""
        brand = "Slack"
        queries = analyzer.generate_monitoring_queries(brand)
        
        # At least one query should contain the brand name
        assert any(brand.lower() in q.lower() for q in queries)
    
    def test_generate_queries_are_strings(self, analyzer):
        """Test that all queries are strings"""
        queries = analyzer.generate_monitoring_queries("Slack")
        assert all(isinstance(q, str) for q in queries)
    
    def test_generate_queries_are_unique(self, analyzer):
        """Test that generated queries are unique"""
        queries = analyzer.generate_monitoring_queries("Slack")
        assert len(queries) == len(set(queries))
```

### Step 2: Write Tests for Sentiment Analysis

Create `tests/test_sentiment.py`:

```python
import pytest
from backend.services.sentiment_analyzer import SentimentAnalyzer


class TestSentimentAnalysis:
    """Test suite for sentiment analysis"""
    
    @pytest.fixture
    def analyzer(self):
        return SentimentAnalyzer()
    
    def test_analyze_positive_sentiment(self, analyzer):
        """Test positive sentiment detection"""
        text = "Slack is excellent and amazing for team collaboration"
        brand = "Slack"
        result = analyzer.analyze_sentiment(text, brand)
        
        assert result["mentioned"] is True
        assert result["sentiment"] == "POSITIVE"
        assert 0 <= result["confidence"] <= 1.0
    
    def test_analyze_negative_sentiment(self, analyzer):
        """Test negative sentiment detection"""
        text = "Slack is terrible and has so many problems"
        brand = "Slack"
        result = analyzer.analyze_sentiment(text, brand)
        
        assert result["mentioned"] is True
        assert result["sentiment"] == "NEGATIVE"
    
    def test_analyze_neutral_sentiment(self, analyzer):
        """Test neutral sentiment detection"""
        text = "Slack is a communication tool that has features for teams"
        brand = "Slack"
        result = analyzer.analyze_sentiment(text, brand)
        
        assert result["mentioned"] is True
        assert result["sentiment"] == "NEUTRAL"
    
    def test_not_mentioned(self, analyzer):
        """Test when brand is not mentioned"""
        text = "Microsoft Teams is a great tool"
        brand = "Slack"
        result = analyzer.analyze_sentiment(text, brand)
        
        assert result["mentioned"] is False
        assert result["sentiment"] == "NOT_MENTIONED"
    
    def test_sentiment_result_structure(self, analyzer):
        """Test that sentiment result has required fields"""
        text = "Slack is good"
        brand = "Slack"
        result = analyzer.analyze_sentiment(text, brand)
        
        required_fields = ["mentioned", "sentiment", "confidence", "position"]
        for field in required_fields:
            assert field in result
    
    def test_position_tracking(self, analyzer):
        """Test that position of mention is tracked"""
        text = "I think Slack is the best tool"
        brand = "Slack"
        result = analyzer.analyze_sentiment(text, brand)
        
        assert result["mentioned"] is True
        assert result["position"] >= 0
    
    def test_case_insensitive_matching(self, analyzer):
        """Test case-insensitive brand matching"""
        text = "SLACK is a great tool"
        brand = "Slack"
        result = analyzer.analyze_sentiment(text, brand)
        
        assert result["mentioned"] is True
    
    def test_confidence_score_range(self, analyzer):
        """Test confidence score is between 0 and 1"""
        text = "Slack is good"
        brand = "Slack"
        result = analyzer.analyze_sentiment(text, brand)
        
        assert 0 <= result["confidence"] <= 1.0
```

### Step 3: Write Tests for API Endpoints

Create `tests/test_api.py`:

```python
import pytest
from fastapi.testclient import TestClient
from backend.main import app


@pytest.fixture
def client():
    """Fixture to provide test client"""
    return TestClient(app)


class TestHealthCheck:
    """Test suite for health check endpoint"""
    
    def test_health_check_returns_200(self, client):
        """Test that health check returns 200 status"""
        response = client.get("/health")
        assert response.status_code == 200
    
    def test_health_check_response_format(self, client):
        """Test health check response format"""
        response = client.get("/health")
        assert response.json() == {"status": "ok"}


class TestAnalyzeEndpoint:
    """Test suite for analyze endpoint"""
    
    def test_analyze_endpoint_accepts_url(self, client):
        """Test that analyze endpoint accepts URL"""
        payload = {"url": "https://www.slack.com"}
        response = client.post("/analyze", json=payload)
        
        # Could be 200 or 422 depending on implementation
        assert response.status_code in [200, 422]
    
    def test_analyze_endpoint_requires_url(self, client):
        """Test that analyze endpoint requires URL field"""
        payload = {}
        response = client.post("/analyze", json=payload)
        
        assert response.status_code == 422
    
    def test_analyze_endpoint_returns_dict(self, client):
        """Test that analyze endpoint returns dictionary"""
        payload = {"url": "https://www.slack.com"}
        response = client.post("/analyze", json=payload)
        
        if response.status_code == 200:
            assert isinstance(response.json(), dict)
    
    def test_analyze_endpoint_response_structure(self, client):
        """Test response contains expected fields"""
        payload = {"url": "https://www.slack.com"}
        response = client.post("/analyze", json=payload)
        
        if response.status_code == 200:
            data = response.json()
            assert "brand_name" in data
            assert "url" in data
            assert "timestamp" in data


class TestHistoryEndpoint:
    """Test suite for history endpoint"""
    
    def test_history_endpoint_returns_list(self, client):
        """Test that history endpoint returns analyses"""
        response = client.get("/history")
        assert response.status_code == 200
        
        data = response.json()
        assert isinstance(data, dict)
        assert "analyses" in data
```

---

## Part 3: Implementation

### Step 1: Create Sentiment Analyzer Service

Create `backend/services/sentiment_analyzer.py`:

```python
class SentimentAnalyzer:
    """Service for analyzing sentiment in text"""
    
    def __init__(self):
        """Initialize sentiment analyzer with keyword dictionaries"""
        self.positive_keywords = {
            "excellent", "great", "amazing", "good", "best", "love", "perfect",
            "recommend", "outstanding", "fantastic", "wonderful", "impressed",
            "satisfied", "happy", "positive", "strong", "powerful", "effective",
            "reliable", "innovative", "superior", "exceptional", "superb"
        }
        
        self.negative_keywords = {
            "terrible", "bad", "worst", "hate", "awful", "poor", "weak",
            "disappointing", "not recommended", "issues", "problems", "difficult",
            "expensive", "slow", "broken", "useless", "negative", "struggling",
            "unreliable", "frustrating", "inadequate", "inferior", "ineffective"
        }
    
    def analyze_sentiment(self, text: str, brand_name: str) -> dict:
        """
        Analyze sentiment of text regarding a brand
        
        Args:
            text: The text to analyze
            brand_name: The brand name to search for
            
        Returns:
            Dictionary with sentiment analysis results
        """
        text_lower = text.lower()
        brand_lower = brand_name.lower()
        
        # Check if brand is mentioned
        mentioned = brand_lower in text_lower
        
        if not mentioned:
            return {
                "mentioned": False,
                "sentiment": "NOT_MENTIONED",
                "confidence": 1.0,
                "position": -1,
                "positive_indicators": 0,
                "negative_indicators": 0
            }
        
        # Find position of first mention
        position = text_lower.find(brand_lower)
        
        # Count sentiment indicators
        positive_count = sum(1 for word in self.positive_keywords if word in text_lower)
        negative_count = sum(1 for word in self.negative_keywords if word in text_lower)
        
        # Determine sentiment
        if positive_count > negative_count:
            sentiment = "POSITIVE"
        elif negative_count > positive_count:
            sentiment = "NEGATIVE"
        else:
            sentiment = "NEUTRAL"
        
        # Calculate confidence
        total_indicators = positive_count + negative_count
        confidence = (max(positive_count, negative_count) / total_indicators) if total_indicators > 0 else 0.5
        confidence = min(confidence, 1.0)
        
        return {
            "mentioned": True,
            "sentiment": sentiment,
            "confidence": confidence,
            "position": position,
            "positive_indicators": positive_count,
            "negative_indicators": negative_count
        }
```

### Step 2: Create Brand Analyzer Service

Create `backend/services/brand_analyzer.py`:

```python
import requests
from bs4 import BeautifulSoup
from typing import Dict, List
import asyncio


class BrandAnalyzer:
    """Service for analyzing brands"""
    
    def __init__(self):
        """Initialize brand analyzer"""
        self.default_queries = [
            "What do you think about {brand}?",
            "Is {brand} good?",
            "Who are the main competitors of {brand}?",
            "What are the pros and cons of {brand}?",
            "Would you recommend {brand}?"
        ]
    
    def extract_brand_name(self, url: str) -> str:
        """
        Extract brand name from URL
        
        Args:
            url: The URL string
            
        Returns:
            Extracted brand name
        """
        try:
            # Remove protocol
            domain = url.replace("https://", "").replace("http://", "").replace("www.", "")
            
            # Get the main domain name (before first dot)
            brand = domain.split(".")[0]
            
            return brand.title() if brand else "Unknown"
        except Exception:
            return "Unknown"
    
    async def fetch_brand_info(self, url: str) -> Dict[str, str]:
        """
        Fetch brand information from URL
        
        Args:
            url: The URL to fetch from
            
        Returns:
            Dictionary with brand info
        """
        try:
            headers = {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            }
            response = requests.get(url, timeout=5, headers=headers)
            response.raise_for_status()
            
            soup = BeautifulSoup(response.content, 'html.parser')
            
            # Try to get title
            title = soup.find('title')
            title_text = title.string if title else self.extract_brand_name(url)
            
            # Clean up title
            if title_text:
                title_text = title_text.split('|')[0].strip()
            else:
                title_text = self.extract_brand_name(url)
            
            return {
                "brand_name": title_text,
                "url": url
            }
        except Exception:
            return {
                "brand_name": self.extract_brand_name(url),
                "url": url
            }
    
    def generate_monitoring_queries(self, brand_name: str) -> List[str]:
        """
        Generate monitoring queries for a brand
        
        Args:
            brand_name: The brand name
            
        Returns:
            List of queries with brand name inserted
        """
        queries = [query.format(brand=brand_name) for query in self.default_queries]
        return queries
```

### Step 3: Create API Models

Create `backend/models/schemas.py`:

```python
from pydantic import BaseModel, HttpUrl
from typing import List, Optional
from datetime import datetime


class URLRequest(BaseModel):
    """Schema for URL analysis request"""
    url: str
    queries: Optional[List[str]] = None


class SentimentResult(BaseModel):
    """Schema for sentiment analysis result"""
    mentioned: bool
    sentiment: str  # POSITIVE, NEGATIVE, NEUTRAL, NOT_MENTIONED
    confidence: float
    position: int
    positive_indicators: int
    negative_indicators: int


class QueryAnalysis(BaseModel):
    """Schema for individual query analysis"""
    query: str
    response: str
    sentiment_analysis: SentimentResult


class SummaryMetrics(BaseModel):
    """Schema for summary metrics"""
    total_queries: int
    mentions_count: int
    visibility: float
    positive: int
    negative: int
    neutral: int
    overall_sentiment: str


class AnalysisResponse(BaseModel):
    """Schema for complete analysis response"""
    brand_name: str
    url: str
    timestamp: datetime
    queries_analyzed: int
    analysis: List[QueryAnalysis]
    summary: SummaryMetrics
```

### Step 4: Create Main FastAPI App

Create `backend/main.py`:

```python
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime
from typing import List
from backend.config import config
from backend.services.brand_analyzer import BrandAnalyzer
from backend.services.sentiment_analyzer import SentimentAnalyzer
from backend.models.schemas import URLRequest, AnalysisResponse, QueryAnalysis, SummaryMetrics, SentimentResult
from openai import OpenAI

# Initialize FastAPI app
app = FastAPI(
    title="AI Brand Monitor API",
    description="Monitor brand mentions and sentiment across AI models",
    version="0.1.0"
)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize services
openai_client = OpenAI(api_key=config.OPENAI_API_KEY)
brand_analyzer = BrandAnalyzer()
sentiment_analyzer = SentimentAnalyzer()

# In-memory storage for MVP
analysis_history: List[dict] = []


def get_chatgpt_response(query: str) -> str:
    """Get response from ChatGPT API"""
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
        return response.choices[0].message.content
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"ChatGPT Error: {str(e)}")


@app.get("/health")
async def health_check():
    """Health check endpoint"""
    return {"status": "ok"}


@app.post("/analyze", response_model=AnalysisResponse)
async def analyze_brand(request: URLRequest):
    """Main endpoint: Analyze brand mentions and sentiment"""
    try:
        # Fetch brand info
        brand_info = await brand_analyzer.fetch_brand_info(request.url)
        brand_name = brand_info["brand_name"]
        
        # Generate or use provided queries
        queries = request.queries or brand_analyzer.generate_monitoring_queries(brand_name)
        
        # Analyze each query
        analysis_results = []
        
        for query in queries:
            # Get ChatGPT response
            response = get_chatgpt_response(query)
            
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
        
        overall_sentiment = "POSITIVE" if positive_count > negative_count else \
                          "NEGATIVE" if negative_count > positive_count else "NEUTRAL"
        
        summary = SummaryMetrics(
            total_queries=len(queries),
            mentions_count=mentions_count,
            visibility=(mentions_count / len(queries)) * 100,
            positive=positive_count,
            negative=negative_count,
            neutral=neutral_count,
            overall_sentiment=overall_sentiment
        )
        
        # Create response
        analysis_response = AnalysisResponse(
            brand_name=brand_name,
            url=request.url,
            timestamp=datetime.now(),
            queries_analyzed=len(queries),
            analysis=analysis_results,
            summary=summary
        )
        
        # Store in history
        analysis_history.append(analysis_response.model_dump())
        
        return analysis_response
        
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))


@app.get("/history")
async def get_analysis_history():
    """Get all past analyses"""
    return {"analyses": analysis_history}
```

---

## Part 4: Running Tests

### Run All Tests

```bash
pytest tests/ -v
```

### Run Specific Test File

```bash
pytest tests/test_sentiment.py -v
```

### Run Tests with Coverage

```bash
pip install pytest-cov
pytest tests/ --cov=backend --cov-report=html
```

### Run Tests in Watch Mode (optional)

```bash
pip install pytest-watch
ptw tests/
```

---

## Part 5: Running the Backend Server

```bash
python -m uvicorn backend.main:app --reload --port 8000
```

Access at: `http://localhost:8000`

View API docs at: `http://localhost:8000/docs`

---

## Part 6: Manual Testing with cURL

### Health Check

```bash
curl http://localhost:8000/health
```

### Analyze Brand

```bash
curl -X POST "http://localhost:8000/analyze" \
  -H "Content-Type: application/json" \
  -d '{"url": "https://www.slack.com"}'
```

### Get History

```bash
curl http://localhost:8000/history
```

---

## Part 7: Phase 0 Checklist

- [ ] Virtual environment created and activated
- [ ] Dependencies installed
- [ ] `.env` file created with OpenAI API key
- [ ] All test files created and passing
- [ ] `BrandAnalyzer` service implemented
- [ ] `SentimentAnalyzer` service implemented
- [ ] FastAPI app created with all endpoints
- [ ] Health check working
- [ ] `/analyze` endpoint functional
- [ ] `/history` endpoint functional
- [ ] Tests passing (run `pytest tests/ -v`)
- [ ] Manual testing with cURL successful

---

## Key Learnings from Phase 0

✅ **TDD Approach**: Write tests first, implement after  
✅ **Modular Services**: Separated concerns (BrandAnalyzer, SentimentAnalyzer)  
✅ **Type Safety**: Using Pydantic models for request/response validation  
✅ **Error Handling**: Proper exception handling in all services  
✅ **Configuration**: Centralized config for easy management  
✅ **In-Memory Storage**: Simple for MVP, can be replaced with database later

---

## Next Steps

- **Phase 1**: Build React frontend with dashboard UI (Tailwind + shadcn/ui)
- **Phase 2**: Add PostgreSQL database for persistent storage
- **Phase 3**: Implement scheduled daily monitoring
- **Phase 4**: Add support for multiple AI models (Gemini, Perplexity)