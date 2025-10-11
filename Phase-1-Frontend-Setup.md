# Phase 1: Frontend Setup - React Dashboard with TDD

## Overview
Phase 1 focuses on building a React frontend dashboard with test-driven development. We'll use Tailwind CSS + shadcn/ui for styling and D3.js for advanced data visualizations.

**Duration**: 3-4 hours  
**Tech Stack**: React 18+, Tailwind CSS, shadcn/ui, D3.js, vitest, React Testing Library

**Prerequisites**: Phase 0 backend must be running on `http://localhost:8000`

---

## Part 1: Project Initialization

### Step 1: Create React App with Vite (faster than CRA)

```bash
# From project root
npm create vite@latest frontend -- --template react
cd frontend

# Install dependencies
npm install

# Install additional dependencies
npm install axios tailwindcss postcss autoprefixer d3 clsx tailwind-merge
npm install -D @vitejs/plugin-react
npm install -D @testing-library/react @testing-library/jest-dom vitest @vitest/ui
npm install -D @testing-library/user-event jsdom
```

### Step 2: Setup Tailwind CSS

```bash
# Initialize Tailwind
npx tailwindcss init -p
```

Update `tailwind.config.js`:

```javascript
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#667eea",
        secondary: "#764ba2",
        success: "#4CAF50",
        danger: "#f44336",
        neutral: "#9E9E9E",
      },
    },
  },
  plugins: [],
}
```

Update `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* Animations */
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-in {
  animation: slideIn 0.3s ease-out;
}
```

### Step 3: Setup shadcn/ui

```bash
# Install shadcn/ui - when prompted, choose Vite + TypeScript: No + CSS variables: Yes
npx shadcn-ui@latest init
```

### Step 4: Install Needed shadcn/ui Components

```bash
npx shadcn-ui@latest add card
npx shadcn-ui@latest add button
npx shadcn-ui@latest add input
npx shadcn-ui@latest add alert
npx shadcn-ui@latest add tabs
npx shadcn-ui@latest add table
npx shadcn-ui@latest add badge
npx shadcn-ui@latest add spinner
```

### Step 5: Create Project Structure

```bash
mkdir -p src/components/ui
mkdir -p src/pages
mkdir -p src/services
mkdir -p src/hooks
mkdir -p src/utils
mkdir -p src/__tests__/unit
mkdir -p src/__tests__/integration
mkdir -p src/__tests__/fixtures

touch src/services/api.js
touch src/hooks/useBrandAnalysis.js
touch src/utils/formatters.js
touch src/__tests__/setup.js
touch src/__tests__/unit/formatters.test.js
touch src/__tests__/unit/api.test.js
touch src/__tests__/integration/dashboard.test.jsx
```

---

## Part 2: Test-Driven Development (TDD)

### Step 1: Setup Testing Infrastructure

Update `vite.config.js`:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/__tests__/setup.js'],
  }
})
```

Create `src/__tests__/setup.js`:

```javascript
import '@testing-library/jest-dom'
import { expect, afterEach, vi, beforeEach } from 'vitest'
import { cleanup } from '@testing-library/react'

// Cleanup after each test
afterEach(() => {
  cleanup()
  vi.clearAllMocks()
})

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})

// Mock fetch
global.fetch = vi.fn()
```

Add test script to `package.json`:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "test": "vitest",
  "test:ui": "vitest --ui",
  "test:coverage": "vitest --coverage"
}
```

### Step 2: Write Tests for Utility Functions

Create `src/__tests__/unit/formatters.test.js`:

```javascript
import { describe, it, expect } from 'vitest'
import { 
  formatPercentage, 
  formatDate, 
  getSentimentColor,
  getSentimentBgColor,
  truncateText 
} from '../../utils/formatters'

describe('formatPercentage', () => {
  it('should format number as percentage with 1 decimal', () => {
    expect(formatPercentage(75.5)).toBe('75.5%')
  })

  it('should handle zero', () => {
    expect(formatPercentage(0)).toBe('0.0%')
  })

  it('should handle 100', () => {
    expect(formatPercentage(100)).toBe('100.0%')
  })
})

describe('formatDate', () => {
  it('should format date to readable string', () => {
    const date = new Date('2024-01-15T10:30:00')
    const result = formatDate(date)
    expect(result).toContain('2024')
  })

  it('should handle ISO string input', () => {
    const isoString = '2024-01-15T10:30:00'
    const result = formatDate(isoString)
    expect(result).toBeTruthy()
  })
})

describe('getSentimentColor', () => {
  it('should return green for POSITIVE', () => {
    expect(getSentimentColor('POSITIVE')).toBe('text-success')
  })

  it('should return red for NEGATIVE', () => {
    expect(getSentimentColor('NEGATIVE')).toBe('text-danger')
  })

  it('should return gray for NEUTRAL', () => {
    expect(getSentimentColor('NEUTRAL')).toBe('text-neutral')
  })

  it('should handle case insensitivity', () => {
    expect(getSentimentColor('positive')).toBe('text-success')
  })
})

describe('getSentimentBgColor', () => {
  it('should return green background for POSITIVE', () => {
    expect(getSentimentBgColor('POSITIVE')).toBe('bg-green-100')
  })

  it('should return red background for NEGATIVE', () => {
    expect(getSentimentBgColor('NEGATIVE')).toBe('bg-red-100')
  })

  it('should return gray background for NEUTRAL', () => {
    expect(getSentimentBgColor('NEUTRAL')).toBe('bg-gray-100')
  })
})

describe('truncateText', () => {
  it('should truncate text longer than max length', () => {
    const text = 'This is a very long text that needs truncation'
    const result = truncateText(text, 20)
    expect(result.length).toBeLessThanOrEqual(23) // 20 + '...'
    expect(result).toContain('...')
  })

  it('should not truncate text shorter than max length', () => {
    const text = 'Short text'
    expect(truncateText(text, 20)).toBe('Short text')
  })

  it('should handle custom ellipsis', () => {
    const text = 'This is a very long text'
    const result = truncateText(text, 10, '→')
    expect(result).toContain('→')
  })
})
```

### Step 3: Write Tests for API Service

Create `src/__tests__/unit/api.test.js`:

```javascript
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { analyzeUrl, getHistory } from '../../services/api'

const mockResponse = {
  brand_name: 'Slack',
  url: 'https://www.slack.com',
  timestamp: '2024-01-15T10:30:00',
  queries_analyzed: 5,
  analysis: [
    {
      query: 'What do you think about Slack?',
      response: 'Slack is excellent',
      sentiment_analysis: {
        mentioned: true,
        sentiment: 'POSITIVE',
        confidence: 0.95,
        position: 0
      }
    }
  ],
  summary: {
    total_queries: 5,
    mentions_count: 5,
    visibility: 100,
    positive: 4,
    negative: 0,
    neutral: 1,
    overall_sentiment: 'POSITIVE'
  }
}

describe('API Service', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    global.fetch = vi.fn()
  })

  describe('analyzeUrl', () => {
    it('should send POST request to /analyze endpoint', async () => {
      global.fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse
      })

      const result = await analyzeUrl('https://www.slack.com')

      expect(global.fetch).toHaveBeenCalledWith(
        'http://localhost:8000/analyze',
        expect.objectContaining({
          method: 'POST',
          headers: expect.objectContaining({
            'Content-Type': 'application/json'
          })
        })
      )
      expect(result).toEqual(mockResponse)
    })

    it('should throw error on failed response', async () => {
      global.fetch.mockResolvedValueOnce({
        ok: false,
        status: 400,
        statusText: 'Bad Request'
      })

      await expect(analyzeUrl('invalid-url')).rejects.toThrow()
    })

    it('should accept custom queries', async () => {
      global.fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse
      })

      const customQueries = ['Custom query 1', 'Custom query 2']
      await analyzeUrl('https://www.slack.com', customQueries)

      const callArgs = global.fetch.mock.calls[0][1]
      const body = JSON.parse(callArgs.body)
      expect(body.queries).toEqual(customQueries)
    })
  })

  describe('getHistory', () => {
    it('should fetch analysis history', async () => {
      const historyResponse = { analyses: [mockResponse] }

      global.fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => historyResponse
      })

      const result = await getHistory()

      expect(global.fetch).toHaveBeenCalledWith(
        'http://localhost:8000/history'
      )
      expect(result.analyses).toHaveLength(1)
    })

    it('should handle empty history', async () => {
      global.fetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ analyses: [] })
      })

      const result = await getHistory()
      expect(result.analyses).toHaveLength(0)
    })
  })
})
```

### Step 4: Write Tests for Dashboard Component

Create `src/__tests__/integration/dashboard.test.jsx`:

```javascript
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Dashboard from '../../pages/Dashboard'

vi.mock('../../services/api', () => ({
  analyzeUrl: vi.fn(),
  getHistory: vi.fn()
}))

const mockAnalysisResult = {
  brand_name: 'Slack',
  url: 'https://www.slack.com',
  timestamp: '2024-01-15T10:30:00',
  queries_analyzed: 5,
  summary: {
    total_queries: 5,
    mentions_count: 5,
    visibility: 100,
    positive: 4,
    negative: 0,
    neutral: 1,
    overall_sentiment: 'POSITIVE'
  },
  analysis: []
}

describe('Dashboard Component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should render dashboard header', () => {
    render(<Dashboard />)
    expect(screen.getByText(/AI Brand Monitor/i)).toBeInTheDocument()
  })

  it('should have input field for URL', () => {
    render(<Dashboard />)
    const input = screen.getByPlaceholderText(/https:\/\/www.yourcompany.com/i)
    expect(input).toBeInTheDocument()
  })

  it('should have analyze button', () => {
    render(<Dashboard />)
    const button = screen.getByRole('button', { name: /Analyze Brand/i })
    expect(button).toBeInTheDocument()
  })

  it('should display error when URL is empty', async () => {
    render(<Dashboard />)
    const button = screen.getByRole('button', { name: /Analyze Brand/i })
    
    fireEvent.click(button)
    
    await waitFor(() => {
      expect(screen.getByText(/URL is required/i)).toBeInTheDocument()
    })
  })

  it('should show loading state while analyzing', async () => {
    const { analyzeUrl } = await import('../../services/api')
    analyzeUrl.mockImplementationOnce(() => new Promise(() => {}))

    render(<Dashboard />)
    
    const input = screen.getByPlaceholderText(/https:\/\/www.yourcompany.com/i)
    const button = screen.getByRole('button', { name: /Analyze Brand/i })
    
    await userEvent.type(input, 'https://www.slack.com')
    fireEvent.click(button)

    await waitFor(() => {
      expect(button).toHaveTextContent(/Analyzing/i)
      expect(button).toBeDisabled()
    })
  })
})
```

---

## Part 3: Implementation

### Step 1: Create Utility Functions

Create `src/utils/formatters.js`:

```javascript
/**
 * Format number as percentage
 */
export const formatPercentage = (num, decimals = 1) => {
  return `${num.toFixed(decimals)}%`
}

/**
 * Format date to readable string
 */
export const formatDate = (date) => {
  const d = new Date(date)
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

/**
 * Get sentiment text color class
 */
export const getSentimentColor = (sentiment) => {
  const s = sentiment?.toUpperCase() || ''
  const colors = {
    POSITIVE: 'text-success',
    NEGATIVE: 'text-danger',
    NEUTRAL: 'text-neutral',
    'NOT_MENTIONED': 'text-gray-500'
  }
  return colors[s] || 'text-gray-600'
}

/**
 * Get sentiment background color class
 */
export const getSentimentBgColor = (sentiment) => {
  const s = sentiment?.toUpperCase() || ''
  const colors = {
    POSITIVE: 'bg-green-100',
    NEGATIVE: 'bg-red-100',
    NEUTRAL: 'bg-gray-100',
    'NOT_MENTIONED': 'bg-gray-50'
  }
  return colors[s] || 'bg-gray-50'
}

/**
 * Truncate text with ellipsis
 */
export const truncateText = (text, maxLength = 100, ellipsis = '...') => {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + ellipsis
}

/**
 * Get badge variant based on sentiment
 */
export const getBadgeVariant = (sentiment) => {
  const s = sentiment?.toUpperCase() || ''
  const variants = {
    POSITIVE: 'default',
    NEGATIVE: 'destructive',
    NEUTRAL: 'secondary',
    'NOT_MENTIONED': 'outline'
  }
  return variants[s] || 'outline'
}
```

### Step 2: Create API Service

Create `src/services/api.js`:

```javascript
const API_BASE_URL = 'http://localhost:8000'

/**
 * Analyze brand from URL
 */
export const analyzeUrl = async (url, queries = null) => {
  if (!url) throw new Error('URL is required')

  const payload = { url }
  if (queries) payload.queries = queries

  const response = await fetch(`${API_BASE_URL}/analyze`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })

  if (!response.ok) {
    const error = await response.json().catch(() => ({}))
    throw new Error(error.detail || `HTTP ${response.status}: ${response.statusText}`)
  }

  return response.json()
}

/**
 * Get analysis history
 */
export const getHistory = async () => {
  const response = await fetch(`${API_BASE_URL}/history`)

  if (!response.ok) {
    throw new Error(`Failed to fetch history: ${response.statusText}`)
  }

  return response.json()
}

/**
 * Health check
 */
export const healthCheck = async () => {
  const response = await fetch(`${API_BASE_URL}/health`)
  if (!response.ok) throw new Error('API is not available')
  return response.json()
}
```

### Step 3: Create Custom Hook

Create `src/hooks/useBrandAnalysis.js`:

```javascript
import { useState, useCallback } from 'react'
import { analyzeUrl, getHistory as fetchHistory } from '../services/api'

export const useBrandAnalysis = () => {
  const [analysis, setAnalysis] = useState(null)
  const [history, setHistory] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const analyze = useCallback(async (url, queries = null) => {
    setLoading(true)
    setError(null)

    try {
      const result = await analyzeUrl(url, queries)
      setAnalysis(result)
      setHistory(prev => [result, ...prev])
      return result
    } catch (err) {
      const errorMessage = err.message || 'Failed to analyze brand'
      setError(errorMessage)
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  const getHistory = useCallback(async () => {
    try {
      const data = await fetchHistory()
      setHistory(data.analyses || [])
      return data
    } catch (err) {
      setError(err.message)
      throw err
    }
  }, [])

  const reset = useCallback(() => {
    setAnalysis(null)
    setError(null)
  }, [])

  return {
    analysis,
    history,
    loading,
    error,
    analyze,
    getHistory,
    reset
  }
}
```

### Step 4: Create Chart Component (D3.js)

Create `src/components/SentimentChart.jsx`:

```javascript
import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { Card } from './ui/card'

export const SentimentChart = ({ data, title }) => {
  const svgRef = useRef(null)

  useEffect(() => {
    if (!data || data.length === 0 || !svgRef.current) return

    const width = 400
    const height = 300
    const margin = { top: 20, right: 30, bottom: 30, left: 60 }

    // Clear previous content
    d3.select(svgRef.current).selectAll("*").remove()

    // Create SVG
    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)

    // Create scales
    const xScale = d3.scaleBand()
      .domain(data.map(d => d.name))
      .range([margin.left, width - margin.right])
      .padding(0.1)

    const yScale = d3.scaleLinear()
      .domain([0, Math.max(...data.map(d => d.value)) * 1.1])
      .range([height - margin.bottom, margin.top])

    // Create bars
    svg.selectAll('.bar')
      .data(data)
      .join('rect')
      .attr('class', 'bar')
      .attr('x', d => xScale(d.name))
      .attr('y', d => yScale(d.value))
      .attr('width', xScale.bandwidth())
      .attr('height', d => height - margin.bottom - yScale(d.value))
      .attr('fill', (d, i) => {
        const colors = ['#4CAF50', '#9E9E9E', '#f44336']
        return colors[i % colors.length]
      })

    // Add X axis
    svg.append('g')
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(xScale))

    // Add Y axis
    svg.append('g')
      .attr('transform', `translate(${margin.left},0)`)
      .call(d3.axisLeft(yScale))

  }, [data])

  return (
    <Card className="p-4">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <svg ref={svgRef} className="w-full"></svg>
    </Card>
  )
}
```

### Step 5: Create Pie Chart Component

Create `src/components/SentimentPieChart.jsx`:

```javascript
import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { Card } from './ui/card'

export const SentimentPieChart = ({ data, title }) => {
  const svgRef = useRef(null)

  useEffect(() => {
    if (!data || data.length === 0 || !svgRef.current) return

    const width = 400
    const height = 300
    const radius = Math.min(width, height) / 2 - 20

    // Clear previous content
    d3.select(svgRef.current).selectAll("*").remove()

    // Create SVG
    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`)

    // Create pie generator
    const pie = d3.pie()
      .value(d => d.value)
      .sort(null)

    const arc = d3.arc()
      .innerRadius(0)
      .outerRadius(radius)

    const colors = ['#4CAF50', '#9E9E9E', '#f44336']
    const color = d3.scaleOrdinal()
      .domain(data.map(d => d.name))
      .range(colors)

    // Create pie slices
    svg.selectAll('.slice')
      .data(pie(data))
      .join('path')
      .attr('class', 'slice')
      .attr('d', arc)
      .attr('fill', d => color(d.data.name))
      .attr('stroke', 'white')
      .attr('stroke-width', 2)

    // Add labels
    svg.selectAll('.label')
      .data(pie(data))
      .join('text')
      .attr('class', 'label')
      .attr('transform', d => `translate(${arc.centroid(d)})`)
      .attr('text-anchor', 'middle')
      .attr('fill', 'white')
      .attr('font-weight', 'bold')
      .text(d => `${d.data.value}`)

  }, [data])

  return (
    <Card className="p-4">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <svg ref={svgRef} className="w-full"></svg>
    </Card>
  )
}
```

### Step 6: Create Dashboard Page

Create `src/pages/Dashboard.jsx`:

```javascript
import { useState, useEffect } from 'react'
import { Card } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Alert, AlertDescription } from '../components/ui/alert'
import { Badge } from '../components/ui/badge'
import { SentimentChart } from '../components/SentimentChart'
import { SentimentPieChart } from '../components/SentimentPieChart'
import { useBrandAnalysis } from '../hooks/useBrandAnalysis'
import { formatPercentage, formatDate, getSentimentColor, truncateText } from '../utils/formatters'

export default function Dashboard() {
  const [url, setUrl] = useState('')
  const [urlError, setUrlError] = useState('')
  const { analysis, loading, error, analyze, reset } = useBrandAnalysis()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setUrlError('')

    if (!url.trim()) {
      setUrlError('URL is required')
      return
    }

    try {
      await analyze(url)
    } catch (err) {
      // Error is handled by the hook
    }
  }

  const validateUrl = (value) => {
    setUrl(value)
    if (value && !value.startsWith('http')) {
      setUrlError('URL must start with http:// or https://')
    } else {
      setUrlError('')
    }
  }

  const sentimentData = analysis ? [
    { name: 'Positive', value: analysis.summary.positive },
    { name: 'Neutral', value: analysis.summary.neutral },
    { name: 'Negative', value: analysis.summary.negative }
  ] : []

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary">
      {/* Header */}
      <header className="bg-black/70 text-white py-8 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">🔍 AI Brand Monitor</h1>
          <p className="text-lg opacity-90">Track brand mentions and sentiment across AI models</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-4 mt-8">
        {/* Input Section */}
        <Card className="p-6 mb-8 bg-white shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Analyze Brand</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Enter Brand URL:</label>
              <Input
                type="url"
                placeholder="https://www.yourcompany.com"
                value={url}
                onChange={(e) => validateUrl(e.target.value)}
                disabled={loading}
                className="w-full"
              />
              {urlError && <p className="text-danger text-sm mt-1">{urlError}</p>}
            </div>

            <Button
              type="submit"
              disabled={loading || !!urlError}
              className="w-full bg-gradient-to-r from-primary to-secondary"
            >
              {loading ? 'Analyzing...' : 'Analyze Brand'}
            </Button>
          </form>

          {error && (
            <Alert className="mt-4 border-danger bg-red-50">
              <AlertDescription className="text-danger">
                ❌ {error}
              </AlertDescription>
            </Alert>
          )}
        </Card>

        {/* Results Section */}
        {analysis && (
          <div className="animate-slide-in space-y-6">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <Card className="p-4 bg-white shadow">
                <h3 className="text-sm font-semibold text-gray-600 uppercase">Brand Name</h3>
                <p className="text-2xl font-bold text-primary mt-2">{analysis.brand_name}</p>
              </Card>

              <Card className="p-4 bg-white shadow">
                <h3 className="text-sm font-semibold text-gray-600 uppercase">Total Queries</h3>
                <p className="text-2xl font-bold text-primary mt-2">{analysis.summary.total_queries}</p>
              </Card>

              <Card className="p-4 bg-white shadow">
                <h3 className="text-sm font-semibold text-gray-600 uppercase">Mentions</h3>
                <p className="text-2xl font-bold text-primary mt-2">{analysis.summary.mentions_count}</p>
              </Card>

              <Card className="p-4 bg-white shadow">
                <h3 className="text-sm font-semibold text-gray-600 uppercase">Visibility</h3>
                <p className="text-2xl font-bold text-primary mt-2">
                  {formatPercentage(analysis.summary.visibility)}
                </p>
              </Card>

              <Card className="p-4 bg-white shadow">
                <h3 className="text-sm font-semibold text-gray-600 uppercase">Overall Sentiment</h3>
                <p className={`text-2xl font-bold mt-2 ${getSentimentColor(analysis.summary.overall_sentiment)}`}>
                  {analysis.summary.overall_sentiment}
                </p>
              </Card>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SentimentPieChart
                data={sentimentData}
                title="Sentiment Distribution (Pie)"
              />
              <SentimentChart
                data={sentimentData}
                title="Sentiment Breakdown (Bar)"
              />
            </div>

            {/* Detailed Analysis Table */}
            <Card className="p-6 bg-white shadow-lg">
              <h3 className="text-xl font-bold mb-4">Query-by-Query Analysis</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="text-left px-4 py-3 font-semibold">Query</th>
                      <th className="text-left px-4 py-3 font-semibold">Mentioned</th>
                      <th className="text-left px-4 py-3 font-semibold">Sentiment</th>
                      <th className="text-left px-4 py-3 font-semibold">Confidence</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {analysis.analysis.map((item, idx) => (
                      <tr key={idx} className="hover:bg-gray-50">
                        <td className="px-4 py-3">
                          <p className="text-sm italic text-gray-700">
                            "{truncateText(item.query, 50)}"
                          </p>
                        </td>
                        <td className="px-4 py-3">
                          <Badge variant={item.sentiment_analysis.mentioned ? 'default' : 'secondary'}>
                            {item.sentiment_analysis.mentioned ? 'Yes' : 'No'}
                          </Badge>
                        </td>
                        <td className="px-4 py-3">
                          <Badge
                            variant={
                              item.sentiment_analysis.sentiment === 'POSITIVE' ? 'default' :
                              item.sentiment_analysis.sentiment === 'NEGATIVE' ? 'destructive' :
                              'secondary'
                            }
                          >
                            {item.sentiment_analysis.sentiment}
                          </Badge>
                        </td>
                        <td className="px-4 py-3">
                          <span className="font-mono text-sm">
                            {formatPercentage(item.sentiment_analysis.confidence * 100)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>

            {/* Sample Response */}
            <Card className="p-6 bg-white shadow-lg">
              <h3 className="text-xl font-bold mb-4">Sample Response from First Query</h3>
              <div className="bg-gray-50 p-4 rounded border-l-4 border-primary">
                <p className="text-sm text-gray-700 leading-relaxed">
                  "{truncateText(analysis.analysis[0]?.response, 300)}"
                </p>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                Analyzed at: {formatDate(analysis.timestamp)}
              </p>
            </Card>

            {/* Reset Button */}
            <Button
              onClick={() => {
                reset()
                setUrl('')
              }}
              variant="outline"
              className="w-full"
            >
              Analyze Another Brand
            </Button>
          </div>
        )}
      </main>
    </div>
  )
}
```

### Step 7: Create Main App Component

Create `src/App.jsx`:

```javascript
import Dashboard from './pages/Dashboard'
import './index.css'

function App() {
  return <Dashboard />
}

export default App
```

Update `src/main.jsx`:

```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

---

## Part 4: Running Tests

### Run All Tests

```bash
npm run test
```

### Run Tests with UI

```bash
npm run test:ui
```

### Run Tests with Coverage

```bash
npm run test:coverage
```

### Watch Mode

```bash
npm run test -- --watch
```

---

## Part 5: Running the Frontend

Make sure Phase 0 backend is running first:

```bash
# Terminal 1: Backend
cd backend
python -m uvicorn backend.main:app --reload

# Terminal 2: Frontend
cd frontend
npm run dev
```

Access at: `http://localhost:5173`

---

## Part 6: Important Notes on Tailwind + shadcn/ui

### Tailwind CSS Benefits Used:
- **Responsive Design**: Grid and flex utilities for mobile-first approach
- **Color System**: Custom primary/secondary colors defined in config
- **Spacing**: Consistent padding and margin using scale
- **Dark Mode Ready**: Can be extended with dark mode variants
- **Performance**: Only includes CSS used in components (tree-shaking)

### shadcn/ui Components Used:
- **Card**: Base container component with customizable styling
- **Button**: With variant prop (default, destructive, outline, secondary)
- **Input**: Form input with Tailwind styling
- **Alert & AlertDescription**: For error messages
- **Badge**: Status indicators with variants
- **Table**: Semantic table structure (if needed in Phase 2)

### CSS Variables:
shadcn/ui uses CSS variables that integrate perfectly with Tailwind. Check `src/components/ui/` for component definitions.

---

## Part 7: D3.js Usage for Charts

### D3.js in This Phase:

**Why D3.js over Recharts?**
- More control over visualization details
- Lighter bundle for custom charts
- Better for advanced animations later
- Perfect for building custom data stories

**Charts Implemented:**
1. **SentimentChart** - Horizontal bar chart showing sentiment counts
2. **SentimentPieChart** - Pie chart for sentiment distribution

**D3.js Concepts Used:**
- `d3.select()` - DOM manipulation
- `d3.scaleBand()` / `d3.scaleLinear()` - Scaling data to pixel space
- `d3.axisBottom()` / `d3.axisLeft()` - Generating axes
- `d3.pie()` / `d3.arc()` - Pie chart generators
- `d3.scaleOrdinal()` - Color mapping

**Future Chart Enhancements (Phase 2+):**
- Time-series chart (sentiment trends over time)
- Heatmap (competitors vs metrics)
- Network graph (brand relationships)
- Interactive tooltips with transitions

---

## Part 8: Frontend Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── ui/                 # shadcn/ui components
│   │   │   ├── card.jsx
│   │   │   ├── button.jsx
│   │   │   ├── input.jsx
│   │   │   ├── alert.jsx
│   │   │   ├── badge.jsx
│   │   │   └── ...
│   │   ├── SentimentChart.jsx
│   │   └── SentimentPieChart.jsx
│   ├── pages/
│   │   └── Dashboard.jsx
│   ├── services/
│   │   └── api.js
│   ├── hooks/
│   │   └── useBrandAnalysis.js
│   ├── utils/
│   │   └── formatters.js
│   ├── __tests__/
│   │   ├── setup.js
│   │   ├── unit/
│   │   │   ├── formatters.test.js
│   │   │   └── api.test.js
│   │   └── integration/
│   │       └── dashboard.test.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── tailwind.config.js
```

---

## Part 9: Phase 1 Checklist

- [ ] Vite + React project created
- [ ] Tailwind CSS configured
- [ ] shadcn/ui initialized and components installed
- [ ] D3.js added and basic charts working
- [ ] vitest and React Testing Library setup
- [ ] All unit tests passing
- [ ] All integration tests passing
- [ ] API service implemented
- [ ] Custom hook (useBrandAnalysis) working
- [ ] Utility functions tested and working
- [ ] Dashboard page displaying correctly
- [ ] Charts rendering with data from backend
- [ ] Table showing query analysis
- [ ] Error handling working
- [ ] Loading states visible
- [ ] Tailwind styling applied throughout
- [ ] Responsive design tested on mobile/tablet
- [ ] Frontend connects to Phase 0 backend
- [ ] Full end-to-end flow working (input URL → analyze → display results)

---

## Part 10: Testing Commands

```bash
# Run tests
npm run test

# Run specific test file
npm run test src/__tests__/unit/formatters.test.js

# Run tests with watch
npm run test -- --watch

# Run tests with coverage report
npm run test:coverage

# Run UI for visual test results
npm run test:ui
```

---

## Part 11: Key Features in Phase 1

✅ **Tailwind CSS**: Responsive, utility-first styling  
✅ **shadcn/ui**: Pre-built components with Tailwind integration  
✅ **D3.js Charts**: Professional data visualizations  
✅ **TDD Approach**: Tests written before implementation  
✅ **Custom Hooks**: Reusable logic (useBrandAnalysis)  
✅ **Error Handling**: User-friendly error messages  
✅ **Loading States**: Better UX with feedback  
✅ **Formatters**: Reusable formatting utilities  

---

## Part 12: Common Issues & Solutions

### Charts Not Rendering?
- Make sure D3.js is installed: `npm install d3`
- Check browser console for errors
- Ensure data array is not empty

### Tailwind Styles Not Applied?
- Verify content paths in `tailwind.config.js`
- Rebuild with `npm run dev`
- Check CSS import in `index.css`

### API Connection Fails?
- Ensure Phase 0 backend is running on port 8000
- Check CORS settings in backend (should be enabled)
- Verify API_BASE_URL in `src/services/api.js`

### Tests Failing?
- Run `npm run test:ui` to see visual test results
- Check that mocks are properly cleared between tests
- Ensure all dependencies installed

---

## Next Steps

**Phase 2**: Add PostgreSQL database for persistent storage  
**Phase 3**: Implement scheduled daily monitoring with background jobs  
**Phase 4**: Add multi-model support (Gemini, Perplexity APIs)  
**Phase 5**: Advanced analytics (trends, predictions, competitor benchmarking)