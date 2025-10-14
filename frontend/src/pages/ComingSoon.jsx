import { useState, useEffect, useRef } from 'react'
import { Moon, Sun, TrendingUp, Activity, MessageSquare, Eye, ArrowRight, Check, Sparkles, BarChart3, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'

export default function ComingSoon() {
  const [darkMode, setDarkMode] = useState(true)
  const [step, setStep] = useState(1) // 1: URL input, 2: Email input, 3: Results
  const [brandUrl, setBrandUrl] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [preview, setPreview] = useState(null)
  const videoRef = useRef(null)

  // Set dark mode on initial load
  useEffect(() => {
    document.documentElement.classList.add('dark')
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
    setError('')
    setStep(2)
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
      const response = await fetch('http://localhost:8000/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          brand_url: brandUrl,
          email: email,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to join waitlist')
      }

      const data = await response.json()
      setPreview(data.preview)
      setStep(3)
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
    setPreview(null)
    setError('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-t from-white to-gray-100 dark:from-black dark:to-slate-950 relative">
  
      {/* Background Video */}
      <div className="fixed inset-0 z-0 opacity-30 dark:opacity-20 pointer-events-none">
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-30 dark:opacity-40"
        >
          <source src="/voice-wave-ai.mp4" type="video/mp4" />
        </video>
      </div>


      {/* Header */}
      <header className="max-w-7xl mx-auto rounded-3xl border-t bg-white/80 dark:bg-slate-900/10 backdrop-blur-sm sticky top-8 z-[100] dark:border-slate-800 shadow-lg relative">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BarChart3 className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <h1 className="text-2xl font-bold bg-slate-950 dark:bg-white bg-clip-text text-transparent">
              VISIBI
            </h1>
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



      {/** adding new hero header from voyse */}
     
      {/* Hero Section */}
      <section className="container max-w-7xl mx-auto items-left px-4 py-20 md:py-16 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="max-w-3xl text-left space-y-8 relative z-10">
          <div className="inline-block">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/50 text-blue-700 dark:text-blue-400 text-sm font-medium border dark:border-blue-900">
              <Zap className="h-4 w-4" />
              Launching soon with exclusive early access
            </span>
          </div>
            <h1 className="text-4xl md:text-6xl tracking-tight font-sans font-bold dark:text-slate-100">
            Know Where Your Brand appears in AI Conversations
            {/* <span className="block text-gray-900 dark:text-slate-200 mt-2 font-light">Before Your Competitors</span> */}
            </h1>
            <h2 className="text-2xl md:text-2xl font-light text-blue-700 dark:text-slate-100 mt-4">
             Your brand's visibility and reputation across ChatGPT, Claude, Gemini, 
            and Perplexity.
            </h2>
          {/* <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl">
            Track, analyze, and optimize your brand&apos;s presence across ChatGPT, Claude, Gemini, 
            and Perplexity. Get actionable insights to improve your GEO performance.
          </p> */}
   
        </div>
      </div>
     
    </section>

      {/** End new nav header from voyse */}
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {step === 1 && (
          <div className="space-y-8">
            {/* Hero Section */}
            {/* <div className="text-center space-y-4 py-12">
              <Badge className="mb-4 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                <Sparkles className="h-3 w-3 mr-1" />
                Coming Soon - Early Access
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                AI Search Analytics
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Discover how your brand appears in AI conversations across ChatGPT, Claude, Perplexity, and Gemini
              </p>
            </div> */}


            
            {/* URL Input Form */}
            <Card className="max-w-7xl mx-auto bg-white dark:bg-slate-950 border-grey-200">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Get Your Free Brand Analysis</CardTitle>
                <CardDescription>
                  Enter your brand URL to get started
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleUrlSubmit} className="space-y-4">
                  <div className="flex gap-3">
                    <Input
                      type="url"
                      placeholder="https://www.yourbrand.com"
                      value={brandUrl}
                      onChange={(e) => setBrandUrl(e.target.value)}
                      className="flex-1 h-12 text-lg bg-white dark:bg-slate-950 dark:text-white placeholder-gray-500 border-gray-300 dark:border-slate-700"
                      required
                    />
                    <Button type="submit" size="lg" className="h-12 px-8">
                      Next
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                  {error && (
                    <Alert variant="destructive">
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}
                </form>
                   <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                    Join 100+ brands already monitoring their AI presence
                  </p>
                </div>
              </CardContent>
            </Card>


{/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="border-1 hover:border-blue-300 dark:hover:border-blue-700 transition-colors">
                <CardHeader>
                  <Activity className="h-10 w-10 text-blue-600 dark:text-blue-400 mb-2" />
                  <CardTitle>Sentiment Analysis</CardTitle>
                  <CardDescription>
                    Track how AI models perceive your brand - positive, neutral, or negative
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-1 hover:border-purple-300 dark:hover:border-purple-700 transition-colors">
                <CardHeader>
                  <MessageSquare className="h-10 w-10 text-purple-600 dark:text-purple-400 mb-2" />
                  <CardTitle>Mention Tracking</CardTitle>
                  <CardDescription>
                    See how often your brand gets mentioned in AI responses
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-1 hover:border-pink-300 dark:hover:border-pink-700 transition-colors">
                <CardHeader>
                  <Eye className="h-10 w-10 text-pink-600 dark:text-pink-400 mb-2" />
                  <CardTitle>Visibility Score</CardTitle>
                  <CardDescription>
                    Measure your brand's presence across AI platforms
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>


          </div>


        )}

        {step === 2 && (
          <div className="mx-auto space-y-6 max-w-7xl">
            {/* Progress Indicator */}
            {/* <div className="flex items-center justify-center gap-2 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">
                  <Check className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">URL Added</span>
              </div>
              <div className="w-12 h-0.5 bg-blue-300 dark:bg-blue-700" />
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
                  2
                </div>
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Email</span>
              </div>
            </div> */}

            <Card className="shadow-lg bg-white dark:bg-slate-950 dark:border-slate-900 border-grey-200">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Get Early Access</CardTitle>
                <CardDescription>
                  Enter your email to receive your free brand analysis report
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleEmailSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Brand URL</label>
                    <div className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
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
                  <div className="space-y-2 max-w-md mx-auto">
                  <Button type="submit" size="lg" className="w-full h-12 rounded-3xl dark:bg-white-800 dark:text-slate-950" disabled={loading}>
                    {loading ? 'Analyzing...' : 'Get My Free Analysis'}
                    {!loading && <ArrowRight className="ml-2 h-5 w-5" />}
                  </Button>
                  </div>

                  {error && (
                    <Alert variant="destructive">
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}

                  <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                    We'll analyze your brand across AI platforms and send you a detailed report. No spam, we promise!
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        )}

        {step === 3 && preview && (
          <div className="max-w-7xl mx-auto space-y-12">
            {/* Success Message */}
            <Card className="bg-white dark:bg-green-950/30 border-none">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-2xl">You're on the list!</CardTitle>
                <CardDescription className="text-base">
                  We'll send your detailed brand analysis report to <strong className="font-semibold text-gray-900 dark:text-gray-100">{email}</strong> soon.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Preview Analytics */}
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Quick Preview</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Here's what we're analyzing for <span className="font-semibold text-lg text-gray-900 dark:text-gray-100">{preview.brand_name}</span>
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="border-1 hover:border-blue-300 dark:hover:border-blue-700 bg-white dark:bg-slate-950 transition-colors">
                  <CardHeader>
                    <CardDescription>Overall Sentiment</CardDescription>
                    <CardTitle className="text-3xl flex items-center gap-2">
                      <Activity className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                      <Badge className={`${
                        preview.sentiment === 'POSITIVE'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                          : preview.sentiment === 'NEGATIVE'
                          ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                          : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
                      }`}>
                        {preview.sentiment}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                </Card>

                <Card className="border-1 hover:border-purple-300 dark:hover:border-purple-700 bg-white dark:bg-slate-950 transition-colors">
                  <CardHeader>
                    <CardDescription>Mentions Found</CardDescription>
                    <CardTitle className="text-3xl flex items-center gap-2">
                      <MessageSquare className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                      {preview.mentions}
                    </CardTitle>
                  </CardHeader>
                </Card>

                <Card className="border-1 hover:border-pink-300 dark:hover:border-pink-700 bg-white dark:bg-slate-950 transition-colors">
                  <CardHeader>
                    <CardDescription>Visibility Score</CardDescription>
                    <CardTitle className="text-3xl flex items-center gap-2">
                      <Eye className="h-8 w-8 text-pink-600 dark:text-pink-400" />
                      {preview.visibility}%
                    </CardTitle>
                  </CardHeader>
                </Card>
              </div>

              <Alert className="bg-blue-50 dark:bg-blue-900/50 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300">
                <Sparkles className="h-4 w-4" />
                <AlertDescription>
                  The full report will include detailed sentiment breakdown, competitive analysis, position tracking, and actionable insights.
                </AlertDescription>
              </Alert>
            </div>

            {/* CTA */}
            <div className="text-center pt-8">
              <Button variant="outline" size="lg" onClick={resetForm}>
                Analyze Another Brand
              </Button>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-8 mt-12 border-t border-gray-200 dark:border-gray-700">
        <div className="text-center text-sm text-gray-600 dark:text-gray-400">
          <p>VISIBI - AI Search Analytics Platform</p>
          <p className="mt-2">Monitor your brand across ChatGPT, Claude, Perplexity, and Gemini</p>
        </div>
      </footer>
    </div>
  )
}
