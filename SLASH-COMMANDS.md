# Frontend Sub-Agent Slash Commands

Quick reference for invoking specialized frontend sub-agents in VISIBI.

## Available Commands

### `/ui` - Frontend UI Agent
**Purpose**: Build React components with Tailwind CSS + shadcn/ui

**Use for**:
- Creating new components
- Styling pages
- Implementing responsive layouts
- Adding dark mode support

**Example usage**:
```
/ui Create a loading spinner component with size variants (sm, md, lg)
/ui Build a notification toast system with success/error/warning types
/ui Add a mobile-friendly navigation menu with hamburger icon
```

---

### `/viz` - Data Visualization Agent
**Purpose**: Create D3.js charts and interactive visualizations

**Use for**:
- Building new chart types
- Adding interactivity to visualizations
- Creating custom data displays
- Optimizing chart performance

**Example usage**:
```
/viz Create a line chart showing sentiment trends over time
/viz Build a heatmap for multi-model sentiment comparison
/viz Add interactive tooltips to the existing bar chart
```

---

### `/api` - API Integration Agent
**Purpose**: Handle API calls, state management, and data fetching

**Use for**:
- Adding new API endpoints
- Creating custom hooks
- Implementing form validation
- Managing application state

**Example usage**:
```
/api Add endpoint for fetching analysis history with pagination
/api Create a useScheduledMonitoring hook for managing monitoring jobs
/api Implement form validation for the brand comparison feature
```

---

### `/test` - Testing Agent
**Purpose**: Write tests with Vitest and React Testing Library

**Use for**:
- Writing component tests
- Testing user interactions
- Mocking API calls
- Improving test coverage

**Example usage**:
```
/test Write tests for the Dashboard component covering all user flows
/test Add integration tests for the waitlist form submission
/test Test the useBrandAnalysis hook with success and error cases
```

---

### `/optimize` - Optimization Agent
**Purpose**: Improve performance and ensure accessibility

**Use for**:
- Performance optimization
- Accessibility compliance (WCAG 2.1 AA)
- Code splitting and lazy loading
- Lighthouse score improvements

**Example usage**:
```
/optimize Audit and improve Dashboard performance
/optimize Add lazy loading to all route components
/optimize Fix accessibility issues in the form inputs
```

---

## How to Use

1. **Type the command**: Start with `/` followed by the command name
2. **Add your request**: Describe what you want the agent to do
3. **Be specific**: Include context, requirements, and expected behavior

### Good Examples:
```
/ui Create a ComparisonCard component that displays two brands side-by-side with sentiment badges and visibility scores

/viz Build a radar chart comparing 5 brands across metrics: sentiment, visibility, mentions, confidence, and position

/api Add a compareMultipleBrands endpoint that accepts an array of URLs and returns comparative analysis

/test Write comprehensive tests for QueryCustomizer including adding/removing queries and keyword validation

/optimize Reduce Dashboard initial load time by implementing code splitting and memoization
```

### Tips:
- **Be specific** about requirements (colors, sizes, behavior)
- **Mention existing patterns** to maintain consistency
- **Include edge cases** you want handled
- **Reference files** if modifying existing code

---

## Complete Workflow Example

**Task**: Add a historical trends feature

```bash
# Step 1: API Integration
/api Add API endpoint for fetching sentiment trends over the last 30 days

# Step 2: Data Visualization
/viz Create a multi-line chart showing positive/neutral/negative sentiment trends over time with date axis

# Step 3: UI Development
/ui Build a TrendsView page component with date range selector and trend chart display

# Step 4: Testing
/test Write integration tests for the trends feature covering data fetching and chart rendering

# Step 5: Optimization
/optimize Optimize the trends chart for smooth rendering with 90+ data points
```

---

## Detailed Documentation

For complete patterns, examples, and best practices, see:

- **[FRONTEND-SUB-AGENTS.md](FRONTEND-SUB-AGENTS.md)** - Complete guide to all sub-agents
- **`.claude/commands/frontend-ui-agent.md`** - Full UI patterns and examples
- **`.claude/commands/frontend-data-viz-agent.md`** - Complete D3.js visualization guide
- **`.claude/commands/frontend-integration-agent.md`** - API integration patterns
- **`.claude/commands/frontend-testing-agent.md`** - Testing strategies and examples
- **`.claude/commands/frontend-optimization-agent.md`** - Performance and accessibility guide

---

## Current Project Context

**Stack**: React 18+, Vite, Tailwind CSS, shadcn/ui, D3.js, Vitest
**Phase**: Phase 1 complete (Dashboard + ComingSoon pages)
**Backend**: FastAPI at http://localhost:8000

**Existing Components**:
- Dashboard.jsx - Main analysis dashboard
- ComingSoon.jsx - Landing page with waitlist
- Sidebar.jsx - Navigation
- QueryCustomizer.jsx - Custom query input
- SentimentChart.jsx - Sentiment visualization
- ConfidenceChart.jsx - Confidence display

**Design System**:
- Primary: Blue (#667eea)
- Secondary: Purple (#764ba2)
- Success: Green (#4CAF50)
- Danger: Red (#f44336)
- Dark mode: Fully supported

---

## Quick Start

Try it now:

```
/ui Create a simple button component with loading state
```

This will invoke the UI agent to create a button component following VISIBI's design system!

---

**Happy coding!** 🚀
