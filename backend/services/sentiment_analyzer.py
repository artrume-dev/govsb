"""
Sentiment Analyzer Service
Analyzes sentiment in text regarding specific brands using keyword-based approach
"""

from typing import Dict


class SentimentAnalyzer:
    """Service for analyzing sentiment in text"""
    
    def __init__(self):
        """Initialize sentiment analyzer with keyword dictionaries"""
        self.positive_keywords = {
            "excellent", "great", "amazing", "good", "best", "love", "perfect",
            "recommend", "outstanding", "fantastic", "wonderful", "impressed",
            "satisfied", "happy", "positive", "strong", "powerful", "effective",
            "reliable", "innovative", "superior", "exceptional", "superb",
            "awesome", "brilliant", "stellar", "top-notch", "high-quality",
            "valuable", "useful", "helpful", "efficient", "seamless", "smooth",
            "user-friendly", "intuitive", "robust", "comprehensive", "versatile"
        }
        
        self.negative_keywords = {
            "terrible", "bad", "worst", "hate", "awful", "poor", "weak",
            "disappointing", "not recommended", "issues", "problems", "difficult",
            "expensive", "slow", "broken", "useless", "negative", "struggling",
            "unreliable", "frustrating", "inadequate", "inferior", "ineffective",
            "horrible", "pathetic", "dreadful", "mediocre", "subpar", "lacking",
            "buggy", "clunky", "confusing", "complicated", "overpriced", "waste",
            "limited", "restrictive", "outdated", "unstable", "disappointing"
        }
    
    def count_brand_occurrences(self, text: str, brand_name: str) -> int:
        """
        Count total occurrences of brand name in text (case-insensitive)

        Args:
            text: The text to search in
            brand_name: The brand name to count

        Returns:
            int: Total number of times brand appears in text
        """
        text_lower = text.lower()
        brand_lower = brand_name.lower()

        # Count overlapping occurrences
        count = 0
        start = 0
        while True:
            pos = text_lower.find(brand_lower, start)
            if pos == -1:
                break
            count += 1
            start = pos + 1

        return count

    def analyze_sentiment(self, text: str, brand_name: str) -> Dict:
        """
        Analyze sentiment of text regarding a brand

        Args:
            text: The text to analyze
            brand_name: The brand name to search for

        Returns:
            Dictionary with sentiment analysis results containing:
            - mentioned: bool (whether brand is mentioned)
            - sentiment: str (POSITIVE, NEGATIVE, NEUTRAL, NOT_MENTIONED)
            - confidence: float (0-1)
            - position: int (position of first mention, -1 if not mentioned)
            - positive_indicators: int (count of positive keywords)
            - negative_indicators: int (count of negative keywords)
        """
        text_lower = text.lower()
        brand_lower = brand_name.lower()
        
        # Check if brand is mentioned
        mentioned = brand_lower in text_lower
        
        if not mentioned:
            return {
                "mentioned": False,
                "sentiment": "NOT_MENTIONED",
                "confidence": 1.0,
                "position": -1,
                "positive_indicators": 0,
                "negative_indicators": 0
            }
        
        # Find position of first mention
        position = text_lower.find(brand_lower)
        
        # Count sentiment indicators
        positive_count = sum(1 for word in self.positive_keywords if word in text_lower)
        negative_count = sum(1 for word in self.negative_keywords if word in text_lower)
        
        # Determine sentiment
        if positive_count > negative_count:
            sentiment = "POSITIVE"
        elif negative_count > positive_count:
            sentiment = "NEGATIVE"
        else:
            sentiment = "NEUTRAL"
        
        # Calculate confidence
        total_indicators = positive_count + negative_count
        if total_indicators > 0:
            confidence = max(positive_count, negative_count) / total_indicators
            confidence = min(confidence, 1.0)
        else:
            # No clear indicators, low confidence neutral
            confidence = 0.5
        
        return {
            "mentioned": True,
            "sentiment": sentiment,
            "confidence": confidence,
            "position": position,
            "positive_indicators": positive_count,
            "negative_indicators": negative_count
        }
    
    def analyze_multiple_responses(self, responses: list, brand_name: str) -> Dict:
        """
        Analyze sentiment across multiple responses and aggregate results
        
        Args:
            responses: List of text responses to analyze
            brand_name: The brand name to search for
            
        Returns:
            Aggregated sentiment analysis
        """
        analyses = [self.analyze_sentiment(response, brand_name) for response in responses]
        
        mentioned_count = sum(1 for a in analyses if a["mentioned"])
        positive_count = sum(1 for a in analyses if a["sentiment"] == "POSITIVE")
        negative_count = sum(1 for a in analyses if a["sentiment"] == "NEGATIVE")
        neutral_count = sum(1 for a in analyses if a["sentiment"] == "NEUTRAL")
        
        # Calculate overall sentiment
        if positive_count > negative_count:
            overall_sentiment = "POSITIVE"
        elif negative_count > positive_count:
            overall_sentiment = "NEGATIVE"
        else:
            overall_sentiment = "NEUTRAL"
        
        # Calculate average confidence
        mentioned_analyses = [a for a in analyses if a["mentioned"]]
        avg_confidence = (
            sum(a["confidence"] for a in mentioned_analyses) / len(mentioned_analyses)
            if mentioned_analyses else 0.0
        )
        
        return {
            "total_responses": len(responses),
            "mentions_count": mentioned_count,
            "visibility_percentage": (mentioned_count / len(responses)) * 100,
            "positive_count": positive_count,
            "negative_count": negative_count,
            "neutral_count": neutral_count,
            "overall_sentiment": overall_sentiment,
            "average_confidence": avg_confidence,
            "individual_analyses": analyses
        }
