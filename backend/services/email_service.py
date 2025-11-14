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

                    <p>We're analysing <strong>{brand_url}</strong> across multiple AI platforms including
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

    def send_contact_confirmation(self, to_email: str, name: str) -> bool:
        """
        Send confirmation email to user after contact form submission

        Args:
            to_email: User's email address
            name: User's name

        Returns:
            bool: True if email sent successfully
        """
        subject = "Thank You for Contacting VISIBI"

        html_content = f"""
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body {{ font-family: 'Space Mono', monospace; line-height: 1.6; color: #000; }}
                .container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
                .header {{ background: #000; color: white; padding: 30px; text-align: center; }}
                .content {{ background: #fff; padding: 30px; margin: 20px 0; border: 1px solid #EAEAEA; }}
                .footer {{ text-align: center; padding: 20px; color: #7A7A7A; font-size: 12px; }}
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>VISIBI</h1>
                </div>

                <div class="content">
                    <h2>Hi {name},</h2>
                    <p>Thank you for reaching out to VISIBI! We've received your message and will get back to you within 24 hours.</p>

                    <p><strong>What happens next:</strong></p>
                    <ul>
                        <li>Our team will review your inquiry</li>
                        <li>We'll respond to your email within 24 hours</li>
                        <li>If needed, we'll schedule a call to discuss your goals</li>
                    </ul>

                    <p>In the meantime, feel free to explore our services at <a href="https://visibi.com">visibi.com</a></p>
                </div>

                <div class="footer">
                    <p>VISIBI - Generative Engine Optimisation</p>
                    <p>Making your brand visible in Gen AI search</p>
                </div>
            </div>
        </body>
        </html>
        """

        text_content = f"""
VISIBI - Thank You for Contacting Us

Hi {name},

Thank you for reaching out to VISIBI! We've received your message and will get back to you within 24 hours.

What happens next:
- Our team will review your inquiry
- We'll respond to your email within 24 hours
- If needed, we'll schedule a call to discuss your goals

In the meantime, feel free to explore our services at visibi.com

---
VISIBI - Generative Engine Optimisation
Making your brand visible in Gen AI search
        """

        return self.provider.send_email(to_email, subject, html_content, text_content)

    def send_contact_notification(self, admin_email: str, name: str, company: str,
                                  user_email: str, topic: str, message: str) -> bool:
        """
        Send notification to admin about new contact form submission

        Args:
            admin_email: Admin email address
            name: User's name
            company: User's company
            user_email: User's email address
            topic: Contact topic
            message: Contact message

        Returns:
            bool: True if email sent successfully
        """
        topic_labels = {
            "geo": "GEO Services",
            "seo": "SEO & Content",
            "ppc": "Paid Media",
            "tool": "VISIBI Tool",
            "audit": "AI Visibility Audit",
            "integrated": "Integrated Strategy",
            "other": "Other"
        }

        topic_label = topic_labels.get(topic, topic)
        subject = f"New Contact Form Submission: {name} ({company})"

        html_content = f"""
        <!DOCTYPE html>
        <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6;">
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Company:</strong> {company}</p>
            <p><strong>Email:</strong> {user_email}</p>
            <p><strong>Topic:</strong> {topic_label}</p>

            <h3>Message:</h3>
            <p>{message}</p>

            <p><em>This is an automated notification from VISIBI Contact Form.</em></p>
        </body>
        </html>
        """

        text_content = f"""
New Contact Form Submission

Name: {name}
Company: {company}
Email: {user_email}
Topic: {topic_label}

Message:
{message}

---
This is an automated notification from VISIBI Contact Form.
        """

        return self.provider.send_email(admin_email, subject, html_content, text_content)

    def send_brand_analysis_confirmation(self, to_email: str, brand_url: str) -> bool:
        """
        Send confirmation email to user after brand analysis form submission

        Args:
            to_email: User's email address
            brand_url: Brand URL being analyzed

        Returns:
            bool: True if email sent successfully
        """
        subject = "Your Brand Analysis is Coming! - VISIBI"

        html_content = f"""
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Open Sans', Arial, sans-serif; line-height: 1.7; color: #0f172a; background-color: #f8fafc;">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
                <!-- Header with Logo -->
                <tr>
                    <td style="background-color: #f1f5f9; padding: 40px 30px; text-align: center; border-bottom: 1px solid #e2e8f0;">
                        <img src="https://govisibi.up.railway.app/govisibi-logo.png" 
                             alt="VISIBI Logo" 
                             width="50" 
                             height="50" 
                             style="display: block; margin: 0 auto 15px; width: 50px; height: 50px; border: 0;">
                        <h1 style="margin: 0; font-size: 20px; font-weight: 700; color: #0f172a; font-family: 'Open Sans', Arial, sans-serif; letter-spacing: 0.5px;">VISIBI</h1>
                        <p style="margin: 5px 0 0; font-size: 11px; color: #64748b; font-family: 'Space Mono', monospace; text-transform: uppercase; letter-spacing: 1px;">Generative Engine Optimisation</p>
                    </td>
                </tr>
                
                <!-- Main Content -->
                <tr>
                    <td style="padding: 40px 30px; background-color: #ffffff;">
                        <h2 style="margin: 0 0 20px; font-size: 28px; font-weight: 600; color: #0f172a; font-family: 'Open Sans', Arial, sans-serif; line-height: 1.3;">
                            Your Gen AI Visibility Analysis is Coming!
                        </h2>
                        
                        <p style="margin: 0 0 20px; font-size: 16px; color: #334155; line-height: 1.7;">
                            Thank you for requesting a brand analysis for <strong style="color: #1d4ed8;">{brand_url}</strong>.
                        </p>
                        
                        <p style="margin: 0 0 20px; font-size: 16px; color: #334155; line-height: 1.7;">
                            We're analyzing how your brand appears across ChatGPT, Gemini, Perplexity, Claude, and other Gen AI platforms.
                        </p>

                        <!-- What's Next Section -->
                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 30px 0; background-color: #f8fafc; border-left: 4px solid #1d4ed8;">
                            <tr>
                                <td style="padding: 20px;">
                                    <p style="margin: 0 0 15px; font-size: 14px; font-weight: 600; color: #0f172a; font-family: 'Space Mono', monospace; text-transform: uppercase; letter-spacing: 0.5px;">
                                        What Happens Next
                                    </p>
                                    <ul style="margin: 0; padding-left: 20px; color: #334155; font-size: 15px; line-height: 1.8;">
                                        <li style="margin-bottom: 8px;">📊 Full detailed analysis report within 24-48 hours</li>
                                        <li style="margin-bottom: 8px;">🎯 Insights on ChatGPT, Gemini, Perplexity visibility</li>
                                        <li style="margin-bottom: 8px;">💡 Actionable GEO recommendations</li>
                                        <li style="margin-bottom: 0;">📈 Sentiment trends and citation patterns</li>
                                    </ul>
                                </td>
                            </tr>
                        </table>

                        <!-- CTA Button -->
                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 30px 0;">
                            <tr>
                                <td align="center">
                                    <a href="https://govisibi.ai" 
                                       style="display: inline-block; padding: 14px 32px; background-color: #1d4ed8; color: #ffffff; text-decoration: none; border-radius: 9999px; font-size: 15px; font-weight: 600; font-family: 'Open Sans', Arial, sans-serif; letter-spacing: 0.3px;">
                                        Explore Our GEO Services
                                    </a>
                                </td>
                            </tr>
                        </table>

                        <p style="margin: 30px 0 0; font-size: 14px; color: #64748b; line-height: 1.6;">
                            We'll send your comprehensive report to <strong style="color: #334155;">{to_email}</strong> soon.
                        </p>
                    </td>
                </tr>
                
                <!-- Footer -->
                <tr>
                    <td style="background-color: #f8fafc; padding: 30px; text-align: center; border-top: 1px solid #e2e8f0;">
                        <p style="margin: 0 0 5px; font-size: 12px; color: #64748b; font-family: 'Space Mono', monospace;">
                            <strong>VISIBI</strong> - Get discovered by Gen AI platforms
                        </p>
                        <p style="margin: 0 0 15px; font-size: 11px; color: #94a3b8;">
                            ChatGPT • Gemini • Perplexity • Claude
                        </p>
                        <p style="margin: 0; font-size: 11px; color: #94a3b8;">
                            <a href="https://govisibi.ai" style="color: #1d4ed8; text-decoration: none;">govisibi.ai</a>
                        </p>
                    </td>
                </tr>
            </table>
        </body>
        </html>
        """

        text_content = f"""
VISIBI - Your Brand Analysis is Coming!

Thank You for Your Interest!

We've received your request for a brand analysis for {brand_url}.

What happens next:
- Our team will analyze your brand's AI visibility
- We'll send your detailed report to this email within 24-48 hours
- The report will include insights on ChatGPT, Gemini, Perplexity, and other AI platforms

In the meantime, explore our services at govisibi.ai

---
VISIBI - Generative Engine Optimisation
Making your brand visible in Gen AI search
        """

        return self.provider.send_email(to_email, subject, html_content, text_content)

    def send_brand_analysis_notification(self, admin_email: str, brand_url: str, user_email: str,
                                         custom_queries: list = None, custom_keywords: list = None) -> bool:
        """
        Send notification to admin about new brand analysis request

        Args:
            admin_email: Admin email address
            brand_url: Brand URL being analyzed
            user_email: User's email address
            custom_queries: Custom queries if provided
            custom_keywords: Custom keywords if provided

        Returns:
            bool: True if email sent successfully
        """
        subject = f"New Brand Analysis Request: {brand_url}"

        queries_html = ""
        if custom_queries and len(custom_queries) > 0:
            queries_html = "<h3>Custom Queries:</h3><ul>"
            for query in custom_queries:
                queries_html += f"<li>{query}</li>"
            queries_html += "</ul>"

        keywords_html = ""
        if custom_keywords and len(custom_keywords) > 0:
            keywords_html = "<h3>Custom Keywords:</h3><p>" + ", ".join(custom_keywords) + "</p>"

        html_content = f"""
        <!DOCTYPE html>
        <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6;">
            <h2>New Brand Analysis Request</h2>
            <p><strong>Brand URL:</strong> {brand_url}</p>
            <p><strong>Email:</strong> {user_email}</p>

            {queries_html}
            {keywords_html}

            <p><em>This is an automated notification from VISIBI Brand Analysis Form.</em></p>
        </body>
        </html>
        """

        queries_text = ""
        if custom_queries and len(custom_queries) > 0:
            queries_text = "\n\nCustom Queries:\n" + "\n".join([f"- {q}" for q in custom_queries])

        keywords_text = ""
        if custom_keywords and len(custom_keywords) > 0:
            keywords_text = "\n\nCustom Keywords:\n" + ", ".join(custom_keywords)

        text_content = f"""
New Brand Analysis Request

Brand URL: {brand_url}
Email: {user_email}
{queries_text}
{keywords_text}

---
This is an automated notification from VISIBI Brand Analysis Form.
        """

        return self.provider.send_email(admin_email, subject, html_content, text_content)
