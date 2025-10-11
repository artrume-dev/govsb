#!/bin/bash

# VISIBI Backend Setup Script
# Phase 0 - Automated Setup and Testing

echo "🚀 VISIBI Backend Setup - Phase 0"
echo "=================================="
echo ""

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if we're in the right directory
if [ ! -f "requirements.txt" ]; then
    echo -e "${RED}❌ Error: requirements.txt not found${NC}"
    echo "Please run this script from the VISIBI root directory"
    exit 1
fi

echo -e "${YELLOW}Step 1: Setting up virtual environment...${NC}"
if [ ! -d "venv" ]; then
    python3 -m venv venv
    echo -e "${GREEN}✅ Virtual environment created${NC}"
else
    echo -e "${YELLOW}⚠️  Virtual environment already exists${NC}"
fi

echo ""
echo -e "${YELLOW}Step 2: Activating virtual environment...${NC}"
source venv/bin/activate
echo -e "${GREEN}✅ Virtual environment activated${NC}"

echo ""
echo -e "${YELLOW}Step 3: Installing dependencies...${NC}"
pip install --upgrade pip -q
pip install -r requirements.txt -q
echo -e "${GREEN}✅ Dependencies installed${NC}"

echo ""
echo -e "${YELLOW}Step 4: Checking configuration...${NC}"
if [ -f "backend/.env" ]; then
    echo -e "${GREEN}✅ .env file found${NC}"
    
    # Check if OPENAI_API_KEY is set
    if grep -q "OPENAI_API_KEY=sk-" backend/.env; then
        echo -e "${GREEN}✅ OpenAI API key is configured${NC}"
    else
        echo -e "${RED}❌ OpenAI API key not found in .env${NC}"
        echo "Please add your OpenAI API key to backend/.env"
    fi
else
    echo -e "${RED}❌ .env file not found${NC}"
    echo "Please create backend/.env with your OpenAI API key"
fi

echo ""
echo -e "${YELLOW}Step 5: Running tests...${NC}"
pytest tests/ -v --tb=short

if [ $? -eq 0 ]; then
    echo ""
    echo -e "${GREEN}✅ All tests passed!${NC}"
else
    echo ""
    echo -e "${RED}❌ Some tests failed${NC}"
    echo "Please review the errors above"
fi

echo ""
echo "=================================="
echo -e "${GREEN}🎉 Setup Complete!${NC}"
echo ""
echo "To start the server, run:"
echo -e "${YELLOW}  source venv/bin/activate${NC}"
echo -e "${YELLOW}  python -m uvicorn backend.main:app --reload${NC}"
echo ""
echo "Then visit:"
echo "  - API: http://localhost:8000"
echo "  - Docs: http://localhost:8000/docs"
echo ""
