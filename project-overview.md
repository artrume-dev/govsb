## Project objective ##
An AI Search Analytic sass platform in phases that can show sentiments, mentions, position for brands., so companies can find out how their brand get mentioned by top conversational AI agents such as claude, perplexity, google gemini, open ai chatgpt etc etc. For MVP, we will only focus on Sentiment analysis first on ChatGPT using Open AI API.

## How it may work ##
 platform monitors how brands appear in ChatGPT responses by automatically sending pre-defined prompts daily, then analyzing the responses to extract mentions, position (where they appear), and sentiment. You don't "read" the brand URL directly—instead, you extract the brand identity and create relevant monitoring queries around it.

 ## MVP Tech Stack ##
 Tech Stack (MVP): FastAPI backend + React frontend + PostgreSQL + Redis caching + Celery job scheduler. The interesting part: you use ChatGPT only for the API calls to get responses, but use completely free open-source models (Hugging Face) for sentiment analysis, entity extraction, and position tracking.



I have created few markdown files to start the development of the AI Seach Analytic sass platform.

Use #file:project-overview.md #file:architecture.md and #file:Phase-0-Backend-setup.md and #file:Phase-1-Frontend-Setup.md to start with but do checek other md files if need additional info.

