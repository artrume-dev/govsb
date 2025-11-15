"""
Vercel entry point for FastAPI application
This module sets up the Python path and imports the FastAPI app from backend/main.py
"""

import sys
from pathlib import Path

# Add backend directory to Python path
backend_path = Path(__file__).parent / "backend"
sys.path.insert(0, str(backend_path))
sys.path.insert(0, str(Path(__file__).parent))

# Import and expose the FastAPI application
from backend.main import app

# Vercel will use this 'app' variable
__all__ = ["app"]
