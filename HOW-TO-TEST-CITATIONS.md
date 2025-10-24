# How to Test Citations vs Mentions

## ✅ ISSUE FIXED!

The brand name extraction now uses the **domain name** instead of page titles, so queries will include the actual brand name.

### What Was Wrong:
- Before: `slack.com` → Brand Name: "AI work management and productivity tools"
- Query: "What do you think about AI work management and productivity tools?"
- Result: 0 mentions (brand name not in query)

### Now Fixed:
- After: `slack.com` → Brand Name: **"Slack"**
- Query: "What do you think about **Slack**?"
- Result: Brand will be mentioned! ✓

---

## 🧪 How to Test Now

### Option 1: Quick Test (Both Servers Already Running)

1. **Open Frontend:** http://localhost:5173

2. **Enter a popular brand:** (these work best)
   - `slack.com`
   - `notion.so`
   - `stripe.com`
   - `openai.com`
   - `apple.com`

3. **Submit without custom queries first** to see if you get mentions

4. **If still 0 mentions, add custom queries:**
   - Click "Advanced Options"
   - Add these queries:
     ```
     Tell me everything about Slack and why Slack is so popular
     Compare Slack to Microsoft Teams and explain Slack's advantages
     What makes Slack different? Describe Slack's best features
     Review Slack for remote teams - is Slack worth using?
     ```

5. **Watch for mentions and citations to differ!**

---

## 🎯 Expected Results

### Test with Slack (Good Example)

**Without Custom Queries:**
Default queries ask things like:
- "What do you think about Slack?"
- "Is Slack good for businesses?"
- "What are the pros and cons of Slack?"

Expected:
- Mentions: 3-5 (out of 5 queries)
- Citations: 5-10 (if AI mentions Slack multiple times per response)

**With Custom Queries that encourage repetition:**
- Mentions: 8-10 (out of ~13 queries with keywords)
- Citations: 15-30+ (AI tends to repeat brand name when explaining)

---

## 📊 Example Output

### Scenario 1: Good Mentions
```
Query 1: "What do you think about Slack?"
Response: "Slack is excellent. Slack offers great channels..."
→ Mentions: 1, Citations: 2

Query 2: "Is Slack good for businesses?"
Response: "Yes, many businesses use it for communication..."
→ Mentions: 1, Citations: 0 (no "Slack" in response)

Query 3: "What are the pros and cons of Slack?"
Response: "Slack pros: integrations. Slack cons: pricing. Overall Slack is good."
→ Mentions: 1, Citations: 3

Results:
- Mentions: 3 (appeared in 3 responses)
- Citations: 5 (2+0+3)
```

### Scenario 2: Zero Mentions (Shouldn't happen now with the fix)
```
Query: "What do you think about AI work management tools?"
Response: "There are many options available..."
→ No brand mention (wrong brand name used)
```

---

## 🚀 Commands to Run Tests

### Backend is already running on: http://localhost:8000
### Frontend is already running on: http://localhost:5173

### Run Brand Extraction Test:
```bash
python3 test_brand_extraction.py
```

Expected output:
```
URL: https://www.slack.com
→ Brand Name: Slack ✓
→ Sample Query: What do you think about Slack? ✓
```

### Run Citations Demo:
```bash
python3 test_citations_demo.py
```

Expected output:
```
Mentions:  3
Citations: 8
✓ Citations > Mentions
```

---

## 💡 Why Custom Queries Help Even More

While default queries now work (they include the brand name), custom queries that **encourage explanations** generate more citations:

### Default Query (works, but single mentions):
```
Q: "What do you think about Slack?"
A: "Slack is good for teams."
→ 1 mention
```

### Custom Query (encourages repetition):
```
Q: "Tell me everything about Slack and explain why Slack is popular"
A: "Slack is a communication tool. Many teams use Slack because Slack offers
    excellent integrations. Slack's interface is intuitive and Slack makes
    remote work easier."
→ 5 mentions!
```

---

## 🎨 What You Should See on Dashboard

After testing with a well-known brand (like Slack), you should see:

```
┌─────────────────────────────────────────────────────┐
│ Brand         | Sentiment | Mentions | Citations   │
├─────────────────────────────────────────────────────┤
│ Slack         | POSITIVE  |    4     |     8       │
└─────────────────────────────────────────────────────┘

✓ Citations (8) > Mentions (4) = Working correctly!
```

If they're still equal:
- It means AI mentioned the brand exactly once per response
- This is normal, but custom queries encourage more mentions

---

## 🔍 Debugging

### If you still get 0 mentions:

1. **Check brand name extraction:**
   ```bash
   python3 test_brand_extraction.py
   ```

2. **Check OpenAI API key is set:**
   ```bash
   cd backend
   cat .env | grep OPENAI_API_KEY
   ```

3. **Check backend logs:**
   - Look at the terminal running the backend
   - It shows what queries are being sent

4. **Try a different brand:**
   - Some brands are more talked about than others
   - Try: OpenAI, Google, Apple (well known)

---

## ✅ Summary

**Issue:** Brand names were extracted from page titles (too descriptive)
**Fix:** Now uses domain name extraction
**Result:** Queries now include actual brand names
**Next:** Try testing with popular brands to see citations > mentions!

**Your servers are ready:**
- Backend: http://localhost:8000
- Frontend: http://localhost:5173
- Just refresh the page and test with `slack.com` or `notion.so`!
