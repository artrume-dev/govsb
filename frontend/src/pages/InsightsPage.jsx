import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Brain, Search, TrendingUp, Target, BookOpen, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Navigation from '@/components/Navigation'

export default function InsightsPage() {
  useEffect(() => {
    document.documentElement.classList.remove('dark')
  }, [])

  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'GEO', 'SEO', 'Strategy', 'Analytics', 'Case Studies']

  const insights = [
    {
      title: "How ChatGPT Discovers & Cites Brands in 2025",
      category: "GEO",
      date: "Oct 15, 2025",
      excerpt: "Deep analysis of the technical mechanisms ChatGPT uses to source information and how brands can optimize for citations.",
      readTime: "8 min read"
    },
    {
      title: "The Complete Guide to AI Search Optimization",
      category: "Strategy",
      date: "Oct 10, 2025",
      excerpt: "Everything you need to know about optimizing your brand's presence across AI platforms—from fundamentals to advanced tactics.",
      readTime: "12 min read"
    },
    {
      title: "Measuring Brand Visibility Across AI Platforms",
      category: "Analytics",
      date: "Oct 5, 2025",
      excerpt: "How to track, measure, and report on your AI visibility performance with quantitative frameworks and tools.",
      readTime: "10 min read"
    },
    {
      title: "GEO vs SEO: Understanding the Strategic Difference",
      category: "GEO",
      date: "Sep 28, 2025",
      excerpt: "Why generative engine optimization requires fundamentally different tactics than traditional search engine optimization.",
      readTime: "7 min read"
    },
    {
      title: "The Authority Signals AI Platforms Trust",
      category: "Strategy",
      date: "Sep 20, 2025",
      excerpt: "Research findings on what makes AI engines more likely to cite certain sources over others.",
      readTime: "9 min read"
    },
    {
      title: "Case Study: 300% Increase in AI Mentions in 6 Months",
      category: "Case Studies",
      date: "Sep 15, 2025",
      excerpt: "How a B2B SaaS company transformed their AI visibility through structured GEO strategy.",
      readTime: "11 min read"
    },
    {
      title: "Content Structure for Maximum AI Comprehension",
      category: "GEO",
      date: "Sep 8, 2025",
      excerpt: "Technical best practices for structuring content so AI platforms can easily extract and cite information.",
      readTime: "8 min read"
    },
    {
      title: "The Future of Search: 2026 Predictions",
      category: "Strategy",
      date: "Sep 1, 2025",
      excerpt: "Expert predictions on how AI-powered search will evolve and what brands should prepare for.",
      readTime: "10 min read"
    },
    {
      title: "Schema Markup for AI Platforms",
      category: "SEO",
      date: "Aug 25, 2025",
      excerpt: "How structured data influences both traditional search rankings and AI platform understanding.",
      readTime: "9 min read"
    }
  ]

  const filteredInsights = selectedCategory === 'All'
    ? insights
    : insights.filter(insight => insight.category === selectedCategory)

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'GEO':
        return Brain
      case 'SEO':
        return Search
      case 'Strategy':
        return Target
      case 'Analytics':
        return TrendingUp
      case 'Case Studies':
        return BookOpen
      default:
        return Brain
    }
  }

  return (
    <div className="min-h-screen relative line-pattern">
      <Helmet>
        <title>AI Visibility Insights & Research - GEO Strategy Frameworks | VISIBI</title>
        <meta name="description" content="Deep dives, case studies, and strategic frameworks for mastering visibility in generative AI. Learn how to optimize for ChatGPT, Gemini, and Perplexity with expert insights." />
        <meta name="keywords" content="GEO insights, AI visibility research, ChatGPT optimization guide, AI search strategy, generative AI marketing, SEO case studies" />
        <link rel="canonical" href="https://visibi.com/insights" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://visibi.com/insights" />
        <meta property="og:title" content="AI Visibility Insights & Research - GEO Strategy Frameworks | VISIBI" />
        <meta property="og:description" content="Expert insights, case studies, and frameworks for optimizing brand visibility across AI platforms." />
        <meta property="og:site_name" content="VISIBI" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Visibility Insights & Research | VISIBI" />
        <meta name="twitter:description" content="Learn how to dominate AI-powered discovery with expert frameworks and case studies." />
      </Helmet>

      <div className="absolute inset-0 -z-10 h-full w-full bg-slate-300/60 bg-[linear-gradient(to_right,#1d4ed80A_1px,transparent_1px),linear-gradient(to_bottom,#1d4ed80A_1px,transparent_1px)] bg-[size:128px_104px]"></div>

      <Navigation currentPage="insights" />

      {/* Hero */}
      <section className="max-w-[90%] mx-auto items-center lg:px-[5rem] mb-0 mt-12 relative bg-white border border-b-0 border-slate-300 rounded-xl rounded-bl-none rounded-br-none shadow-sm shadow-blue-200">
        <div className="lg:block h-full w-full">
          <div className="relative z-10 py-16 flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 border-l border-r border-slate-200">
            <div className="max-w-3xl px-16 space-y-8">
               <h1 className="font-open-sans text-4xl md:text-6xl font-semibold tracking-tight text-slate-950 md:leading-[1.15]">
                AI Visibility Insights & Research
              </h1>
              <h2 className="text-md md:text-xl md:leading-[1.7] tracking-tight font-thin text-slate-950 pb-8">
                Deep dives, case studies, and strategic frameworks for mastering visibility in the age of generative AI.
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-[90%] mx-auto px-12 py-12 relative z-10 bg-white rounded-xl rounded-tl-none rounded-tr-none border-t border-b border-r border-l border-slate-300 mb-2">
        <div className="lg:block absolute h-full w-0 md:w-20 bg-slate-200/20 border-0 md:border-r md:border-t-0 md:border-slate-200 left-0 top-0 pattern-background rounded-bl-xl"></div>
        <div className="lg:block absolute h-full w-0 md:w-20 bg-slate-200/20 border-0 md:border-l md:border-t-0 md:border-slate-200 right-0 top-0 pattern-background rounded-br-xl"></div>

        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <section className="py-8 mb-12 border-b border-slate-200">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={`rounded-full font-inter font-semibold text-sm ${
                    selectedCategory === category
                      ? 'bg-slate-950 text-white hover:bg-slate-800 border border-slate-950'
                      : 'bg-transparent text-slate-950 border border-slate-300 hover:border-slate-950'
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </section>

          {/* Insights Grid */}
          <section className="py-12 mb-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:px-16">
              {filteredInsights.map((insight, index) => {
                const IconComponent = getCategoryIcon(insight.category)
                return (
                  <article
                    key={index}
                    className="bg-white border border-slate-300 rounded-xl overflow-hidden hover:border-blue-700 transition-all duration-300 cursor-pointer"
                  >
                    <div className="h-48 bg-slate-50 border-b border-slate-300 flex items-center justify-center">
                      <IconComponent className="w-16 h-16 text-blue-700" strokeWidth={1.25} />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="font-space-mono text-xs text-slate-950 bg-white border border-slate-950 px-3 py-1 rounded-full uppercase">
                          {insight.category}
                        </span>
                        <span className="font-space-mono text-xs text-slate-600">{insight.readTime}</span>
                      </div>
                      <h3 className="font-space-mono font-normal text-xl leading-[1.3] text-slate-950 mb-3 uppercase">{insight.title}</h3>
                      <p className="font-open-sans text-md leading-[1.5] text-slate-950 mb-4">{insight.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="font-space-mono text-xs text-slate-600">{insight.date}</span>
                        <button className="font-space-mono text-sm text-slate-950 hover:text-blue-700 inline-flex items-center gap-1 transition-colors">
                          Read More <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </section>

          {/* Newsletter CTA */}
          <section className="py-12 mb-12 border-t border-slate-200">
            <div className="max-w-4xl mx-auto md:px-16 text-center">
              <h2 className="font-open-sans font-thin text-3xl md:text-5xl md:leading-[1.3] text-slate-950 mb-4">
                Stay Ahead of AI Search Evolution
              </h2>
              <p className="font-open-sans text-xl leading-[1.5] text-slate-950 mb-8">
                Get monthly insights, research findings, and strategic frameworks delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 font-space-mono text-sm placeholder:text-gray-400 rounded-full text-gray-900"
                />
                <Button className="bg-slate-900 text-white hover:bg-gray-800 font-space-mono text-sm uppercase px-6 rounded-full">
                  Subscribe
                </Button>
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
              <img src="/goVisibi-icon.svg" alt="VISIBI Logo" className="h-8 w-8" />
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
