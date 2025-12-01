import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Target, FileText, BarChart3, RefreshCw, CheckCircle2, Sparkles, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Navigation from '@/components/Navigation'
import Breadcrumbs from '@/components/Breadcrumbs'

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

  const processSteps = [
    {
      phase: "Phase 1",
      title: "Discovery & Audit",
      duration: "Week 1-2",
      description: "Comprehensive analysis of current Gen AI visibility, competitor citations, and opportunity assessment."
    },
    {
      phase: "Phase 2",
      title: "Strategy Development",
      duration: "Week 3-4",
      description: "Custom GEO roadmap with prioritized tactics for content, authority signals, and distribution."
    },
    {
      phase: "Phase 3",
      title: "Implementation",
      duration: "Month 2-3",
      description: "Execute optimizations across content, technical infrastructure, and external authority building."
    },
    {
      phase: "Phase 4",
      title: "Monitoring & Refinement",
      duration: "Ongoing",
      description: "Track performance, identify new opportunities, and continuously optimize based on Gen AI platform evolution."
    }
  ]

  const whyVISIBIItems = [
    {
      icon: Target,
      title: "Proven Methodology",
      description: "Built on 20+ years of search expertise, adapted for Gen AI platforms"
    },
    {
      icon: BarChart3,
      title: "Transparent Tracking",
      description: "Real-time visibility dashboards showing mentions, citations, and sentiment"
    },
    {
      icon: RefreshCw,
      title: "Continuous Evolution",
      description: "We adapt strategies as Gen AI platforms evolve and new opportunities emerge"
    }
  ]

  const faqs = [
    {
      question: "What is Generative Engine Optimization (GEO)?",
      answer: "GEO is the practice of optimizing your brand's visibility, citations, and perception within Gen AI-powered platforms like ChatGPT, Gemini, and Perplexity. Unlike traditional SEO which focuses on search engine rankings, GEO ensures your brand appears in Gen AI-generated responses when users ask questions related to your industry, products, or services."
    },
    {
      question: "How is GEO different from traditional SEO?",
      answer: "While SEO focuses on ranking in search results pages, GEO optimizes for mentions and citations within Gen AI-generated responses. GEO requires understanding how Gen AI platforms source, evaluate, and present information—which involves different technical approaches, content strategies, and authority signals than traditional search optimization."
    },
    {
      question: "Which Gen AI platforms does VISIBI optimize for?",
      answer: "We optimize for all major Gen AI platforms including ChatGPT (OpenAI), Gemini (Google), Perplexity, Claude (Anthropic), and emerging generative Gen AI search engines. Our approach is platform-agnostic, focusing on universal principles that work across the Gen AI ecosystem."
    },
    {
      question: "How long does it take to see results from GEO?",
      answer: "Initial visibility improvements can appear within 4-8 weeks as Gen AI platforms index optimized content. However, meaningful citation growth and brand mention frequency typically develops over 3-6 months as authority signals strengthen and content distribution expands across the web."
    },
    {
      question: "Can you guarantee my brand will appear in Gen AI responses?",
      answer: "We cannot guarantee specific placements, as Gen AI platform algorithms are proprietary and constantly evolving. However, we use proven methodologies to significantly increase the probability of citations by optimizing the factors that influence Gen AI content selection and presentation."
    },
    {
      question: "How do you measure GEO success?",
      answer: "We track multiple metrics including: mention frequency across Gen AI platforms, citation quality and context, sentiment analysis of brand descriptions, visibility share vs. competitors, and correlation with downstream traffic and conversions. Our VISIBI Tool provides comprehensive dashboards for monitoring these metrics."
    },
    {
      question: "Do I need to stop doing traditional SEO to focus on GEO?",
      answer: "No—GEO and SEO are complementary. Strong SEO fundamentals (quality content, technical optimization, backlinks) actually support GEO success by building the authority signals Gen AI platforms recognize. We typically recommend an integrated approach that addresses both traditional search and Gen AI visibility."
    },
    {
      question: "What types of businesses benefit most from GEO?",
      answer: "B2B SaaS companies, professional services, e-commerce brands, and any business whose customers research solutions through Gen AI platforms benefit significantly. GEO is particularly valuable for brands in competitive categories where Gen AI-powered discovery is replacing traditional search behavior."
    },
    {
      question: "How does GEO impact my bottom line?",
      answer: "GEO drives business impact by increasing brand awareness in high-intent discovery moments, building trust through authoritative citations, reducing customer acquisition costs by appearing in organic Gen AI responses, and influencing purchase decisions before prospects reach your website."
    },
    {
      question: "What's included in a GEO audit?",
      answer: "Our comprehensive audit includes: current Gen AI visibility assessment across platforms, competitor citation analysis, content gap identification, authority signal evaluation, sentiment analysis of existing mentions, and a prioritized roadmap of optimization opportunities with estimated impact."
    }
  ]

  const [openFaqIndex, setOpenFaqIndex] = useState(0)

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
  }

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

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-slate-300/60 bg-[linear-gradient(to_right,#1d4ed80A_1px,transparent_1px),linear-gradient(to_bottom,#1d4ed80A_1px,transparent_1px)] bg-[size:128px_104px]"></div>

      <Navigation currentPage="geo" />

      {/* Hero Section */}
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
                  { label: "GEO" }
                ]} />
                </div>
                <h1 className="font-open-sans text-3xl md:text-6xl font-semibold tracking-tight text-slate-950 md:leading-[1.15]">
                  Generative Engine Optimisation (GEO)
                </h1>
                <h2 className="font-open-sans text-2xl md:text-3xl font-thin block md:leading-[1.4] pb-8">
                  Get discovered, cited, and positively represented by Gen AI platforms like ChatGPT, Gemini, and Perplexity.
                </h2>
                <Link to="/contact">
                  <Button className="inline-flex items-center px-6 py-3 bg-blue-700 text-white rounded-full font-medium hover:bg-blue-800 transition-colors">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Request GEO Audit
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
                  src="vi/visibi-geo-ai.png"
                  alt="Person analyzing AI-generated content discovery with magnifying glass over networked documents"
                  className="w-full h-auto max-w-md animate-subtle-bounce"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-full md:max-w-[90%] mx-auto px-12 py-12 relative z-10 bg-white rounded-xl rounded-tl-none rounded-tr-none rounded-bl-none rounded-br-none border-t border-r border-l border-slate-300 mb-2">
        <div className="lg:block absolute h-full w-0 md:w-16 bg-slate-200/20 border-0 md:border-r md:border-t-0 md:border-slate-200 left-0 top-0 pattern-background rounded-bl-xl"></div>
        <div className="lg:block absolute h-full w-0 md:w-16 bg-slate-200/20 border-0 md:border-l md:border-t-0 md:border-slate-200 right-0 top-0 pattern-background rounded-br-xl"></div>

        <div className="max-w-7xl mx-auto">
          {/* What is GEO */}
          <section className="py-12 mb-12 border-b border-slate-200">
            <div className="max-w-4xl mx-auto md:px-16">
              <h2 className="font-open-sans font-thin text-3xl md:text-5xl md:leading-[1.3] text-slate-950 mb-6 text-center">
                What is GEO?
              </h2>
              <div className="space-y-6 font-open-sans text-md md:text-lg leading-[1.6] text-slate-950">
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
          <section className="py-12 mb-12 border-b border-slate-200">
            <div className="md:max-w-4xl max-w-full mx-0 md:text-left md:px-16 px-0">
              <div className="mb-12 text-left">
                <h2 className="font-open-sans font-thin text-3xl md:text-5xl leading-[1.3] text-slate-950 mb-2">
                  The VISIBI GEO Framework
                </h2>
                <p className="font-open-sans text-md md:text-lg leading-[1.5] text-slate-950 max-w-3xl">
                  A comprehensive methodology for optimizing Gen AI visibility across all platforms.
                </p>
              </div>
            </div>
            <div className="md:max-w-7xl max-w-full mx-auto md:text-left md:px-16 px-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border-slate-300 border transition-colors pattern-background">
                {frameworkItems.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div key={index} className="bg-white border-0 border-slate-300 p-8">
                      <Icon size={32} strokeWidth={1.25} className="text-slate-950 mb-4" />
                      <h3 className="font-space-mono pb-2 text-lg font-normal uppercase text-slate-950 mb-3">{item.title}</h3>
                      <p className="font-open-sans text-md text-slate-950">{item.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* Process Timeline */}
          <section className="py-12 mb-12 border-b border-slate-200">
            <div className="md:max-w-4xl max-w-full mx-0 md:text-left md:px-16 px-0">
              <div className="text-left mb-12">
                <h2 className="font-open-sans font-thin text-3xl md:text-5xl md:leading-[1.3] text-slate-950 mb-2">
                  Our GEO Process
                </h2>
                <p className="font-open-sans text-md md:text-lg leading-[1.5] text-slate-950">
                  A systematic approach to building and maintaining Gen AI visibility.
                </p>
              </div>
            </div>
            <div className="max-w-7xl mx-0 md:px-16">
              <div className="mx-auto p-4 grid md:grid-cols-1 lg:grid-cols-2 gap-4 border-slate-300 border transition-colors pattern-background">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex-1 bg-white p-6 mb-4 border border-slate-300">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-slate-950 text-white rounded-full flex items-center justify-center font-open-sans font-semibold text-md mb-4">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-space-mono font-normal text-lg leading-[1.3] text-slate-950 uppercase">{step.title}</h3>
                        <span className="font-space-mono text-sm text-slate-600">({step.duration})</span>
                      </div>
                      <p className="font-open-sans text-md leading-[1.5] text-slate-950">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SEO vs GEO Comparison */}
          <section className="py-12 mb-12 border-b border-slate-200">
            <div className="max-w-4xl mx-auto md:px-16">
              <div className="text-center mb-12">
                <h2 className="font-open-sans font-normal text-3xl md:text-5xl leading-[1.3] text-slate-950 mb-4">
                  SEO vs GEO<span className="block font-thin"> Understanding the Difference</span>
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

          {/* Why VISIBI */}
          <section className="py-12 mb-12 border-b border-slate-200">
            <div className="md:max-w-4xl max-w-full mx-0 md:text-left md:px-16 px-0">
              <div className="text-left mb-12">
                <h2 className="font-open-sans font-thin text-3xl md:text-5xl leading-[1.3] text-slate-950 mb-2">
                  Why Choose VISIBI for GEO
                </h2>
                <p className="font-open-sans text-md md:text-lg leading-[1.5] text-slate-950 max-w-3xl">
                  Built on 20+ years of search expertise, adapted for the Gen AI era.
                </p>
              </div>
            </div>
            <div className="md:max-w-7xl max-w-full mx-auto md:text-left md:px-16 px-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border-slate-300 border transition-colors pattern-background">
                {whyVISIBIItems.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div key={index} className="bg-white border-0 border-slate-300 p-8">
                      <Icon size={32} strokeWidth={1.25} className="text-slate-950 mb-4" />
                      <h3 className="font-space-mono pb-2 text-lg font-normal uppercase text-slate-950 mb-3">{item.title}</h3>
                      <p className="font-open-sans text-md text-slate-950">{item.description}</p>
                    </div>
                  )
                })}
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
                  Common questions about Generative Engine Optimisation.
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
            Ready to Maximize Your Gen AI Visibility?
          </h2>
          <p className="font-open-sans text-xl leading-[1.7] text-slate-950 pb-8">
            Get a comprehensive GEO audit and discover how to increase your brand's citations across AI platforms.
          </p>
          <Link to="/contact">
            <Button className="inline-flex items-center px-8 py-6 bg-blue-700 text-white rounded-full font-medium hover:bg-blue-800 transition-colors">
              <Sparkles className="w-5 h-5 mr-2" />
              Request Your GEO Audit
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-full md:max-w-[90%] mx-auto px-8 py-12 mt-0 border-t border-gray-200 bg-white rounded-xl rounded-bl-none rounded-br-none z-10">
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
                href="https://x.com/VisibiAI"
                target="_blank"
                rel="noopener noreferrer"
                className="font-space-mono text-sm text-gray-600 hover:text-blue-700 uppercase tracking-wide"
              >
                X
              </a>
              <a
                href="https://linkedin.com/company/visibi-ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-space-mono text-sm text-gray-600 hover:text-blue-700 uppercase tracking-wide"
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
