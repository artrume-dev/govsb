"""
Direct test of OpenAI API configuration
"""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))

from backend.config import config

print("=" * 80)
print("OPENAI API CONFIGURATION TEST")
print("=" * 80)

# Check if API key is loaded
print(f"\n1. API Key loaded: {bool(config.OPENAI_API_KEY)}")
print(f"   API Key (first 20 chars): {config.OPENAI_API_KEY[:20] if config.OPENAI_API_KEY else 'EMPTY'}...")
print(f"   API Key length: {len(config.OPENAI_API_KEY)} chars")

print(f"\n2. OpenAI Model: {config.OPENAI_MODEL}")
print(f"   Max Tokens: {config.MAX_TOKENS}")
print(f"   Temperature: {config.TEMPERATURE}")

# Try to import and initialize OpenAI
print("\n3. Testing OpenAI package...")
try:
    from openai import OpenAI
    print("   ✅ OpenAI package imported successfully")

    if config.OPENAI_API_KEY:
        print("\n4. Initializing OpenAI client...")
        client = OpenAI(api_key=config.OPENAI_API_KEY)
        print("   ✅ OpenAI client initialized")

        print("\n5. Testing API call with simple query...")
        response = client.chat.completions.create(
            model=config.OPENAI_MODEL,
            messages=[{"role": "user", "content": "Say 'test successful' and nothing else"}],
            max_tokens=10
        )

        result = response.choices[0].message.content
        print(f"   ✅ API call successful!")
        print(f"   Response: {result}")
        print(f"   Tokens used: {response.usage.total_tokens}")

    else:
        print("   ❌ API key is empty - cannot test API calls")

except ImportError as e:
    print(f"   ❌ OpenAI package not installed: {e}")
except Exception as e:
    print(f"   ❌ Error: {type(e).__name__}: {str(e)}")

print("\n" + "=" * 80)
