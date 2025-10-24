# OpenAI API Setup - Required for Brand Analysis

## ⚠️ Current Issue: 0 Mentions & 0 Citations

If you're seeing **0 mentions** and **0 citations** for all brands, it likely means the **OpenAI API is not configured** or failing to respond.

---

## 🔍 How to Check if OpenAI is the Problem

After I added debug logging, the next time you test a brand on the frontend, check the **backend terminal** for error messages like:

```
!!! ERROR calling OpenAI for query 'What do you think about Figma?': OpenAI client not initialized...
!!! ERROR calling OpenAI for query 'Is Figma good for businesses?': OpenAI client not initialized...
```

If you see these errors, OpenAI API key is missing.

---

## ✅ How to Fix: Set Up OpenAI API Key

### Step 1: Get an OpenAI API Key

1. Go to https://platform.openai.com/api-keys
2. Sign up or log in
3. Click "Create new secret key"
4. Copy the key (starts with `sk-...`)

### Step 2: Create `.env` File in Backend

```bash
cd backend
nano .env
```

Or create the file manually and add:

```env
# OpenAI Configuration
OPENAI_API_KEY=sk-your-actual-key-here
OPENAI_MODEL=gpt-4o-mini
MAX_TOKENS=500
TEMPERATURE=0.7

# App Configuration
APP_NAME="VISIBI - AI Brand Monitor"
VERSION="0.1.0"
DEBUG=False

# CORS (optional - already has defaults)
ALLOWED_ORIGINS=*
```

### Step 3: Restart Backend Server

Stop the current server (Ctrl+C) and restart:

```bash
cd backend
python3 -m uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

---

## 🧪 Test After Setting Up

1. Go to http://localhost:5173
2. Enter a brand: `figma.com`
3. Submit with your email
4. **Check the backend logs** - you should now see:

```
=== Query: What do you think about Figma? ===
=== Response (first 100 chars): Figma is an excellent design tool that...
=== Sentiment: POSITIVE, Mentioned: True ===
```

5. **Check the results** - you should now see:
   - Mentions: 3-5
   - Citations: 5-10+

---

## 💰 OpenAI API Costs

Don't worry about costs for testing:

- **Model**: gpt-4o-mini (cheapest)
- **Cost**: ~$0.0001 per query (0.01 cents)
- **5 queries**: ~$0.0005 (0.05 cents)
- **Test 10 brands**: ~$0.005 (half a cent)

OpenAI gives $5 free credit for new accounts.

---

## 🔄 Alternative: Use Mock Data for Testing

If you don't want to set up OpenAI right now, I can create a mock mode that returns fake responses just for testing the citations vs mentions feature.

Would you like me to create that?

---

## 📝 Quick Commands Reference

### Check if .env exists:
```bash
ls -la backend/.env
```

### View .env (first 3 lines, hiding the key):
```bash
head -3 backend/.env
```

### Test brand extraction (doesn't need OpenAI):
```bash
python3 test_brand_extraction.py
```

### Test citations counting (doesn't need OpenAI):
```bash
python3 test_citations_demo.py
```

---

## 🎯 Summary

**Problem**: 0 mentions/citations = OpenAI API not working
**Solution**: Add OPENAI_API_KEY to `backend/.env`
**Test**: Try a brand after restarting backend
**Cost**: Less than 1 cent for testing

The **citations vs mentions fix is working** - we just need OpenAI API to return actual responses with brand mentions!
