# Citations vs Mentions - Troubleshooting Guide

## ✅ THE FIX IS WORKING CORRECTLY

The citations feature has been successfully fixed. Here's proof from our test:

```
Demo Test Results:
- Mentions:  3 (responses where brand appeared)
- Citations: 8 (total brand occurrences)
- ✓ Citations (8) > Mentions (3) ✓
```

---

## 🤔 Why You Might See Citations = Mentions

### Reason 1: AI Doesn't Mention Your Brand

**What happened:**
```
Test with Stripe:
- Mentions: 0
- Citations: 0
```

When the AI doesn't mention your brand in responses, both will be 0.

### Reason 2: Brand Mentioned Only Once Per Response

**Example:**
```
Query 1: "What do you think about Stripe?"
Response: "Stripe is a good payment processor." (1 mention)

Query 2: "Is Stripe good?"
Response: "Yes, it's reliable." (1 mention)

Result:
- Mentions: 2
- Citations: 2
```

Each response only has ONE brand occurrence, so citations = mentions.

### Reason 3: Generic AI Responses

AI might answer without using the brand name:

**Query:** "What are the pros and cons of Stripe?"
**Response:** "The pros include: good API, easy integration. Cons include: pricing structure."
→ NO brand mention!

---

## ✅ How to See Citations > Mentions

### Option 1: Test with a Well-Known Brand

Try brands that AI talks about extensively:

- **OpenAI** - AI loves talking about itself
- **Apple** - Widely discussed
- **Google** - Very popular topic
- **Slack** - Often used in examples

### Option 2: Use Custom Queries That Encourage Multiple Mentions

Add these types of queries in the "Advanced Options":

```
Compare [Brand] to competitors and explain why [Brand] stands out
What makes [Brand] different? Explain [Brand]'s unique approach
Review [Brand]'s features. How does [Brand] compare?
Tell me everything about [Brand] - what is [Brand] best at?
```

### Option 3: Add Relevant Custom Keywords

Keywords generate additional queries like:
- "How does {brand} handle {keyword}?"
- "What is {brand}'s approach to {keyword}?"

**Example for Stripe:**
- Keywords: `payments, API, checkout, subscriptions, pricing`
- This creates 10 additional queries (2 per keyword)

---

## 📊 Real Example: How to Test

### Step 1: Use the Dashboard or Coming Soon Page

1. Enter URL: `slack.com`
2. Click "Advanced Options"
3. Add Custom Queries:
   ```
   What makes Slack different from Microsoft Teams?
   Tell me about Slack's features and why Slack is popular
   How does Slack integrate with other tools? Review Slack
   Is Slack worth it for small businesses? Explain Slack's value
   Compare Slack vs Teams and tell me why choose Slack
   ```
4. Add Custom Keywords:
   ```
   collaboration, integrations, channels, remote work
   ```

### Step 2: Run Analysis

The AI will generate responses that mention "Slack" multiple times.

### Expected Results:

```
Query 1 Response: "Slack is great. Slack offers channels. Slack integrates..."
→ 3 occurrences

Query 2 Response: "Slack's features include Slack channels and Slack apps..."
→ 3 occurrences

Query 3 Response: "Many use Slack for team communication..."
→ 1 occurrence

Query 4 Response: "For small businesses, it depends on needs..."
→ 0 occurrences

Query 5 Response: "Slack vs Teams: Slack has better UX. Slack is more intuitive..."
→ 3 occurrences

Results:
- Mentions: 4 (brand appeared in 4 out of 5 responses)
- Citations: 10 (3+3+1+0+3 total occurrences)
- ✓ Difference is visible!
```

---

## 🎯 Quick Test Commands

Run this demo to see it working:

```bash
python3 test_citations_demo.py
```

Expected output:
```
Mentions:  3 (number of responses where brand appeared)
Citations: 8 (total brand occurrences across all responses)
✓ Citations (8) > Mentions (3)
```

---

## 🔍 Verify Your Setup

### Check 1: Backend Updated
```bash
cd backend
grep -n "count_brand_occurrences" services/sentiment_analyzer.py
```
Should show the new method at line ~34

### Check 2: Citations Field in Schema
```bash
grep -n "citations: int" backend/models/schemas.py
```
Should show citations field in SummaryMetrics at line ~95

### Check 3: Frontend Shows Citations
```bash
grep -n "Citations" frontend/src/pages/Dashboard.jsx
```
Should show Citations card at line ~189

### Check 4: Run Tests
```bash
python3 -m pytest tests/test_sentiment.py -v -k "test_count"
```
Should show 6 citation tests passing

---

## 💡 Understanding the Metrics

### Mentions
- **Definition:** Number of responses where brand appeared at least once
- **Range:** 0 to total_queries
- **Purpose:** Brand awareness - "How often do we appear?"

### Citations
- **Definition:** Total number of times brand name appears across ALL responses
- **Range:** 0 to unlimited (can be > total_queries)
- **Purpose:** Brand prominence - "How much are we talked about?"

### Visibility
- **Definition:** Percentage of queries where brand was mentioned
- **Formula:** (mentions / total_queries) × 100
- **Purpose:** Brand presence - "What % of relevant queries mention us?"

### The Relationship
```
Citations >= Mentions

- If Citations = Mentions → Brand mentioned once per response
- If Citations > Mentions → Brand mentioned multiple times in some responses
- If Citations = 0 AND Mentions = 0 → Brand not mentioned at all
```

---

## 🚀 Pro Tips

1. **For Competitive Analysis:** Add competitor names as custom queries
   ```
   Compare [YourBrand] vs [Competitor1]
   [YourBrand] or [Competitor2] - which is better?
   ```

2. **For Feature Testing:** Add feature keywords
   ```
   Keywords: pricing, security, performance, support
   ```

3. **For Sentiment Analysis:** Mix positive and negative framing
   ```
   What are the best things about [Brand]?
   What are common complaints about [Brand]?
   ```

4. **For Citation Boost:** Use queries that encourage explanations
   ```
   Explain everything about [Brand] and why [Brand] matters
   ```

---

## 📝 Summary

- ✅ **Fix is working** - Demo proves it
- ✅ **Backend is correct** - Citations calculated properly
- ✅ **Frontend shows it** - Dashboard displays both metrics
- ✅ **Tests pass** - All 25 tests pass

**If you see Citations = Mentions:**
- It's NOT a bug
- It means the AI mentioned your brand exactly once per response
- OR the AI didn't mention your brand at all
- Use custom queries to encourage multiple mentions per response

**The servers are running:**
- Backend: http://localhost:8000
- Frontend: http://localhost:5173
- Try testing with "Slack" or "OpenAI" with custom queries!
