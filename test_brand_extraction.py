"""
Test brand name extraction
"""
import sys
from pathlib import Path
import asyncio

sys.path.insert(0, str(Path(__file__).parent))

from backend.services.brand_analyzer import BrandAnalyzer

async def test_extraction():
    analyzer = BrandAnalyzer()

    test_urls = [
        "https://www.slack.com",
        "https://stripe.com",
        "https://www.openai.com",
        "https://notion.so",
        "https://www.apple.com",
        "slack.com",
        "www.google.com",
    ]

    print("=" * 80)
    print("BRAND NAME EXTRACTION TEST")
    print("=" * 80)

    for url in test_urls:
        # Format URL if needed
        if not url.startswith("http"):
            url = "https://" + url

        brand_info = await analyzer.fetch_brand_info(url)
        print(f"\nURL: {url}")
        print(f"→ Brand Name: {brand_info['brand_name']}")
        print(f"→ Description: {brand_info['description'][:80] if brand_info['description'] else 'None'}...")

        # Show sample query
        queries = analyzer.generate_monitoring_queries(brand_info['brand_name'])
        print(f"→ Sample Query: {queries[0]}")

    print("\n" + "=" * 80)

if __name__ == "__main__":
    asyncio.run(test_extraction())
