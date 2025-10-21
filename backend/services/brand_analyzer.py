"""
Brand Analyzer Service
Extracts brand information and generates monitoring queries
"""

import requests
from bs4 import BeautifulSoup
from typing import Dict, List, Optional
import asyncio


class BrandAnalyzer:
    """Service for analyzing brands and generating monitoring queries"""
    
    def __init__(self):
        """Initialize brand analyzer with default queries"""
        self.default_queries = [
            "What do you think about {brand}?",
            "Is {brand} good for businesses?",
            "Who are the main competitors of {brand}?",
            "What are the pros and cons of {brand}?",
            "Would you recommend {brand}?",
        ]
    
    def extract_brand_name(self, url: str) -> str:
        """
        Extract brand name from URL
        
        Args:
            url: The URL string
            
        Returns:
            Extracted brand name
            
        Examples:
            "https://www.slack.com" -> "Slack"
            "http://notion.so" -> "Notion"
            "https://www.company.co.uk" -> "Company"
        """
        try:
            # Remove protocol (https://, http://)
            domain = url.replace("https://", "").replace("http://", "")
            
            # Remove www.
            domain = domain.replace("www.", "")
            
            # Remove trailing slash
            domain = domain.rstrip("/")
            
            # Get the main domain name (before first dot or slash)
            # Handle both slashes and dots
            if "/" in domain:
                domain = domain.split("/")[0]
            
            # Get first part before dot
            brand = domain.split(".")[0]
            
            # Capitalize first letter
            return brand.title() if brand else "Unknown"
        except Exception as e:
            print(f"Error extracting brand name from {url}: {e}")
            return "Unknown"
    
    async def fetch_brand_info(self, url: str) -> Dict[str, str]:
        """
        Fetch brand information from URL
        
        Args:
            url: The URL to fetch from
            
        Returns:
            Dictionary with brand info including:
            - brand_name: str
            - url: str
            - description: Optional[str]
        """
        try:
            headers = {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
            
            # Run blocking request in executor to avoid blocking async loop
            loop = asyncio.get_event_loop()
            response = await loop.run_in_executor(
                None,
                lambda: requests.get(url, timeout=5, headers=headers)
            )
            response.raise_for_status()
            
            soup = BeautifulSoup(response.content, 'html.parser')
            
            # Try to get title
            title = soup.find('title')
            title_text = title.string if title else None
            
            # Try to get meta description
            description_meta = soup.find('meta', attrs={'name': 'description'})
            description = description_meta.get('content') if description_meta else None
            
            # Clean up title (remove common suffixes)
            if title_text:
                # Remove common separators and everything after
                for separator in ['|', '-', '–', ':']:
                    if separator in title_text:
                        title_text = title_text.split(separator)[0].strip()
                        break
            else:
                title_text = self.extract_brand_name(url)
            
            return {
                "brand_name": title_text,
                "url": url,
                "description": description
            }
        except requests.exceptions.Timeout:
            print(f"Timeout fetching {url}")
            return {
                "brand_name": self.extract_brand_name(url),
                "url": url,
                "description": None
            }
        except Exception as e:
            print(f"Error fetching brand info from {url}: {e}")
            return {
                "brand_name": self.extract_brand_name(url),
                "url": url,
                "description": None
            }
    
    def generate_monitoring_queries(
        self,
        brand_name: str,
        custom_keywords: Optional[List[str]] = None,
        custom_queries: Optional[List[str]] = None
    ) -> List[str]:
        """
        Generate monitoring queries for a brand

        Args:
            brand_name: The brand name
            custom_keywords: Optional list of custom keywords to include
            custom_queries: Optional list of custom queries to include

        Returns:
            List of queries with brand name inserted
        """
        queries = [query.format(brand=brand_name) for query in self.default_queries]

        # Add custom queries if provided
        if custom_queries:
            queries.extend(custom_queries)

        # Add custom keyword-based queries if provided
        if custom_keywords:
            for keyword in custom_keywords:
                queries.append(f"How does {brand_name} handle {keyword}?")
                queries.append(f"What is {brand_name}'s approach to {keyword}?")

        return queries
    
    def generate_comparison_queries(
        self, 
        brand_name: str, 
        competitors: Optional[List[str]] = None
    ) -> List[str]:
        """
        Generate comparison queries between brand and competitors
        
        Args:
            brand_name: The brand name
            competitors: Optional list of competitor names
            
        Returns:
            List of comparison queries
        """
        if not competitors:
            return []
        
        comparison_queries = []
        for competitor in competitors:
            comparison_queries.append(f"Compare {brand_name} vs {competitor}")
            comparison_queries.append(f"Which is better, {brand_name} or {competitor}?")
            comparison_queries.append(f"What are the differences between {brand_name} and {competitor}?")
        
        return comparison_queries
