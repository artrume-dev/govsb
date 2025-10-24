# Server Management Commands

## 🚀 Starting Servers

### Backend Server
```bash
cd backend
python3 -m uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

- **URL**: http://localhost:8000
- **API Docs**: http://localhost:8000/docs
- **Port**: 8000

### Frontend Server
```bash
cd frontend
npm run dev
```

- **URL**: http://localhost:5173
- **Port**: 5173

---

## 🔴 Stopping Servers

### Option 1: In Terminal (Recommended)
If running in foreground, press:
```
Ctrl + C
```

### Option 2: Kill by Port
```bash
# Kill backend (port 8000)
lsof -ti:8000 | xargs kill

# Kill frontend (port 5173)
lsof -ti:5173 | xargs kill
```

### Option 3: Kill by Process Name
```bash
# Kill all Python Uvicorn processes
pkill -f uvicorn

# Kill all Node/Vite processes
pkill -f vite
```

---

## 🔄 Restarting Servers

### Restart Backend
```bash
# Kill
lsof -ti:8000 | xargs kill

# Restart
cd backend && python3 -m uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

### Restart Frontend
```bash
# Kill
lsof -ti:5173 | xargs kill

# Restart
cd frontend && npm run dev
```

---

## 🐛 Troubleshooting

### Port Already in Use
If you get "Address already in use" error:

```bash
# Find what's using the port
lsof -i :8000
lsof -i :5173

# Kill it
lsof -ti:8000 | xargs kill
lsof -ti:5173 | xargs kill
```

### Backend Won't Start
```bash
# Check Python version
python3 --version

# Check if dependencies are installed
cd backend
pip3 list | grep fastapi
pip3 list | grep uvicorn

# Reinstall if needed
pip3 install -r requirements.txt
```

### Frontend Won't Start
```bash
# Check Node version
node --version

# Reinstall dependencies
cd frontend
rm -rf node_modules
npm install
```

---

## 📝 Running in Separate Terminals (Recommended)

### Terminal Window 1 - Backend
```bash
cd /Users/samarmustafa/Documents/1Samar/50-apps-to-launch/VISIBI/backend
python3 -m uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

Keep this running. You'll see logs here.

### Terminal Window 2 - Frontend
```bash
cd /Users/samarmustafa/Documents/1Samar/50-apps-to-launch/VISIBI/frontend
npm run dev
```

Keep this running.

### Terminal Window 3 - For Other Commands
Use this for:
- Running tests
- Git commands
- File operations

---

## 🔍 Checking Server Status

### Check if Backend is Running
```bash
curl http://localhost:8000/health
```

Expected response:
```json
{
  "status": "ok",
  "version": "0.1.0",
  "timestamp": "..."
}
```

### Check if Frontend is Running
```bash
curl http://localhost:5173
```

Or just open http://localhost:5173 in your browser.

---

## 📊 View Logs

### Backend Logs
When running in terminal, logs appear automatically.

To follow logs if running in background:
```bash
tail -f backend/logs/app.log  # if logging to file
```

### Frontend Logs
Logs appear in the terminal where you ran `npm run dev`.

---

## ⚙️ Environment Variables

Before starting backend, make sure `.env` file exists:

```bash
cd backend
ls -la .env
```

If not exists, create it:
```bash
cd backend
nano .env
```

Add:
```env
OPENAI_API_KEY=sk-your-key-here
OPENAI_MODEL=gpt-4o-mini
MAX_TOKENS=500
TEMPERATURE=0.7
```

---

## 🎯 Quick Reference

| Command | Purpose |
|---------|---------|
| `cd backend && python3 -m uvicorn main:app --reload --host 0.0.0.0 --port 8000` | Start backend |
| `cd frontend && npm run dev` | Start frontend |
| `Ctrl+C` | Stop server (in terminal) |
| `lsof -ti:8000 \| xargs kill` | Kill backend |
| `lsof -ti:5173 \| xargs kill` | Kill frontend |
| `curl http://localhost:8000/health` | Check backend |
| `open http://localhost:5173` | Open frontend |

---

## ✅ Current Status

- Backend: **Running** on http://localhost:8000
- Frontend: **Running** on http://localhost:5173

You can now test the application!
