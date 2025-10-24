"""
Test suite for API endpoints
Tests FastAPI routes and responses
"""

import pytest
from fastapi.testclient import TestClient
import sys
from pathlib import Path

# Add parent directory to path
sys.path.insert(0, str(Path(__file__).parent.parent))

from backend.main import app


@pytest.fixture
def client():
    """Fixture to provide test client"""
    return TestClient(app)


class TestRootEndpoint:
    """Test suite for root endpoint"""
    
    def test_root_returns_200(self, client):
        """Test that root endpoint returns 200 status"""
        response = client.get("/")
        assert response.status_code == 200
    
    def test_root_returns_json(self, client):
        """Test that root endpoint returns JSON"""
        response = client.get("/")
        assert response.headers["content-type"] == "application/json"
    
    def test_root_response_has_message(self, client):
        """Test that root response has message field"""
        response = client.get("/")
        data = response.json()
        assert "message" in data
        assert "version" in data


class TestHealthCheck:
    """Test suite for health check endpoint"""
    
    def test_health_check_returns_200(self, client):
        """Test that health check returns 200 status"""
        response = client.get("/health")
        assert response.status_code == 200
    
    def test_health_check_response_format(self, client):
        """Test health check response format"""
        response = client.get("/health")
        data = response.json()
        
        assert "status" in data
        assert "version" in data
        assert "timestamp" in data
        assert data["status"] == "ok"


class TestAnalyzeEndpoint:
    """Test suite for analyze endpoint"""
    
    def test_analyze_endpoint_exists(self, client):
        """Test that analyze endpoint exists"""
        payload = {"url": "https://www.example.com"}
        response = client.post("/api/brands/analyze", json=payload)
        
        # Should not return 404
        assert response.status_code != 404
    
    def test_analyze_endpoint_requires_url(self, client):
        """Test that analyze endpoint requires URL field"""
        payload = {}
        response = client.post("/api/brands/analyze", json=payload)
        
        assert response.status_code == 422  # Validation error
    
    def test_analyze_endpoint_accepts_url(self, client):
        """Test that analyze endpoint accepts URL"""
        payload = {"url": "https://www.slack.com"}
        response = client.post("/api/brands/analyze", json=payload)
        
        # Could be 200 or 503 (if OpenAI not configured)
        assert response.status_code in [200, 503]
    
    def test_analyze_endpoint_accepts_custom_queries(self, client):
        """Test that analyze endpoint accepts custom queries"""
        payload = {
            "url": "https://www.slack.com",
            "queries": ["What is Slack?", "Is Slack good?"]
        }
        response = client.post("/api/brands/analyze", json=payload)
        
        # Should accept the payload
        assert response.status_code in [200, 503]
    
    def test_analyze_endpoint_accepts_custom_keywords(self, client):
        """Test that analyze endpoint accepts custom keywords"""
        payload = {
            "url": "https://www.slack.com",
            "custom_keywords": ["security", "integrations"]
        }
        response = client.post("/api/brands/analyze", json=payload)
        
        # Should accept the payload
        assert response.status_code in [200, 503]
    
    def test_analyze_response_structure(self, client):
        """Test response structure when analysis succeeds"""
        # This test will only pass if OpenAI is configured
        payload = {"url": "https://www.slack.com"}
        response = client.post("/api/brands/analyze", json=payload)
        
        if response.status_code == 200:
            data = response.json()
            assert "brand_name" in data
            assert "url" in data
            assert "timestamp" in data
            assert "queries_analyzed" in data
            assert "analysis" in data
            assert "summary" in data
    
    def test_analyze_summary_structure(self, client):
        """Test summary metrics structure when analysis succeeds"""
        payload = {"url": "https://www.slack.com"}
        response = client.post("/api/brands/analyze", json=payload)
        
        if response.status_code == 200:
            data = response.json()
            summary = data["summary"]
            
            required_fields = [
                "total_queries", "mentions_count", "citations", "visibility",
                "positive", "negative", "neutral",
                "overall_sentiment", "average_confidence"
            ]
            
            for field in required_fields:
                assert field in summary


class TestHistoryEndpoint:
    """Test suite for history endpoint"""
    
    def test_history_endpoint_returns_200(self, client):
        """Test that history endpoint returns 200"""
        response = client.get("/api/brands/history")
        assert response.status_code == 200
    
    def test_history_endpoint_returns_list(self, client):
        """Test that history endpoint returns analyses list"""
        response = client.get("/api/brands/history")
        assert response.status_code == 200
        
        data = response.json()
        assert "analyses" in data
        assert "total_count" in data
        assert isinstance(data["analyses"], list)
    
    def test_history_endpoint_accepts_limit(self, client):
        """Test that history endpoint accepts limit parameter"""
        response = client.get("/api/brands/history?limit=5")
        assert response.status_code == 200
        
        data = response.json()
        assert len(data["analyses"]) <= 5
    
    def test_history_persists_analyses(self, client):
        """Test that analyses are stored in history"""
        # Clear history first
        client.delete("/api/brands/history")
        
        # Perform an analysis
        payload = {"url": "https://www.example.com"}
        analyze_response = client.post("/api/brands/analyze", json=payload)
        
        if analyze_response.status_code == 200:
            # Check history
            history_response = client.get("/api/brands/history")
            data = history_response.json()
            
            assert data["total_count"] >= 1


class TestClearHistoryEndpoint:
    """Test suite for clear history endpoint"""
    
    def test_clear_history_returns_200(self, client):
        """Test that clear history returns 200"""
        response = client.delete("/api/brands/history")
        assert response.status_code == 200
    
    def test_clear_history_response_format(self, client):
        """Test clear history response format"""
        response = client.delete("/api/brands/history")
        data = response.json()
        
        assert "message" in data
        assert "items_deleted" in data
    
    def test_clear_history_actually_clears(self, client):
        """Test that clear history actually clears the history"""
        # Clear history
        client.delete("/api/brands/history")
        
        # Check history is empty
        response = client.get("/api/brands/history")
        data = response.json()
        
        assert data["total_count"] == 0
        assert len(data["analyses"]) == 0


class TestAPIDocumentation:
    """Test suite for API documentation"""
    
    def test_docs_endpoint_exists(self, client):
        """Test that /docs endpoint exists"""
        response = client.get("/docs")
        assert response.status_code == 200
    
    def test_redoc_endpoint_exists(self, client):
        """Test that /redoc endpoint exists"""
        response = client.get("/redoc")
        assert response.status_code == 200
    
    def test_openapi_schema_exists(self, client):
        """Test that OpenAPI schema is available"""
        response = client.get("/openapi.json")
        assert response.status_code == 200
        
        schema = response.json()
        assert "openapi" in schema
        assert "info" in schema
        assert "paths" in schema
