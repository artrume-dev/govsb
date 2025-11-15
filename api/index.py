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

# Import the FastAPI app - Vercel will use the 'app' variable
from main import app

# This makes the app available to Vercel
__all__ = ['app']
