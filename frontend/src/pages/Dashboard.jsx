import { useState } from 'react'
import { Moon, Sun, Activity, MessageSquare, ChevronDown, ChevronUp, Cpu, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'
import { useBrandAnalysis } from '@/hooks/useBrandAnalysis'
import SentimentChart from '@/components/SentimentChart'
import ConfidenceChart from '@/components/ConfidenceChart'
import Sidebar from '@/components/Sidebar'
import QueryCustomizer from '@/components/QueryCustomizer'

export default function Dashboard() {
  const [brandUrl, setBrandUrl] = useState('')
  const [darkMode, setDarkMode] = useState(false)
  const [activePage, setActivePage] = useState('dashboard')
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [customQueries, setCustomQueries] = useState(null)
  const [customKeywords, setCustomKeywords] = useState(null)
  const { analyze, loading, error, analysis } = useBrandAnalysis()

  const handleAnalyze = () => {
    if (brandUrl.trim()) {
      analyze(brandUrl, customQueries, customKeywords)
    }
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  const getSentimentColor = (sentiment) => {
    switch (sentiment) {
      case 'POSITIVE':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
      case 'NEGATIVE':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
      case 'NEUTRAL':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100'
    }
  }

  const handleNavigation = (pageId) => {
    setActivePage(pageId)
    // For now, just update active state
    // In future phases, we'll render different content
  }

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <Sidebar activePage={activePage} onNavigate={handleNavigation} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-card border-b border-border">
          <div className="px-6 py-4 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Brand Analysis Dashboard</h1>
              <p className="text-sm text-muted-foreground mt-1">
                Monitor your brand sentiment across AI models
              </p>
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={toggleDarkMode}
              className="rounded-full"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </header>

        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Input Section */}
            <Card>
              <CardHeader>
                <CardTitle>Analyze Brand</CardTitle>
                <CardDescription>
                  Enter a brand URL to analyze sentiment across AI conversations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-4">
                  <Input
                    type="url"
                    placeholder="https://www.example.com"
                    value={brandUrl}
                    onChange={(e) => setBrandUrl(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleAnalyze()}
                    className="flex-1"
                  />
                  <Button onClick={handleAnalyze} disabled={loading || !brandUrl.trim()}>
                    {loading ? 'Analyzing...' : 'Analyze'}
                  </Button>
                </div>

                {/* Advanced Options Toggle */}
                <div className="pt-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowAdvanced(!showAdvanced)}
                    className="w-full justify-between text-muted-foreground hover:text-foreground"
                  >
                    <span className="flex items-center gap-2">
                      <Zap className="h-4 w-4" />
                      Advanced Options (Custom Queries & Keywords)
                    </span>
                    {showAdvanced ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </Button>
                  
                  {showAdvanced && (
                    <div className="mt-4">
                      <QueryCustomizer
                        onQueriesChange={setCustomQueries}
                        onKeywordsChange={setCustomKeywords}
                      />
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

        {/* Error Message */}
        {error && (
          <Alert variant="destructive" className="mb-8">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {/* Loading State */}
        {loading && (
          <div className="space-y-4">
            <Skeleton className="h-32 w-full" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Skeleton className="h-24" />
              <Skeleton className="h-24" />
              <Skeleton className="h-24" />
            </div>
            <Skeleton className="h-64 w-full" />
          </div>
        )}

        {/* Results */}
        {analysis && !loading && (
          <div className="space-y-6">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardDescription>Brand</CardDescription>
                  <CardTitle className="text-2xl">{analysis.brand_name}</CardTitle>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardDescription>Overall Sentiment</CardDescription>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge className={getSentimentColor(analysis.summary.overall_sentiment)}>
                      {analysis.summary.overall_sentiment}
                    </Badge>
                  </div>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardDescription>Mentions</CardDescription>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <MessageSquare className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    {analysis.summary.mentions_count}
                  </CardTitle>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardDescription>Visibility</CardDescription>
                  <CardTitle className="text-2xl">
                    {analysis.summary.visibility.toFixed(1)}%
                  </CardTitle>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardDescription>Queries Analyzed</CardDescription>
                  <CardTitle className="text-2xl">{analysis.queries_analyzed}</CardTitle>
                </CardHeader>
              </Card>
            </div>

            {/* API Usage Metrics */}
            {analysis.usage && (
              <Card className="border-purple-200 dark:border-purple-800">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Cpu className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                      <CardTitle className="text-lg">API Usage</CardTitle>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {analysis.usage.model}
                    </Badge>
                  </div>
                  <CardDescription>Token usage and estimated cost</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                        {analysis.usage.total_tokens.toLocaleString()}
                      </div>
                      <div className="text-xs text-muted-foreground">Total Tokens</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        {analysis.usage.prompt_tokens.toLocaleString()}
                      </div>
                      <div className="text-xs text-muted-foreground">Input Tokens</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                        {analysis.usage.completion_tokens.toLocaleString()}
                      </div>
                      <div className="text-xs text-muted-foreground">Output Tokens</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                        ${analysis.usage.estimated_cost.toFixed(4)}
                      </div>
                      <div className="text-xs text-muted-foreground">Est. Cost (USD)</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Sentiment Breakdown with Chart */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Sentiment Distribution</CardTitle>
                  <CardDescription>Visual breakdown of sentiment analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <SentimentChart data={analysis.summary} darkMode={darkMode} />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Sentiment Counts</CardTitle>
                  <CardDescription>Numerical sentiment breakdown</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                        {analysis.summary.positive}
                      </div>
                      <div className="text-sm text-muted-foreground">Positive</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-600 dark:text-gray-400">
                        {analysis.summary.neutral}
                      </div>
                      <div className="text-sm text-muted-foreground">Neutral</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-600 dark:text-red-400">
                        {analysis.summary.negative}
                      </div>
                      <div className="text-sm text-muted-foreground">Negative</div>
                    </div>
                  </div>
                  <Separator className="my-4" />
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Average Confidence</span>
                      <span className="font-medium">{(analysis.summary.average_confidence * 100).toFixed(0)}%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Total Mentions</span>
                      <span className="font-medium">{analysis.summary.mentions_count} of {analysis.queries_analyzed}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Confidence Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Confidence Levels by Query</CardTitle>
                <CardDescription>
                  Top queries ranked by sentiment confidence
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ConfidenceChart data={analysis.analysis} darkMode={darkMode} />
              </CardContent>
            </Card>

            {/* Query Results */}
            <Card>
              <CardHeader>
                <CardTitle>Query Analysis</CardTitle>
                <CardDescription>
                  Individual query results and responses
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {analysis.analysis.map((item, index) => (
                  <div key={index}>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h4 className="font-medium mb-1">{item.query}</h4>
                        <p className="text-sm text-muted-foreground line-clamp-3">
                          {item.response}
                        </p>
                      </div>
                      <Badge className={`ml-4 ${getSentimentColor(item.sentiment_analysis.sentiment)}`}>
                        {item.sentiment_analysis.sentiment}
                      </Badge>
                    </div>
                    <div className="flex gap-4 text-xs text-muted-foreground">
                      <span>Confidence: {(item.sentiment_analysis.confidence * 100).toFixed(0)}%</span>
                      <span>Position: {item.sentiment_analysis.position}</span>
                    </div>
                    {index < analysis.analysis.length - 1 && <Separator className="mt-4" />}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        )}

        {/* Empty State */}
        {!analysis && !loading && !error && (
          <Card className="text-center py-12">
            <CardContent>
              <Activity className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <CardTitle className="mb-2">No Analysis Yet</CardTitle>
              <CardDescription>
                Enter a brand URL above to get started with sentiment analysis
              </CardDescription>
            </CardContent>
          </Card>
        )}
        </div>
      </main>
      </div>
    </div>
  )
}
