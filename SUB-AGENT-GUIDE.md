# VISIBI Sub-Agent Guide

## Project Context
**Project**: VISIBI - AI Brand Monitoring SaaS Platform  
**Objective**: Monitor how brands appear in AI responses (ChatGPT, Perplexity, Gemini, etc.)  
**MVP Focus**: Sentiment analysis for ChatGPT using OpenAI API  

## Architecture Overview
```
User Dashboard → FastAPI Backend → ChatGPT API → Local Sentiment Analysis → Results
```

## Tech Stack (MVP)
- **Backend**: FastAPI, Python 3.9+
- **Frontend**: React + Tailwind + shadcn/ui
- **Database**: PostgreSQL
- **Caching**: Redis
- **Job Scheduler**: Celery
- **AI Models**: OpenAI API (ChatGPT) + Hugging Face (sentiment analysis)

---

## Sub-Agent Roles & Capabilities

### 1. **Backend Development Agent**
**Responsibilities**:
- ✅ Implement FastAPI endpoints
- ✅ Create service classes (BrandAnalyzer, SentimentAnalyzer)
- ✅ Write tests with pytest
- ✅ Handle OpenAI API integration
- ✅ Implement error handling

**Current Tasks**:
- [ ] Set up backend directory structure
- [ ] Implement BrandAnalyzer service
- [ ] Implement SentimentAnalyzer service
- [ ] Create API endpoints (/analyze, /health, /history)
- [ ] Write comprehensive tests

**Key Files**:
- `backend/main.py` - FastAPI app
- `backend/services/brand_analyzer.py`
- `backend/services/sentiment_analyzer.py`
- `backend/config.py`
- `tests/test_*.py`

---

### 2. **Frontend Development Agent**
**Responsibilities**:
- ✅ Build React dashboard
- ✅ Implement brand input form
- ✅ Create sentiment visualization
- ✅ Style with Tailwind CSS + shadcn/ui
- ✅ Handle API integration

**Current Tasks**:
- [ ] Set up React project with Vite
- [ ] Install dependencies (Tailwind, shadcn/ui, axios)
- [ ] Create Dashboard component
- [ ] Create BrandInput component
- [ ] Create SentimentDisplay component
- [ ] Implement API service

**Key Files**:
- `frontend/src/App.tsx`
- `frontend/src/components/Dashboard.tsx`
- `frontend/src/components/BrandInput.tsx`
- `frontend/src/services/api.ts`

---

### 3. **Database & Infrastructure Agent**
**Responsibilities**:
- ✅ Set up PostgreSQL
- ✅ Create database schemas
- ✅ Implement Redis caching
- ✅ Set up Celery for background jobs
- ✅ Handle data persistence

**Current Tasks**:
- [ ] Create database schema
- [ ] Set up SQLAlchemy models
- [ ] Implement database migrations (Alembic)
- [ ] Configure Redis
- [ ] Set up Celery tasks

**Key Files**:
- `backend/database.py`
- `backend/models/db_models.py`
- `alembic/versions/*.py`
- `backend/tasks/celery_app.py`

---

### 4. **Testing & Quality Agent**
**Responsibilities**:
- ✅ Write unit tests
- ✅ Write integration tests
- ✅ Ensure code coverage
- ✅ Test API endpoints
- ✅ Validate data flow

**Current Tasks**:
- [ ] Write tests for BrandAnalyzer
- [ ] Write tests for SentimentAnalyzer
- [ ] Write API endpoint tests
- [ ] Write integration tests
- [ ] Set up test coverage reporting

**Key Files**:
- `tests/test_brand_analyzer.py`
- `tests/test_sentiment.py`
- `tests/test_api.py`
- `tests/test_integration.py`

---

### 5. **DevOps & Deployment Agent**
**Responsibilities**:
- ✅ Set up environment configuration
- ✅ Create Docker containers
- ✅ Implement CI/CD
- ✅ Handle deployment
- ✅ Monitor application health

**Current Tasks**:
- [ ] Create Dockerfile for backend
- [ ] Create Dockerfile for frontend
- [ ] Set up docker-compose.yml
- [ ] Configure environment variables
- [ ] Set up deployment pipeline

**Key Files**:
- `Dockerfile`
- `docker-compose.yml`
- `.env.example`
- `.github/workflows/deploy.yml`

---

## Development Phases

### **Phase 0: Backend Setup** ✓ (Reference: Phase-0-Backend-setup.md)
**Status**: Ready to implement  
**Duration**: 2-3 hours  
**Focus**: Test-driven FastAPI backend

**Deliverables**:
- [ ] Project structure created
- [ ] Virtual environment set up
- [ ] Dependencies installed
- [ ] BrandAnalyzer service
- [ ] SentimentAnalyzer service
- [ ] API endpoints (/analyze, /health, /history)
- [ ] All tests passing

---

### **Phase 1: Frontend Setup** (Reference: Phase-1-Frontend-Setup.md)
**Status**: Next phase  
**Duration**: 3-4 hours  
**Focus**: React dashboard with Tailwind

**Deliverables**:
- [ ] React project initialized
- [ ] Dashboard UI
- [ ] Brand input form
- [ ] Sentiment visualization
- [ ] API integration

---

### **Phase 2: Database & Storage** (Reference: Phase-2-database-storage-setup.md)
**Status**: Planned  
**Duration**: 2-3 hours  
**Focus**: PostgreSQL + Redis integration

**Deliverables**:
- [ ] Database schema
- [ ] SQLAlchemy models
- [ ] Migration scripts
- [ ] Redis caching
- [ ] Data persistence

---

### **Phase 3: Background Jobs** (Reference: Phase-3-monitoring-background-job-setup.md)
**Status**: Planned  
**Duration**: 3-4 hours  
**Focus**: Celery + scheduled monitoring

**Deliverables**:
- [ ] Celery setup
- [ ] Scheduled tasks
- [ ] Daily monitoring
- [ ] Job queue management

---

### **Phase 4: Multiple AI Models** (Reference: Phase-4-multiple-ai-models-setup.md)
**Status**: Future  
**Duration**: 4-5 hours  
**Focus**: Expand to Gemini, Perplexity, Claude

**Deliverables**:
- [ ] Multi-model support
- [ ] Model comparison
- [ ] Unified analysis

---

### **Phase 5: Advanced Analytics** (Reference: Phase-5-advance-analytics-setup.md)
**Status**: Future  
**Duration**: 5-6 hours  
**Focus**: Trends, charts, insights

**Deliverables**:
- [ ] Historical trends
- [ ] Comparison charts
- [ ] Export functionality
- [ ] Advanced filters

---

## Sub-Agent Communication Protocol

### **Request Format**
When invoking a sub-agent, use:
```
@{agent-name} {task-description}

Context:
- Current phase: Phase X
- Files involved: [list]
- Dependencies: [list]

Expected outcome:
- [specific deliverable]
```

### **Examples**

#### Example 1: Backend Agent
```
@backend-agent Create the BrandAnalyzer service

Context:
- Current phase: Phase 0
- Files: backend/services/brand_analyzer.py
- Reference: Phase-0-Backend-setup.md Part 3, Step 2

Expected outcome:
- BrandAnalyzer class with extract_brand_name(), fetch_brand_info(), generate_monitoring_queries()
- All methods passing tests in tests/test_brand_analyzer.py
```

#### Example 2: Testing Agent
```
@testing-agent Write tests for sentiment analysis

Context:
- Current phase: Phase 0
- Files: tests/test_sentiment.py
- Reference: Phase-0-Backend-setup.md Part 2, Step 2

Expected outcome:
- Test suite with 8+ test cases
- Coverage for positive, negative, neutral sentiment
- Edge cases (not mentioned, case-insensitive)
```

#### Example 3: Frontend Agent
```
@frontend-agent Create the Dashboard component

Context:
- Current phase: Phase 1
- Files: frontend/src/components/Dashboard.tsx
- Reference: Phase-1-Frontend-Setup.md

Expected outcome:
- Dashboard with brand input form
- Sentiment display section
- Integration with API service
- Tailwind styling
```

---

## Current Project Status

### ✅ Completed
- Project structure planning
- Phase documentation
- Architecture design

### 🔄 In Progress
- **Phase 0**: Backend setup (ready to start)

### ⏳ Pending
- Phase 1-5 implementation

---

## Quick Start Commands

### Backend Setup
```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
pytest tests/ -v
uvicorn backend.main:app --reload
```

### Frontend Setup (Future)
```bash
cd frontend
npm install
npm run dev
```

### Full Stack (Future)
```bash
docker-compose up
```

---

## Key Resources
- **Project Overview**: project-overview.md
- **Architecture**: architecture.md
- **Phase Guides**: Phase-*.md files
- **API Documentation**: http://localhost:8000/docs (when running)

---

## Sub-Agent Best Practices

1. **Always check phase documentation** before implementing
2. **Write tests first** (TDD approach)
3. **Follow existing patterns** in codebase
4. **Update checklists** when completing tasks
5. **Document assumptions** when unclear
6. **Ask for clarification** before making major decisions
7. **Test thoroughly** before marking as complete

---

## Next Action

To begin Phase 0 backend development, you can:

1. **Start with tests**: 
   ```
   @testing-agent Create test files for BrandAnalyzer and SentimentAnalyzer
   ```

2. **Set up project structure**:
   ```
   @backend-agent Create backend directory structure and install dependencies
   ```

3. **Implement services**:
   ```
   @backend-agent Implement BrandAnalyzer and SentimentAnalyzer services
   ```

---

## Getting Help

If you need assistance with a specific task:
- Reference the appropriate Phase-*.md file
- Check existing code patterns
- Review test cases for expected behavior
- Consult architecture.md for design decisions

---

**Ready to start? Pick a phase and invoke the appropriate sub-agent!** 🚀
