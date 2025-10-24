"""
Demo script to show the difference between Mentions and Citations
"""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))

from backend.services.sentiment_analyzer import SentimentAnalyzer

def demo_citations_vs_mentions():
    analyzer = SentimentAnalyzer()
    brand = "Slack"

    # Simulate AI responses from different queries
    responses = [
        "Slack is a great tool. I use Slack every day and Slack's interface is intuitive.",
        "For team communication, there are many options available.",
        "Slack offers excellent features. Many companies rely on Slack for remote work.",
        "Microsoft Teams is also popular.",
        "Slack, Slack, and more Slack - it's everywhere in the tech industry!"
    ]

    print("=" * 80)
    print("CITATIONS vs MENTIONS DEMO")
    print("=" * 80)
    print(f"\nBrand: {brand}")
    print(f"Total Queries: {len(responses)}\n")

    # Calculate mentions (responses where brand appears)
    mentions_count = 0
    citations_count = 0

    print("Query Analysis:")
    print("-" * 80)

    for i, response in enumerate(responses, 1):
        sentiment_result = analyzer.analyze_sentiment(response, brand)
        occurrences = analyzer.count_brand_occurrences(response, brand)

        if sentiment_result["mentioned"]:
            mentions_count += 1
        citations_count += occurrences

        print(f"\nQuery {i}:")
        print(f"  Response: {response[:60]}...")
        print(f"  Brand Mentioned: {sentiment_result['mentioned']}")
        print(f"  Occurrences in this response: {occurrences}")
        print(f"  Sentiment: {sentiment_result['sentiment']}")

    print("\n" + "=" * 80)
    print("FINAL METRICS")
    print("=" * 80)
    print(f"Mentions:  {mentions_count} (number of responses where brand appeared)")
    print(f"Citations: {citations_count} (total brand occurrences across all responses)")
    print(f"Visibility: {(mentions_count / len(responses)) * 100:.1f}%")
    print("\n✓ Citations ({}) > Mentions ({}) because some responses".format(citations_count, mentions_count))
    print("  mentioned the brand multiple times!")
    print("=" * 80)

if __name__ == "__main__":
    demo_citations_vs_mentions()
