"""
Pydantic schemas for request/response validation
"""

from pydantic import BaseModel, HttpUrl
from typing import List, Optional
from datetime import datetime


class URLRequest(BaseModel):
    """Schema for URL analysis request"""
    url: str
    queries: Optional[List[str]] = None
    custom_keywords: Optional[List[str]] = None
    
    class Config:
        json_schema_extra = {
            "example": {
                "url": "https://www.slack.com",
                "queries": None,
                "custom_keywords": ["security", "integrations"]
            }
        }


class SentimentResult(BaseModel):
    """Schema for sentiment analysis result"""
    mentioned: bool
    sentiment: str  # POSITIVE, NEGATIVE, NEUTRAL, NOT_MENTIONED
    confidence: float
    position: int
    positive_indicators: int
    negative_indicators: int
    
    class Config:
        json_schema_extra = {
            "example": {
                "mentioned": True,
                "sentiment": "POSITIVE",
                "confidence": 0.92,
                "position": 15,
                "positive_indicators": 5,
                "negative_indicators": 1
            }
        }


class QueryAnalysis(BaseModel):
    """Schema for individual query analysis"""
    query: str
    response: str
    sentiment_analysis: SentimentResult
    
    class Config:
        json_schema_extra = {
            "example": {
                "query": "What do you think about Slack?",
                "response": "Slack is an excellent team collaboration tool...",
                "sentiment_analysis": {
                    "mentioned": True,
                    "sentiment": "POSITIVE",
                    "confidence": 0.92,
                    "position": 0,
                    "positive_indicators": 5,
                    "negative_indicators": 1
                }
            }
        }


class UsageMetrics(BaseModel):
    """Schema for API usage metrics"""
    model: str
    total_tokens: int
    prompt_tokens: int
    completion_tokens: int
    estimated_cost: float  # Estimated cost in USD
    
    class Config:
        json_schema_extra = {
            "example": {
                "model": "gpt-4o-mini",
                "total_tokens": 2500,
                "prompt_tokens": 500,
                "completion_tokens": 2000,
                "estimated_cost": 0.001
            }
        }


class SummaryMetrics(BaseModel):
    """Schema for summary metrics"""
    total_queries: int
    mentions_count: int
    visibility: float  # Percentage of queries where brand was mentioned
    positive: int
    negative: int
    neutral: int
    overall_sentiment: str
    average_confidence: float
    
    class Config:
        json_schema_extra = {
            "example": {
                "total_queries": 5,
                "mentions_count": 5,
                "visibility": 100.0,
                "positive": 4,
                "negative": 0,
                "neutral": 1,
                "overall_sentiment": "POSITIVE",
                "average_confidence": 0.89
            }
        }


class AnalysisResponse(BaseModel):
    """Schema for complete analysis response"""
    brand_name: str
    url: str
    timestamp: datetime
    queries_analyzed: int
    analysis: List[QueryAnalysis]
    summary: SummaryMetrics
    usage: Optional[UsageMetrics] = None  # API usage metrics
    
    class Config:
        json_schema_extra = {
            "example": {
                "brand_name": "Slack",
                "url": "https://www.slack.com",
                "timestamp": "2025-10-10T12:00:00",
                "queries_analyzed": 5,
                "analysis": [],
                "summary": {
                    "total_queries": 5,
                    "mentions_count": 5,
                    "visibility": 100.0,
                    "positive": 4,
                    "negative": 0,
                    "neutral": 1,
                    "overall_sentiment": "POSITIVE",
                    "average_confidence": 0.89
                },
                "usage": {
                    "model": "gpt-4o-mini",
                    "total_tokens": 2500,
                    "prompt_tokens": 500,
                    "completion_tokens": 2000,
                    "estimated_cost": 0.001
                }
            }
        }


class HealthResponse(BaseModel):
    """Schema for health check response"""
    status: str
    version: str
    timestamp: datetime
    
    class Config:
        json_schema_extra = {
            "example": {
                "status": "ok",
                "version": "0.1.0",
                "timestamp": "2025-10-10T12:00:00"
            }
        }


class HistoryResponse(BaseModel):
    """Schema for history response"""
    analyses: List[AnalysisResponse]
    total_count: int
    
    class Config:
        json_schema_extra = {
            "example": {
                "analyses": [],
                "total_count": 0
            }
        }
