# 📊 Analysis Performance & Customization - Quick Summary

## ⏱️ Why It Takes Long (15-40 seconds)

### The Problem:
Your analysis makes **5 OpenAI API calls sequentially** (one after another):

```
Query 1: "What do you think about Slack?"    → Wait 3-8s ⏳
Query 2: "Is Slack good for businesses?"     → Wait 3-8s ⏳
Query 3: "Who are the competitors?"          → Wait 3-8s ⏳
Query 4: "What are pros and cons?"           → Wait 3-8s ⏳
Query 5: "Would you recommend it?"           → Wait 3-8s ⏳
───────────────────────────────────────────────────────────
Total: 15-40 seconds 🐌
```

### Why Sequential?
Check `backend/main.py` lines 156-173:

```python
for query in queries:
    response = get_chatgpt_response(query)  # ⏳ Blocks here
    sentiment = sentiment_analyzer.analyze_sentiment(response, brand_name)
    # ...
```

Each call waits for OpenAI to respond before starting the next.

---

## 🚀 Solutions (Coming in Future Phases)

### Phase 3: Parallel Processing ⚡
Run all 5 queries at the same time:
- **Current**: 15-40 seconds
- **After**: 5-10 seconds (3-4x faster!)

### Phase 2: Redis Caching 💾
Save results so repeated analyses are instant:
- **First time**: 15-40 seconds
- **Cached**: <1 second!

---

## 🎯 Where Queries Come From

### Default Queries (Used When You Don't Specify)

Located in `backend/services/brand_analyzer.py`:

```python
self.default_queries = [
    "What do you think about {brand}?",
    "Is {brand} good for businesses?",
    "Who are the main competitors of {brand}?",
    "What are the pros and cons of {brand}?",
    "Would you recommend {brand}?",
]
```

**{brand}** gets replaced with your brand name (e.g., "Slack")

---

## ✏️ How to Customize Queries

### Option 1: Change Defaults (Permanent)

Edit `backend/services/brand_analyzer.py`:

```python
self.default_queries = [
    "How reliable is {brand}?",           # Your questions
    "What makes {brand} special?",
    "Is {brand} worth the cost?",
    # Add more...
]
```

Then restart backend:
```bash
cd backend
source ../venv/bin/activate
python -m uvicorn main:app --reload
```

### Option 2: Send Custom Queries via API (Per-Request)

Send your own questions when analyzing:

```javascript
// Frontend example:
analyze(brandUrl, [
  "How secure is Slack?",
  "Does Slack work offline?",
  "What integrations does Slack have?"
])
```

### Option 3: Use Keywords (Auto-Generate)

Send keywords to generate questions:

```javascript
// Send keywords:
analyze(brandUrl, null, ['security', 'pricing', 'support'])

// Backend generates:
// "How does Slack handle security?"
// "What is Slack's approach to security?"
// "How does Slack handle pricing?"
// "What is Slack's approach to pricing?"
// "How does Slack handle support?"
// "What is Slack's approach to support?"
```

---

## 🎨 UI Component for Customization

I've created **`QueryCustomizer.jsx`** component you can add to your dashboard!

### How to Use It:

1. **Add to Dashboard**:

Edit `frontend/src/pages/Dashboard.jsx`:

```jsx
import QueryCustomizer from '@/components/QueryCustomizer'

// Inside Dashboard component:
const [customQueries, setCustomQueries] = useState(null)
const [customKeywords, setCustomKeywords] = useState(null)

// Add before the "Analyze Brand" button:
<QueryCustomizer 
  onQueriesChange={setCustomQueries}
  onKeywordsChange={setCustomKeywords}
/>

// Update handleAnalyze:
const handleAnalyze = () => {
  if (brandUrl.trim()) {
    analyze(brandUrl, customQueries, customKeywords)
  }
}
```

2. **Update the hook**:

The `useBrandAnalysis` hook already supports it - just pass the parameters:

```javascript
analyze(url, queries, keywords)
```

---

## 📋 Examples for Different Industries

### E-commerce:
```python
self.default_queries = [
    "How is {brand}'s shipping speed?",
    "What are {brand}'s return policies?",
    "Is {brand} trustworthy?",
    "How competitive are {brand}'s prices?",
    "What's the quality of {brand}'s products?",
]
```

### SaaS Products:
```python
self.default_queries = [
    "How easy is {brand} to use?",
    "What is {brand}'s pricing model?",
    "Does {brand} integrate with other tools?",
    "How reliable is {brand}?",
    "Is {brand} worth the investment?",
]
```

### Restaurants:
```python
self.default_queries = [
    "How is the food at {brand}?",
    "What's the service like at {brand}?",
    "Is {brand} good for families?",
    "What are the wait times at {brand}?",
    "How are the prices at {brand}?",
]
```

---

## 🔍 Testing Custom Queries

### Via Terminal (cURL):

```bash
curl -X POST http://localhost:8000/api/brands/analyze \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://www.slack.com",
    "queries": [
      "How secure is Slack?",
      "Can Slack be used offline?"
    ]
  }'
```

### Via Frontend:

```javascript
const result = await fetch('http://localhost:8000/api/brands/analyze', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    url: 'https://www.slack.com',
    queries: [
      "How secure is Slack?",
      "Can Slack be used offline?"
    ],
    custom_keywords: ['integrations', 'pricing']
  })
})
```

---

## 📊 Performance Metrics

### Current Performance:
- **1 query**: 3-8 seconds
- **5 queries**: 15-40 seconds
- **10 queries**: 30-80 seconds

### After Phase 2 (Caching):
- **First analysis**: 15-40 seconds
- **Repeat analysis**: <1 second ⚡

### After Phase 3 (Parallel):
- **5 queries**: 5-10 seconds ⚡
- **10 queries**: 8-15 seconds ⚡

---

## 🛠️ Quick Customization Steps

### 1. Change Default Questions:
```bash
code backend/services/brand_analyzer.py
# Edit lines 16-22
```

### 2. Restart Backend:
```bash
cd backend
source ../venv/bin/activate
python -m uvicorn main:app --reload
```

### 3. Test:
```bash
curl -X POST http://localhost:8000/api/brands/analyze \
  -H "Content-Type: application/json" \
  -d '{"url": "https://www.slack.com"}'
```

---

## 📖 Full Documentation

See **`PERFORMANCE-AND-CUSTOMIZATION.md`** for complete details including:
- Detailed performance analysis
- All customization options
- Sentiment keyword customization
- Future optimization strategies
- Code examples

---

## ✅ Summary

| Question | Answer |
|----------|--------|
| Why slow? | Sequential OpenAI API calls (5 queries × 3-8s each) |
| Where are queries? | `backend/services/brand_analyzer.py` lines 16-22 |
| How to customize? | Edit the file OR send via API request |
| How to speed up? | Phase 2: Caching, Phase 3: Parallel calls |
| Can I add keywords? | Yes! Send `custom_keywords` in API request |

**Ready to proceed to Phase 2?** We'll add PostgreSQL + Redis for caching and much better performance! 🚀
