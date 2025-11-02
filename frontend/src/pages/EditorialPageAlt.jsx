import { useState, useEffect } from 'react'
import { ChartNoAxesGantt, Menu, X, Target, Eye, TrendingUp, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function EditorialPageAlt() {
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Set light mode on initial load
  useEffect(() => {
    document.documentElement.classList.remove('dark')
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className="min-h-screen relative line-pattern">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-slate-300/60 bg-[linear-gradient(to_right,#1d4ed80A_1px,transparent_1px),linear-gradient(to_bottom,#1d4ed80A_1px,transparent_1px)] bg-[size:128px_104px]"></div>

      {/* Header */}
      <header className="max-w-[90%] mx-auto rounded-xl bg-white/90 dark:bg-slate-900/10 backdrop-blur-sm sticky top-8 z-[100] shadow-sm relative">
        <div className="mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ChartNoAxesGantt className="h-8 w-8 text-slate-950 dark:text-white" />
            <span className="text-2xl font-bold bg-slate-950 dark:bg-white bg-clip-text text-transparent">
              VISIBI
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 px-4">
            <a
              href="/platform"
              className="text-sm font-medium text-slate-900 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Platform
            </a>
            <a
              href="/solutions"
              className="text-sm font-medium text-slate-900 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Solutions
            </a>
            <a
              href="/pricing"
              className="text-sm font-medium text-slate-900 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Pricing
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900/95 backdrop-blur-sm">
            <nav className="px-6 py-4 flex flex-col gap-4">
              <a
                href="/platform"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2"
              >
                Platform
              </a>
              <a
                href="/solutions"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2"
              >
                Solutions
              </a>
              <a
                href="/pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2"
              >
                Pricing
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="max-w-[90%] mx-auto items-center px-4 lg:px-[5rem] mb-4 mt-12 relative">
        <div className="lg:block absolute h-full w-full bg-white/90 border border-slate-300 dark:border-gray-800 left-0 top-2 rounded-xl rounded-bl-none rounded-br-none shadow-sm shadow-blue-200"></div>

        <div className="relative z-10 py-16 top-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="font-inter text-5xl md:text-7xl font-bold text-slate-950 dark:text-slate-100">
              Born from Search. Built for Gen AI.
            </h1>
            <h2 className="text-md md:text-xl font-thin text-slate-950 tracking-tight dark:text-slate-100">
              Two decades of search expertise, reimagined for the era of generative AI.
            </h2>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-[90%] mx-auto px-12 py-12 relative z-10 bg-white dark:bg-gray-950 rounded-xl rounded-tl-none rounded-tr-none border-t border-b border-r border-l border-slate-300 dark:border-gray-800 mb-32">
        {/* Side Pattern Lines */}
        <div className="lg:block absolute h-full w-0 md:w-20 bg-slate-200/20 border-0 md:border-r md:border-t-0 md:border-slate-200 dark:border-gray-800 left-0 top-0 pattern-background rounded-bl-xl"></div>
        <div className="lg:block absolute h-full w-0 md:w-20 bg-slate-200/20 border-0 md:border-l md:border-t-0 md:border-slate-200 dark:border-gray-800 right-0 top-0 pattern-background rounded-br-xl"></div>

        <div className="max-w-7xl mx-auto">
          {/* Founder Story */}
          <section className="py-12 mb-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-inter font-bold text-[40px] leading-[1.3] text-slate-950 dark:text-white mb-8">
                The VISIBI Story
              </h2>
              <div className="space-y-6 font-open-sans text-[18px] leading-[1.7] text-slate-950 dark:text-gray-200">
                <p>
                  VISIBI was founded by search marketing veterans who spent 20+ years building visibility strategies for brands across EMEA markets. We've navigated every major algorithm shift, platform evolution, and industry transformation since the early days of Google.
                </p>
                <p>
                  In 2022, we watched ChatGPT fundamentally change how people discover information. Within months, millions of users were bypassing traditional search engines entirely—asking AI platforms for recommendations, comparisons, and solutions instead.
                </p>
                <p>
                  We realized that decades of search expertise needed to evolve. The rules that governed Google rankings didn't directly apply to AI-generated responses. Brands that dominated traditional search were invisible in AI conversations. A new discipline was emerging—and we needed to lead it.
                </p>
                <p>
                  VISIBI was born from this insight: <strong>visibility in the AI era requires new strategies, new measurement, and new thinking.</strong>
                </p>
                <p>
                  We combined our deep search knowledge with cutting-edge AI research, built proprietary tracking tools, and developed methodologies specifically for generative engine optimization. Today, we help brands appear, get cited, and earn trust across ChatGPT, Gemini, Perplexity, and the next generation of AI platforms.
                </p>
              </div>
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="py-12 mb-12">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="border border-slate-300 dark:border-gray-700 rounded-xl p-8 bg-white dark:bg-slate-900/50">
                  <div className="w-16 h-16 bg-white dark:bg-slate-800 border border-slate-950 dark:border-white rounded-xl flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-slate-950 dark:text-white" />
                  </div>
                  <h3 className="font-inter font-bold text-[32px] leading-[1.3] text-slate-950 dark:text-white mb-4">
                    Our Mission
                  </h3>
                  <p className="font-open-sans text-[16px] leading-[1.7] text-slate-950 dark:text-gray-300">
                    To ensure every brand has the opportunity to be discovered, understood, and trusted by AI platforms—leveling the playing field in an era where algorithmic citations shape perception and influence purchase decisions.
                  </p>
                </div>
                <div className="border border-slate-300 dark:border-gray-700 rounded-xl p-8 bg-white dark:bg-slate-900/50">
                  <div className="w-16 h-16 bg-white dark:bg-slate-800 border border-slate-950 dark:border-white rounded-xl flex items-center justify-center mb-6">
                    <Eye className="w-8 h-8 text-slate-950 dark:text-white" />
                  </div>
                  <h3 className="font-inter font-bold text-[32px] leading-[1.3] text-slate-950 dark:text-white mb-4">
                    Our Vision
                  </h3>
                  <p className="font-open-sans text-[16px] leading-[1.7] text-slate-950 dark:text-gray-300">
                    A future where AI-powered discovery is transparent, accurate, and accessible—where brands earn visibility through authority and quality, not manipulation or luck.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* VISIBI Framework Principles */}
          <section className="py-12 mb-12">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-inter font-bold text-[40px] leading-[1.3] text-slate-950 dark:text-white mb-4">
                  The VISIBI Framework
                </h2>
                <p className="font-open-sans text-[16px] leading-[1.7] text-slate-950 dark:text-gray-300 max-w-2xl mx-auto">
                  Our methodology is built on three core principles that guide every strategy and recommendation.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white dark:bg-slate-900/50 border border-slate-300 dark:border-gray-700 rounded-xl p-8 text-center">
                  <div className="w-16 h-16 bg-white dark:bg-slate-800 border border-slate-950 dark:border-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award className="w-8 h-8 text-slate-950 dark:text-white" />
                  </div>
                  <h3 className="font-inter font-semibold text-[24px] leading-[1.3] text-slate-950 dark:text-white mb-3">
                    Authority First
                  </h3>
                  <p className="font-open-sans text-[16px] leading-[1.7] text-slate-950 dark:text-gray-300">
                    AI platforms cite authoritative sources. We help you build the signals of credibility that earn citations.
                  </p>
                </div>
                <div className="bg-white dark:bg-slate-900/50 border border-slate-300 dark:border-gray-700 rounded-xl p-8 text-center">
                  <div className="w-16 h-16 bg-white dark:bg-slate-800 border border-slate-950 dark:border-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <Eye className="w-8 h-8 text-slate-950 dark:text-white" />
                  </div>
                  <h3 className="font-inter font-semibold text-[24px] leading-[1.3] text-slate-950 dark:text-white mb-3">
                    Context Matters
                  </h3>
                  <p className="font-open-sans text-[16px] leading-[1.7] text-slate-950 dark:text-gray-300">
                    It's not just about mentions—it's about appearing in the right context with accurate, positive descriptions.
                  </p>
                </div>
                <div className="bg-white dark:bg-slate-900/50 border border-slate-300 dark:border-gray-700 rounded-xl p-8 text-center">
                  <div className="w-16 h-16 bg-white dark:bg-slate-800 border border-slate-950 dark:border-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="w-8 h-8 text-slate-950 dark:text-white" />
                  </div>
                  <h3 className="font-inter font-semibold text-[24px] leading-[1.3] text-slate-950 dark:text-white mb-3">
                    Measurement Drives Growth
                  </h3>
                  <p className="font-open-sans text-[16px] leading-[1.7] text-slate-950 dark:text-gray-300">
                    You can't optimize what you don't measure. We quantify AI visibility and tie it to business outcomes.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Expertise */}
          <section className="py-12 mb-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-inter font-bold text-[40px] leading-[1.3] text-slate-950 dark:text-white mb-8 text-center">
                Built on Deep Expertise
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-slate-900/50 border border-slate-300 dark:border-gray-700 rounded-xl p-6">
                  <h3 className="font-inter font-semibold text-[20px] leading-[1.3] text-slate-950 dark:text-white mb-3">
                    20+ Years in Search
                  </h3>
                  <p className="font-open-sans text-[16px] leading-[1.7] text-slate-950 dark:text-gray-300">
                    Enterprise SEO, paid media, and content strategy across B2B and consumer brands.
                  </p>
                </div>
                <div className="bg-white dark:bg-slate-900/50 border border-slate-300 dark:border-gray-700 rounded-xl p-6">
                  <h3 className="font-inter font-semibold text-[20px] leading-[1.3] text-slate-950 dark:text-white mb-3">
                    EMEA Market Experience
                  </h3>
                  <p className="font-open-sans text-[16px] leading-[1.7] text-slate-950 dark:text-gray-300">
                    Multi-market visibility strategies across Europe, Middle East, and Africa.
                  </p>
                </div>
                <div className="bg-white dark:bg-slate-900/50 border border-slate-300 dark:border-gray-700 rounded-xl p-6">
                  <h3 className="font-inter font-semibold text-[20px] leading-[1.3] text-slate-950 dark:text-white mb-3">
                    AI Research & Development
                  </h3>
                  <p className="font-open-sans text-[16px] leading-[1.7] text-slate-950 dark:text-gray-300">
                    Proprietary tools and methodologies for tracking and optimizing AI platform visibility.
                  </p>
                </div>
                <div className="bg-white dark:bg-slate-900/50 border border-slate-300 dark:border-gray-700 rounded-xl p-6">
                  <h3 className="font-inter font-semibold text-[20px] leading-[1.3] text-slate-950 dark:text-white mb-3">
                    Cross-Disciplinary Team
                  </h3>
                  <p className="font-open-sans text-[16px] leading-[1.7] text-slate-950 dark:text-gray-300">
                    SEO specialists, content strategists, data scientists, and AI researchers working together.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-12">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="font-inter font-bold text-[40px] leading-[1.3] text-slate-950 dark:text-white">
                Let's Build Your AI Visibility Strategy
              </h2>
              <p className="font-open-sans text-[18px] leading-[1.7] text-slate-950 dark:text-gray-300">
                Ready to work with a team that combines decades of search expertise with cutting-edge AI optimization?
              </p>
              <Button
                onClick={() => window.location.href = '/contact'}
                className="bg-blue-700 text-white hover:bg-blue-800 font-medium text-lg px-8 py-6 h-auto rounded-full transition-colors"
              >
                Talk to a Specialist
              </Button>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-[90%] mx-auto px-8 py-12 mt-24 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-950 rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Column - Logo and Description */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <ChartNoAxesGantt className="h-8 w-8 text-slate-950 dark:text-white" />
              <span className="text-2xl font-bold bg-slate-950 dark:bg-white bg-clip-text text-transparent">
                VISIBI
              </span>
            </div>
            <p className="font-open-sans text-lg text-slate-900 dark:text-gray-300 max-w-md leading-relaxed">
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

          {/* Right Column - Newsletter */}
          <div className="space-y-8">
            <div>
              <h3 className="font-sans text-xl text-slate-950 dark:text-white mb-2">
                Want your brand to stand out in the age of AI conversations?
              </h3>
              <p className="text-sm text-slate-600 dark:text-gray-400">
                Stay informed with expert updates on brand visibility across AI platforms.
              </p>
            </div>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Email Address"
                className="flex-1 font-space-mono text-sm placeholder:text-gray-400 rounded-full text-gray-900 dark:text-gray-100"
              />
              <Button className="bg-slate-900 dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 font-space-mono text-sm uppercase px-6 rounded-full">
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
