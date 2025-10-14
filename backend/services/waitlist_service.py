import json
import os
from datetime import datetime
from pathlib import Path
from typing import Dict, List

class WaitlistService:
    """Service to manage waitlist submissions with JSON file storage"""

    def __init__(self, data_dir: str = "backend/data"):
        self.data_dir = Path(data_dir)
        self.data_dir.mkdir(parents=True, exist_ok=True)
        self.waitlist_file = self.data_dir / "waitlist.json"
        self._initialize_file()

    def _initialize_file(self):
        """Initialize the waitlist JSON file if it doesn't exist"""
        if not self.waitlist_file.exists():
            self.waitlist_file.write_text(json.dumps([], indent=2))

    def _load_waitlist(self) -> List[Dict]:
        """Load existing waitlist data"""
        try:
            with open(self.waitlist_file, 'r') as f:
                return json.load(f)
        except (json.JSONDecodeError, FileNotFoundError):
            return []

    def _save_waitlist(self, waitlist: List[Dict]):
        """Save waitlist data to file"""
        with open(self.waitlist_file, 'w') as f:
            json.dump(waitlist, f, indent=2)

    def add_to_waitlist(self, email: str, brand_url: str, preview_data: Dict = None) -> Dict:
        """
        Add a new email to the waitlist

        Args:
            email: User's email address
            brand_url: Brand URL to analyze
            preview_data: Optional preview analytics data

        Returns:
            Dict containing the saved entry
        """
        waitlist = self._load_waitlist()

        # Check if email already exists
        existing = next((item for item in waitlist if item['email'].lower() == email.lower()), None)
        if existing:
            # Update existing entry
            existing['brand_url'] = brand_url
            existing['updated_at'] = datetime.now().isoformat()
            if preview_data:
                existing['preview_data'] = preview_data
            entry = existing
        else:
            # Create new entry
            entry = {
                'email': email,
                'brand_url': brand_url,
                'created_at': datetime.now().isoformat(),
                'status': 'pending',  # pending, sent, error
                'preview_data': preview_data or {}
            }
            waitlist.append(entry)

        self._save_waitlist(waitlist)
        return entry

    def get_waitlist(self) -> List[Dict]:
        """Get all waitlist entries"""
        return self._load_waitlist()

    def get_entry_by_email(self, email: str) -> Dict | None:
        """Get a specific waitlist entry by email"""
        waitlist = self._load_waitlist()
        return next((item for item in waitlist if item['email'].lower() == email.lower()), None)

    def update_status(self, email: str, status: str):
        """Update the status of a waitlist entry"""
        waitlist = self._load_waitlist()
        entry = next((item for item in waitlist if item['email'].lower() == email.lower()), None)
        if entry:
            entry['status'] = status
            entry['updated_at'] = datetime.now().isoformat()
            self._save_waitlist(waitlist)

    def get_stats(self) -> Dict:
        """Get waitlist statistics"""
        waitlist = self._load_waitlist()
        return {
            'total': len(waitlist),
            'pending': sum(1 for item in waitlist if item.get('status') == 'pending'),
            'sent': sum(1 for item in waitlist if item.get('status') == 'sent'),
            'error': sum(1 for item in waitlist if item.get('status') == 'error')
        }
