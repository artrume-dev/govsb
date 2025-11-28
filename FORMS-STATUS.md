# Forms Status & CORS Fix

## ✅ What's Been Fixed

### Frontend Updates (All Pushed to GitHub)
1. ✅ **HomePage Brand Analysis Form** - Now calls Railway backend API
2. ✅ **ContactPage Contact Form** - Now calls Railway backend API
3. ✅ **Added `mode: 'cors'`** to both forms for explicit CORS handling
4. ✅ **Rebuilt and pushed dist folder** with all updates

### Backend Updates (All Pushed to GitHub)
1. ✅ **Updated CORS configuration** with better origin parsing
2. ✅ **Added debugging logs** to show which origins are being used
3. ✅ **Added regex pattern** for Vercel and Railway deployments

## ⚠️ Current Issue: CORS Error

Both forms are getting CORS errors because **Railway backend needs to be properly configured**.

### The Problem
The backend is rejecting requests from `http://localhost:5174` because:
1. Railway hasn't redeployed with the new CORS code yet, OR
2. The `ALLOWED_ORIGINS` environment variable in Railway is not set correctly

## 🔧 SOLUTION: Configure Railway (5 Minutes)

### Step 1: Go to Railway Dashboard
1. Open https://railway.app/dashboard
2. Select your VISIBI backend project
3. Click on the backend service

### Step 2: Set ALLOWED_ORIGINS Variable
1. Click on **Variables** tab
2. Look for `ALLOWED_ORIGINS` variable
3. **Delete the old value** if it exists
4. **Set this EXACT value** (copy-paste, NO spaces after commas):

```
https://visibi-app-git-main-adnan-hkas-projects.vercel.app,https://visibi-app.vercel.app,https://visibi-app-tawny.vercel.app,https://visibiwebproject.vercel.app,http://localhost:5174,http://localhost:5173,http://localhost:3000,http://127.0.0.1:5173,http://127.0.0.1:5174,https://visibi.com,https://www.visibi.com,https://govisibi.ai,https://www.govisibi.ai
```

**CRITICAL**: Make sure there are **NO SPACES** after any comma!

### Step 3: Force Redeploy
1. Go to **Deployments** tab
2. Click **Redeploy** button (or wait for auto-deploy to finish)
3. Wait 2-3 minutes for deployment to complete

### Step 4: Check Deployment Logs
1. Click on the latest deployment
2. Look for these log messages in the **Deploy Logs**:
   ```
   📋 Using ALLOWED_ORIGINS from environment: [...]
   🔧 Configuring CORS with X allowed origins
   ✅ CORS middleware configured successfully
   ```

**If you see "Using default ALLOWED_ORIGINS"**, the environment variable is NOT being read!

### Step 5: Test Both Forms
1. Clear browser cache: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
2. Test **Brand Analysis Form**: http://localhost:5174
3. Test **Contact Form**: http://localhost:5174/contact
4. Both should work without CORS errors! ✅

## 📊 Current Form Endpoints

### Brand Analysis Form (HomePage)
- **Frontend**: `http://localhost:5174`
- **Backend API**: `https://govisibi.up.railway.app/api/brand-analysis`
- **Method**: POST
- **Data**: `{ brand_url, email, custom_queries, custom_keywords }`

### Contact Form (ContactPage)
- **Frontend**: `http://localhost:5174/contact`
- **Backend API**: `https://govisibi.up.railway.app/api/send-email`
- **Method**: POST
- **Data**: `{ name, company, email, topic, message }`

## 🔍 Troubleshooting

### If CORS error persists after Railway redeploy:

1. **Check Railway Environment Variable**:
   - Go to Variables tab
   - Verify `ALLOWED_ORIGINS` is set correctly
   - Make sure there are NO spaces after commas
   - The value should be one continuous line

2. **Check Railway Deployment Status**:
   - Go to Deployments tab
   - Verify the latest deployment is "Active"
   - Check the timestamp - it should be recent (after you set the variable)

3. **Check Deployment Logs**:
   - Look for the CORS configuration messages
   - If you see "Using default ALLOWED_ORIGINS", the env var is not working

4. **Test Backend Health**:
   ```bash
   curl https://govisibi.up.railway.app/health
   ```
   Should return: `{"status":"ok","version":"1.0.0","timestamp":"..."}`

5. **Check Browser Console**:
   - Open DevTools (F12)
   - Go to Network tab
   - Submit form
   - Click on the failed request
   - Check Response Headers - should include:
     - `access-control-allow-origin: http://localhost:5174`
     - `access-control-allow-credentials: true`

### If Backend Isn't Reading Environment Variable:

This could happen if:
- Railway hasn't redeployed yet
- The variable name has a typo (should be exactly `ALLOWED_ORIGINS`)
- There are hidden characters in the variable value

**Solution**: Delete the variable completely and recreate it fresh.

## 📝 Email Configuration

The backend also needs email configuration to actually send emails:

### Required Environment Variables in Railway:
```
RESEND_API_KEY=your_resend_api_key   # Recommended for Railway (SMTP blocked on hobby)
FROM_EMAIL=info@govisibi.ai          # Verified sender in Resend
ADMIN_EMAIL=info@govisibi.ai         # Where contact/analysis notifications go

# Optional legacy SMTP (keep commented on Railway)
# SMTP_HOST=mail.govisibi.ai
# SMTP_PORT=465
# SMTP_USER=info@govisibi.ai
# SMTP_PASSWORD=your_password
```

Without these, emails will be printed to console only (development mode).

## ✅ Success Criteria

When everything is working correctly:
1. ✅ No CORS errors in browser console
2. ✅ Brand analysis form shows "Thank You" message
3. ✅ Contact form shows "Thank You!" message
4. ✅ User receives confirmation email
5. ✅ Admin receives notification email

## 🚀 Next Steps After CORS is Fixed

1. Test both forms thoroughly
2. Verify emails are being sent (check spam folder)
3. Deploy frontend to production (Vercel)
4. Test forms on production domain
5. Monitor Railway logs for any errors
