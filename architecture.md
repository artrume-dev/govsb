## Architecture Overview

```
User Dashboard (Frontend)
        ↓
FastAPI Backend (Phase 0)
        ↓
Generate Monitoring Queries
        ↓
ChatGPT API (OpenAI)
        ↓
Local Sentiment Analysis
        ↓
Return Results to Frontend
```

---

## MVP architecture: ##
┌─────────────────────────────────────────┐
│  User Dashboard                         │
│  - Add brand URL                        │
│  - See sentiment for ChatGPT only       │
└──────────────┬──────────────────────────┘
               │
┌──────────────▼──────────────────────────┐
│  FastAPI Backend                        │
│  - Generate monitoring queries          │
│  - Send queries to ChatGPT              │
│  - Collect responses                    │
│  - Analyze sentiment locally            │
│  - Return results                       │
└──────────────┬──────────────────────────┘
               │
    ┌──────────┴──────────┐
    │                     │
    ▼                     ▼
ChatGPT API        Sentiment Engine
(Get brand text)   (Local analysis)
That's it! No Claude orchestrator needed for MVP.

---

## Part 1: Simplified MVP Architecture ##

### Architecture Diagram ###
USER FLOW:
┌─────────────────────────────────────────┐
│ 1. User signin                          │
│ 2. Dashboard → Add brand URL            │
│ 3. Add keywords (optional)              │
│ 4. Click "Analyze Sentiment"            │
└──────────────┬──────────────────────────┘
               │
┌──────────────▼──────────────────────────┐
│ FASTAPI BACKEND                         │
│                                         │
│ Step 1: Generate Queries                │
│ "What do you think about Slack?"        │
│ "Is Slack good for teams?"              │
│ "Pros and cons of Slack?"               │
└──────────────┬──────────────────────────┘
               │
┌──────────────▼──────────────────────────┐
│ CHATGPT API CALLS                       │
│ (Query each monitoring query)           │
│                                         │
│ Query: "What do you think about Slack?" │
│ Response: "Slack is excellent for..."   │
│                                         │
│ Query: "Is Slack good for teams?"       │
│ Response: "Yes, Slack is great for..."  │
│                                         │
│ Query: "Pros and cons of Slack?"        │
│ Response: "Pros: Easy to use..."        │
└──────────────┬──────────────────────────┘
               │
┌──────────────▼──────────────────────────┐
│ LOCAL SENTIMENT ANALYSIS                │
│ (On your server, no API cost)           │
│                                         │
│ Response 1 → POSITIVE (0.95 confidence) │
│ Response 2 → POSITIVE (0.87 confidence) │
│ Response 3 → POSITIVE (0.92 confidence) │
│                                         │
│ Aggregate → POSITIVE (0.91 confidence)  │
└──────────────┬──────────────────────────┘
               │
┌──────────────▼──────────────────────────┐
│ DATABASE & CACHE                        │
│ - Save sentiment results                │
│ - Historical tracking                   │
│ - Dashboard display                     │
└──────────────┬──────────────────────────┘
               │
┌──────────────▼──────────────────────────┐
│ FRONTEND DISPLAY                        │
│ Brand Sentiment Dashboard:              │
│ - Overall: POSITIVE                     │
│ - Confidence: 91%                       │
│ - Source: ChatGPT                       │
│ - Mentions: 3/3 queries                 │
│ - Chart showing sentiment               │
└──────────────────────────────────────────┘

---