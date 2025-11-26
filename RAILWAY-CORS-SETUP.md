# Railway CORS Configuration Setup

## The Issue
The brand analysis form is getting CORS errors because Railway backend needs to be redeployed with the new CORS configuration.

## Solution: Set CORS Environment Variable in Railway

### Step 1: Access Railway Dashboard
1. Go to [Railway Dashboard](https://railway.app/dashboard)
2. Select your VISIBI backend project
3. Click on the backend service

### Step 2: Add ALLOWED_ORIGINS Environment Variable
1. Click on the **Variables** tab
2. Click **+ New Variable** (or edit existing ALLOWED_ORIGINS if already added)
3. Add the following:
   - **Variable Name**: `ALLOWED_ORIGINS`
   - **Variable Value** (copy this EXACT value without any spaces after commas): 
     ```
     https://visibi-app-git-main-adnan-hkas-projects.vercel.app,https://visibi-app.vercel.app,https://visibi-app-tawny.vercel.app,https://visibiwebproject.vercel.app,http://localhost:5174,http://localhost:5173,http://localhost:3000,http://127.0.0.1:5173,http://127.0.0.1:5174,https://visibi.com,https://www.visibi.com,https://govisibi.ai,https://www.govisibi.ai,https://visibiapp-production.up.railway.app
     ```

**IMPORTANT**: Make sure there are NO spaces after the commas in the value!

**Note**: Your backend Railway URL is `visibiapp-production.up.railway.app` (not govisibi.up.railway.app)

### Step 3: Redeploy
1. After adding the variable, Railway will automatically redeploy
2. Wait 2-3 minutes for the deployment to complete
3. Check the deployment logs to ensure it's successful

### Step 4: Verify CORS is Working
1. Go to `http://localhost:5174` in your browser
2. Try submitting the brand analysis form
3. The CORS error should be resolved

## Alternative: Manual Redeploy

If Railway hasn't auto-deployed after the git push:

1. Go to **Deployments** tab in Railway
2. Click on the latest deployment
3. Click **Redeploy** button
4. Wait for deployment to complete

## How CORS Works in the Backend

The backend (`backend/main.py`) reads the `ALLOWED_ORIGINS` environment variable:

```python
allowed_origins_str = os.getenv("ALLOWED_ORIGINS", "")
if allowed_origins_str:
    allowed_origins = [origin.strip() for origin in allowed_origins_str.split(",")]
else:
    # Default allowed origins if not set
    allowed_origins = [
        "http://localhost:5173",
        "http://localhost:5174",
        # ... etc
    ]
```

## Current Status

✅ Backend CORS code updated and pushed to GitHub (commit: fe1dbb0)
✅ Frontend updated to call Railway backend API
⏳ **Waiting for Railway to redeploy with new CORS settings**

## Testing After Setup

Once Railway redeploys, test both forms:
1. **Brand Analysis Form** (HomePage.jsx) - http://localhost:5174
2. **Contact Form** (ContactPage.jsx) - http://localhost:5174/contact

Both should successfully submit without CORS errors.

## Troubleshooting

### If CORS error persists:

1. **Check Railway Deployment Logs**:
   - Go to Railway dashboard → Your service → **Deployments** tab
   - Click on the latest deployment
   - Check the **Deploy Logs** tab
   - Look for these lines:
     ```
     📋 Using ALLOWED_ORIGINS from environment: [...]
     🔧 Configuring CORS with X allowed origins
     ✅ CORS middleware configured successfully
     ```
   - If you see "Using default ALLOWED_ORIGINS", the environment variable is not being read correctly

2. **Verify the ALLOWED_ORIGINS variable format**:
   - Go to **Variables** tab in Railway
   - Make sure there are **NO SPACES** after commas
   - The value should be one continuous line
   - Example: `https://example.com,http://localhost:5174` (NO SPACE after comma)

3. **Force Redeploy**:
   - Go to **Deployments** tab
   - Click **Redeploy** button
   - Wait for deployment to complete (2-3 minutes)

4. **Clear Browser Cache**:
   - Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
   - Or open in Incognito/Private window

5. **Check Backend Health**:
   ```bash
   curl https://govisibi.up.railway.app/health
   ```
   Should return: `{"status":"ok","version":"1.0.0","timestamp":"..."}`

### Check CORS Headers in Browser:

1. Open browser DevTools (F12)
2. Go to **Network** tab
3. Submit the form
4. Click on the failed request
5. Check **Response Headers** for:
   - `access-control-allow-origin` should include your origin
   - `access-control-allow-credentials: true`

If these headers are missing, Railway hasn't deployed the new code yet.

