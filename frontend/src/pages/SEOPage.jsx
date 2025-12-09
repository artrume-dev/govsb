import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Search, FileText, Link2, BarChart3, CheckCircle2, Sparkles, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Navigation from '@/components/Navigation'
import Breadcrumbs from '@/components/Breadcrumbs'

export default function SEOPage() {
  useEffect(() => {
    document.documentElement.classList.remove('dark')
  }, [])

  const frameworkItems = [
    {
      icon: Search,
      title: "Technical Foundation",
      description: "Site architecture, crawlability, indexability, Core Web Vitals, mobile-first optimization"
    },
    {
      icon: FileText,
      title: "Content Excellence",
      description: "E-E-A-T content, keyword strategy, semantic optimization, Gen AI-comprehensible structure"
    },
    {
      icon: Link2,
      title: "Authority Building",
      description: "Strategic link building, digital PR, thought leadership, brand entity development"
    },
    {
      icon: BarChart3,
      title: "Performance Tracking",
      description: "Rankings, organic traffic, conversions, Gen AI citations, competitor benchmarking"
    }
  ]

  const processSteps = [
    {
      title: "Audit & Analysis",
      description: "Technical SEO audit, content gap analysis, competitor research, keyword mapping, Gen AI visibility baseline"
    },
    {
      title: "Strategy Development",
      description: "Prioritized roadmap, content calendar, technical fixes, link building targets, KPI framework"
    },
    {
      title: "Implementation",
      description: "Technical optimizations, content creation/optimization, schema markup, internal linking, page experience"
    },
    {
      title: "Authority Growth",
      description: "Link acquisition, digital PR campaigns, brand mentions, expert positioning, citation building"
    },
    {
      title: "Measurement & Iteration",
      description: "Performance tracking, Gen AI visibility monitoring, continuous optimization, quarterly strategy reviews"
    }
  ]

  const faqs = [
    {
      question: "What's different between SEO and GEO?",
      answer: "SEO optimizes for search engine rankings and organic traffic, while GEO focuses on getting your brand cited and mentioned within AI-generated responses. SEO creates the foundation—authoritative content, technical health, backlinks—that AI platforms use when sourcing information. They work together: strong SEO feeds GEO success."
    },
    {
      question: "How long does it take to see results?",
      answer: "Initial technical improvements can show within 4-6 weeks. Meaningful organic traffic growth typically develops over 3-6 months as content gains authority and rankings improve. SEO is a long-term investment with compounding returns—the earlier you start, the stronger your foundation becomes."
    },
    {
      question: "Do you support multi-language sites?",
      answer: "Yes. We implement international SEO strategies including hreflang tags, geo-targeting, multi-regional content optimization, and localized keyword research. Our team has extensive EMEA market experience across multiple languages and regional search behaviors."
    },
    {
      question: "Can you fix my technical SEO issues?",
      answer: "Absolutely. We conduct comprehensive technical audits to identify crawl errors, broken links, duplicate content, page speed issues, mobile usability problems, and schema implementation gaps. We either fix these directly or provide detailed recommendations for your development team."
    },
    {
      question: "How do you measure visibility in AI platforms?",
      answer: "Through our proprietary VISIBI Tool, which tracks brand mentions, citations, and sentiment across ChatGPT, Gemini, Perplexity, and other AI engines. This data complements traditional SEO metrics (rankings, traffic, conversions) to give you complete visibility intelligence."
    },
    {
      question: "What makes VISIBI's SEO different?",
      answer: "We optimize every element with AI visibility in mind. Our content isn't just keyword-focused—it's structured for AI comprehension and citation. Our schema markup goes beyond basic implementation to include entity relationships that AI platforms recognize. We think holistically about discoverability."
    },
    {
      question: "Do you create content or just optimize existing content?",
      answer: "Both. We audit and optimize your existing content for better performance, and we create new content based on strategic gaps, keyword opportunities, and AI citation potential. All content follows E-E-A-T principles (Experience, Expertise, Authoritativeness, Trustworthiness)."
    },
    {
      question: "How do you approach link building?",
      answer: "We focus on earning high-quality, contextually relevant backlinks through digital PR, thought leadership, strategic partnerships, and content collaboration. No spam, no link farms, no shortcuts—only white-hat tactics that build sustainable authority recognized by both search engines and AI platforms."
    }
  ]

  const [openFaqIndex, setOpenFaqIndex] = useState(0)

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
  }

  return (
    <div className="min-h-screen relative line-pattern">
      <Helmet>
        <title>AI-Ready SEO Services - Search + AI Optimization | VISIBI</title>
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta name="description" content="SEO that feeds your AI visibility. Build search rankings and AI citations simultaneously with technical SEO, content strategy, and authority building that works across Google and AI platforms." />
        <meta name="keywords" content="AI-ready SEO, technical SEO, content optimization, link building, E-E-A-T, search engine optimization, AI citations" />
        <link rel="canonical" href="https://www.govisibi.ai/seo" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.govisibi.ai/seo" />
        <meta property="og:title" content="AI-Ready SEO Services - Search + AI Optimization | VISIBI" />
        <meta property="og:description" content="SEO that powers both Google rankings and AI platform citations. Technical excellence meets AI-first content strategy." />
        <meta property="og:site_name" content="VISIBI" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI-Ready SEO Services | VISIBI" />
        <meta name="twitter:description" content="SEO that feeds your AI visibility. Build rankings and citations simultaneously." />

        {/* Structured Data - FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
      </Helmet>

      <div className="absolute inset-0 -z-10 h-full w-full bg-slate-300/60 bg-[linear-gradient(to_right,#1d4ed80A_1px,transparent_1px),linear-gradient(to_bottom,#1d4ed80A_1px,transparent_1px)] bg-[size:128px_104px]"></div>

      <Navigation currentPage="seo" />

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
                  { label: "SEO" }
                ]} />
                </div>
                <h1 className="font-open-sans text-3xl md:text-6xl font-semibold tracking-tight text-slate-950 md:leading-[1.15]">
                  SEO that feeds your AI visibility
                </h1>
                <h2 className="font-open-sans text-2xl md:text-3xl font-thin block md:leading-[1.4] pb-8">
                  We build search visibility that powers both traditional search and Gen AI discovery — helping your brand appear, get cited, and trusted across Google, ChatGPT, Gemini, and Perplexity.
                </h2>
                <Link to="/">
                  <Button className="inline-flex items-center px-6 py-3 bg-blue-700 text-white rounded-full font-medium hover:bg-blue-800 transition-colors">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Request SEO Audit
                  </Button>
                </Link>
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
                  src="/vi/visibi-seo-ai.png" 
                  alt="Search engine optimization strategy and content planning illustration" 
                  width="448"
                  height="448"
                  className="w-full h-auto max-w-md animate-subtle-bounce"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-full md:max-w-[90%] mx-auto px-12 py-12 relative z-10 bg-white rounded-xl rounded-tl-none rounded-tr-none rounded-bl-none rounded-br-none border-t border-r border-l border-slate-300 mb-2">
        <div className="lg:block absolute h-full w-0 md:w-16 bg-slate-200/20 border-0 md:border-r md:border-t-0 md:border-slate-200 left-0 top-0 pattern-background rounded-bl-xl"></div>
        <div className="lg:block absolute h-full w-0 md:w-16 bg-slate-200/20 border-0 md:border-l md:border-t-0 md:border-slate-200 right-0 top-0 pattern-background rounded-br-xl"></div>

        <div className="max-w-7xl mx-auto">
          {/* SEO Framework */}
          <section className="py-12 mb-12 border-b border-slate-200">
            <div className="md:max-w-3xl max-w-full mx-0 md:text-left md:px-16 px-0">
              <div className="mb-12 text-left">

               <h2 className="font-open-sans font-thin text-3xl md:text-5xl md:leading-[1.3] text-slate-950 mb-2">
                  The VISIBI SEO Framework
                </h2>
                <p className="font-open-sans text-xl leading-[1.5] text-slate-950 max-w-lg">
                  Our approach combines proven SEO fundamentals with AI-first optimization
                </p>
              </div>
              </div>

               <div className="md:max-w-7xl max-w-full mx-auto md:text-left md:px-16 px-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 border-slate-300 border transition-colors pattern-background">
                {frameworkItems.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div key={index} className="bg-white border-0 border-slate-300 p-8">
                      <Icon size={32} strokeWidth={1.25} className="text-slate-950 mb-4" />
                      <h3 className="font-space-mono pb-2 text-xl font-normal uppercase text-slate-950 mb-3">{item.title}</h3>
                      <p className="font-open-sans text-md text-slate-950">{item.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* Process Timeline */}
          <section className="py-12 mb-12">
            
              <div className="md:max-w-4xl max-w-full mx-0 md:text-left md:px-16 px-0">
              <div className="text-left mb-12">
                <h2 className="font-open-sans font-thin text-3xl md:text-5xl md:leading-[1.3] text-slate-950 mb-2">
                  How We Build Your SEO Success
                </h2>
                <p className="font-open-sans text-xl leading-[1.5] text-slate-950">
                  A structured 5-phase approach to sustainable organic growth
                </p>
              </div>
              </div>
              <div className="max-w-7xl mx-0 md:px-16">
              <div className="mx-auto p-4 grid md:grid-cols-1 lg:grid-cols-2 gap-4 border-slate-300 border transition-colors pattern-background">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex gap-6">
                    
                    <div className="flex-1 bg-white p-6 mb-4 border border-slate-300">
                      <div className="flex-shrink-0">
                      <div className="w-8 h-8 border border-slate-950 text-slate-950 rounded-full flex items-center justify-center font-open-sans font-semibold text-md mb-4">
                        {index + 1}
                      </div>
                    </div>
                      <h3 className="font-space-mono font-normal text-xl leading-[1.3] text-slate-950 mb-2 uppercase">{step.title}</h3>
                      <p className="font-open-sans text-md leading-[1.5] text-slate-950">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SEO Comparison */}
          <section className="py-12 mb-12 border-t border-slate-200">
            <div className="max-w-4xl mx-auto md:px-16">
              <div className="text-left mb-12">
                <h2 className="font-open-sans font-thin text-3xl md:text-5xl leading-[1.3] text-slate-950 mb-2">
                  AI-Ready SEO vs Traditional SEO
                </h2>
                <p className="font-open-sans text-xl md:leading-[1.5] text-slate-950">
                  The difference that powers AI citations
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border border-slate-300 p-8">
                  <h3 className="font-space-mono font-normal text-2xl leading-[1.3] text-slate-950 mb-6">Traditional SEO</h3>
                  <ul className="space-y-3 font-open-sans text-md leading-[1.5] text-slate-950">
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 flex-shrink-0 mt-0.5">•</span>
                      <span>Optimizes for keyword rankings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 flex-shrink-0 mt-0.5">•</span>
                      <span>Focuses on traffic volume</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 flex-shrink-0 mt-0.5">•</span>
                      <span>Content structured for search engines</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 flex-shrink-0 mt-0.5">•</span>
                      <span>Success = top 3 rankings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 flex-shrink-0 mt-0.5">•</span>
                      <span>Link building for PageRank</span>
                    </li>
                  </ul>
                </div>
                <div className="border-2 border-blue-700 p-8">
                  <h3 className="font-space-mono font-normal text-2xl leading-[1.3] text-slate-950 mb-6">VISIBI AI-Ready SEO</h3>
                  <ul className="space-y-3 font-open-sans text-md leading-[1.5] text-slate-950">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                      <span>Optimizes for AI comprehension & citations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                      <span>Focuses on authority & trust signals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                      <span>Content structured for AI & humans</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                      <span>Success = rankings + AI mentions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                      <span>Link building for entity authority</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose VISIBI */}
          <section className="py-12 mb-12 border-t border-b border-slate-200">
            <div className="md:max-w-3xl max-w-full mx-0 md:text-left md:px-16 px-0">
              <div className="mb-12 text-left">
                <h2 className="font-open-sans font-thin text-3xl md:text-5xl md:leading-[1.3] text-slate-950 mb-2">
                  Why Choose VISIBI for SEO
                </h2>
                <p className="font-open-sans text-xl leading-[1.5] text-slate-950 max-w-2xl">
                  Our approach combines proven SEO fundamentals with AI-first optimisation
                </p>
              </div>
            </div>
            <div className="md:max-w-7xl max-w-full mx-auto md:text-left md:px-16 px-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border-slate-300 border transition-colors pattern-background">
                <div className="bg-white border-0 border-slate-300 p-8">
                  <Search size={32} strokeWidth={1.25} className="text-slate-950 mb-4" />
                  <h3 className="font-space-mono pb-2 text-xl font-normal uppercase text-slate-950 mb-3">AI-First Approach</h3>
                  <p className="font-open-sans text-md text-slate-950">
                    Every optimization considers how AI platforms will interpret and cite your content
                  </p>
                </div>
                <div className="bg-white border-0 border-slate-300 p-8">
                  <BarChart3 size={32} strokeWidth={1.25} className="text-slate-950 mb-4" />
                  <h3 className="font-space-mono pb-2 text-xl font-normal uppercase text-slate-950 mb-3">Complete Visibility Tracking</h3>
                  <p className="font-open-sans text-md text-slate-950">
                    Monitor rankings, traffic, AND AI citations in one unified dashboard
                  </p>
                </div>
                <div className="bg-white border-0 border-slate-300 p-8">
                  <CheckCircle2 size={32} strokeWidth={1.25} className="text-slate-950 mb-4" />
                  <h3 className="font-space-mono pb-2 text-xl font-normal uppercase text-slate-950 mb-3">White-Hat Only</h3>
                  <p className="font-open-sans text-md text-slate-950">
                    Sustainable, ethical tactics that build lasting authority and trust
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-12 mb-12">
            <div className="md:max-w-3xl max-w-full mx-auto md:text-left md:px-16 px-0">
              <div className="text-center mb-12">
                <h2 className="font-open-sans font-thin text-3xl md:text-5xl leading-[1.3] text-slate-950 mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="font-open-sans text-xl leading-[1.5] text-slate-950">
                  Common questions about AI-ready SEO services.
                </p>
              </div>
            </div>
            <div className="md:max-w-4xl max-w-full mx-auto md:px-16">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-slate-300 bg-white">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                    >
                      <h3 className="font-open-sans font-normal text-sm md:text-base text-slate-950 pr-4">
                        {faq.question}
                      </h3>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-950 flex-shrink-0 transition-transform ${
                          openFaqIndex === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openFaqIndex === index && (
                      <div className="px-6 pb-6 pt-2">
                        <p className="font-open-sans text-sm leading-[1.6] text-slate-950">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Final CTA Section */}
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

        <div className="max-w-3xl mx-auto text-center space-y-6 relative z-10">
          <h2 className="font-open-sans font-thin text-4xl md:text-5xl md:leading-[1.3] text-slate-950">
            Ready to Build AI-Ready SEO?
          </h2>
          <p className="font-open-sans text-xl leading-[1.7] text-slate-950 pb-8">
            Get a comprehensive SEO audit that includes AI visibility analysis
          </p>
          <Link to="/contact">
            <Button className="inline-flex items-center px-8 py-6 bg-blue-700 text-white rounded-full font-medium hover:bg-blue-800 transition-colors">
              <Sparkles className="w-5 h-5 mr-2" />
              Request Your SEO Audit
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-full md:max-w-[90%] mx-auto px-8 py-12 mt-0 border-t border-gray-200 bg-white rounded-xl rounded-bl-none rounded-br-none z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img src="/govisibi-logo.png" alt="VISIBI Logo" width="32" height="32" className="h-8 w-8" />
              <span className="text-2xl font-bold bg-slate-950 bg-clip-text text-transparent">VISIBI</span>
            </div>
            <p className="font-open-sans text-lg text-slate-900 max-w-md leading-relaxed">
              Track and manage your brand's presence across leading AI platforms.
            </p>
                        <div className="flex gap-6">
              <a
                href="https://x.com/VisibiAI"
                target="_blank"
                rel="noopener noreferrer"
                className="font-space-mono text-sm text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400 uppercase tracking-wide"
              >
                X
              </a>
              <a
                href="http://linkedin.com/company/visibi-ai"
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
          <div className="flex gap-6">
            <Link to="/terms-of-use" className="font-space-mono text-xs text-gray-600 hover:text-blue-700 uppercase tracking-wide">
              Terms of Use
            </Link>
            <Link to="/privacy-policy" className="font-space-mono text-xs text-gray-600 hover:text-blue-700 uppercase tracking-wide">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
