import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Dict, Optional
from abc import ABC, abstractmethod

class EmailProvider(ABC):
    """Abstract base class for email providers"""

    @abstractmethod
    def send_email(self, to_email: str, subject: str, html_content: str, text_content: str) -> bool:
        """Send an email"""
        pass


class SMTPEmailProvider(EmailProvider):
    """SMTP email provider (works with Gmail, custom SMTP servers)"""

    def __init__(self, smtp_host: str, smtp_port: int, username: str, password: str, from_email: str):
        self.smtp_host = smtp_host
        self.smtp_port = smtp_port
        self.username = username
        self.password = password
        self.from_email = from_email

    def send_email(self, to_email: str, subject: str, html_content: str, text_content: str) -> bool:
        """Send email via SMTP"""
        try:
            msg = MIMEMultipart('alternative')
            msg['Subject'] = subject
            msg['From'] = self.from_email
            msg['To'] = to_email

            # Add text and HTML parts
            part1 = MIMEText(text_content, 'plain')
            part2 = MIMEText(html_content, 'html')
            msg.attach(part1)
            msg.attach(part2)

            # Send email
            with smtplib.SMTP(self.smtp_host, self.smtp_port) as server:
                server.starttls()
                server.login(self.username, self.password)
                server.sendmail(self.from_email, to_email, msg.as_string())

            return True
        except Exception as e:
            print(f"Failed to send email via SMTP: {e}")
            return False


class ConsoleEmailProvider(EmailProvider):
    """Console email provider for development (prints to console instead of sending)"""

    def send_email(self, to_email: str, subject: str, html_content: str, text_content: str) -> bool:
        """Print email to console"""
        print("\n" + "="*80)
        print("EMAIL SENT (CONSOLE MODE)")
        print("="*80)
        print(f"To: {to_email}")
        print(f"Subject: {subject}")
        print("-"*80)
        print(text_content)
        print("="*80 + "\n")
        return True


class EmailService:
    """Email service for sending waitlist notifications"""

    def __init__(self, provider: Optional[EmailProvider] = None):
        if provider:
            self.provider = provider
        else:
            # Try to initialize from environment variables
            self.provider = self._initialize_provider()

    def _initialize_provider(self) -> EmailProvider:
        """Initialize email provider from environment variables"""
        # Check for SMTP configuration
        smtp_host = os.getenv('SMTP_HOST')
        smtp_port = os.getenv('SMTP_PORT', '587')
        smtp_user = os.getenv('SMTP_USER')
        smtp_password = os.getenv('SMTP_PASSWORD')
        from_email = os.getenv('FROM_EMAIL')

        if smtp_host and smtp_user and smtp_password and from_email:
            return SMTPEmailProvider(
                smtp_host=smtp_host,
                smtp_port=int(smtp_port),
                username=smtp_user,
                password=smtp_password,
                from_email=from_email
            )

        # Default to console provider for development
        print("⚠️  No email configuration found. Using console output mode.")
        print("   To enable email sending, set these environment variables:")
        print("   - SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, FROM_EMAIL")
        return ConsoleEmailProvider()

    def send_waitlist_confirmation(self, to_email: str, brand_url: str, preview_data: Dict) -> bool:
        """
        Send waitlist confirmation email to user

        Args:
            to_email: User's email address
            brand_url: Brand URL being analyzed
            preview_data: Preview analytics data

        Returns:
            bool: True if email sent successfully
        """
        subject = f"Your VISIBI Brand Analysis is Coming! ({preview_data.get('brand_name', 'Brand')})"

        # HTML email content
        html_content = f"""
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body {{ font-family: Arial, sans-serif; line-height: 1.6; color: #333; }}
                .container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
                .header {{ background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                          color: white; padding: 30px; text-align: center; border-radius: 10px; }}
                .content {{ background: #f9f9f9; padding: 30px; margin: 20px 0; border-radius: 10px; }}
                .preview-box {{ background: white; padding: 20px; margin: 20px 0;
                               border-left: 4px solid #667eea; border-radius: 5px; }}
                .metric {{ display: inline-block; margin: 10px 20px 10px 0; }}
                .metric-label {{ font-size: 12px; color: #666; text-transform: uppercase; }}
                .metric-value {{ font-size: 24px; font-weight: bold; color: #667eea; }}
                .footer {{ text-align: center; padding: 20px; color: #666; font-size: 12px; }}
                .button {{ background: #667eea; color: white; padding: 12px 30px;
                          text-decoration: none; border-radius: 5px; display: inline-block;
                          margin: 20px 0; }}
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>🎉 You're on the VISIBI Waitlist!</h1>
                </div>

                <div class="content">
                    <h2>Hi there!</h2>
                    <p>Thank you for your interest in VISIBI - the AI Search Analytics platform.</p>

                    <p>We're analyzing <strong>{brand_url}</strong> across multiple AI platforms including
                    ChatGPT, Claude, Perplexity, and Gemini.</p>

                    <div class="preview-box">
                        <h3>Quick Preview for {preview_data.get('brand_name', 'Your Brand')}</h3>

                        <div class="metric">
                            <div class="metric-label">Sentiment</div>
                            <div class="metric-value">{preview_data.get('sentiment', 'N/A')}</div>
                        </div>

                        <div class="metric">
                            <div class="metric-label">Mentions</div>
                            <div class="metric-value">{preview_data.get('mentions', 0)}</div>
                        </div>

                        <div class="metric">
                            <div class="metric-label">Visibility</div>
                            <div class="metric-value">{preview_data.get('visibility', 0)}%</div>
                        </div>
                    </div>

                    <p><strong>What's Next?</strong></p>
                    <ul>
                        <li>📊 Full detailed analysis report within 24 hours</li>
                        <li>🎯 Competitive positioning insights</li>
                        <li>💡 Actionable recommendations</li>
                        <li>📈 Sentiment trends and patterns</li>
                    </ul>

                    <p>We'll send your comprehensive report to <strong>{to_email}</strong> soon!</p>
                </div>

                <div class="footer">
                    <p>VISIBI - AI Search Analytics Platform</p>
                    <p>Monitor your brand across AI conversations</p>
                </div>
            </div>
        </body>
        </html>
        """

        # Plain text version
        text_content = f"""
VISIBI - You're on the Waitlist!

Hi there!

Thank you for your interest in VISIBI - the AI Search Analytics platform.

We're analyzing {brand_url} across multiple AI platforms including ChatGPT, Claude, Perplexity, and Gemini.

Quick Preview for {preview_data.get('brand_name', 'Your Brand')}:
- Sentiment: {preview_data.get('sentiment', 'N/A')}
- Mentions: {preview_data.get('mentions', 0)}
- Visibility: {preview_data.get('visibility', 0)}%

What's Next?
- Full detailed analysis report within 24 hours
- Competitive positioning insights
- Actionable recommendations
- Sentiment trends and patterns

We'll send your comprehensive report to {to_email} soon!

---
VISIBI - AI Search Analytics Platform
Monitor your brand across AI conversations
        """

        return self.provider.send_email(to_email, subject, html_content, text_content)

    def send_admin_notification(self, admin_email: str, user_email: str, brand_url: str, preview_data: Dict) -> bool:
        """
        Send notification to admin about new waitlist signup

        Args:
            admin_email: Admin email address
            user_email: User's email address
            brand_url: Brand URL being analyzed
            preview_data: Preview analytics data

        Returns:
            bool: True if email sent successfully
        """
        subject = f"New VISIBI Waitlist Signup: {user_email}"

        html_content = f"""
        <!DOCTYPE html>
        <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6;">
            <h2>New Waitlist Signup</h2>
            <p><strong>Email:</strong> {user_email}</p>
            <p><strong>Brand URL:</strong> {brand_url}</p>
            <p><strong>Brand Name:</strong> {preview_data.get('brand_name', 'Unknown')}</p>

            <h3>Preview Data:</h3>
            <ul>
                <li>Sentiment: {preview_data.get('sentiment', 'N/A')}</li>
                <li>Mentions: {preview_data.get('mentions', 0)}</li>
                <li>Visibility: {preview_data.get('visibility', 0)}%</li>
            </ul>

            <p><em>This is an automated notification from VISIBI.</em></p>
        </body>
        </html>
        """

        text_content = f"""
New VISIBI Waitlist Signup

Email: {user_email}
Brand URL: {brand_url}
Brand Name: {preview_data.get('brand_name', 'Unknown')}

Preview Data:
- Sentiment: {preview_data.get('sentiment', 'N/A')}
- Mentions: {preview_data.get('mentions', 0)}
- Visibility: {preview_data.get('visibility', 0)}%

---
This is an automated notification from VISIBI.
        """

        return self.provider.send_email(admin_email, subject, html_content, text_content)
