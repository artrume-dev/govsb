# VISIBI Backend - Phase 0

## 🎉 Phase 0 Complete!

The backend structure has been successfully created with all core services, API endpoints, and comprehensive tests.

## 📁 Project Structure

```
VISIBI/
├── backend/
│   ├── __init__.py
│   ├── config.py                    # Configuration management
│   ├── main.py                      # FastAPI application
│   ├── services/
│   │   ├── __init__.py
│   │   ├── brand_analyzer.py        # Brand extraction & query generation
│   │   └── sentiment_analyzer.py    # Sentiment analysis service
│   ├── models/
│   │   ├── __init__.py
│   │   └── schemas.py               # Pydantic request/response models
│   └── utils/
│       └── __init__.py
├── tests/
│   ├── __init__.py
│   ├── test_brand_analyzer.py       # 15+ test cases
│   ├── test_sentiment.py            # 20+ test cases
│   └── test_api.py                  # 20+ test cases
├── .env                             # Environment variables (already exists)
├── .gitignore                       # Git ignore patterns
└── requirements.txt                 # Python dependencies
```

## 🚀 Quick Start

### Step 1: Set Up Virtual Environment

```bash
# Create virtual environment
python3 -m venv venv

# Activate virtual environment
source venv/bin/activate  # On macOS/Linux
```

### Step 2: Install Dependencies

```bash
pip install -r requirements.txt
```

### Step 3: Verify Configuration

Make sure your `.env` file has the OpenAI API key:

```bash
cat backend/.env
```

Should show:
```
OPENAI_API_KEY=sk-...
OPENAI_MODEL=gpt-4o-mini
DEBUG=False
```

### Step 4: Run Tests

```bash
# Run all tests
pytest tests/ -v

# Run with coverage
pytest tests/ --cov=backend --cov-report=html

# Run specific test file
pytest tests/test_sentiment.py -v
```

### Step 5: Start the Server

```bash
# From the VISIBI directory
cd /Users/samarmustafa/Documents/1Samar/50-apps-to-launch/VISIBI

# Run the server
python -m uvicorn backend.main:app --reload --port 8000
```

Server will start at: **http://localhost:8000**

API Documentation: **http://localhost:8000/docs**

## 📡 API Endpoints

### 1. Health Check
```bash
curl http://localhost:8000/health
```

### 2. Root
```bash
curl http://localhost:8000/
```

### 3. Analyze Brand (Main Endpoint)
```bash
curl -X POST "http://localhost:8000/api/brands/analyze" \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://www.slack.com"
  }'
```

With custom keywords:
```bash
curl -X POST "http://localhost:8000/api/brands/analyze" \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://www.slack.com",
    "custom_keywords": ["security", "integrations"]
  }'
```

### 4. Get Analysis History
```bash
curl http://localhost:8000/api/brands/history
```

With limit:
```bash
curl http://localhost:8000/api/brands/history?limit=5
```

### 5. Clear History
```bash
curl -X DELETE http://localhost:8000/api/brands/history
```

## 🧪 Testing

### Test Coverage

- **BrandAnalyzer**: 15+ tests covering:
  - Brand name extraction
  - URL parsing
  - Query generation
  - Comparison queries

- **SentimentAnalyzer**: 20+ tests covering:
  - Positive/negative/neutral detection
  - Brand mention detection
  - Confidence scoring
  - Multiple response analysis

- **API Endpoints**: 20+ tests covering:
  - All endpoints
  - Request validation
  - Response structure
  - Error handling

### Running Tests

```bash
# All tests with verbose output
pytest tests/ -v

# Specific test class
pytest tests/test_sentiment.py::TestSentimentAnalysis -v

# With coverage report
pytest tests/ --cov=backend --cov-report=term-missing

# Generate HTML coverage report
pytest tests/ --cov=backend --cov-report=html
# Open htmlcov/index.html in browser
```

## 🎯 What's Implemented

### ✅ Core Services

1. **BrandAnalyzer Service**
   - Extract brand name from URL
   - Fetch brand information (title, description)
   - Generate monitoring queries
   - Generate comparison queries

2. **SentimentAnalyzer Service**
   - Keyword-based sentiment analysis
   - Positive/negative/neutral detection
   - Confidence scoring
   - Multi-response aggregation

### ✅ API Endpoints

- `GET /` - Root endpoint
- `GET /health` - Health check
- `POST /api/brands/analyze` - Main analysis endpoint
- `GET /api/brands/history` - Get analysis history
- `DELETE /api/brands/history` - Clear history

### ✅ Request/Response Models

- URLRequest (with optional custom queries & keywords)
- SentimentResult
- QueryAnalysis
- SummaryMetrics
- AnalysisResponse
- HealthResponse
- HistoryResponse

### ✅ Configuration

- Environment variable management
- OpenAI API configuration
- Sentiment analysis settings
- API settings (max tokens, temperature, timeout)

## 🔍 Example Response

```json
{
  "brand_name": "Slack",
  "url": "https://www.slack.com",
  "timestamp": "2025-10-10T12:34:56",
  "queries_analyzed": 5,
  "summary": {
    "total_queries": 5,
    "mentions_count": 5,
    "visibility": 100.0,
    "positive": 4,
    "negative": 0,
    "neutral": 1,
    "overall_sentiment": "POSITIVE",
    "average_confidence": 0.89
  },
  "analysis": [
    {
      "query": "What do you think about Slack?",
      "response": "Slack is an excellent team collaboration tool...",
      "sentiment_analysis": {
        "mentioned": true,
        "sentiment": "POSITIVE",
        "confidence": 0.92,
        "position": 0,
        "positive_indicators": 5,
        "negative_indicators": 1
      }
    }
  ]
}
```

## 🐛 Troubleshooting

### OpenAI API Errors

If you see "OpenAI client not initialized":
1. Check `.env` file has `OPENAI_API_KEY`
2. Ensure the key is valid
3. Restart the server

### Import Errors

If you see import errors:
1. Make sure virtual environment is activated
2. Run `pip install -r requirements.txt`
3. Check you're in the correct directory

### Test Failures

If tests fail:
1. Ensure all dependencies are installed
2. Check Python version (3.9+)
3. Review the specific test error message

## 📊 Test Results Expected

When you run `pytest tests/ -v`, you should see:

```
tests/test_api.py::TestRootEndpoint::test_root_returns_200 PASSED
tests/test_api.py::TestHealthCheck::test_health_check_returns_200 PASSED
tests/test_brand_analyzer.py::TestBrandNameExtraction::test_extract_brand_from_simple_url PASSED
tests/test_sentiment.py::TestSentimentAnalysis::test_analyze_positive_sentiment PASSED
...

====== XX passed in X.XXs ======
```

## 🎓 Next Steps

After completing Phase 0, you're ready for:

**Phase 1**: Frontend Setup
- Create React dashboard
- Build UI components
- Integrate with backend API

See `Phase-1-Frontend-Setup.md` for details.

## 📝 Notes

- All tests use in-memory data (no database yet)
- OpenAI API calls are real (will use your API quota)
- CORS is enabled for all origins (change in production)
- Debug mode can be enabled in `.env` file

## 🎉 Success Criteria

Phase 0 is complete when:
- ✅ All tests pass (`pytest tests/ -v`)
- ✅ Server starts without errors
- ✅ Health check returns 200
- ✅ Analyze endpoint works with valid API key
- ✅ API documentation is accessible at `/docs`

---

**Backend Development Agent - Phase 0 Complete! 🚀**
