# Final Setup Checklist for VISIBI Forms

## ✅ What's Been Fixed

### 1. Correct Railway Backend URL
- ✅ Updated from `govisibi.up.railway.app` to `visibiapp-production.up.railway.app`
- ✅ Updated in both HomePage.jsx and ContactPage.jsx
- ✅ Rebuilt and pushed dist folder

### 2. CORS Configuration
- ✅ Backend code updated with proper CORS handling
- ✅ Added debugging logs
- ✅ Pushed to GitHub (Railway will auto-deploy)

---

## 🔧 Railway Configuration Checklist

### Required Environment Variables

Go to Railway → Your Backend Service → Variables tab and set:

#### CORS Configuration
```
ALLOWED_ORIGINS=https://visibi-app-git-main-adnan-hkas-projects.vercel.app,https://visibi-app.vercel.app,https://visibi-app-tawny.vercel.app,https://visibiwebproject.vercel.app,http://localhost:5174,http://localhost:5173,http://localhost:3000,http://127.0.0.1:5173,http://127.0.0.1:5174,https://visibi.com,https://www.visibi.com,https://govisibi.ai,https://www.govisibi.ai,https://visibiapp-production.up.railway.app
```

#### Email Configuration (govisibi.ai)
```
SMTP_HOST=reymail.ukdns.biz
SMTP_PORT=465
SMTP_USER=info@govisibi.ai
SMTP_PASSWORD=wsewoofymkgpaykp
FROM_EMAIL=info@govisibi.ai
ADMIN_EMAIL=spacegigx@gmail.com
```

**Note**: Use the correct password for info@govisibi.ai (check EMAIL_SETUP.md if needed)

---

## 🚀 Deployment Steps

### 1. Verify Railway Variables
- [ ] All CORS origins are set in `ALLOWED_ORIGINS`
- [ ] All email variables are set correctly
- [ ] No spaces after commas in `ALLOWED_ORIGINS`

### 2. Redeploy Railway Backend
- [ ] Go to Deployments tab
- [ ] Click **Redeploy**
- [ ] Wait 2-3 minutes for deployment

### 3. Check Deployment Logs
Look for these messages in Railway logs:
```
📋 Using ALLOWED_ORIGINS from environment: [...]
🔧 Configuring CORS with X allowed origins
✅ CORS middleware configured successfully
```

### 4. Test Forms Locally
- [ ] Clear browser cache (Cmd+Shift+R)
- [ ] Test Brand Analysis Form: http://localhost:5174
- [ ] Test Contact Form: http://localhost:5174/contact
- [ ] Both should work without CORS errors

### 5. Test Email Delivery
- [ ] Submit Contact Form
- [ ] Check if user receives confirmation email
- [ ] Check if admin receives notification at spacegigx@gmail.com
- [ ] Check spam folder if emails don't arrive

---

## 📋 Current Configuration

### Backend Railway URL
```
https://visibiapp-production.up.railway.app
```

### API Endpoints
- **Brand Analysis**: `POST /api/brand-analysis`
- **Contact Form**: `POST /api/send-email`
- **Health Check**: `GET /health`

### Email Flow
1. User submits form
2. Backend sends confirmation to user (from: info@govisibi.ai)
3. Backend sends notification to admin (spacegigx@gmail.com)
4. Both emails sent via reymail.ukdns.biz (port 465, SSL)

---

## 🔍 Troubleshooting

### CORS Error Still Appearing?
1. Check Railway deployment is complete (green status)
2. Verify `ALLOWED_ORIGINS` has no spaces after commas
3. Check deployment logs show "Using ALLOWED_ORIGINS from environment"
4. Clear browser cache and try again

### Emails Not Sending?
1. Check Railway logs for email errors
2. Verify SMTP credentials are correct
3. Test with: `curl https://visibiapp-production.up.railway.app/test-email?to=your@email.com`
4. Check spam folder

### Form Submission Fails?
1. Open browser DevTools → Network tab
2. Submit form and check the failed request
3. Look at Response tab for error details
4. Check if it's CORS (preflight) or server error (500)

---

## ✅ Success Criteria

When everything is working:
- ✅ No CORS errors in browser console
- ✅ Forms show "Thank You" message after submission
- ✅ User receives confirmation email from info@govisibi.ai
- ✅ Admin receives notification at spacegigx@gmail.com
- ✅ Railway logs show successful email sending

---

## 📝 Next Steps After Testing

1. Deploy frontend to Vercel (if not already)
2. Test forms on production domain
3. Monitor Railway logs for any errors
4. Set up email monitoring/alerts
5. Consider adding rate limiting to prevent spam
6. Add CAPTCHA for production (optional)

---

## 🆘 Quick Reference

### Railway Backend URL
```
https://visibiapp-production.up.railway.app
```

### Test Backend Health
```bash
curl https://visibiapp-production.up.railway.app/health
```

### Test Email Sending
```bash
curl "https://visibiapp-production.up.railway.app/test-email?to=your@email.com"
```

### Check Railway Logs
1. Go to Railway dashboard
2. Click on your backend service
3. Click on **Deployments** tab
4. Click on latest deployment
5. View **Deploy Logs** or **Runtime Logs**

