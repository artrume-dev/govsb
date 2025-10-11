"""
Test suite for BrandAnalyzer service
Tests brand name extraction, info fetching, and query generation
"""

import pytest
import sys
from pathlib import Path

# Add parent directory to path
sys.path.insert(0, str(Path(__file__).parent.parent))

from backend.services.brand_analyzer import BrandAnalyzer


class TestBrandNameExtraction:
    """Test suite for brand name extraction"""
    
    @pytest.fixture
    def analyzer(self):
        """Fixture to provide BrandAnalyzer instance"""
        return BrandAnalyzer()
    
    def test_extract_brand_from_simple_url(self, analyzer):
        """Test extracting brand from simple URL"""
        url = "https://www.slack.com"
        brand = analyzer.extract_brand_name(url)
        assert brand.lower() == "slack"
    
    def test_extract_brand_removes_www(self, analyzer):
        """Test that www is removed from brand extraction"""
        url = "https://www.notion.so"
        brand = analyzer.extract_brand_name(url)
        assert "www" not in brand.lower()
    
    def test_extract_brand_removes_protocol(self, analyzer):
        """Test that protocol (https://, http://) is removed"""
        url = "http://figma.com"
        brand = analyzer.extract_brand_name(url)
        assert "http" not in brand.lower()
        assert brand.lower() == "figma"
    
    def test_extract_brand_handles_multiple_dots(self, analyzer):
        """Test extraction from URL with multiple dots"""
        url = "https://www.company.co.uk"
        brand = analyzer.extract_brand_name(url)
        assert brand.lower() == "company"
    
    def test_extract_brand_invalid_url(self, analyzer):
        """Test graceful handling of invalid URLs"""
        url = "not-a-url"
        brand = analyzer.extract_brand_name(url)
        assert brand is not None
        assert isinstance(brand, str)
    
    def test_extract_brand_with_path(self, analyzer):
        """Test extraction from URL with path"""
        url = "https://www.slack.com/features"
        brand = analyzer.extract_brand_name(url)
        assert brand.lower() == "slack"
    
    def test_extract_brand_with_subdomain(self, analyzer):
        """Test extraction from URL with subdomain"""
        url = "https://app.notion.so"
        brand = analyzer.extract_brand_name(url)
        assert brand.lower() == "app"


class TestBrandInfoFetching:
    """Test suite for fetching brand info from URLs"""
    
    @pytest.fixture
    def analyzer(self):
        return BrandAnalyzer()
    
    @pytest.mark.asyncio
    async def test_fetch_brand_info_returns_dict(self, analyzer):
        """Test that fetch_brand_info returns a dictionary"""
        result = await analyzer.fetch_brand_info("https://www.slack.com")
        assert isinstance(result, dict)
        assert "brand_name" in result
        assert "url" in result
        assert "description" in result
    
    @pytest.mark.asyncio
    async def test_fetch_brand_info_contains_url(self, analyzer):
        """Test that fetched info contains the original URL"""
        url = "https://www.slack.com"
        result = await analyzer.fetch_brand_info(url)
        assert result["url"] == url
    
    @pytest.mark.asyncio
    async def test_fetch_brand_info_has_brand_name(self, analyzer):
        """Test that fetched info has a brand name"""
        result = await analyzer.fetch_brand_info("https://www.slack.com")
        assert result["brand_name"] is not None
        assert len(result["brand_name"]) > 0
    
    @pytest.mark.asyncio
    async def test_fetch_brand_info_handles_invalid_url(self, analyzer):
        """Test graceful handling of invalid URLs"""
        result = await analyzer.fetch_brand_info("https://thisisnotarealurl12345.com")
        assert isinstance(result, dict)
        assert "brand_name" in result
        assert "url" in result


class TestMonitoringQueriesGeneration:
    """Test suite for generating monitoring queries"""
    
    @pytest.fixture
    def analyzer(self):
        return BrandAnalyzer()
    
    def test_generate_queries_returns_list(self, analyzer):
        """Test that generated queries is a list"""
        queries = analyzer.generate_monitoring_queries("Slack")
        assert isinstance(queries, list)
    
    def test_generate_queries_minimum_count(self, analyzer):
        """Test that at least 3 queries are generated"""
        queries = analyzer.generate_monitoring_queries("Slack")
        assert len(queries) >= 3
    
    def test_generate_queries_contain_brand_name(self, analyzer):
        """Test that queries contain the brand name"""
        brand = "Slack"
        queries = analyzer.generate_monitoring_queries(brand)
        
        # At least one query should contain the brand name
        assert any(brand.lower() in q.lower() for q in queries)
    
    def test_generate_queries_are_strings(self, analyzer):
        """Test that all queries are strings"""
        queries = analyzer.generate_monitoring_queries("Slack")
        assert all(isinstance(q, str) for q in queries)
    
    def test_generate_queries_are_unique(self, analyzer):
        """Test that generated queries are unique"""
        queries = analyzer.generate_monitoring_queries("Slack")
        assert len(queries) == len(set(queries))
    
    def test_generate_queries_with_custom_keywords(self, analyzer):
        """Test generating queries with custom keywords"""
        brand = "Slack"
        keywords = ["security", "integrations"]
        queries = analyzer.generate_monitoring_queries(brand, custom_keywords=keywords)
        
        # Should have default queries plus custom keyword queries
        assert len(queries) > len(analyzer.default_queries)
        
        # Some queries should mention the keywords
        query_text = " ".join(queries).lower()
        assert "security" in query_text or "integrations" in query_text


class TestComparisonQueries:
    """Test suite for generating comparison queries"""
    
    @pytest.fixture
    def analyzer(self):
        return BrandAnalyzer()
    
    def test_generate_comparison_queries_returns_list(self, analyzer):
        """Test that comparison queries returns a list"""
        queries = analyzer.generate_comparison_queries("Slack", ["Teams", "Discord"])
        assert isinstance(queries, list)
    
    def test_generate_comparison_queries_with_competitors(self, analyzer):
        """Test generating comparison queries with competitors"""
        brand = "Slack"
        competitors = ["Microsoft Teams", "Discord"]
        queries = analyzer.generate_comparison_queries(brand, competitors)
        
        # Should have queries for each competitor
        assert len(queries) > 0
        
        # Queries should mention both brand and competitors
        query_text = " ".join(queries).lower()
        assert "slack" in query_text
        assert any(comp.lower() in query_text for comp in competitors)
    
    def test_generate_comparison_queries_without_competitors(self, analyzer):
        """Test generating comparison queries without competitors"""
        queries = analyzer.generate_comparison_queries("Slack")
        assert isinstance(queries, list)
        assert len(queries) == 0
