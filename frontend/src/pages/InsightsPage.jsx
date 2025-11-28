import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Navigation from '@/components/Navigation'
import Breadcrumbs from '@/components/Breadcrumbs'
import { getPublishedArticles, getArticlesByCategory, getCategories } from '@/data/articles'

export default function InsightsPage() {
  useEffect(() => {
    document.documentElement.classList.remove('dark')
  }, [])

  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = getCategories()
  const filteredInsights = getArticlesByCategory(selectedCategory)

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
      <section className="max-w-full md:max-w-[90%] mx-auto items-center  mb-0 mt-12 relative bg-[#FAFAFB] border border-b-0 border-slate-300 rounded-xl rounded-bl-none rounded-br-none overflow-hidden">
        {/* Graph paper style background with gradient fade at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-64 pointer-events-none">
          {/* Graph paper grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[length:14px_14px]"></div>
          {/* Gradient fade from white to gray-50 */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFB] via-white/40 to-[#FAFAFB]"></div>
        </div>

        <div className="lg:block h-full w-full">
          <div className="relative z-10 py-16 border-l border-r border-slate-200">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center px-16">
              {/* Left Column - 60% (3 out of 5 columns) */}
              <div className="lg:col-span-3 space-y-4 text-left">
                <div className="text-left pb-8">
                <Breadcrumbs items={[
                  { label: "Home", path: "/" },
                  { label: "Insights" }
                ]} />
                </div>
                <h1 className="font-open-sans text-3xl md:text-6xl font-semibold tracking-tight text-slate-950 md:leading-[1.15]">
                  AI Visibility Insights & Research
                </h1>
                <h2 className="font-open-sans text-2xl md:text-3xl font-thin block md:leading-[1.4] pb-8">
                  Deep dives, case studies, and strategic frameworks for mastering visibility in the age of generative AI.
                </h2>
              </div>

              {/* Right Column - 40% (2 out of 5 columns) */}
              <div className="lg:col-span-2 flex items-center justify-center">
                <style>{`
                  @keyframes subtleBounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                  }
                  .animate-subtle-bounce {
                    animation: subtleBounce 4s ease-in-out infinite;
                  }
                `}</style>
                <img 
                  src="/vi/visibi-insights.png" 
                  alt="AI visibility insights, research and strategic frameworks" 
                  className="w-full h-auto max-w-md animate-subtle-bounce"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-full md:max-w-[90%] mx-auto px-12 py-12 relative z-10 bg-white rounded-xl rounded-tl-none rounded-tr-none border-t border-b border-r border-l border-slate-300 mb-2">
        <div className="lg:block absolute h-full w-0 md:w-16 bg-slate-200/20 border-0 md:border-r md:border-t-0 md:border-slate-200 left-0 top-0 pattern-background rounded-bl-xl"></div>
        <div className="lg:block absolute h-full w-0 md:w-16 bg-slate-200/20 border-0 md:border-l md:border-t-0 md:border-slate-200 right-0 top-0 pattern-background rounded-br-xl"></div>

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
              {filteredInsights.map((insight) => {
                const IconComponent = insight.icon
                return (
                  <Link 
                    key={insight.id}
                    to={insight.slug}
                    className="block"
                  >
                    <article className="bg-white border border-slate-300 rounded-xl overflow-hidden hover:border-blue-700 transition-all duration-300 cursor-pointer h-full">
                      <div className="h-48 bg-slate-50 border-b border-slate-300 flex items-center justify-center">
                        <IconComponent size={32} strokeWidth={1.25} className="text-slate-950" />
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
                          <span className="font-space-mono text-xs text-slate-600">{insight.displayDate}</span>
                          <span className="font-space-mono text-sm text-slate-950 hover:text-blue-700 inline-flex items-center gap-1 transition-colors">
                            Read More <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                )
              })}
            </div>
          </section>
        </div>
      </main>

              {/* CTA Section */}
          <section className="max-w-full md:max-w-[90%] mx-auto px-12 py-24 relative z-10 bg-[#FAFAFB] rounded-xl rounded-tl-none rounded-tr-none border-t border-b border-r border-l border-slate-300 mb-32 overflow-hidden">
            {/* Graph paper style background with gradient fade */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Graph paper grid pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[length:14px_14px]"></div>
              {/* Gradient fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFB] via-white/40 to-[#FAFAFB]"></div>
            </div>

            <div className="lg:block absolute h-full w-0 md:w-16 bg-slate-200/20 border-0 md:border-r md:border-t-0 md:border-slate-200 left-0 top-0 pattern-background rounded-bl-xl"></div>
            <div className="lg:block absolute h-full w-0 md:w-16 bg-slate-200/20 border-0 md:border-l md:border-t-0 md:border-slate-200 right-0 top-0 pattern-background rounded-br-xl"></div>
        
        
            <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
              <h2 className="font-open-sans font-thin text-4xl md:text-5xl md:leading-[1.3] text-slate-950">
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


      {/* Footer */}
      <footer className="max-w-full md:max-w-[90%] mx-auto px-8 py-12 mt-24 border-t border-gray-200 bg-white rounded-xl rounded-bl-none rounded-br-none z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img src="/govisibi-logo.png" alt="VISIBI Logo" className="h-8 w-8" />
              <span className="text-2xl font-bold bg-slate-950 bg-clip-text text-transparent">VISIBI</span>
            </div>
            <p className="font-open-sans text-lg text-slate-900 max-w-md leading-relaxed">
              Track and manage your brand's presence across leading AI platforms.
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
