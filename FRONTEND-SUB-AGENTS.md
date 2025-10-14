# Frontend Sub-Agents Guide

This document provides an overview of the specialized frontend sub-agents available for the VISIBI project.

## Overview

Five specialized sub-agents have been created to handle different aspects of frontend development:

1. **Frontend UI Agent** - Component development and styling
2. **Frontend Data Visualization Agent** - D3.js charts and visualizations
3. **Frontend Integration Agent** - API integration and state management
4. **Frontend Testing Agent** - Testing with Vitest and React Testing Library
5. **Frontend Optimization Agent** - Performance and accessibility

## Quick Start

### Using Sub-Agents

You can invoke sub-agents using slash commands:

```bash
# UI Development
/frontend-ui-agent Create a loading spinner component with size variants

# Data Visualization
/frontend-data-viz-agent Create a time series chart for sentiment trends

# API Integration
/frontend-integration-agent Add endpoint for historical trend analysis

# Testing
/frontend-testing-agent Write tests for QueryCustomizer component

# Optimization
/frontend-optimization-agent Optimize Dashboard component performance
```

## Sub-Agent Capabilities

### 1. Frontend UI Agent
**Command**: `/frontend-ui-agent`
**Location**: `.claude/commands/frontend-ui-agent.md`

**Specializes in**:
- Creating React components
- Implementing shadcn/ui components
- Tailwind CSS styling
- Responsive design (mobile/tablet/desktop)
- Dark mode implementation
- Reusable UI patterns

**When to use**:
- Building new page layouts
- Creating form components
- Styling components
- Implementing dark mode
- Making responsive designs
- Adding new UI components

**Example tasks**:
```
"Create a notification toast component"
"Build a data table with sorting and filtering"
"Add a settings page with form controls"
"Implement a mobile navigation menu"
```

---

### 2. Frontend Data Visualization Agent
**Command**: `/frontend-data-viz-agent`
**Location**: `.claude/commands/frontend-data-viz-agent.md`

**Specializes in**:
- D3.js chart development
- Interactive visualizations
- Responsive charts
- Dark mode for visualizations
- Chart animations and transitions
- Tooltip implementations

**When to use**:
- Creating new chart types
- Adding interactivity to existing charts
- Building custom visualizations
- Optimizing chart performance
- Implementing complex data displays

**Example tasks**:
```
"Create a line chart showing sentiment over time"
"Build a heatmap for multi-model analysis"
"Add tooltips to the sentiment bar chart"
"Create a network graph for brand relationships"
```

---

### 3. Frontend Integration Agent
**Command**: `/frontend-integration-agent`
**Location**: `.claude/commands/frontend-integration-agent.md`

**Specializes in**:
- API service functions
- Custom React hooks
- State management
- Error handling
- Form validation
- Data caching strategies

**When to use**:
- Adding new API endpoints
- Creating data fetching hooks
- Implementing form submissions
- Managing application state
- Handling API errors
- Caching strategies

**Example tasks**:
```
"Add API integration for scheduled monitoring"
"Create a hook for fetching analysis history"
"Implement form validation for email input"
"Add error retry logic to API calls"
```

---

### 4. Frontend Testing Agent
**Command**: `/frontend-testing-agent`
**Location**: `.claude/commands/frontend-testing-agent.md`

**Specializes in**:
- Vitest unit tests
- React Testing Library integration tests
- Hook testing
- API mocking
- Accessibility testing
- Test coverage

**When to use**:
- Writing tests for new components
- Testing user interactions
- Mocking API calls
- Testing custom hooks
- Ensuring accessibility
- Improving test coverage

**Example tasks**:
```
"Write tests for the Dashboard component"
"Test the useBrandAnalysis hook"
"Add accessibility tests for the form"
"Write integration tests for the analysis flow"
```

---

### 5. Frontend Optimization Agent
**Command**: `/frontend-optimization-agent`
**Location**: `.claude/commands/frontend-optimization-agent.md`

**Specializes in**:
- React performance optimization
- Code splitting and lazy loading
- Accessibility (WCAG 2.1 AA)
- Bundle size optimization
- Core Web Vitals
- SEO improvements

**When to use**:
- Improving page load times
- Reducing bundle size
- Fixing accessibility issues
- Optimizing component renders
- Improving Lighthouse scores
- Adding lazy loading

**Example tasks**:
```
"Optimize the Dashboard component rendering"
"Add lazy loading to route components"
"Fix accessibility issues in the form"
"Reduce bundle size by code splitting"
```

## Workflow Examples

### Example 1: Adding a New Feature
**Task**: Add a brand comparison feature

```bash
# Step 1: API Integration
/frontend-integration-agent Add API endpoint for comparing multiple brands

# Step 2: UI Development
/frontend-ui-agent Create a ComparisonView component with side-by-side display

# Step 3: Data Visualization
/frontend-data-viz-agent Create comparison charts (radar chart, grouped bar chart)

# Step 4: Testing
/frontend-testing-agent Write tests for the comparison feature

# Step 5: Optimization
/frontend-optimization-agent Optimize comparison view performance
```

### Example 2: Fixing Performance Issues
**Task**: Dashboard loads slowly

```bash
# Step 1: Audit
/frontend-optimization-agent Audit Dashboard performance and identify bottlenecks

# Step 2: Optimize Charts
/frontend-data-viz-agent Optimize D3 chart rendering and reduce re-draws

# Step 3: Code Splitting
/frontend-optimization-agent Add lazy loading and code splitting

# Step 4: Test
/frontend-testing-agent Ensure tests still pass after optimization
```

### Example 3: Adding Accessibility
**Task**: Make the app WCAG 2.1 AA compliant

```bash
# Step 1: Audit
/frontend-optimization-agent Audit accessibility issues across the app

# Step 2: Fix UI Components
/frontend-ui-agent Add ARIA labels and improve keyboard navigation

# Step 3: Test
/frontend-testing-agent Add accessibility tests using axe
```

## Best Practices

### 1. **Use the Right Agent for the Task**
- Don't ask the UI agent to write tests
- Don't ask the testing agent to create charts
- Use specialized agents for their expertise

### 2. **Combine Agents for Complex Tasks**
Break down complex tasks into sub-agent specific work:
```
Complex task: "Add historical trends feature"

→ /frontend-integration-agent: Add trends API
→ /frontend-data-viz-agent: Create time series chart
→ /frontend-ui-agent: Build trends page layout
→ /frontend-testing-agent: Write comprehensive tests
→ /frontend-optimization-agent: Optimize chart performance
```

### 3. **Provide Context**
Give agents context about:
- Current phase of the project
- Related files and components
- Expected behavior
- Design requirements

Good example:
```
/frontend-ui-agent Create a notification component

Context:
- Should match existing VISIBI design system
- Support success, error, warning, info variants
- Auto-dismiss after 5 seconds
- Position: top-right
- Dark mode support required
```

### 4. **Review and Iterate**
- Review agent output before moving to next step
- Ask for clarification if needed
- Request modifications if requirements change

## Current Project Status

### ✅ Completed (Phase 1)
- Dashboard page with sentiment analysis
- ComingSoon landing page with waitlist
- Sidebar navigation
- Query customizer
- Sentiment and confidence charts
- Dark mode implementation
- All shadcn/ui base components

### 🔄 In Progress
- Phase 2: Database integration
- Phase 3: Scheduled monitoring
- Test coverage expansion

### ⏳ Planned (Future Phases)
- Multi-model analysis (Phase 4)
- Advanced analytics (Phase 5)
- Historical trends
- Competitive analysis
- Export functionality

## Agent Communication Format

Each sub-agent follows a consistent communication pattern:

```
Task: [Task description]

✅ Analysis:
- [Understanding of the task]
- [Approach to be taken]
- [Files to be created/modified]

✅ Implementation:
- [What was implemented]
- [Technical details]

✅ Testing:
- [How it was tested]
- [Results]

✅ Files Modified/Created:
- [List of files]

✅ Next Steps (if applicable):
- [Recommendations]
```

## Tips for Success

### 1. **Start with Planning**
Before diving into implementation:
1. Identify which agents you'll need
2. Plan the order of work
3. Define clear interfaces between components

### 2. **Test Early, Test Often**
- Use the testing agent as you build
- Don't wait until the end to write tests
- Test integration between components

### 3. **Optimize Last**
- Get functionality working first
- Measure performance before optimizing
- Use the optimization agent for refinement

### 4. **Maintain Consistency**
- Follow existing patterns in the codebase
- Use the UI agent to maintain design consistency
- Keep code style uniform

## Resources

### Documentation
- [SUB-AGENT-GUIDE.md](SUB-AGENT-GUIDE.md) - Main guide
- [Phase-1-Frontend-Setup.md](Phase-1-Frontend-Setup.md) - Phase 1 details
- [project-overview.md](project-overview.md) - Project overview

### Frontend Stack
- **React**: https://react.dev
- **Vite**: https://vitejs.dev
- **Tailwind CSS**: https://tailwindcss.com
- **shadcn/ui**: https://ui.shadcn.com
- **D3.js**: https://d3js.org
- **Vitest**: https://vitest.dev
- **React Testing Library**: https://testing-library.com/react

### Tools
- **Lighthouse**: Performance auditing
- **axe DevTools**: Accessibility testing
- **React DevTools**: Performance profiling

## Getting Help

If you're unsure which agent to use:

1. **Read the agent's specialization** in this document
2. **Check the agent file** in `.claude/commands/`
3. **Ask the general agent** for guidance
4. **Break down complex tasks** into agent-specific subtasks

## Conclusion

These specialized frontend sub-agents are designed to work together to build a high-quality, performant, accessible React application. Use them strategically to leverage their expertise and maintain code quality throughout the project.

Happy building! 🚀
