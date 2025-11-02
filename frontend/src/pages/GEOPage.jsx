import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ChartNoAxesGantt, Target, FileText, BarChart3, RefreshCw, CheckCircle2, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Navigation from '@/components/Navigation'

export default function GEOPage() {
  useEffect(() => {
    document.documentElement.classList.remove('dark')
  }, [])

  const frameworkItems = [
    {
      icon: Target,
      title: "Citation Discovery",
      description: "Identify where Gen AI platforms source information about your industry and competitors."
    },
    {
      icon: FileText,
      title: "Content Optimization",
      description: "Structure content to maximize Gen AI comprehension and citation probability."
    },
    {
      icon: BarChart3,
      title: "Authority Signals",
      description: "Build credibility markers that Gen AI platforms recognize and trust."
    },
    {
      icon: RefreshCw,
      title: "Source Diversification",
      description: "Expand your citation footprint across multiple authoritative platforms."
    },
    {
      icon: CheckCircle2,
      title: "Sentiment Optimization",
      description: "Ensure Gen AI describes your brand with positive, accurate context."
    },
    {
      icon: BarChart3,
      title: "Performance Tracking",
      description: "Monitor mentions, citations, and visibility across all Gen AI platforms."
    }
  ]

  return (
    <div className="min-h-screen relative line-pattern">
      <Helmet>
        <title>GEO Services - Generative Engine Optimization | VISIBI</title>
        <meta name="description" content="Get discovered and cited by ChatGPT, Gemini, and Perplexity. Expert GEO (Generative Engine Optimization) services to maximize your AI visibility and brand mentions." />
        <meta name="keywords" content="GEO, generative engine optimization, ChatGPT optimization, AI platform visibility, Gemini SEO, Perplexity optimization" />
        <link rel="canonical" href="https://visibi.com/geo" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://visibi.com/geo" />
        <meta property="og:title" content="GEO Services - Generative Engine Optimization | VISIBI" />
        <meta property="og:description" content="Get discovered and cited by ChatGPT, Gemini, and Perplexity. Expert GEO services to maximize your AI visibility." />
        <meta property="og:site_name" content="VISIBI" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GEO Services - Generative Engine Optimization" />
        <meta name="twitter:description" content="Maximize your brand's visibility across AI platforms. Get cited by ChatGPT, Gemini, and Perplexity." />
      </Helmet>

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-slate-300/60 bg-[linear-gradient(to_right,#1d4ed80A_1px,transparent_1px),linear-gradient(to_bottom,#1d4ed80A_1px,transparent_1px)] bg-[size:128px_104px]"></div>

      <Navigation currentPage="geo" />

      {/* Hero Section */}
      <section className="max-w-[90%] mx-auto items-center lg:px-[5rem] mb-0 mt-12 relative bg-white border border-b-0 border-slate-300 rounded-xl rounded-bl-none rounded-br-none shadow-sm shadow-blue-200">
        <div className="lg:block h-full w-full">
          <div className="relative z-10 py-16 flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 border-l border-r border-slate-200">
            <div className="max-w-3xl px-16 space-y-8">
              <h1 className="font-open-sans text-4xl md:text-6xl font-semibold tracking-tight text-slate-950 md:leading-[1.15]">
                Generative Engine Optimization (GEO)
              </h1>
             <h2 className="text-md md:text-xl md:leading-[1.7] tracking-tight font-thin text-slate-950 pb-8">
                Get discovered, cited, and positively represented by Gen AI platforms like ChatGPT, Gemini, and Perplexity.
              </h2>
              <Link to="/">
                <Button className="inline-flex items-center px-6 py-3 bg-blue-700 text-white rounded-full font-medium hover:bg-blue-800 transition-colors">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Request GEO Audit
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-[90%] mx-auto px-12 py-12 relative z-10 bg-white rounded-xl rounded-tl-none rounded-tr-none border-t border-b border-r border-l border-slate-300 mb-2">
        <div className="lg:block absolute h-full w-0 md:w-20 bg-slate-200/20 border-0 md:border-r md:border-t-0 md:border-slate-200 left-0 top-0 pattern-background rounded-bl-xl"></div>
        <div className="lg:block absolute h-full w-0 md:w-20 bg-slate-200/20 border-0 md:border-l md:border-t-0 md:border-slate-200 right-0 top-0 pattern-background rounded-br-xl"></div>

        <div className="max-w-7xl mx-auto">
          {/* What is GEO */}
          <section className="py-12 mb-12">
            <div className="max-w-4xl mx-auto md:px-16">
              <h2 className="font-open-sans font-thin text-3xl md:text-5xl md:leading-[1.3] text-slate-950 mb-4">
                What is GEO?
              </h2>
              <div className="space-y-6 font-open-sans text-lg font-thin leading-[1.7] text-slate-950">
                <p>
                  Generative Engine Optimization (GEO) is the practice of optimizing your digital presence to maximize visibility, citations, and positive perception within Gen AI-powered platforms.
                </p>
                <p>
                  As millions of users shift from traditional search to conversational Gen AI for discovery and research, your brand's presence in these Gen AI-generated responses becomes critical for awareness, consideration, and trust-building.
                </p>
                <p>
                  VISIBI's GEO methodology ensures your brand appears in the right context, with accurate information and positive sentiment, when potential customers ask Gen AI platforms about solutions in your category.
                </p>
              </div>
            </div>
          </section>

          {/* GEO Framework */}
          <section className="py-24 mb-12 border-t border-b border-slate-200">
            <div className="md:max-w-7xl max-w-full mx-auto md:text-left md:px-16 px-0">
              <div className="mb-12 text-left">
                <h2 className="font-inter font-thin text-3xl md:text-5xl leading-[1.3] text-slate-950 mb-4">
                  The VISIBI GEO Framework
                </h2>
                <p className="font-open-sans text-xl leading-[1.5] text-slate-950 max-w-2xl">
                  A comprehensive methodology for optimizing Gen AI visibility across all platforms.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border-slate-300 border transition-colors pattern-background">
                {frameworkItems.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div key={index} className="bg-white border-0 border-slate-300 p-8">
                      <Icon size={32} strokeWidth={1.25} className="text-blue-700 mb-4" />
                      <h3 className="font-space-mono pb-2 text-xl font-normal uppercase text-slate-950 mb-3">{item.title}</h3>
                      <p className="font-open-sans text-md text-slate-950">{item.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* SEO vs GEO Comparison */}
          <section className="py-12 mb-12">
            <div className="max-w-4xl mx-auto md:px-16">
              <div className="text-left mb-12">
                <h2 className="font-inter font-thin text-3xl md:text-5xl leading-[1.3] text-slate-950 mb-4">
                  SEO vs GEO: Understanding the Difference
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white border border-slate-300 p-8">
                  <h3 className="font-space-mono font-normal text-2xl leading-[1.3] text-slate-950 mb-6">Traditional SEO</h3>
                  <ul className="space-y-3 font-open-sans text-md leading-[1.5] text-slate-950">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-slate-950 flex-shrink-0 mt-0.5" />
                      <span>Optimizes for search engine rankings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-slate-950 flex-shrink-0 mt-0.5" />
                      <span>Focuses on keywords and backlinks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-slate-950 flex-shrink-0 mt-0.5" />
                      <span>Success = higher SERP positions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-slate-950 flex-shrink-0 mt-0.5" />
                      <span>Drives traffic to your website</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-slate-950 flex-shrink-0 mt-0.5" />
                      <span>User decides which result to click</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white border-2 border-blue-700 p-8">
                  <h3 className="font-space-mono font-normal text-2xl leading-[1.3] text-slate-950 mb-6">GEO (Generative Engine Optimization)</h3>
                  <ul className="space-y-3 font-open-sans text-md leading-[1.5] text-slate-950">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                      <span>Optimizes for Gen AI platform mentions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                      <span>Focuses on citations and authority</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                      <span>Success = being cited in Gen AI responses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                      <span>Builds trust before website visit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                      <span>AI recommends your brand directly</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-[90%] mx-auto px-8 py-12 mt-24 border-t border-gray-200 bg-white rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <ChartNoAxesGantt className="h-8 w-8 text-slate-950" />
              <span className="text-2xl font-bold bg-slate-950 bg-clip-text text-transparent">VISIBI</span>
            </div>
            <p className="font-open-sans text-lg text-slate-900 max-w-md leading-relaxed">
              Track and manage your brand's presence across leading AI platforms.
            </p>
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
        </div>
      </footer>
    </div>
  )
}
