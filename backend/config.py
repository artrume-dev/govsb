"""
Configuration module for VISIBI backend
Loads environment variables and application settings
"""

import os
from pathlib import Path
from dotenv import load_dotenv

# Get the directory where this config file is located (backend/)
config_dir = Path(__file__).parent

# Load .env from backend directory
load_dotenv(dotenv_path=config_dir / ".env")


class Config:
    """Configuration class for the application"""
    
    # OpenAI API Settings
    OPENAI_API_KEY = os.getenv("OPENAI_API_KEY", "")
    OPENAI_MODEL = os.getenv("OPENAI_MODEL", "gpt-4o-mini")
    
    # Debug Mode
    DEBUG = os.getenv("DEBUG", "False") == "True"
    
    # Sentiment Analysis Settings
    SENTIMENT_CONFIDENCE_THRESHOLD = float(os.getenv("SENTIMENT_CONFIDENCE_THRESHOLD", "0.5"))
    
    # API Settings
    MAX_TOKENS = int(os.getenv("MAX_TOKENS", "500"))
    TEMPERATURE = float(os.getenv("TEMPERATURE", "0.7"))
    REQUEST_TIMEOUT = int(os.getenv("REQUEST_TIMEOUT", "10"))
    
    # Application Settings
    APP_NAME = "VISIBI - AI Brand Monitor"
    VERSION = "0.1.0"
    
    @classmethod
    def validate(cls):
        """Validate required configuration"""
        # OpenAI is now optional - only validate if you're using it
        if cls.OPENAI_API_KEY:
            print("✅ OpenAI API Key configured")
        else:
            print("⚠️  OpenAI API Key not configured (optional - some features disabled)")
        return True


# Create singleton config instance
config = Config()
