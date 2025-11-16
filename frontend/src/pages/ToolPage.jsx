import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Eye, MessageSquare, Heart, TrendingUp, Users, Download, Zap, BarChart3, Sparkles, ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Navigation from '@/components/Navigation'

export default function ToolPage() {
  useEffect(() => {
    document.documentElement.classList.remove('dark')
  }, [])

  const [openFaqIndex, setOpenFaqIndex] = useState(null)

  const features = [
    {
      icon: Eye,
      title: "AI Platform Mentions",
      description: "Track how frequently your brand appears across ChatGPT, Gemini, Perplexity, and other AI engines."
    },
    {
      icon: MessageSquare,
      title: "Citation Analysis",
      description: "See exactly where and how AI platforms cite your content, with full context and source attribution."
    },
    {
      icon: Heart,
      title: "Sentiment Tracking",
      description: "Monitor the tone and sentiment of AI-generated brand descriptions—positive, neutral, or negative."
    },
    {
      icon: TrendingUp,
      title: "Visibility Index",
      description: "Proprietary score measuring your overall presence and prominence across AI platforms over time."
    },
    {
      icon: Users,
      title: "Competitor Share",
      description: "Compare your AI visibility against competitors to identify opportunities and threats."
    },
    {
      icon: Download,
      title: "Data Exports",
      description: "Export raw data, trends, and reports for deeper analysis and stakeholder presentations."
    },
    {
      icon: Zap,
      title: "Real-Time Alerts",
      description: "Get notified when significant changes occur in your AI visibility or competitor mentions."
    }
  ]

  const faqs = [
    {
      question: "What is the VISIBI Visibility Tool?",
      answer: "The VISIBI Tool is a proprietary platform for tracking and measuring your brand's presence across AI engines. It monitors mentions, citations, sentiment, and competitive positioning across ChatGPT, Gemini, Perplexity, and other generative AI platforms."
    },
    {
      question: "How does the tool track AI platform mentions?",
      answer: "We use automated query testing across AI platforms, analyzing thousands of industry-relevant questions to identify when and how your brand appears. Our technology captures response variations, citation patterns, and context to provide comprehensive visibility data."
    },
    {
      question: "How accurate is the sentiment analysis?",
      answer: "Our sentiment analysis uses advanced natural language processing to evaluate the tone and context of brand mentions. While no automated system is perfect, our accuracy rate exceeds 90% and is continuously refined through machine learning and human validation."
    },
    {
      question: "Can I track multiple brands or competitors?",
      answer: "Yes. The tool allows you to monitor your own brand plus unlimited competitors, providing comparative analysis of visibility share, citation frequency, and sentiment across the AI landscape."
    },
    {
      question: "How often is data updated?",
      answer: "Data is refreshed daily for core metrics and weekly for comprehensive analysis. Real-time alerts notify you of significant changes as they're detected, ensuring you never miss important shifts in AI visibility."
    },
    {
      question: "What AI platforms does the tool monitor?",
      answer: "We currently track ChatGPT (OpenAI), Gemini (Google), Perplexity, Claude (Anthropic), and Microsoft Copilot. We continuously add new platforms as they gain market significance."
    },
    {
      question: "Is the tool available as standalone software?",
      answer: "The VISIBI Tool is currently available exclusively to clients working with us on GEO, SEO, or integrated visibility strategies. This ensures you have expert support to interpret data and act on insights effectively."
    },
    {
      question: "Can the tool integrate with other analytics platforms?",
      answer: "Yes. We offer API access and integrations with Google Analytics, Google Data Studio, and other business intelligence tools to combine AI visibility data with your broader marketing analytics."
    },
    {
      question: "What's the difference between the tool and manual monitoring?",
      answer: "Manual monitoring is time-intensive, inconsistent, and limited in scale. The VISIBI Tool automates thousands of queries daily, tracks historical trends, identifies patterns, and provides quantitative measurement that's impossible to achieve manually."
    },
    {
      question: "How do I get access to the VISIBI Tool?",
      answer: "The tool is included in all comprehensive GEO engagements and available as an add-on for SEO and PPC clients. Contact us to request early access and see a live demo of your current AI visibility."
    }
  ]

  return (
    <div className="min-h-screen relative line-pattern">
      <Helmet>
        <title>AI Visibility Tracking Tool - Monitor Brand Mentions Across AI Platforms | VISIBI</title>
        <meta name="description" content="Track mentions, citations, sentiment, and competitive positioning across ChatGPT, Gemini, Perplexity, and Claude. Proprietary AI visibility analytics platform with real-time alerts." />
        <meta name="keywords" content="AI visibility tool, ChatGPT tracking, AI mention monitoring, brand sentiment analysis, AI platform analytics, citation tracking" />
        <link rel="canonical" href="https://visibi.com/tool" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://visibi.com/tool" />
        <meta property="og:title" content="AI Visibility Tracking Tool - Monitor Brand Mentions | VISIBI" />
        <meta property="og:description" content="Track your brand's mentions, citations, and sentiment across all major AI platforms with powerful analytics and real-time alerts." />
        <meta property="og:site_name" content="VISIBI" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Visibility Tracking Tool | VISIBI" />
        <meta name="twitter:description" content="Monitor how AI platforms mention and cite your brand. Get actionable insights and competitive intelligence." />
      </Helmet>

      <div className="absolute inset-0 -z-10 h-full w-full bg-slate-300/60 bg-[linear-gradient(to_right,#1d4ed80A_1px,transparent_1px),linear-gradient(to_bottom,#1d4ed80A_1px,transparent_1px)] bg-[size:128px_104px]"></div>

      <Navigation currentPage="tool" />

      {/* Hero */}
      <section className="max-w-[90%] mx-auto items-center lg:px-[5rem] mb-0 mt-12 relative bg-[#FAFAFB] border border-b-0 border-slate-300 rounded-xl rounded-bl-none rounded-br-none shadow-sm shadow-blue-200 overflow-hidden">
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
                <h1 className="font-open-sans text-4xl md:text-6xl font-semibold tracking-tight text-slate-950 md:leading-[1.15]">
                  See how Gen AI talks about your Brand
                </h1>
                <h2 className="text-md md:text-xl md:leading-[1.7] tracking-tight font-thin text-slate-950 pb-8">
                  Track mentions, citations, sentiment, and competitive positioning across ChatGPT, Gemini, Perplexity, and other Gen AI platforms.
                </h2>
                <Link to="/">
                  <Button className="inline-flex items-center px-6 py-3 bg-blue-700 text-white rounded-full font-medium hover:bg-blue-800 transition-colors">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Request Early Access
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
                  src="/vi/visibi-welcome.png" 
                  alt="AI visibility tracking and monitoring platform interface" 
                  className="w-full h-auto max-w-md animate-subtle-bounce"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-[90%] mx-auto px-12 py-12 relative z-10 bg-white rounded-none border-t border-b border-r border-l border-slate-300 mb-1">
        <div className="lg:block absolute h-full w-0 md:w-20 bg-slate-200/20 border-0 md:border-r md:border-t-0 md:border-slate-200 left-0 top-0 pattern-background rounded-bl-xl"></div>
        <div className="lg:block absolute h-full w-0 md:w-20 bg-slate-200/20 border-0 md:border-l md:border-t-0 md:border-slate-200 right-0 top-0 pattern-background rounded-br-xl"></div>

        <div className="max-w-7xl mx-auto">
          {/* Feature Grid */}
          <section className="py-12 mb-12 border-b border-slate-200">
            <div className="md:max-w-2xl max-w-full mx-0 md:text-left md:px-16 px-0">
              <div className="mb-12 text-left">
                <h2 className="font-open-sans font-thin text-3xl md:text-5xl md:leading-[1.3] text-slate-950 mb-4">
                  Comprehensive AI Visibility Intelligence
                </h2>
                <p className="font-open-sans text-xl leading-[1.5] text-slate-950 max-w-2xl">
                  Everything you need to measure, monitor, and improve your brand's presence in the AI era.
                </p>
              </div>
              </div>

               <div className="md:max-w-7xl max-w-full mx-auto md:text-left md:px-16 px-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border-slate-300 border transition-colors pattern-background">
                {features.map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <div key={index} className="bg-white p-8 hover:border-blue-700 transition-all">
                      <div className="w-12 h-12 bg-white flex items-center justify-center mb-6 flex-shrink-0">
                        <Icon size={32} strokeWidth={1.25} className="text-slate-950" />
                      </div>
                      <h3 className="font-space-mono pb-2 text-xl font-normal uppercase text-slate-950 mb-3">{feature.title}</h3>
                      <p className="font-open-sans text-md text-slate-950">{feature.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* Why It Matters */}
          <section className="py-12 mb-12">
            <div className="max-w-2xl mx-0 md:px-16">
              <div className="mb-12 text-left">
                <h2 className="font-open-sans font-thin text-3xl md:text-5xl md:leading-[1.3] text-slate-950 mb-4">
                  Why AI Visibility Tracking Matters
                </h2>
              </div>
              </div>
              <div className="md:max-w-7xl max-w-full mx-auto md:px-16">
              <div className="space-y-0 grid grid-cols-1 lg:grid-cols-3 gap-6 border-slate-300 border transition-colors pattern-background">
                <div className="bg-white p-8">
                  <h3 className="font-space-mono font-normal text-xl leading-[1.3] text-slate-950 mb-3 uppercase">You Can't Optimize What You Don't Measure</h3>
                  <p className="font-open-sans text-md leading-[1.5] text-slate-950">
                    Traditional analytics show website traffic after users discover you. AI visibility tracking reveals how users discover you in the first place—the critical awareness stage that determines whether prospects ever reach your website.
                  </p>
                </div>
                <div className="bg-white p-8">
                  <h3 className="font-space-mono font-normal text-xl leading-[1.3] text-slate-950 mb-3 uppercase">Competitive Intelligence</h3>
                  <p className="font-open-sans text-md leading-[1.5] text-slate-950">
                    See exactly how your visibility compares to competitors. Identify which brands dominate AI mentions in your category and understand the specific contexts where they're being cited instead of you.
                  </p>
                </div>
                <div className="bg-white p-8">
                  <h3 className="font-space-mono font-normal text-xl leading-[1.3] text-slate-950 mb-3 uppercase">Prove ROI of GEO Investments</h3>
                  <p className="font-open-sans text-md leading-[1.5] text-slate-950">
                    Demonstrate the impact of GEO efforts with quantitative data. Track mention growth, sentiment improvements, and citation quality over time to show stakeholders the value of AI visibility optimization.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Dashboard Preview */}
          <section className="py-24 mb-12 border-t border-slate-200">
            <div className="max-w-4xl mx-auto md:px-16">
              <div className="text-center mb-12">
                <h2 className="font-open-sans font-thin text-3xl md:text-5xl md:leading-[1.3] text-slate-950 mb-4">
                  Powerful Insights, Intuitive Interface
                </h2>
                <p className="font-open-sans text-xl leading-[1.5] text-slate-950">
                  Access all your AI visibility data through clean, actionable dashboards designed for both tactical optimization and executive reporting.
                </p>
              </div>
              <div className="bg-white p-12 text-center">
                <div className="max-w-3xl mx-auto">
                   <img src='./sample-dash.png' alt='VISIBI AI visibility tracking dashboard interface showing mention trends, citation analysis, sentiment scores, and competitive positioning metrics across AI platforms' className="rounded-xl border border-slate-200 pattern-background p-2 mb-8"></img>
                  {/* <BarChart3 className="w-32 h-32 text-slate-950 mx-auto mb-6" strokeWidth={1.25} /> */}
                  <p className="font-open-sans text-md leading-[1.5] text-slate-950">
                    Interactive dashboards showing real-time AI visibility metrics, historical trends, competitive benchmarks, and actionable recommendations.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-24 mb-12 border-t border-slate-200">
            <div className="max-w-4xl mx-auto md:px-16">
              <div className="text-center mb-12">
                <h2 className="font-open-sans font-thin text-3xl md:text-5xl md:leading-[1.3] text-slate-950 mb-4">
                  Frequently Asked Questions
                </h2>
              </div>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white border border-slate-300 overflow-hidden">
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                      className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                    >
                      <h3 className="font-open-sans font-normal text-sm md:text-base text-slate-950 pr-4">{faq.question}</h3>
                      {openFaqIndex === index ? (
                        <ChevronUp className="w-5 h-5 text-slate-950 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-950 flex-shrink-0" />
                      )}
                    </button>
                    {openFaqIndex === index && (
                      <div className="px-8 pb-6">
                        <p className="font-open-sans text-sm md:leading-[1.7] my-8 text-slate-950">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

        </div>

        
      </main>

        {/* CTA Section */}
          <section className="max-w-[90%] mx-auto px-12 py-24 relative z-10 bg-white dark:bg-gray-950 rounded-xl rounded-tl-none rounded-tr-none border-t border-b border-r border-l border-slate-300 dark:border-gray-800 mb-32">
            
             <div className="lg:block absolute h-full w-0 md:w-20 bg-slate-200/20 border-0 md:border-r md:border-t-0 md:border-slate-200 dark:border-gray-800 left-0 top-0 pattern-background rounded-bl-xl"></div>
            <div className="lg:block absolute h-full w-0 md:w-20 bg-slate-200/20 border-0 md:border-l md:border-t-0 md:border-slate-200 dark:border-gray-800 right-0 top-0 pattern-background rounded-br-xl"></div>
        
        
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="font-open-sans font-medium text-4xl md:leading-[1.3] text-slate-950 dark:text-white">
                 Request early access to the VISIBI Tool
              </h2>
              <p className="font-open-sans text-xl leading-[1.7] text-slate-950 dark:text-gray-300 pb-8">
               See exactly how AI platforms currently describe your brand and get visibility insights your competitors don't have.
              </p>
              <Link to="/">
                <Button 
                className="inline-flex items-center px-8 py-6 bg-blue-700 text-white rounded-full font-medium hover:bg-blue-800 transition-colors">
                  Request Access
                </Button>
              </Link>
            </div>
          </section>


      {/* Footer */}
      <footer className="max-w-[90%] mx-auto px-8 py-12 mt-24 border-t border-gray-200 bg-white rounded-xl rounded-bl-none rounded-br-none z-10">
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
