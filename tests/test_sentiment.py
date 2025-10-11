"""
Test suite for SentimentAnalyzer service
Tests sentiment detection and analysis
"""

import pytest
import sys
from pathlib import Path

# Add parent directory to path
sys.path.insert(0, str(Path(__file__).parent.parent))

from backend.services.sentiment_analyzer import SentimentAnalyzer


class TestSentimentAnalysis:
    """Test suite for sentiment analysis"""
    
    @pytest.fixture
    def analyzer(self):
        return SentimentAnalyzer()
    
    def test_analyze_positive_sentiment(self, analyzer):
        """Test positive sentiment detection"""
        text = "Slack is excellent and amazing for team collaboration"
        brand = "Slack"
        result = analyzer.analyze_sentiment(text, brand)
        
        assert result["mentioned"] is True
        assert result["sentiment"] == "POSITIVE"
        assert 0 <= result["confidence"] <= 1.0
    
    def test_analyze_negative_sentiment(self, analyzer):
        """Test negative sentiment detection"""
        text = "Slack is terrible and has so many problems"
        brand = "Slack"
        result = analyzer.analyze_sentiment(text, brand)
        
        assert result["mentioned"] is True
        assert result["sentiment"] == "NEGATIVE"
    
    def test_analyze_neutral_sentiment(self, analyzer):
        """Test neutral sentiment detection"""
        text = "Slack is a communication tool that has features for teams"
        brand = "Slack"
        result = analyzer.analyze_sentiment(text, brand)
        
        assert result["mentioned"] is True
        assert result["sentiment"] == "NEUTRAL"
    
    def test_not_mentioned(self, analyzer):
        """Test when brand is not mentioned"""
        text = "Microsoft Teams is a great tool"
        brand = "Slack"
        result = analyzer.analyze_sentiment(text, brand)
        
        assert result["mentioned"] is False
        assert result["sentiment"] == "NOT_MENTIONED"
    
    def test_sentiment_result_structure(self, analyzer):
        """Test that sentiment result has required fields"""
        text = "Slack is good"
        brand = "Slack"
        result = analyzer.analyze_sentiment(text, brand)
        
        required_fields = ["mentioned", "sentiment", "confidence", "position", 
                          "positive_indicators", "negative_indicators"]
        for field in required_fields:
            assert field in result
    
    def test_position_tracking(self, analyzer):
        """Test that position of mention is tracked"""
        text = "I think Slack is the best tool"
        brand = "Slack"
        result = analyzer.analyze_sentiment(text, brand)
        
        assert result["mentioned"] is True
        assert result["position"] >= 0
    
    def test_case_insensitive_matching(self, analyzer):
        """Test case-insensitive brand matching"""
        text = "SLACK is a great tool"
        brand = "Slack"
        result = analyzer.analyze_sentiment(text, brand)
        
        assert result["mentioned"] is True
    
    def test_confidence_score_range(self, analyzer):
        """Test confidence score is between 0 and 1"""
        text = "Slack is good"
        brand = "Slack"
        result = analyzer.analyze_sentiment(text, brand)
        
        assert 0 <= result["confidence"] <= 1.0
    
    def test_multiple_positive_keywords(self, analyzer):
        """Test detection with multiple positive keywords"""
        text = "Slack is excellent, amazing, and wonderful for teams"
        brand = "Slack"
        result = analyzer.analyze_sentiment(text, brand)
        
        assert result["sentiment"] == "POSITIVE"
        assert result["positive_indicators"] >= 3
    
    def test_multiple_negative_keywords(self, analyzer):
        """Test detection with multiple negative keywords"""
        text = "Slack is terrible, awful, and has many problems"
        brand = "Slack"
        result = analyzer.analyze_sentiment(text, brand)
        
        assert result["sentiment"] == "NEGATIVE"
        assert result["negative_indicators"] >= 3
    
    def test_mixed_sentiment(self, analyzer):
        """Test with mixed positive and negative keywords"""
        text = "Slack is good but has some problems"
        brand = "Slack"
        result = analyzer.analyze_sentiment(text, brand)
        
        assert result["mentioned"] is True
        assert result["sentiment"] in ["POSITIVE", "NEGATIVE", "NEUTRAL"]
    
    def test_brand_at_different_positions(self, analyzer):
        """Test brand mentioned at different positions"""
        text1 = "Slack is great"
        text2 = "I use Slack daily"
        text3 = "The best tool is Slack"
        brand = "Slack"
        
        result1 = analyzer.analyze_sentiment(text1, brand)
        result2 = analyzer.analyze_sentiment(text2, brand)
        result3 = analyzer.analyze_sentiment(text3, brand)
        
        assert result1["position"] == 0
        assert result2["position"] > 0
        assert result3["position"] > 0


class TestMultipleResponsesAnalysis:
    """Test suite for analyzing multiple responses"""
    
    @pytest.fixture
    def analyzer(self):
        return SentimentAnalyzer()
    
    def test_analyze_multiple_positive_responses(self, analyzer):
        """Test analyzing multiple positive responses"""
        responses = [
            "Slack is excellent for teams",
            "Slack is amazing and wonderful",
            "I love Slack"
        ]
        brand = "Slack"
        result = analyzer.analyze_multiple_responses(responses, brand)
        
        assert result["total_responses"] == 3
        assert result["mentions_count"] == 3
        assert result["overall_sentiment"] == "POSITIVE"
        assert result["visibility_percentage"] == 100.0
    
    def test_analyze_multiple_negative_responses(self, analyzer):
        """Test analyzing multiple negative responses"""
        responses = [
            "Slack is terrible",
            "Slack has many problems",
            "Slack is awful"
        ]
        brand = "Slack"
        result = analyzer.analyze_multiple_responses(responses, brand)
        
        assert result["total_responses"] == 3
        assert result["overall_sentiment"] == "NEGATIVE"
    
    def test_analyze_mixed_responses(self, analyzer):
        """Test analyzing mixed responses"""
        responses = [
            "Slack is great",
            "Slack is terrible",
            "Slack is okay"
        ]
        brand = "Slack"
        result = analyzer.analyze_multiple_responses(responses, brand)
        
        assert result["total_responses"] == 3
        assert result["positive_count"] >= 1
        assert result["negative_count"] >= 1
    
    def test_analyze_responses_with_no_mentions(self, analyzer):
        """Test analyzing responses with no brand mentions"""
        responses = [
            "Teams is great",
            "Discord is amazing",
            "Zoom is useful"
        ]
        brand = "Slack"
        result = analyzer.analyze_multiple_responses(responses, brand)
        
        assert result["total_responses"] == 3
        assert result["mentions_count"] == 0
        assert result["visibility_percentage"] == 0.0
    
    def test_analyze_responses_partial_mentions(self, analyzer):
        """Test analyzing responses with partial mentions"""
        responses = [
            "Slack is great",
            "Teams is better",
            "Slack is good"
        ]
        brand = "Slack"
        result = analyzer.analyze_multiple_responses(responses, brand)
        
        assert result["total_responses"] == 3
        assert result["mentions_count"] == 2
        assert result["visibility_percentage"] == pytest.approx(66.67, rel=0.1)
    
    def test_analyze_responses_includes_individual_analyses(self, analyzer):
        """Test that result includes individual analyses"""
        responses = [
            "Slack is great",
            "Slack is terrible"
        ]
        brand = "Slack"
        result = analyzer.analyze_multiple_responses(responses, brand)
        
        assert "individual_analyses" in result
        assert len(result["individual_analyses"]) == 2
    
    def test_average_confidence_calculation(self, analyzer):
        """Test average confidence calculation"""
        responses = [
            "Slack is excellent and amazing",
            "Slack is good"
        ]
        brand = "Slack"
        result = analyzer.analyze_multiple_responses(responses, brand)
        
        assert "average_confidence" in result
        assert 0 <= result["average_confidence"] <= 1.0
