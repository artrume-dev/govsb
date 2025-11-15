"""
Vercel serverless function entry point for FastAPI
This file imports and exposes the FastAPI app from backend/main.py
"""

import sys
import os
from pathlib import Path

# Get the root directory (parent of api directory)
root_dir = Path(__file__).parent.parent
backend_dir = root_dir / "backend"

# Add the backend directory to the Python path
sys.path.insert(0, str(backend_dir))

# Set environment variable for .env file location
os.environ.setdefault("ENV_FILE", str(backend_dir / ".env"))

try:
    # Import the FastAPI app
    from main import app

    # Vercel will use this as the ASGI application
    app = app
except Exception as e:
    print(f"Error importing FastAPI app: {e}")
    import traceback
    traceback.print_exc()
    raise
