# Performance & Customization Guide

## 🐌 Why Analysis Takes Long

### Current Performance Bottleneck

The analysis is **slow** because of how queries are processed:

**Sequential API Calls**: The backend makes **5 separate OpenAI API calls** (one for each query) and waits for each to complete before starting the next.

```python
# Current implementation in backend/main.py (lines 156-173):
for query in queries:
    # 🐌 This blocks until OpenAI responds (3-8 seconds each)
    response = get_chatgpt_response(query)
    
    # Analyze sentiment
    sentiment_analysis = sentiment_analyzer.analyze_sentiment(response, brand_name)
    
    query_result = QueryAnalysis(...)
    analysis_results.append(query_result)
```

### Estimated Time Breakdown

- **1 query**: ~3-8 seconds (OpenAI API latency)
- **5 queries** (default): ~15-40 seconds ⏱️
- **10 queries** (custom): ~30-80 seconds ⏱️

### Performance in Real-World Scenario

When you analyze a brand like Slack:

1. **Extract brand name**: ~1 second
2. **Generate 5 queries**: Instant
3. **Query 1**: "What do you think about Slack?" → Wait 3-8s
4. **Query 2**: "Is Slack good for businesses?" → Wait 3-8s
5. **Query 3**: "Who are the main competitors of Slack?" → Wait 3-8s
6. **Query 4**: "What are the pros and cons of Slack?" → Wait 3-8s
7. **Query 5**: "Would you recommend Slack?" → Wait 3-8s
8. **Sentiment analysis**: ~1 second
9. **Total**: **15-40 seconds** 🐌

---

## 🚀 How to Speed Up (Future Optimization)

### Option 1: Parallel Processing (Recommended for Phase 3)
Use `asyncio` to make concurrent API calls:

```python
# Instead of sequential:
async def analyze_brand_parallel(queries):
    tasks = [get_chatgpt_response(query) for query in queries]
    responses = await asyncio.gather(*tasks)  # ⚡ Run all at once
    # Process responses...
```

**Expected improvement**: 15-40s → **5-10s** (3-4x faster)

### Option 2: Use Streaming Responses
Stream responses as they arrive instead of waiting for all:

```python
openai_client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[...],
    stream=True  # ⚡ Stream tokens as they generate
)
```

**Expected improvement**: Better perceived performance, same total time

### Option 3: Use Cheaper/Faster Models
Switch to faster models for some queries:

```python
# Fast model for simple queries
model="gpt-3.5-turbo"  # ~50% faster, 90% cheaper

# Or use local sentiment analysis only (no AI)
# Already implemented but not exposed via API
```

### Option 4: Caching (Phase 2)
Cache results in Redis to avoid re-analyzing same brands:

```python
# Check cache first
cached = redis.get(f"brand:{url}")
if cached:
    return cached  # ⚡ Instant response
```

---

## 🎯 How to Customize Queries & Keywords

### Where Queries Come From

Queries are defined in **`backend/services/brand_analyzer.py`** (lines 16-22):

```python
class BrandAnalyzer:
    def __init__(self):
        self.default_queries = [
            "What do you think about {brand}?",
            "Is {brand} good for businesses?",
            "Who are the main competitors of {brand}?",
            "What are the pros and cons of {brand}?",
            "Would you recommend {brand}?",
        ]
```

### Method 1: Change Default Queries (Affects All Analyses)

Edit `backend/services/brand_analyzer.py`:

```python
self.default_queries = [
    # Your custom questions:
    "What are users saying about {brand}?",
    "How reliable is {brand}?",
    "What makes {brand} different?",
    "Should I use {brand} for my startup?",
    "What problems does {brand} solve?",
]
```

**Restart backend** after changes:
```bash
cd backend
python -m uvicorn main:app --reload
```

### Method 2: Pass Custom Queries via API (Per-Request Basis)

Send your own queries when analyzing:

```javascript
// In frontend or API call:
const response = await fetch('http://localhost:8000/api/brands/analyze', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    url: 'https://www.slack.com',
    queries: [  // 🎯 Your custom queries
      "How secure is Slack?",
      "Can Slack integrate with other tools?",
      "What do developers think about Slack?"
    ]
  })
});
```

**API Request Schema** (see `backend/models/schemas.py`):
```python
class URLRequest(BaseModel):
    url: str                                  # Required
    queries: Optional[List[str]] = None       # Optional: your questions
    custom_keywords: Optional[List[str]] = None  # Optional: keywords
```

### Method 3: Add Custom Keywords (Auto-Generates Queries)

Send keywords to auto-generate queries about those topics:

```javascript
const response = await fetch('http://localhost:8000/api/brands/analyze', {
  method: 'POST',
  body: JSON.stringify({
    url: 'https://www.slack.com',
    custom_keywords: ['security', 'pricing', 'scalability']  // 🎯 Topics
  })
});

// Backend generates:
// "How does Slack handle security?"
// "What is Slack's approach to security?"
// "How does Slack handle pricing?"
// "What is Slack's approach to pricing?"
// ... (2 queries per keyword)
```

**Implementation** in `brand_analyzer.py` (lines 143-151):

```python
def generate_monitoring_queries(
    self, 
    brand_name: str, 
    custom_keywords: Optional[List[str]] = None
) -> List[str]:
    queries = [query.format(brand=brand_name) for query in self.default_queries]
    
    # Add custom keyword-based queries
    if custom_keywords:
        for keyword in custom_keywords:
            queries.append(f"How does {brand_name} handle {keyword}?")
            queries.append(f"What is {brand_name}'s approach to {keyword}?")
    
    return queries
```

---

## 🔧 Quick Customization Examples

### Example 1: E-commerce Brand Analysis

```python
# Edit backend/services/brand_analyzer.py
self.default_queries = [
    "How is {brand}'s customer service?",
    "What are the shipping times for {brand}?",
    "Is {brand} trustworthy?",
    "What are {brand}'s return policies?",
    "How competitive are {brand}'s prices?",
]
```

### Example 2: SaaS Product Analysis

```python
self.default_queries = [
    "How easy is it to use {brand}?",
    "What is {brand}'s pricing model?",
    "How does {brand} compare to competitors?",
    "What integrations does {brand} support?",
    "Is {brand} worth the cost?",
]
```

### Example 3: Restaurant/Local Business

```python
self.default_queries = [
    "What's the food quality at {brand}?",
    "How is the service at {brand}?",
    "What are the wait times at {brand}?",
    "Is {brand} good for families?",
    "What's the ambiance like at {brand}?",
]
```

### Example 4: Tech Product Analysis

```python
self.default_queries = [
    "How reliable is {brand}?",
    "What are {brand}'s main features?",
    "Is {brand} beginner-friendly?",
    "What problems does {brand} have?",
    "Who should use {brand}?",
]
```

---

## 📊 How Sentiment Analysis Works

### Keyword-Based Detection

Sentiment is analyzed in `backend/services/sentiment_analyzer.py` using **40+ keywords**:

```python
class SentimentAnalyzer:
    def __init__(self):
        self.positive_keywords = [
            'excellent', 'great', 'amazing', 'fantastic', 'wonderful',
            'outstanding', 'superb', 'brilliant', 'perfect', 'best',
            'love', 'recommend', 'impressive', 'exceptional', 'incredible',
            # ... 40+ total
        ]
        
        self.negative_keywords = [
            'terrible', 'awful', 'horrible', 'bad', 'poor',
            'disappointing', 'worst', 'hate', 'useless', 'waste',
            'broken', 'failed', 'issue', 'problem', 'bug',
            # ... 40+ total
        ]
```

### Customizing Sentiment Keywords

Add industry-specific keywords:

```python
# For SaaS products:
self.positive_keywords.extend([
    'scalable', 'reliable', 'intuitive', 'seamless', 'robust'
])

self.negative_keywords.extend([
    'buggy', 'slow', 'confusing', 'expensive', 'limited'
])
```

### Confidence Score Calculation

```python
confidence = min(
    (positive_count + negative_count) / 5.0,  # Cap at 5 indicators
    1.0
)
```

---

## 🎨 Frontend Customization

### Change Query Input in UI

Edit `frontend/src/pages/Dashboard.jsx` to allow custom queries:

```jsx
const [queries, setQueries] = useState([]);

// Add textarea for custom queries
<textarea
  value={queries.join('\n')}
  onChange={(e) => setQueries(e.target.value.split('\n'))}
  placeholder="Enter custom queries (one per line)"
/>

// Pass to API
analyze(brandUrl, queries.length > 0 ? queries : undefined)
```

---

## 🚦 Performance Monitoring

### Track Analysis Time

The API returns a `timestamp` in responses. You can measure duration:

```javascript
const start = Date.now();
const result = await analyze(url);
const duration = Date.now() - start;
console.log(`Analysis took ${duration}ms`);
```

### Backend Logging

Add timing logs in `backend/main.py`:

```python
import time

start_time = time.time()
# ... analysis code ...
duration = time.time() - start_time
print(f"✅ Analysis completed in {duration:.2f}s")
```

---

## 📝 Summary

| **Issue** | **Cause** | **Solution** |
|-----------|-----------|--------------|
| Slow analysis | Sequential OpenAI API calls | Use asyncio parallel calls (Phase 3) |
| Fixed queries | Hardcoded in brand_analyzer.py | Edit default_queries or pass via API |
| Generic questions | Default queries too broad | Customize per industry/use-case |
| No caching | Every request hits OpenAI | Add Redis caching (Phase 2) |

### Next Steps for Performance

1. **Phase 2**: Add Redis caching for repeated analyses
2. **Phase 3**: Implement parallel API calls with asyncio
3. **Phase 4**: Add multiple AI models for comparison
4. **Phase 5**: Implement real-time streaming responses

### Customization Quick Reference

```bash
# Change default queries
vim backend/services/brand_analyzer.py  # Edit lines 16-22

# Test custom queries via API
curl -X POST http://localhost:8000/api/brands/analyze \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://slack.com",
    "queries": ["Your custom question?"]
  }'

# Add custom keywords
curl -X POST http://localhost:8000/api/brands/analyze \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://slack.com",
    "custom_keywords": ["security", "pricing"]
  }'
```

---

**Ready for Phase 2?** The next phase will add PostgreSQL database and Redis caching to significantly improve performance! 🚀
