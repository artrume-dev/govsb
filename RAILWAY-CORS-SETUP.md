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
2. Click **+ New Variable**
3. Add the following:
   - **Variable Name**: `ALLOWED_ORIGINS`
   - **Variable Value**: 
     ```
     http://localhost:5173,http://localhost:5174,http://localhost:3000,http://127.0.0.1:5173,http://127.0.0.1:5174,https://visibi.com,https://www.visibi.com,https://govisibi.ai,https://www.govisibi.ai
     ```

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
1. Check Railway deployment logs for errors
2. Verify the `ALLOWED_ORIGINS` variable is set correctly
3. Ensure the backend service has redeployed (check timestamp)
4. Try clearing browser cache and hard refresh (Cmd+Shift+R)

### Check Backend Health:
```bash
curl https://govisibi.up.railway.app/health
```

Should return: `{"status":"ok","version":"1.0.0","timestamp":"..."}`

