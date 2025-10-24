import { useState, useEffect, useRef } from 'react'
import { Moon, Sun, TrendingUp, Activity, MessageSquare, Eye, ArrowRight, Check, Sparkles, BarChart3, Zap, ChartNoAxesGantt, MessageSquareText, SmilePlus, View, ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import QueryCustomizer from '@/components/QueryCustomizer'

export default function ComingSoon() {
  const [darkMode, setDarkMode] = useState(false)
  const [step, setStep] = useState(1) // 1: URL input, 2: Keywords + Email input, 3: Results
  const [brandUrl, setBrandUrl] = useState('')
  const [email, setEmail] = useState('')
  const [customQueries, setCustomQueries] = useState(null)
  const [customKeywords, setCustomKeywords] = useState(null)
  const [showAdvanced, setShowAdvanced] = useState(true)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [preview, setPreview] = useState(null)
  const videoRef = useRef(null)
  const mainSectionRef = useRef(null)
  const inputRef = useRef(null)

  // Set light mode on initial load
  useEffect(() => {
    document.documentElement.classList.remove('dark')
  }, [])

  // Control video playback based on loading state
  useEffect(() => {
    if (videoRef.current) {
      if (loading) {
        videoRef.current.play()
      } else {
        videoRef.current.pause()
      }
    }
  }, [loading])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  const handleUrlSubmit = (e) => {
    e.preventDefault()
    if (!brandUrl.trim()) {
      setError('Please enter a valid URL')
      return
    }

    // Auto-add https:// if no protocol is provided
    let formattedUrl = brandUrl.trim()
    if (!formattedUrl.match(/^https?:\/\//i)) {
      formattedUrl = 'https://' + formattedUrl
      setBrandUrl(formattedUrl)
    }

    setError('')
    setStep(2) // Go to keywords step
  }

  const handleEmailSubmit = async (e) => {
    e.preventDefault()

    if (!email.trim() || !email.includes('@')) {
      setError('Please enter a valid email address')
      return
    }

    setLoading(true)
    setError('')

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000'
      const response = await fetch(`${apiUrl}/api/waitlist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          brand_url: brandUrl,
          email: email,
          custom_queries: customQueries,
          custom_keywords: customKeywords,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to join waitlist')
      }

      const data = await response.json()
      setPreview(data.preview)
      setStep(3) // Go to results step
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const resetForm = () => {
    setStep(1)
    setBrandUrl('')
    setEmail('')
    setCustomQueries(null)
    setCustomKeywords(null)
    setPreview(null)
    setError('')
  }

  const scrollToForm = () => {
    mainSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setTimeout(() => {
      inputRef.current?.focus()
    }, 500)
  }

  return (
    <div className="min-h-screen relative line-pattern">
       
  <div className="absolute inset-0 -z-10 h-full w-full bg-slate-400/10 bg-[linear-gradient(to_right,#1d4ed80A_1px,transparent_1px),linear-gradient(to_bottom,#1d4ed80A_1px,transparent_1px)] bg-[size:128px_204px]"></div>
      
      {/* Header */}
      <header className="max-w-[90%] mx-auto rounded-3xl border-b bg-white/90 dark:bg-slate-900/10 backdrop-blur-sm sticky top-4 z-[100] dark:border-slate-800 relative">

        <div className="mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ChartNoAxesGantt className="h-8 w-8 text-slate-950 dark:text-white" />
            <span className="text-2xl font-bold bg-slate-950 dark:bg-white bg-clip-text text-transparent">
              VISIBI
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center gap-8">
            <a
              href="/platform"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Platform
            </a>
            <a
              href="/solutions"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Solutions
            </a>

             <a
              href="/pricing"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Pricing
            </a>

            <a
              href="/careers"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Careers
            </a>
          </nav>
        </div>
      </header>



      {/** adding new hero header */}
     
      {/* Hero Section */}
      <section className="max-w-[90%] mx-auto items-left px-12 py-4 md:pt-28 mb-4 relative">
        <div className="lg:block absolute h-full w-full border-t border-l border-r border-b border-blue-100 dark:border-gray-800 rotate-0 left-0 top-8 pattern-background rounded-xl"></div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          
          {/* Left Column - Content */}
          <div className="max-w-4xl text-left space-y-8 relative z-10">

          <div className="inline-block">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/50 text-blue-700 dark:text-blue-400 text-sm font-medium border dark:border-blue-900">
              <Zap className="h-4 w-4" />
              Launching soon with exclusive early access
            </span>
          </div>
           <div className="inline-block">
            <h1 className="font-inter text-md md:text-7xl font-bold tracking-tight text-gray-950 dark:text-slate-100">
            Know where your Brand appears in AI Conversations
            {/* <span className="block text-gray-900 dark:text-slate-200 mt-2 font-light">Before Your Competitors</span> */}
            </h1>
            </div>
            <h2 className="text-md md:text-2xl font-thin text-blue-700 dark:text-slate-100 mt-4">
             Your brand's visibility and reputation across ChatGPT, Claude, Gemini,
            and Perplexity.
            </h2>

            <div className="py-8">
              <button
                onClick={scrollToForm}
                className="inline-flex items-center px-6 py-3 bg-blue-700 text-white rounded-3xl font-medium hover:bg-blue-800 transition-colors"
              >
                Get Visualise
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>

        </div>
          {/* Right Column - Image */}
          <div className="relative w-full max-w-full mx-auto">
           
             {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-12 pt-6">
              <Card className="border-1 hover:border-blue-300 dark:hover:border-blue-700 transition-colors">
                <CardHeader>
                  <SmilePlus size={48} strokeWidth={1.50} absoluteStrokeWidth className="text-gray-700" />
                  <CardTitle className="font-space-mono pb-4 font-thin">Sentiment Analysis</CardTitle>
                  <CardDescription className="font-space-mono text-md">
                    Track how AI models perceive your brand - positive, neutral, or negative
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-1 hover:border-purple-300 dark:hover:border-purple-700 transition-colors">
                <CardHeader>
                   <MessageSquareText size={48} strokeWidth={1.50} absoluteStrokeWidth className="text-gray-700" />
                  <CardTitle className="font-space-mono pb-4 font-thin">Mention Tracking</CardTitle>
                  <CardDescription className="font-space-mono text-md">
                    See how often your brand gets mentioned in AI responses
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-1 hover:border-pink-300 dark:hover:border-pink-700 transition-colors">
                <CardHeader>
                  <View size={48} strokeWidth={1.50} absoluteStrokeWidth className="text-gray-700" />
                  <CardTitle className="font-space-mono pb-4 font-thin">Citation</CardTitle>
                  <CardDescription className="font-space-mono text-md">
                    Measure your brand's presence across AI platforms
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
            </div>
      </div>
    </section>


    

      {/** End new nav header from voyse */}
      {/* Main Content */}
      <main ref={mainSectionRef} className="max-w-[90%] mx-auto px-6 py-12 relative z-10 bg-white dark:bg-gray-950 rounded-xl border border-gray-200 dark:border-gray-800 mb-32">
        {step === 1 && (
          <div className="space-y-8">
            {/* Hero Section */}
    
            {/* URL Input Form */}
            <Card className="max-w-4xl mx-auto border-0 shadow-none bg-white dark:bg-slate-950">
              <CardHeader className="text-center">
                <CardTitle className="font-space-mono font-thin">Get Your Free Brand Analysis</CardTitle>
                <CardDescription>
                  Enter your brand URL to get started
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleUrlSubmit} className="space-y-4">
                  <div className="flex gap-3 md:flex-row flex-col">
                    <Input
                      ref={inputRef}
                      type="text"
                      placeholder="www.yourbrand.com or yourbrand.com"
                      value={brandUrl}
                      onChange={(e) => setBrandUrl(e.target.value)}
                      className="flex-1 h-14 px-8 text-md font-space-mono placeholder-blue-500 border-blue-400 bg-blue-100/30 dark:bg-blue-900/50 text-blue-700 dark:text-blue-400 rounded-3xl"
                      required
                    />
                    <Button type="submit" size="xl" className="h-14 px-8 bg-blue-700 dark:bg-blue-900/50 text-white text-lg font-semibold dark:text-blue-400 rounded-3xl">
                      Get Visualise
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                  {error && (
                    <Alert variant="destructive">
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}
                </form>
                   <div className="mt-6">
                  <p className="text-sm text-gray-700 dark:text-gray-400 text-center">
                    Join 100+ brands already monitoring their AI presence
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>


        )}

        {step === 2 && (
          <div className="mx-auto space-y-6 max-w-7xl">
            <Card className="bg-white dark:bg-slate-950 border-0 max-w-4xl mx-auto">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Customize & Get Early Access</CardTitle>
                <CardDescription>
                  Add keywords (optional) and enter your email to get your free analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleEmailSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Brand URL</label>
                    <div className="flex items-center gap-2 p-3 bg-green-50 dark:bg-gray-800 rounded-lg">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{brandUrl}</span>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => setStep(1)}
                        className="ml-auto"
                      >
                        Change
                      </Button>
                    </div>
                  </div>

                  {customQueries && customQueries.length > 0 && (
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Custom Questions ({customQueries.length})</label>
                      <div className="space-y-2 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                        {customQueries.map((query, index) => (
                          <div
                            key={index}
                            className="text-sm p-2 bg-white dark:bg-slate-800 rounded border border-purple-200 dark:border-purple-700"
                          >
                            {query}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {customKeywords && customKeywords.length > 0 && (
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Added Keywords ({customKeywords.length})</label>
                      <div className="flex flex-wrap gap-2 p-3 bg-green-50 dark:bg-blue-900/20 rounded-lg">
                        {customKeywords.map((keyword, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="bg-white dark:bg-slate-800"
                          >
                            {keyword}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Advanced Options Toggle */}
                  <div className="pt-2">
                    <Button
                      type="button"
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

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email Address</label>
                    <Input
                      type="email"
                      placeholder="you@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12 text-lg bg-white dark:bg-slate-950 dark:text-white placeholder-gray-500 border-gray-300 dark:border-slate-700"
                      required
                    />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      size="lg"
                      className="flex-1"
                      onClick={() => setStep(1)}
                    >
                      Back
                    </Button>
                    <Button type="submit" size="lg" className="flex-1 h-12 rounded-3xl dark:bg-white-800 dark:text-slate-950" disabled={loading}>
                      {loading ? 'Analyzing...' : 'Get My Free Analysis'}
                      {!loading && <ArrowRight className="ml-2 h-5 w-5" />}
                    </Button>
                  </div>

                  {error && (
                    <Alert variant="destructive">
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        )}

        {step === 3 && preview && (
          <div className="max-w-7xl mx-auto space-y-12">
            {/* Success Message */}
            <Card className="bg-white dark:bg-green-950/30 border-0">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-2xl">You're on the list!</CardTitle>
                <CardDescription className="text-base text-gray-600">
                  We'll send your detailed brand analysis report to <strong className="font-semibold text-gray-900 dark:text-gray-100">{email}</strong> soon.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Preview Analytics */}
            <div className="space-y-8">
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-2">Quick Preview</h3>
                <p className="text-md text-gray-600 dark:text-gray-400">
                  Here's what we're analysing for <span className="font-semibold text-blue-700 text-md dark:text-gray-100">{preview.brand_name}</span>
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Mentions Circular Chart - out of 100 */}
                <Card className="border-1 shadow-sm bg-gray-100/20 dark:bg-slate-950 transition-colors">
                  <CardHeader className="flex flex-col items-center justify-center py-8">
                    <div className="relative w-40 h-40 mb-4">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle
                          cx="80"
                          cy="80"
                          r="70"
                          stroke="#d2d5db"
                          strokeWidth="8"
                          fill="none"
                        />
                        <circle
                          cx="80"
                          cy="80"
                          r="70"
                          stroke="#1e293b"
                          strokeWidth="8"
                          fill="none"
                          strokeDasharray={`${Math.min((preview.mentions / 100) * 439.8, 439.8)} 439.8`}
                          strokeLinecap="round"
                          className="transition-all duration-1000 ease-out"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-5xl font-inter font-bold text-gray-700 dark:text-white">
                            {preview.mentions}
                          </div>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-lg font-light font-space-mono text-gray-600 dark:text-gray-400">Total Mentions</CardDescription>
                  </CardHeader>
                </Card>

                {/* Citations Circular Chart - out of 100 */}
                <Card className="border-1 shadow-sm bg-gray-100/20 dark:bg-slate-950 transition-colors">
                  <CardHeader className="flex flex-col items-center justify-center py-8">
                    <div className="relative w-40 h-40 mb-4">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle
                          cx="80"
                          cy="80"
                          r="70"
                          stroke="#e5e7eb"
                          strokeWidth="8"
                          fill="none"
                        />
                        <circle
                          cx="80"
                          cy="80"
                          r="70"
                          stroke="#1e293b"
                          strokeWidth="8"
                          fill="none"
                          strokeDasharray={`${Math.min((preview.citations / 100) * 439.8, 439.8)} 439.8`}
                          strokeLinecap="round"
                          className="transition-all duration-1000 ease-out"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-5xl font-inter font-bold text-gray-700 dark:text-white">
                            {preview.citations}
                          </div>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-lg font-light font-space-mono text-gray-600 dark:text-gray-400">Citations</CardDescription>
                  </CardHeader>
                </Card>

                {/* Sentiment Score Circular Chart - percentage based */}
                <Card className="border-1 shadow-sm bg-gray-100/20 dark:bg-slate-950 transition-colors">
                  <CardHeader className="flex flex-col items-center justify-center py-8">
                    <div className="relative w-40 h-40 mb-4">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle
                          cx="80"
                          cy="80"
                          r="70"
                          stroke="#e5e7eb"
                          strokeWidth="8"
                          fill="none"
                        />
                        <circle
                          cx="80"
                          cy="80"
                          r="70"
                          stroke={preview.sentiment === 'POSITIVE' ? '#10b981' : preview.sentiment === 'NEGATIVE' ? '#ef4444' : '#6b7280'}
                          strokeWidth="8"
                          fill="none"
                          strokeDasharray={`${(preview.visibility / 100) * 439.8} 439.8`}
                          strokeLinecap="round"
                          className="transition-all duration-1000 ease-out"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className={`text-5xl font-inter font-bold ${
                            preview.sentiment === 'POSITIVE' ? 'text-green-600 dark:text-green-400' :
                            preview.sentiment === 'NEGATIVE' ? 'text-red-600 dark:text-red-400' :
                            'text-gray-600 dark:text-gray-400'
                          }`}>
                            {Math.round(preview.visibility)}
                          </div>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-lg font-light font-space-mono text-gray-600 dark:text-gray-400">Sentiment Score</CardDescription>
                  </CardHeader>
                </Card>
              </div>

              <Alert className="bg-blue-50 dark:bg-blue-900/50 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300">
                <Sparkles className="h-4 w-4" />
                <AlertDescription>
                  The full report will include detailed sentiment breakdown, competitive analysis, position tracking, and actionable insights.
                </AlertDescription>
              </Alert>

              {/* Sample Query & Answer */}
              {preview.sample_query && preview.sample_response && (
                <Card className="mt-6 bg-white dark:bg-slate-950 border-2 border-blue-200 dark:border-blue-800">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <MessageSquare className="h-5 w-5 text-blue-600" />
                      Sample AI Response
                    </CardTitle>
                    <CardDescription>Example of how AI models mention your brand</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                        Question:
                      </div>
                      <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-gray-800 dark:text-gray-200">
                        {preview.sample_query}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                        AI Response:
                      </div>
                      <div className="p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg text-gray-800 dark:text-gray-200 leading-relaxed">
                        {preview.sample_response.split(new RegExp(`(${preview.brand_name})`, 'gi')).map((part, index) =>
                          part.toLowerCase() === preview.brand_name.toLowerCase() ? (
                            <mark key={index} className="bg-yellow-200 dark:bg-yellow-600 font-semibold px-1 rounded">
                              {part}
                            </mark>
                          ) : (
                            <span key={index}>{part}</span>
                          )
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Citation URLs */}
              {preview.citation_urls && preview.citation_urls.length > 0 && (
                <Card className="mt-4 bg-white dark:bg-slate-950 border-2 border-purple-200 dark:border-purple-800">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Activity className="h-5 w-5 text-purple-600" />
                      Query Sources ({preview.citation_urls.length})
                    </CardTitle>
                    <CardDescription>All queries analyzed for your brand</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {preview.citation_urls.map((citation, index) => (
                        <div key={index} className={`p-3 rounded-lg border ${citation.mentioned ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800' : 'bg-gray-50 dark:bg-gray-900/20 border-gray-200 dark:border-gray-800'}`}>
                          <div className="flex items-start gap-2">
                            <Badge variant="outline" className={`mt-1 ${citation.mentioned ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 border-green-300 dark:border-green-700' : 'bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700'}`}>
                              {index + 1}
                            </Badge>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <div className="text-sm text-gray-800 dark:text-gray-200 flex-1">
                                  {citation.query}
                                </div>
                                {citation.mentioned && (
                                  <Badge className="bg-green-600 text-white text-xs">
                                    Brand Mentioned
                                  </Badge>
                                )}
                              </div>
                              <a
                                href={citation.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`text-xs hover:underline flex items-center gap-1 ${citation.mentioned ? 'text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300' : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300'}`}
                              >
                                <span>View in ChatGPT</span>
                                <ArrowRight className="h-3 w-3" />
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* CTA */}

             <div className="py-2 text-center">
              <button
                onClick={resetForm}
                className="inline-flex items-center px-6 py-3 bg-blue-700 text-white rounded-lg font-medium hover:bg-blue-800 transition-colors"
              >
                Visualise another Brand
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>

{/* 
            <div className="text-center pt-8">
              <Button variant="outline" size="lg" onClick={resetForm}>
                Analyse Another Brand
              </Button>
            </div> */}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="max-w-[90%] mx-auto px-6 py-12 mt-24 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-950 rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Column - Logo and Description */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <ChartNoAxesGantt className="h-8 w-8 text-slate-950 dark:text-white" />
              <span className="text-2xl font-bold bg-slate-950 dark:bg-white bg-clip-text text-transparent">
                VISIBI
              </span>
            </div>
            <p className="font-space-mono text-lg text-gray-700 dark:text-gray-300 max-w-md leading-relaxed">
             Track and manage your brand’s presence across leading AI platforms.
            </p>
            <div className="flex gap-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-space-mono text-sm text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400 uppercase tracking-wide"
              >
                Github
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-space-mono text-sm text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400 uppercase tracking-wide"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right Column - Newsletter */}
          <div className="space-y-6">
            <div className="">
              <h3 className="font-sans text-xl text-gray-950 dark:text-white mb-2">
                Want your brand to stand out in the age of AI conversations?
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Stay informed with expert updates on brand visibility across AI platforms.
              </p>
            </div>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Email Address"
                className="flex-1 font-space-mono text-sm placeholder:text-gray-400"
              />
              <Button className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 font-space-mono text-sm uppercase px-6">
                Start Now
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Row - Links and Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-space-mono text-xs text-gray-500 dark:text-gray-500">
            © 2025 VISIBI — ALL RIGHTS RESERVED
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="font-space-mono text-xs text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400 uppercase tracking-wide"
            >
              Terms of Use
            </a>
            <a
              href="#"
              className="font-space-mono text-xs text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400 uppercase tracking-wide"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
