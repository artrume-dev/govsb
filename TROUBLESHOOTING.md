# Troubleshooting Guide - VISIBI Coming Soon Page

## Common Issues and Solutions

### 🔴 Backend Won't Start

#### Issue: `command not found: python`

**Problem**: macOS uses `python3` instead of `python`

**Solution**:
```bash
# Always use python3 on macOS
python3 -m uvicorn backend.main:app --reload
```

#### Issue: `ModuleNotFoundError: No module named 'fastapi'`

**Problem**: Virtual environment not set up or not activated

**Solution**:
```bash
# Step 1: Create virtual environment (if not exists)
python3 -m venv venv

# Step 2: Activate it
source venv/bin/activate

# Step 3: Install dependencies
pip install -r requirements.txt

# Step 4: Start server
python3 -m uvicorn backend.main:app --reload
```

**Quick Fix**: Use the setup script
```bash
./setup.sh
```

#### Issue: `(venv) not showing in terminal`

**Problem**: Virtual environment not activated

**Solution**:
```bash
source venv/bin/activate
# You should see (venv) at the start of your prompt
```

#### Issue: `python main.py` doesn't work

**Problem**: Wrong command - should use uvicorn

**Solution**:
```bash
# Wrong ❌
python main.py

# Correct ✅
python3 -m uvicorn backend.main:app --reload
```

#### Issue: `ImportError: cannot import name 'WaitlistService'`

**Problem**: New code not recognized, need to restart server

**Solution**:
```bash
# Kill the server (Ctrl+C)
# Restart with reload flag
python3 -m uvicorn backend.main:app --reload
```

---

### 🟡 Configuration Issues

#### Issue: `OpenAI client not initialized. Check OPENAI_API_KEY`

**Problem**: `.env` file not in the right location or API key missing

**Solution**:
```bash
# Check if .env exists
ls -la backend/.env

# If missing, your .env should be at backend/.env
cat backend/.env

# Should contain:
# OPENAI_API_KEY=sk-...
```

**Location**: The `.env` file should be at `backend/.env` (not in root)

#### Issue: Email configuration not found

**Problem**: This is actually NORMAL for development

**Message you'll see**:
```
⚠️  No email configuration found. Using console output mode.
```

**This is fine!** Emails will print to console. To send real emails, add to `backend/.env`:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
FROM_EMAIL=your-email@gmail.com
```

---

### 🟢 Frontend Issues

#### Issue: Frontend can't reach backend (CORS errors)

**Problem**: Backend not running or CORS misconfigured

**Solution**:
1. Make sure backend is running on http://localhost:8000
2. Check browser console for exact error
3. Verify backend CORS settings in `backend/main.py`:
```python
allow_origins=["*"]  # Allows all origins in dev
```

#### Issue: `npm run dev` fails

**Problem**: Dependencies not installed

**Solution**:
```bash
cd frontend
npm install
npm run dev
```

#### Issue: Page shows "Cannot POST /api/waitlist"

**Problem**: Backend endpoint not receiving requests

**Solution**:
1. Check if backend is running: visit http://localhost:8000/docs
2. You should see the API documentation
3. Check if `/api/waitlist` endpoint is listed

---

### 📧 Email Issues

#### Issue: Emails not sending (Gmail)

**Problem**: Using regular password instead of App Password

**Solution**:
1. Enable 2-Factor Authentication on Google account
2. Go to https://myaccount.google.com/apppasswords
3. Generate an "App Password"
4. Use the 16-character app password in `SMTP_PASSWORD`

#### Issue: `SMTPAuthenticationError`

**Problem**: Invalid credentials

**Solution**:
- Double-check SMTP_USER and SMTP_PASSWORD
- For Gmail, must use App Password, not regular password
- Verify SMTP_HOST and SMTP_PORT are correct

#### Issue: Emails go to spam

**Problem**: Sender not verified

**Solutions**:
- Use a verified domain email address
- Add SPF/DKIM records to your domain
- Consider using SendGrid or AWS SES for production
- Test with Gmail first for development

---

### 💾 Data Storage Issues

#### Issue: `waitlist.json` not created

**Problem**: First submission hasn't happened yet OR permissions issue

**Solution**:
```bash
# Check if data directory exists
ls -la backend/data/

# If error, the directory will be auto-created on first signup
# Try submitting a test email through the frontend

# Check again
cat backend/data/waitlist.json
```

#### Issue: `Permission denied` when creating waitlist.json

**Problem**: Backend doesn't have write permissions

**Solution**:
```bash
# Create directory manually with correct permissions
mkdir -p backend/data
chmod 755 backend/data
```

---

### 🧪 Testing Issues

#### Issue: Setup script fails tests

**Problem**: Dependencies or configuration issue

**Solution**:
```bash
# Skip tests for now and start manually
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python3 -m uvicorn backend.main:app --reload
```

#### Issue: `pytest: command not found`

**Problem**: pytest not installed or venv not activated

**Solution**:
```bash
source venv/bin/activate
pip install pytest pytest-asyncio
pytest tests/ -v
```

---

### 🚀 Deployment Issues

#### Issue: `venv/` folder in git

**Problem**: Virtual environment being tracked by git

**Solution**:
```bash
# venv should already be in .gitignore
# If accidentally committed:
git rm -r --cached venv/
git commit -m "Remove venv from git"
```

#### Issue: Vercel/Netlify deployment fails

**Problem**: Wrong build directory

**Solution** (for frontend):
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 18+

#### Issue: Railway/Render backend fails

**Problem**: Missing environment variables

**Solution**:
Set these in hosting dashboard:
- `OPENAI_API_KEY` (required)
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD` (optional)
- `FROM_EMAIL`, `ADMIN_EMAIL` (optional)

---

## Quick Diagnostic Commands

### Check Python Version
```bash
python3 --version
# Should be 3.8 or higher
```

### Check Virtual Environment
```bash
which python
# When activated, should point to: /path/to/venv/bin/python
```

### Check Installed Packages
```bash
pip list
# Should show fastapi, uvicorn, openai, etc.
```

### Check Backend is Running
```bash
curl http://localhost:8000/health
# Should return: {"status":"ok","version":"0.1.0",...}
```

### Check Frontend is Running
```bash
curl http://localhost:5173
# Should return HTML
```

### Test Waitlist Endpoint
```bash
curl -X POST http://localhost:8000/api/waitlist \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","brand_url":"https://tesla.com"}'
```

### Check Waitlist Data
```bash
cat backend/data/waitlist.json | python3 -m json.tool
# Pretty-print JSON
```

---

## Still Having Issues?

### Enable Debug Mode

1. Check console output for detailed error messages
2. Backend logs show in the terminal where you ran uvicorn
3. Frontend logs show in browser DevTools console

### Verify File Structure

```
VISIBI/
├── venv/                    # Should exist after setup
├── backend/
│   ├── .env                 # ✅ Should exist with OpenAI key
│   ├── main.py
│   ├── services/
│   │   ├── email_service.py
│   │   └── waitlist_service.py
│   └── data/
│       └── waitlist.json    # Created on first signup
├── frontend/
│   ├── src/
│   │   └── pages/
│   │       └── ComingSoon.jsx
│   └── package.json
└── requirements.txt
```

### Get Help

1. Check the full error message in terminal
2. Look for `ERROR:` or `Traceback` in backend logs
3. Check browser DevTools Network tab for API errors
4. Review the documentation:
   - [QUICK-START-COMING-SOON.md](./QUICK-START-COMING-SOON.md)
   - [COMING-SOON-SETUP.md](./COMING-SOON-SETUP.md)

---

## Prevention Tips

✅ **Always activate venv before running backend**
```bash
source venv/bin/activate
```

✅ **Use python3, not python on macOS**

✅ **Start backend before testing frontend**

✅ **Keep backend/.env with your OpenAI key**

✅ **Email config is optional for development**

✅ **Backend runs on :8000, Frontend on :5173**

---

**Most Common Issue**: Not activating virtual environment!

**Quick Fix**:
```bash
source venv/bin/activate
python3 -m uvicorn backend.main:app --reload
```
