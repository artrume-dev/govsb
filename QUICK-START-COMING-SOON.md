# Quick Start - Coming Soon Page

## 🚀 Launch in 5 Minutes

### 0. First Time Setup (One-Time Only)
```bash
# Option A: Use automated setup script (recommended)
./setup.sh

# Option B: Manual setup
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

**Note**: The `.env` file already exists in `backend/.env` with your OpenAI API key configured ✅

### 1. Start Backend
```bash
# Activate virtual environment
source venv/bin/activate

# Start the server
python3 -m uvicorn backend.main:app --reload
```
Backend runs on http://localhost:8000

### 2. Start Frontend
```bash
cd frontend
npm run dev
```
Frontend runs on http://localhost:5173

### 3. Test It!
Open http://localhost:5173 and enter:
- Brand URL: `https://tesla.com`
- Email: `test@example.com`

Watch the magic happen! 🎉

## 📧 Email Setup (Optional)

### Development (Default)
✅ **No configuration needed!**
- Emails print to console
- Perfect for testing

### Production (Send Real Emails)

**Option 1: Gmail (Quick Setup)**
```bash
# Create .env file
cp .env.example .env
```

Add to `.env`:
```env
OPENAI_API_KEY=your_key_here
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
FROM_EMAIL=your-email@gmail.com
ADMIN_EMAIL=your-email@gmail.com
```

**Get Gmail App Password:**
1. Enable 2FA on Google account
2. Visit https://myaccount.google.com/apppasswords
3. Generate app password
4. Use it in `SMTP_PASSWORD`

**Option 2: SendGrid (Recommended for Production)**
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASSWORD=your_sendgrid_api_key
FROM_EMAIL=verified@yourdomain.com
```

## 📊 What Gets Collected

Each signup saves to `backend/data/waitlist.json`:
```json
{
  "email": "user@example.com",
  "brand_url": "https://example.com",
  "created_at": "2025-10-13T12:34:56",
  "preview_data": {
    "brand_name": "Example",
    "sentiment": "POSITIVE",
    "mentions": 3,
    "visibility": 60.0
  }
}
```

## 🎯 What Users Experience

1. **Landing Page** - See features and value prop
2. **Enter Brand URL** - Input their website
3. **Enter Email** - Provide email for early access
4. **Get Preview** - See instant analytics:
   - Overall sentiment
   - Number of mentions
   - Visibility score
5. **Confirmation** - Beautiful email with full details

## 🔧 View Waitlist Data

### Check JSON File
```bash
cat backend/data/waitlist.json
```

### API Endpoint
```bash
curl http://localhost:8000/api/waitlist/stats
```

Response:
```json
{
  "total": 42,
  "pending": 35,
  "sent": 7
}
```

## 🎨 Customize

### Change Branding
Edit `frontend/src/pages/ComingSoon.jsx`:
- Line 88: Update "VISIBI" to your brand name
- Line 90-93: Modify hero text
- Colors: Update gradient classes

### Modify Email Template
Edit `backend/services/email_service.py`:
- Line 68-156: HTML email template
- Line 52: Email subject line

## 🚢 Ready to Deploy?

### Frontend (Vercel/Netlify)
```bash
cd frontend
npm run build
# Deploy the 'dist' folder
```

### Backend (Railway/Render)
```bash
# Set environment variables in hosting dashboard:
# - OPENAI_API_KEY
# - SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD
# - FROM_EMAIL, ADMIN_EMAIL
```

## 💡 Pro Tips

1. **Test email delivery** before going live
2. **Set ADMIN_EMAIL** to get notified of signups
3. **Backup waitlist.json** regularly
4. **Import to database** when implementing Phase 2
5. **Update CORS** settings for production domain

## 🎊 You're All Set!

Your coming soon page is ready to:
- ✅ Collect leads
- ✅ Show AI-powered previews
- ✅ Send beautiful confirmation emails
- ✅ Store data for future use

**Full documentation**: See [COMING-SOON-SETUP.md](./COMING-SOON-SETUP.md)

---

**Ready to launch?** Start collecting those leads! 🚀
