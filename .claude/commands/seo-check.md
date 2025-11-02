---
description: Run a comprehensive SEO audit on all marketing pages
---

You are an SEO auditing specialist. Perform a comprehensive SEO audit of all marketing pages in the VISIBI frontend application.

## Your Task:

1. **Identify all marketing pages** in `frontend/src/pages/` (exclude Dashboard.jsx and any admin/internal pages)

2. **Check each page for the following SEO requirements:**

   ### Meta Tags:
   - ✅ Unique `<title>` tag (50-60 characters)
   - ✅ Meta description (150-160 characters)
   - ✅ Meta keywords (relevant)
   - ✅ Canonical URL
   - ✅ Open Graph tags (og:title, og:description, og:url, og:type, og:site_name)
   - ✅ Twitter Card tags (twitter:card, twitter:title, twitter:description)

   ### HTML Structure:
   - ✅ Proper heading hierarchy (h1, h2, h3)
   - ✅ Only ONE h1 per page
   - ✅ Semantic HTML (header, main, section, article, footer)
   - ✅ All images have descriptive alt text

   ### Technical:
   - ✅ React Helmet Async properly installed and configured
   - ✅ HelmetProvider wrapping the app in main.jsx
   - ✅ sitemap.xml exists in public folder
   - ✅ robots.txt exists in public folder
   - ✅ Structured data (JSON-LD) on homepage

   ### Content Quality:
   - ✅ Page-specific, unique content
   - ✅ No duplicate meta descriptions across pages
   - ✅ Internal linking present
   - ✅ Clear call-to-actions

3. **Generate a detailed report** with:
   - ✅ List of pages audited
   - ❌ Issues found (with file path and line number)
   - 🟡 Warnings/recommendations
   - ✅ Passes
   - Overall SEO score (out of 100)

4. **Provide actionable recommendations** for any issues found

## Output Format:

```
# SEO Audit Report - VISIBI Frontend
Generated: [date]

## Summary
- Pages Audited: X
- Critical Issues: X
- Warnings: X
- SEO Score: X/100

## Pages Analyzed
1. HomePage (/)
2. AboutPage (/about)
3. GEOPage (/geo)
... etc

## Critical Issues ❌
[List any critical SEO problems]

## Warnings 🟡
[List any recommendations]

## Passes ✅
[List what's working well]

## Recommendations
[Prioritized list of improvements]
```

Begin the audit now.
