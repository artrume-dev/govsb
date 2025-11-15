import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import {
  Sparkles, ArrowRight, Database, Search, Users, Shield, Heart,
  BarChart3, Workflow, Award, Bot, BrainCircuit, FileText,
  Link2, GraduationCap, Settings, ChevronDown, ChevronUp,
  Speaker, MessageSquareMore, Check, Zap,
  ArrowLeft
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import Navigation from '@/components/Navigation'
import QueryCustomizer from '@/components/QueryCustomizer'

export default function HomePage() {
  useEffect(() => {
    document.documentElement.classList.remove('dark')
  }, [])

  const [openFaqIndex, setOpenFaqIndex] = useState(null)
  const [step, setStep] = useState(1)
  const [brandUrl, setBrandUrl] = useState('')
  const [email, setEmail] = useState('')
  const [customQueries, setCustomQueries] = useState(null)
  const [customKeywords, setCustomKeywords] = useState(null)
  const [showAdvanced, setShowAdvanced] = useState(true)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [preview, setPreview] = useState(null)
  const inputRef = useRef(null)
  const mainSectionRef = useRef(null)

  const aiEngines = ['ChatGPT', 'Gemini', 'Claude', 'Bing Copilot', 'Perplexity', 'Mistral', 'Grok']

  const handleUrlSubmit = (e) => {
    e.preventDefault()
    if (!brandUrl.trim()) {
      setError('Please enter a valid URL')
      return
    }

    let formattedUrl = brandUrl.trim()
    if (!formattedUrl.match(/^https?:\/\//i)) {
      formattedUrl = 'https://' + formattedUrl
      setBrandUrl(formattedUrl)
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
      // TEMPORARY: Skip OpenAI analysis, just send email notification
      // Use simplified brand-analysis endpoint instead of waitlist endpoint
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000'
      const response = await fetch(`${apiUrl}/api/brand-analysis`, {
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
        throw new Error('Failed to submit brand analysis request')
      }

      const data = await response.json()

      // Set a simple preview object without OpenAI data
      setPreview({
        brand_name: brandUrl.replace(/^https?:\/\/(www\.)?/, '').split('/')[0],
        mentions: '-',
        citations: '-',
        visibility: '-',
        sentiment: 'PENDING'
      })
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

  const geoMeans = [
    {
      icon: Database,
      title: 'AIO (AI Optimisation)',
      description: 'Structured, entity-rich data to help LLMs understand your brand.'
    },
    {
      icon: Search,
      title: 'SEO Intelligence',
      description: 'EEAT-driven content, technical architecture, and schema excellence.'
    },
    {
      icon: Users,
      title: 'Human Expertise',
      description: 'Collaboration with renowned content creators whose writing naturally earns citations and positive sentiment.'
    },
    {
      icon: Shield,
      title: 'Authority Context Optimisation (ACO)',
      description: 'Guiding PR partners with Gen AI visibility insights to shape how your brand is mentioned and perceived.'
    },
    {
      icon: Heart,
      title: 'Sentiment Engineering',
      description: 'Ensuring Gen AI platforms associate your brand with accuracy, trust, and relevance.'
    }
  ]

  const services = [
    {
      icon: BrainCircuit,
      title: 'GEO Consultancy & Implementation',
      description: 'Comprehensive optimisation to enhance your brand\'s visibility in ChatGPT, Gemini, and Bing Copilot. We align structured data, content architecture, and entity signals for accurate Gen AI interpretation and discoverability.'
    },
    {
      icon: FileText,
      title: 'SEO & Content Intelligence',
      description: 'We develop EEAT-driven, NLP-optimised content that establishes topical authority for both keyword and Gen AI-focused strategies. Our expert contributors create content recognised by both humans and Gen AI as reliable and trustworthy.'
    },
    {
      icon: Link2,
      title: 'Authority Context Optimisation (ACO)',
      description: 'We work with PR agencies and internal teams to clarify Gen AI visibility mechanics and manage how your brand is mentioned in Gen AI contexts.',
      bullets: [
        'Align PR narratives with GEO and EEAT principles.',
        'Identify content gaps and outreach opportunities.',
        'Find trusted publishers and influencers.',
        'Build campaigns Gen AI systems recognise as authoritative and contextually relevant.'
      ],
      footer: 'We transform every earned mention into a visibility asset - strengthening your digital reputation with both audiences and Gen AI systems.'
    },
    {
      icon: GraduationCap,
      title: 'GEO Consultancy & Training',
      description: 'Training and enablement for internal teams covering:',
      bullets: [
        'LLM prompt alignment',
        'AIO content structure',
        'Entity optimisation and sentiment tracking'
      ],
      footer: 'Empowering brands to sustain Gen AI-era visibility independently.'
    }
  ]

  const whyVisibi = [
    {
      icon: BarChart3,
      title: 'Data Meets Depth',
      description: 'Our recommendations are driven by Gen AI visibility analytics that track mentions, sentiment, and citation authority.'
    },
    {
      icon: Workflow,
      title: 'Human + Machine Harmony',
      description: 'We collaborate with leading content experts and PR teams to build content ecosystems that Gen AI engines trust.'
    },
    {
      icon: Award,
      title: 'Proven Expertise',
      description: 'With 20 years of experience in SEO, paid media, and digital strategy, we now drive measurable visibility, perception, and trust in the Gen AI Search era.'
    }
  ]

  const insights = [
    {
      icon: Sparkles,
      title: 'The Rise of Generative Search: Why GEO Is the New SEO',
      description: 'Search is now Gen AI-driven, conversational, and context-aware. Learn why structured data and authority are more important than backlinks - and how to stay discoverable across Gen AI ecosystems such as ChatGPT, Gemini, and Bing Copilot.'
    },
    {
      icon: Settings,
      title: 'How Gen AI Engines Choose What (and Who) to Cite',
      description: 'Why do Gen AI engines reference some brands but ignore others? This article explains Gen AI citation logic, from training data trust signals to clear entity markup.'
    }
  ]

  const faqs = [
    {
      question: 'What is Generative Engine Optimisation (GEO)?',
      answer: 'GEO is the practice of optimising content and digital presence so that Gen AI platforms like ChatGPT, Gemini, and Perplexity accurately discover, interpret, and reference your brand. Unlike traditional SEO, which focuses on ranking in search results, GEO ensures your brand is mentioned and cited within Gen AI-generated responses.'
    },
    {
      question: 'How is GEO different from SEO?',
      answer: 'SEO optimises for search engine rankings and click-through rates. GEO optimises for being mentioned, cited, and correctly represented in conversational Gen AI responses. While SEO remains important, GEO addresses a new discovery layer where users ask Gen AI tools for recommendations instead of browsing search results.'
    },
    {
      question: 'Which Gen AI platforms does VISIBI optimise for?',
      answer: 'We optimise for major generative Gen AI platforms including ChatGPT (OpenAI), Gemini (Google), Claude (Anthropic), Perplexity, and Bing Copilot. Our approach ensures broad Gen AI visibility across the platforms shaping modern discovery and decision-making.'
    },
    {
      question: 'How do you measure Gen AI visibility?',
      answer: 'We track brand mentions, citation frequency, sentiment, and context across Gen AI responses. Our proprietary Gen AI Visibility Scoring™ framework measures how often and how positively your brand appears when users ask relevant questions to Gen AI platforms.'
    },
    {
      question: 'Do I still need SEO if I invest in GEO?',
      answer: 'Yes. SEO and GEO work together. Strong SEO foundations - structured data, authoritative content, and technical excellence - directly support Gen AI discoverability. VISIBI integrates both strategies to maximise visibility across traditional search and Gen AI platforms.'
    },
    {
      question: 'How long does it take to see results?',
      answer: 'Gen AI visibility improvements can begin within 8-12 weeks as structured data, content optimisation, and authority signals take effect. However, sustained visibility requires ongoing optimisation, content development, and monitoring as Gen AI models evolve.'
    },
    {
      question: 'What industries benefit most from GEO?',
      answer: 'Any industry where trust, authority, and discoverability matter. This includes SaaS, professional services, healthcare, finance, education, and e-commerce. If your customers research solutions or ask questions before buying, GEO ensures your brand is part of the conversation.'
    }
  ]

  return (
    <div className="min-h-screen relative line-pattern">
      <Helmet>
        <title>Generative Engine Optimisation (GEO) - AI Visibility Services | VISIBI</title>
        <meta name="description" content="Optimise your brand for ChatGPT, Gemini, and Perplexity. VISIBI ensures your content is visible, accurately interpreted, and positively referenced by Gen AI systems." />
        <meta name="keywords" content="GEO, generative engine optimization, AI visibility, ChatGPT optimization, Gemini SEO, Perplexity marketing, AI-ready content" />
        <link rel="canonical" href="https://visibi.com/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://visibi.com/" />
        <meta property="og:title" content="Generative Engine Optimisation (GEO) | VISIBI" />
        <meta property="og:description" content="Visibility that moves beyond search. Optimise for AI platforms like ChatGPT, Gemini, and Perplexity." />
        <meta property="og:site_name" content="VISIBI" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GEO - Visibility Beyond Search | VISIBI" />
        <meta name="twitter:description" content="Optimise your brand for AI platforms. Ensure accurate representation in ChatGPT, Gemini, and Perplexity." />
      </Helmet>

      <div className="absolute inset-0 -z-10 h-full w-full bg-slate-300/60 bg-[linear-gradient(to_right,#1d4ed80A_1px,transparent_1px),linear-gradient(to_bottom,#1d4ed80A_1px,transparent_1px)] bg-[size:128px_104px]"></div>

      <Navigation currentPage="home" />

      {/* Hero */}
      <section className="max-w-[90%] mx-auto items-left lg:px-[5rem] mb-0 mt-12 relative bg-[#FAFAFB] border border-b border-slate-200 rounded-xl rounded-bl-none rounded-br-none overflow-hidden">
        {/* Graph paper style background with gradient fade at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-64 pointer-events-none">
          {/* Graph paper grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[length:14px_14px]"></div>
          {/* Gradient fade from white to gray-50 */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFB] via-white/40 to-[#FAFAFB]"></div>
        </div>

        <div className="lg:block h-full w-full">
          <div className="relative z-10 py-24 border-l border-r border-slate-200">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center px-16">
              {/* Left Column - 60% (3 out of 5 columns) */}
              <div className="lg:col-span-3 space-y-8 text-left">
                <h1 className="font-open-sans text-3xl md:text-5xl font-semibold tracking-tight text-slate-950 md:leading-[1.15]">
                  Generative Engine Optimisation (GEO): Visibility That Moves Beyond Search
                </h1>
                <h2 className="text-md md:text-lg md:leading-[1.7] tracking-tight font-thin text-slate-950 pb-8">
                  We optimise your brand for the new discovery layer, where platforms like ChatGPT, Gemini, and Perplexity determine which businesses to recommend. VISIBI ensures your content is visible, accurately interpreted, and positively referenced by Gen AI systems.
                </h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-left">
                  <Link to="/tool">
                    <Button className="inline-flex items-center px-8 py-6 bg-blue-700 text-white rounded-full font-medium hover:bg-blue-800 transition-colors">
                      <Sparkles className="w-5 h-5 mr-2" />
                      Request My Gen AI Visibility Audit
                    </Button>
                  </Link>
                  <Link to="/geo">
                    <Button className="inline-flex items-center px-8 py-6 bg-white text-slate-950 border border-slate-300 rounded-full font-medium hover:bg-slate-50 transition-colors">
                      Learn How GEO Works
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right Column - 40% (2 out of 5 columns) */}
              <div className="lg:col-span-2 flex items-center justify-center">
                <img 
                  src="/visibi-llm.png" 
                  alt="Person analyzing AI-generated content discovery with magnifying glass over networked documents" 
                  className="w-full h-auto max-w-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Engines Marquee */}
      <section className="max-w-[90%] mx-auto bg-white border-l border-r border-b border-slate-200 py-16">
        <div className="px-4 lg:px-8">
          <p className="font-space-mono text-sm text-slate-950 text-center mb-8 uppercase tracking-wide">
            Visible where decisions start
          </p>

          <div className="relative overflow-hidden">
            <style>{`
              @keyframes marquee {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-33.33%); }
              }
              .animate-marquee {
                animation: marquee 30s linear infinite;
              }
            `}</style>
            <div className="flex gap-4 animate-marquee whitespace-nowrap">
              {[...aiEngines, ...aiEngines, ...aiEngines].map((engine, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-full font-space-mono text-sm text-slate-950"
                >
                  <Bot className="w-4 h-4" />
                  {engine}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brand Analysis Section */}
      <main ref={mainSectionRef} className="max-w-[90%] mx-auto px-8 py-12 relative z-10 bg-white border-l border-r border-slate-300 mb-2">
        <div className="lg:block absolute h-full w-0 md:w-20 bg-slate-200/20 border-0 md:border-r md:border-t-0 md:border-slate-200 left-0 top-0 pattern-background"></div>
        <div className="lg:block absolute h-full w-0 md:w-20 bg-slate-200/20 border-0 md:border-l md:border-t-0 md:border-slate-200 right-0 top-0 pattern-background"></div>

        {step === 1 && (
          <div className="space-y-8">
            <Card className="max-w-4xl mx-auto border-0 shadow-none bg-white">
              <CardHeader className="text-center">
                <CardTitle className="font-open-sans text-slate-950 font-semibold text-3xl">Request Gen AI visibility audit - Free <span className='text-blue-700'><Sparkles size={10} strokeWidth={1.25} className="inline-block h-6 w-6 text-blue-700" /></span></CardTitle>
                <CardDescription className="font-open-sans text-lg">
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
                      className="flex-1 h-14 px-8 text-md font-space-mono placeholder-blue-500 border-blue-400 bg-slate-200/20 text-blue-700 rounded-full"
                      required
                    />
                    <Button type="submit" size="xl" className="h-14 px-8 bg-blue-700 text-white text-lg font-semibold rounded-full">
                      Get Analysis
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
                  <p className="text-sm text-gray-700 text-center">
                    Join 100+ brands already monitoring their AI presence
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {step === 2 && (
          <div className="mx-auto space-y-6 max-w-7xl">
            <Card className="bg-white border-0 max-w-4xl mx-auto">
              <CardHeader className="text-center mb-8">
                <CardTitle className="text-2xl font-open-sans font-semibold">Request Gen AI visibility audit - <span className='text-blue-700'>Free</span> <Sparkles size={10} strokeWidth={1.25} className="inline-block h-6 w-6 text-blue-700" /></CardTitle>
                <CardDescription className="font-open-sans text-slate-950 text-base">
                  Add Custome queries or keywords (optional) and enter your email to get your free analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleEmailSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium font-space-mono">Brand URL</label>
                    <div className="flex items-center gap-2 p-3 bg-green-50 rounded-lg">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-700 font-space-mono">{brandUrl}</span>
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
                      <label className="text-sm font-medium font-space-mono">Custom Questions ({customQueries.length})</label>
                      <div className="space-y-2 p-3 bg-purple-50 rounded-lg">
                        {customQueries.map((query, index) => (
                          <div
                            key={index}
                            className="text-sm p-2 bg-white rounded border border-purple-200 font-space-mono"
                          >
                            {query}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {customKeywords && customKeywords.length > 0 && (
                    <div className="space-y-2">
                      <label className="text-sm font-medium font-space-mono">Added Keywords ({customKeywords.length})</label>
                      <div className="flex flex-wrap gap-2 p-3 bg-green-50 rounded-lg">
                        {customKeywords.map((keyword, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="bg-white"
                          >
                            {keyword}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="border border-slate-100">
                    <Button
                      type="button"
                      variant="ghost"
                      size="lg"
                      onClick={() => setShowAdvanced(!showAdvanced)}
                      className="w-full justify-between text-muted-foreground hover:text-foreground rounded-none py-2 px-4"
                    >
                      <span className="flex items-center gap-2 font-space-mono text-slate-950">
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
                    <label className="text-sm font-medium font-space-mono">Email Address</label>
                    <Input
                      type="email"
                      placeholder="you@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12 text-lg bg-white placeholder-gray-500 border-gray-300 font-space-mono text-sm"
                      required
                    />
                  </div>

                  <div className="flex gap-3 pt-4">
                    
                    <Button
                      type="button"
                      variant="outline"
                      size="lg"
                      className="flex-1 h-12 rounded-3xl"
                      onClick={() => setStep(1)}
                    >
                      <ArrowLeft className="mr-2 h-5 w-5" />Back
                    </Button>
                    
                    <Button type="submit" size="lg" className="flex-1 h-12 rounded-3xl bg-blue-700 text-white" disabled={loading}>
                      {loading ? 'Analyzing...' : 'Get my Free Analysis'}
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
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="bg-white border-2 border-blue-700">
              <CardHeader className="text-center py-12">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="h-10 w-10 text-blue-700" />
                </div>
                <CardTitle className="text-3xl font-open-sans font-semibold text-slate-950 mb-4">
                  Thank You!
                </CardTitle>
                <CardDescription className="text-lg text-gray-700 font-open-sans max-w-2xl mx-auto">
                  We've received your request for <strong className="font-semibold text-blue-700">{preview.brand_name}</strong>.
                  Our team will analyze your brand's AI visibility and send a detailed report to <strong className="font-semibold text-blue-700">{email}</strong> within 24-48 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center pb-8">
                <div className="space-y-4 mb-8">
                  <h4 className="font-space-mono text-sm uppercase text-slate-950 font-semibold">What's included in your report:</h4>
                  <ul className="text-left max-w-md mx-auto space-y-3 font-open-sans text-md text-slate-950">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                      <span>AI visibility analysis across ChatGPT, Gemini, Perplexity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                      <span>Brand mention frequency and sentiment analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                      <span>Competitive positioning insights</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                      <span>Actionable recommendations for improvement</span>
                    </li>
                  </ul>
                </div>
                <button
                  onClick={resetForm}
                  className="inline-flex items-center px-6 py-3 bg-blue-700 text-white rounded-full font-medium hover:bg-blue-800 transition-colors"
                >
                  Analyse Another Brand
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      {/* Main Content */}
      <main className="max-w-[90%] mx-auto px-12 py-12 relative z-10 bg-white rounded-xl rounded-tl-none rounded-tr-none border-t border-b border-r border-l border-slate-300 mb-2">
        <div className="lg:block absolute h-full w-0 md:w-20 bg-slate-200/20 border-0 md:border-r md:border-t-0 md:border-slate-200 left-0 top-0 pattern-background rounded-bl-xl"></div>
        <div className="lg:block absolute h-full w-0 md:w-20 bg-slate-200/20 border-0 md:border-l md:border-t-0 md:border-slate-200 right-0 top-0 pattern-background rounded-br-xl"></div>

        <div className="max-w-7xl mx-auto">
          {/* The Gen AI Search Revolution */}
          <section className="py-16 mb-12 border-b border-slate-200">
            <div className="max-w-4xl mx-auto md:px-16">
              <h2 className="font-open-sans font-thin text-3xl md:text-5xl md:leading-[1.3] text-slate-950 mb-8">
                The Gen AI Search Revolution
              </h2>
              <div className="font-open-sans text-xl leading-[1.7] text-slate-950 space-y-6">
                <p>
                  Gen AI has changed how customers discover brands. Large Language Models (LLMs) such as ChatGPT, Claude, Bing, Perplexity, and Gemini now serve as research tools, answering questions and influencing trust before customers visit your website.
                </p>
                <p>
                  Your visibility now relies on being referenced and regarded as a trusted source, not just being found.
                </p>
                <p>
                  VISIBI combines human expertise with Gen AI insights to ensure your brand is accurately represented and frequently cited in generative results.
                </p>
              </div>
            </div>
          </section>

          {/* What GEO Really Means */}
          <section className="py-16 mb-12 border-b border-slate-200 mx-auto">
            <div className="max-w-7xl mx-auto md:px-16">
              <div className="text-center mb-12">
                <h2 className="font-open-sans font-thin text-3xl md:text-5xl md:leading-[1.3] text-slate-950 mb-4">
                  What GEO Really Means
                </h2>
                <p className="font-open-sans text-xl leading-[1.5] text-slate-950 max-w-3xl mx-auto">
                  GEO - Generative Engine Optimisation - is the evolution of SEO for the Gen AI Search Era. It ensures Gen AI systems interpret, reference, and recommend your brand with confidence and consistency.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border-slate-300 border transition-colors pattern-background mb-8">
                {geoMeans.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div key={index} className="bg-white p-8">
                      <div className="w-12 h-12 bg-white flex items-center justify-center mb-6 flex-shrink-0">
                        <Icon className="w-6 h-6 text-blue-700" />
                      </div>
                      <h3 className="font-space-mono pb-2 text-xl font-normal uppercase text-slate-950 mb-3">{item.title}</h3>
                      <p className="font-open-sans text-md text-slate-950">{item.description}</p>
                    </div>
                  )
                })}
              </div>

              <p className="font-open-sans text-lg leading-[1.7] text-gray-600 italic text-center max-w-3xl mx-auto">
                VISIBI connects human creativity with machine interpretation, positioning your brand as a trusted source for Gen AI-generated answers.
              </p>
            </div>
          </section>

          {/* Core Services */}
          <section className="py-16 mb-12">
            <div className="max-w-7xl mx-auto md:px-16">
              <div className="text-center mb-12">
                <h2 className="font-open-sans font-thin text-3xl md:text-5xl md:leading-[1.3] text-slate-950 mb-4">
                  Core Services
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6 pattern-background p-4 border-slate-300 border">
                {services.map((service, index) => {
                  const Icon = service.icon
                  return (
                    <div key={index} className="bg-white border border-slate-300 p-8">
                      <div className="mb-6">
                        <Icon className="w-10 h-10 text-blue-700" />
                      </div>
                      <h3 className="font-space-mono font-normal text-xl leading-[1.3] text-slate-950 mb-4 uppercase">
                        {service.title}
                      </h3>
                      <p className="font-open-sans text-md leading-[1.5] text-slate-950 mb-4">
                        {service.description}
                      </p>
                      {service.bullets && (
                        <ul className="font-open-sans text-md leading-[1.5] text-slate-950 space-y-2 mb-4 ml-4">
                          {service.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex gap-2">
                              <span className="flex-shrink-0">•</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {service.footer && (
                        <p className="font-open-sans text-md leading-[1.5] text-slate-950 italic">
                          {service.footer}
                        </p>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* CTA Divider */}
          <section className="pt-0 pb-16 border-b border-slate-200 mx-auto">
            <div className="text-center">
              <Link to="/how-we-work">
                <Button className="inline-flex items-center px-6 py-6 bg-white text-slate-950 border border-slate-950 rounded-full font-medium hover:bg-slate-950 hover:text-white transition-colors">
                  Learn more about our strategies
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </section>

          {/* Why VISIBI */}
          <section className="py-24 mb-12">
            <div className="max-w-7xl mx-auto md:px-16">
              <div className="text-center mb-12">
                <h2 className="font-open-sans font-thin text-3xl md:text-5xl md:leading-[1.3] text-slate-950 mb-4">
                  Why VISIBI
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {whyVisibi.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div key={index} className="text-center">
                      <div className="flex justify-center mb-6">
                        <Icon className="w-12 h-12 text-blue-700" />
                      </div>
                      <h3 className="font-space-mono font-normal text-xl leading-[1.3] text-slate-950 mb-3 uppercase">
                        {item.title}
                      </h3>
                      <p className="font-open-sans text-md leading-[1.5] text-slate-950">
                        {item.description}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* CTA Divider */}
          <section className="py-16 border-b border-slate-200">
            <div className="text-center">
              <Link to="/tool">
                <Button className="inline-flex items-center px-6 py-6 bg-white text-slate-950 border border-slate-950 rounded-full font-medium hover:bg-slate-950 hover:text-white transition-colors">
                  Talk to our GEO Experts
                   <MessageSquareMore className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </section>

          {/* Featured Insights */}
          <section className="py-24 mb-12 border-b border-slate-200">
            <div className="max-w-7xl mx-auto md:px-16">
              <div className="text-center mb-12">
                <p className="font-open-sans text-lg leading-[1.5] text-slate-950 max-w-3xl mx-auto">
                  Discover how Gen AI search is transforming digital visibility and learn practical strategies to maintain your competitive edge.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8 border-slate-300 border pattern-background p-4">
                {insights.map((insight, index) => {
                  const Icon = insight.icon
                  return (
                    <div key={index} className="bg-white border border-slate-300 p-8">
                      <div className="mb-6">
                        <Icon className="w-10 h-10 text-blue-700" />
                      </div>
                      <h3 className="font-space-mono font-normal text-xl leading-[1.3] text-slate-950 mb-4 uppercase">
                        {insight.title}
                      </h3>
                      <p className="font-open-sans text-md leading-[1.5] text-slate-950 mb-6">
                        {insight.description}
                      </p>
                      <Link to="/insights">
                        <Button className="inline-flex items-center px-4 py-2 bg-white text-slate-950 border border-slate-300 rounded-full text-sm font-medium hover:bg-slate-50 transition-colors">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  )
                })}
              </div>

              <div className="text-right">
                <Link to="/insights">
                  <Button className="inline-flex items-center px-6 py-3 bg-white text-slate-950 border border-slate-300 rounded-full font-medium hover:bg-slate-50 transition-colors">
                    View All Insights
                     <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-24 mb-12 border-b border-slate-200">
            <div className="max-w-4xl mx-auto md:px-16">
              <div className="text-center mb-12">
                <h2 className="font-open-sans font-thin text-3xl md:text-5xl md:leading-[1.3] text-slate-950 mb-4">
                  GoVisibi FAQs
                </h2>
              </div>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white border border-slate-300 overflow-hidden">
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                      className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                    >
                      <h3 className="font-open-sans font-semibold text-lg text-slate-950 pr-4">{faq.question}</h3>
                      {openFaqIndex === index ? (
                        <ChevronUp className="w-5 h-5 text-slate-950 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-950 flex-shrink-0" />
                      )}
                    </button>
                    {openFaqIndex === index && (
                      <div className="px-8 pb-6">
                        <p className="font-open-sans text-md md:leading-[1.7] my-8 text-slate-950">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Divider */}
          <section className="py-8 border-b border-slate-200">
            <div className="text-center">
              <Link to="/how-we-work">
                <Button className="inline-flex items-center px-6 py-3 bg-white text-slate-950 border border-slate-950 rounded-full font-medium hover:bg-slate-950 hover:text-white transition-colors">
                  Learn more about our strategies
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </main>

      {/* Final CTA Section */}
      <section className="max-w-[90%] mx-auto px-12 py-12 relative z-10 bg-white rounded-xl rounded-tl-none rounded-tr-none border-t border-b border-r border-l border-slate-300 mb-32">
        <div className="lg:block absolute h-full w-0 md:w-10 bg-slate-200/20 border-0 md:border-r md:border-t-0 md:border-slate-200 left-0 top-0 pattern-background rounded-bl-xl"></div>
        <div className="lg:block absolute h-full w-0 md:w-10 bg-slate-200/20 border-0 md:border-l md:border-t-0 md:border-slate-200 right-0 top-0 pattern-background rounded-br-xl"></div>

        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="font-open-sans font-thin text-4xl md:text-5xl md:leading-[1.3] text-slate-950">
            Discover how Gen AI platforms describe your brand.
          </h2>
          <p className="font-open-sans text-xl leading-[1.7] text-slate-950 pb-8">
            Request a free audit to learn how frequently and positively your business appears in Gen AI results.
          </p>
          <Link to="/tool">
            <Button className="inline-flex items-center px-8 py-6 bg-blue-700 text-white rounded-full font-medium hover:bg-blue-800 transition-colors">
              <Sparkles className="w-5 h-5 mr-2" />
              Request My Audit
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-[90%] mx-auto px-8 py-12 mt-24 border-t border-gray-200 bg-white rounded-xl rounded-tl-none rounded-tr-none mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img src="/goVisibi-icon.svg" alt="VISIBI Logo" className="h-8 w-8" />
              <span className="text-2xl font-bold bg-slate-950 bg-clip-text text-transparent">VISIBI</span>
            </div>
            <p className="font-open-sans text-lg text-slate-900 max-w-md leading-relaxed">
              Track and manage your brand's presence across leading AI platforms.
            </p>
            <div className="flex gap-6">
              <a href="https://github.com" className="font-space-mono text-sm text-gray-600 hover:text-blue-700 uppercase tracking-wide">
                Github
              </a>
              <a href="https://linkedin.com" className="font-space-mono text-sm text-gray-600 hover:text-blue-700 uppercase tracking-wide">
                LinkedIn
              </a>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="font-sans text-xl text-slate-950 mb-2">
                Want your brand to stand out in the age of AI conversations?
              </h3>
              <p className="text-sm text-slate-600">
                Stay informed with expert updates on brand visibility across AI platforms.
              </p>
            </div>
            <div className="flex gap-2">
              <Input type="email" placeholder="Email Address" className="flex-1 font-space-mono text-sm placeholder:text-gray-400 rounded-full text-gray-900" />
              <Button className="bg-slate-900 text-white hover:bg-gray-800 font-space-mono text-sm uppercase px-6 rounded-full">Start Now</Button>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-space-mono text-xs text-gray-500">© 2025 VISIBI — ALL RIGHTS RESERVED</p>
          <div className="flex gap-6">
            <a href="#" className="font-space-mono text-xs text-gray-600 hover:text-blue-700 uppercase tracking-wide">
              Terms of Use
            </a>
            <a href="#" className="font-space-mono text-xs text-gray-600 hover:text-blue-700 uppercase tracking-wide">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
