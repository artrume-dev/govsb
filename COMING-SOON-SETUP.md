# Coming Soon Page - Setup Guide

## Overview

The coming soon page has been implemented with a beautiful 2-step form that collects brand URLs and emails, runs a quick AI analysis, and sends confirmation emails to users.

## Features

✅ **2-Step Form Flow**
- Step 1: User enters brand URL
- Step 2: User enters email address
- Step 3: Show preview analytics + confirmation

✅ **Backend Email Collection**
- Saves to `backend/data/waitlist.json` (auto-created)
- Sends beautiful HTML confirmation emails to users
- Sends admin notifications (optional)
- Runs quick 5-query analysis for preview

✅ **Email Provider Support**
- SMTP (Gmail, custom servers)
- Console mode for development (no config needed)
- Easy to extend to SendGrid, AWS SES, etc.

✅ **Beautiful UI**
- Matches existing shadcn/ui + Tailwind design
- Dark mode support
- Responsive design
- Progress indicators

## Quick Start

### 0. First Time Setup (Required)

**Your `.env` file is already configured with OpenAI API key** ✅

Before starting the servers, you need to set up the Python virtual environment:

#### Option A: Automated Setup (Recommended)
```bash
# Run the setup script from project root
./setup.sh
```

The script will:
- Create virtual environment
- Install all dependencies
- Verify configuration
- Run tests

#### Option B: Manual Setup
```bash
# Create virtual environment
python3 -m venv venv

# Activate it
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt
```

### 1. Start the Backend

```bash
# Activate virtual environment (if not already activated)
source venv/bin/activate

# Start the server using uvicorn
python3 -m uvicorn backend.main:app --reload
```

The backend will start on http://localhost:8000

**Note**: If email configuration is not set, emails will be printed to console (perfect for testing!)

### 2. Start the Frontend

```bash
cd frontend
npm run dev
```

The frontend will start on http://localhost:5173

### 3. Test the Flow

1. Go to http://localhost:5173
2. Enter a brand URL (e.g., "https://tesla.com")
3. Click "Next"
4. Enter an email address
5. Click "Get My Free Analysis"
6. See preview analytics!

## Email Configuration (Optional)

### Development Mode (No Configuration)

By default, the system runs in **console mode** - emails are printed to the terminal instead of being sent. This is perfect for testing!

### Production Mode (Send Real Emails)

#### Option 1: Gmail (Recommended for Testing)

1. Create a `.env` file in the root directory:
```bash
cp .env.example .env
```

2. Add your Gmail credentials:
```env
OPENAI_API_KEY=your_openai_api_key_here

# Gmail SMTP
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password-here
FROM_EMAIL=your-email@gmail.com

# Optional: Admin notifications
ADMIN_EMAIL=your-email@gmail.com
```

3. **Important**: For Gmail, you need an "App Password":
   - Enable 2-factor authentication on your Google account
   - Go to https://myaccount.google.com/apppasswords
   - Generate an app password
   - Use the app password (not your regular password) in `SMTP_PASSWORD`

#### Option 2: SendGrid (Recommended for Production)

```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASSWORD=your_sendgrid_api_key
FROM_EMAIL=verified-sender@yourdomain.com
```

#### Option 3: AWS SES

```env
SMTP_HOST=email-smtp.us-east-1.amazonaws.com
SMTP_PORT=587
SMTP_USER=your_ses_smtp_username
SMTP_PASSWORD=your_ses_smtp_password
FROM_EMAIL=verified-sender@yourdomain.com
```

## File Structure

```
VISIBI/
├── frontend/
│   └── src/
│       └── pages/
│           └── ComingSoon.jsx          # New coming soon page
├── backend/
│   ├── services/
│   │   ├── email_service.py            # Email handling
│   │   └── waitlist_service.py         # Waitlist management
│   ├── data/
│   │   └── waitlist.json               # Auto-created on first signup
│   └── main.py                         # Updated with /api/waitlist endpoint
└── .env.example                        # Email configuration template
```

## API Endpoints

### POST /api/waitlist

Join the waitlist and get preview analytics.

**Request:**
```json
{
  "email": "user@example.com",
  "brand_url": "https://www.example.com"
}
```

**Response:**
```json
{
  "message": "Successfully added to waitlist! Check your email for confirmation.",
  "email": "user@example.com",
  "brand_url": "https://www.example.com",
  "preview": {
    "brand_name": "Example",
    "sentiment": "POSITIVE",
    "mentions": 3,
    "visibility": 60.0
  }
}
```

### GET /api/waitlist/stats

Get waitlist statistics (admin endpoint).

**Response:**
```json
{
  "message": "Waitlist statistics",
  "total": 42,
  "pending": 35,
  "sent": 7,
  "error": 0
}
```

## Data Storage

### Waitlist Data Format

All waitlist entries are stored in `backend/data/waitlist.json`:

```json
[
  {
    "email": "user@example.com",
    "brand_url": "https://www.example.com",
    "created_at": "2025-10-13T12:34:56",
    "status": "pending",
    "preview_data": {
      "brand_name": "Example",
      "sentiment": "POSITIVE",
      "mentions": 3,
      "visibility": 60.0
    }
  }
]
```

### Migrating to Phase 2 Database

When you implement Phase 2 (PostgreSQL), you can easily import this data:

1. Create a `waitlist` table in PostgreSQL
2. Run a simple migration script to import `waitlist.json`
3. Update `waitlist_service.py` to use database instead of JSON
4. No frontend changes needed!

## Switching Between Pages

The app currently shows the Coming Soon page by default. To switch:

### Show Coming Soon Page (Current)
```javascript
// frontend/src/App.jsx
return <ComingSoon />
```

### Show Dashboard Instead
```javascript
// frontend/src/App.jsx
import Dashboard from './pages/Dashboard'
return <Dashboard />
```

### Use Environment Variable (Recommended)
```javascript
// frontend/src/App.jsx
const showComingSoon = import.meta.env.VITE_SHOW_COMING_SOON === 'true'
return showComingSoon ? <ComingSoon /> : <Dashboard />
```

## Email Templates

The system sends two types of emails:

### 1. User Confirmation Email
- Beautiful HTML email with preview analytics
- Shows sentiment, mentions, and visibility
- Explains what's coming next
- Mobile-responsive design

### 2. Admin Notification Email (Optional)
- Notifies you of new signups
- Includes user email and brand URL
- Shows preview analytics

## Testing Checklist

- [ ] Backend starts without errors
- [ ] Frontend shows coming soon page
- [ ] Can enter brand URL and proceed to step 2
- [ ] Can enter email and submit
- [ ] Preview analytics appear after submission
- [ ] Email printed to console (development mode)
- [ ] Waitlist data saved to `backend/data/waitlist.json`
- [ ] Can analyze another brand after completion

## Production Deployment

### Before Going Live:

1. **Set up real email service** (Gmail, SendGrid, or AWS SES)
2. **Update CORS settings** in `backend/main.py`:
   ```python
   allow_origins=["https://yourdomain.com"]
   ```
3. **Set environment variables** on your hosting platform
4. **Test email delivery** with a real email address
5. **Update brand name** in the coming soon page if needed

### Deployment Options:

- **Frontend**: Vercel, Netlify, or any static hosting
- **Backend**: Railway, Render, Heroku, or any Python hosting
- **Database**: Keep JSON for now, migrate to PostgreSQL in Phase 2

## Customization

### Change Colors/Branding

Edit `frontend/src/pages/ComingSoon.jsx`:
- Update gradient colors in the header
- Change the brand name "VISIBI"
- Modify hero text and descriptions

### Modify Email Templates

Edit `backend/services/email_service.py`:
- Update HTML templates in `send_waitlist_confirmation()`
- Customize email subject lines
- Add your logo or branding

### Adjust Analysis Preview

Edit the waitlist endpoint in `backend/main.py`:
- Change number of preview queries (currently 5)
- Modify metrics shown in preview
- Add additional data fields

## Troubleshooting

### Email Not Sending

**Console shows**: "⚠️ No email configuration found. Using console output mode."
- This is normal for development! Emails will print to console.
- To send real emails, add SMTP configuration to `.env`

### CORS Errors

If frontend can't reach backend:
```python
# backend/main.py - Add your frontend URL
allow_origins=["http://localhost:5173", "https://yourdomain.com"]
```

### OpenAI API Errors

The preview analysis requires OpenAI API. Make sure:
- `OPENAI_API_KEY` is set in `.env`
- You have API credits available
- Your API key is valid

### Waitlist File Not Created

The `backend/data/` directory and `waitlist.json` are auto-created on first signup. If you see errors:
- Check file permissions
- Ensure backend has write access to the directory

## Next Steps

1. **Test the complete flow** with the development setup
2. **Configure email service** when ready to send real emails
3. **Deploy to production** when you're satisfied with the design
4. **Collect leads** and prepare for launch!
5. **Implement Phase 2** when ready to add database storage

## Support

For issues or questions:
- Check the console logs for detailed error messages
- Review the email service logs in the terminal
- Check `backend/data/waitlist.json` to verify data is being saved

---

**Congratulations!** Your coming soon page is ready to collect leads and show off your AI analytics platform! 🎉
