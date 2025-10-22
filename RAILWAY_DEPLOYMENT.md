# Railway Deployment Guide - VISIBI

This guide will help you deploy both the backend and frontend as separate services on Railway.

## Prerequisites

- Railway account (sign up at https://railway.app)
- GitHub repository connected to Railway
- OpenAI API key for the backend

## Overview

We'll create **TWO separate Railway services** from the same GitHub repository:
1. **Backend Service** (Python FastAPI) - Runs from `/backend` directory
2. **Frontend Service** (Vite React) - Runs from `/frontend` directory

## ⚠️ CRITICAL: Avoid Docker Build Errors

**If you see "npm: command not found" or "Docker build failed" errors:**

Railway might auto-select Docker as the builder. You MUST manually change it to NIXPACKS:

1. Go to your service **Settings** tab
2. Find the **Build** section
3. Click on **Builder** dropdown
4. Select **NIXPACKS** (NOT Docker)
5. Save and redeploy

This is the most common deployment issue - Railway defaults to Docker when it shouldn't.

---

## Step 1: Deploy Backend Service

### 1.1 Create New Project
1. Log into Railway dashboard
2. Click **"New Project"**
3. Select **"Deploy from GitHub repo"**
4. Choose your **VISIBI** repository
5. Railway will auto-detect the service - **Rename it to "visibi-backend"**

### 1.2 Configure Backend Service
1. Go to **Settings** tab
2. Scroll down to **Service Settings** section
3. Set **Root Directory**: `backend`
4. **IMPORTANT**: Under **Build** section, click on **Builder** and manually select **NIXPACKS**
   - If it shows "Docker", change it to "NIXPACKS"
5. Under **Deploy** section, set:
   - Start Command: `uvicorn main:app --host 0.0.0.0 --port $PORT`
6. Under **Health Check** section (optional):
   - Path: `/health`
   - Timeout: 100

### 1.3 Add Environment Variables
Go to **Variables** tab and add:

**Required:**
- `OPENAI_API_KEY` = `your_openai_api_key_here`

**Optional (for email notifications):**
- `SMTP_HOST` = `smtp.gmail.com` (or your SMTP server)
- `SMTP_PORT` = `587`
- `SMTP_USER` = `your-email@gmail.com`
- `SMTP_PASSWORD` = `your-app-password`
- `FROM_EMAIL` = `your-email@gmail.com`
- `ADMIN_EMAIL` = `admin@yourdomain.com`

**Important for CORS:**
- `ALLOWED_ORIGINS` = (leave empty for now, we'll update after frontend deployment)

### 1.4 Deploy Backend
1. Click **Deploy** or wait for auto-deploy
2. Once deployed, go to **Settings** → **Networking**
3. Click **Generate Domain** to get your backend URL
4. **Copy this URL** - you'll need it for the frontend (e.g., `https://visibi-backend-production.up.railway.app`)

---

## Step 2: Deploy Frontend Service

### 2.1 Add Frontend Service to Project
1. In your Railway project, click **"+ New"**
2. Select **"GitHub Repo"** → Choose same VISIBI repository
3. Railway will create another service - **Rename it to "visibi-frontend"**

### 2.2 Configure Frontend Service
1. Go to **Settings** tab
2. Scroll down to **Service Settings** section
3. Set **Root Directory**: `frontend`
4. **IMPORTANT**: Under **Build** section, click on **Builder** and manually select **NIXPACKS**
   - If it shows "Docker", change it to "NIXPACKS"
5. Under **Deploy** section, set:
   - Start Command: `npm run preview -- --host 0.0.0.0 --port $PORT`
6. Under **Health Check** section (optional):
   - Path: `/`
   - Timeout: 100

### 2.3 Add Environment Variable
Go to **Variables** tab and add:

- `VITE_API_URL` = `https://visibi-backend-production.up.railway.app` (your backend URL from Step 1.4)

**Important:** Replace with your actual backend URL!

### 2.4 Deploy Frontend
1. Click **Deploy** or wait for auto-deploy
2. Once deployed, go to **Settings** → **Networking**
3. Click **Generate Domain** to get your frontend URL (e.g., `https://visibi-frontend-production.up.railway.app`)

---

## Step 3: Update Backend CORS

Now that you have the frontend URL, update the backend to allow requests from it:

1. Go to **visibi-backend** service
2. Go to **Variables** tab
3. Update or add:
   - `ALLOWED_ORIGINS` = `https://visibi-frontend-production.up.railway.app` (your frontend URL)

   **Note:** If you want to allow multiple origins (e.g., local dev + production), use comma-separated values:
   - `ALLOWED_ORIGINS` = `http://localhost:5173,https://visibi-frontend-production.up.railway.app`

4. The backend will automatically redeploy with the new CORS settings

---

## Step 4: Verify Deployment

### Backend Health Check
Visit: `https://your-backend-url.up.railway.app/health`

You should see:
```json
{
  "status": "ok",
  "version": "0.1.0",
  "timestamp": "2025-10-22T..."
}
```

### Frontend Check
Visit: `https://your-frontend-url.up.railway.app`

You should see the VISIBI Coming Soon page.

### Full Integration Test
1. Go to your frontend URL
2. Enter a brand URL (e.g., `https://stripe.com`)
3. Add optional keywords
4. Enter your email
5. Click "Join Waitlist"
6. Check if you receive a success message with preview analytics

---

## Troubleshooting

### Backend Errors

**"OpenAI client not initialized"**
- Make sure `OPENAI_API_KEY` is set in backend environment variables
- Redeploy the backend service

**"Module not found"**
- Check that `requirements.txt` exists in `/backend` directory
- Verify Root Directory is set to `backend`

### Frontend Errors

**"Failed to join waitlist" / Network errors**
- Verify `VITE_API_URL` is set correctly in frontend variables
- Check backend CORS allows the frontend URL in `ALLOWED_ORIGINS`
- Open browser DevTools → Network tab to see the actual API request

**"Cannot find module"**
- Check that Root Directory is set to `frontend`
- Verify build command: `npm ci && npm run build`

### CORS Errors

If you see errors like "Access to fetch blocked by CORS policy":
- Make sure backend `ALLOWED_ORIGINS` includes your frontend URL
- Backend must be redeployed after changing CORS settings
- Check that frontend URL matches exactly (with https://)

---

## Production Checklist

- [ ] Backend deployed with OpenAI API key
- [ ] Frontend deployed with correct API URL
- [ ] Backend CORS configured with frontend URL
- [ ] Health check endpoint returns 200 OK
- [ ] Can submit waitlist form successfully
- [ ] Email notifications working (if configured)
- [ ] Custom domain configured (optional)

---

## Custom Domains (Optional)

### Backend Custom Domain
1. Go to **visibi-backend** → **Settings** → **Networking**
2. Click **Add Custom Domain**
3. Enter your domain (e.g., `api.visibi.com`)
4. Update DNS records as instructed
5. Update frontend `VITE_API_URL` to new domain
6. Update backend `ALLOWED_ORIGINS` if using custom frontend domain

### Frontend Custom Domain
1. Go to **visibi-frontend** → **Settings** → **Networking**
2. Click **Add Custom Domain**
3. Enter your domain (e.g., `www.visibi.com`)
4. Update DNS records as instructed
5. Update backend `ALLOWED_ORIGINS` to include new domain

---

## Environment Variables Reference

### Backend (`visibi-backend`)

| Variable | Required | Example | Description |
|----------|----------|---------|-------------|
| `OPENAI_API_KEY` | Yes | `sk-...` | OpenAI API key for ChatGPT |
| `ALLOWED_ORIGINS` | Yes | `https://visibi-frontend.up.railway.app` | Comma-separated frontend URLs |
| `SMTP_HOST` | No | `smtp.gmail.com` | SMTP server for emails |
| `SMTP_PORT` | No | `587` | SMTP port |
| `SMTP_USER` | No | `you@gmail.com` | SMTP username |
| `SMTP_PASSWORD` | No | `app-password` | SMTP password |
| `FROM_EMAIL` | No | `you@gmail.com` | Email sender address |
| `ADMIN_EMAIL` | No | `admin@visibi.com` | Admin notification email |

### Frontend (`visibi-frontend`)

| Variable | Required | Example | Description |
|----------|----------|---------|-------------|
| `VITE_API_URL` | Yes | `https://visibi-backend.up.railway.app` | Backend API URL |

---

## Monitoring and Logs

### View Logs
1. Go to your service in Railway
2. Click **Deployments** tab
3. Click on the latest deployment
4. View real-time logs in the **Logs** section

### Common Log Patterns

**Backend successful startup:**
```
🚀 Starting VISIBI - AI Brand Monitor v0.1.0
📝 API Documentation: http://localhost:8000/docs
✅ Configuration validated
```

**Frontend successful build:**
```
vite v5.0.0 building for production...
✓ built in 3.45s
```

---

## Cost Estimates

Railway offers:
- **Free Trial**: $5 credit (no credit card required)
- **Developer Plan**: $5/month
- Usage-based pricing for compute and bandwidth

Typical monthly costs for VISIBI:
- Backend: ~$2-5 (depends on traffic)
- Frontend: ~$1-2 (static hosting)

**Total: ~$3-7/month** for low-to-medium traffic

---

## Support

- Railway Docs: https://docs.railway.app
- Railway Discord: https://discord.gg/railway
- VISIBI GitHub: [Your repo URL]

---

**Deployment completed!** Your VISIBI app should now be live and accessible worldwide.
