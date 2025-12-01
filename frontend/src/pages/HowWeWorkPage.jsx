import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Heart, Brain, Target, Users, TrendingUp, Shield, Lightbulb, ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Navigation from '@/components/Navigation'
import Breadcrumbs from '@/components/Breadcrumbs'

export default function HowWeWorkPage() {
  useEffect(() => {
    document.documentElement.classList.remove('dark')
  }, [])

  const [openFaqIndex, setOpenFaqIndex] = useState(0)

  const attributes = [
    {
      icon: Brain,
      title: "Curious & Analytical",
      description: "We question assumptions, test hypotheses, and base recommendations on data—not trends or guesses."
    },
    {
      icon: Heart,
      title: "Radically Transparent",
      description: "Full visibility into methods, performance, and challenges. No black boxes, no BS."
    },
    {
      icon: Target,
      title: "Results-Obsessed",
      description: "We optimize for business outcomes, not vanity metrics. Every action ties to revenue impact."
    },
    {
      icon: Users,
      title: "Partnership-Oriented",
      description: "We're an extension of your team—collaborative, responsive, and invested in your success."
    },
    {
      icon: TrendingUp,
      title: "Continuous Learners",
      description: "AI platforms evolve daily. We stay ahead through constant research, testing, and adaptation."
    },
    {
      icon: Shield,
      title: "Ethical & Sustainable",
      description: "We use only white-hat tactics that build long-term authority, never shortcuts that risk penalties."
    },
    {
      icon: Lightbulb,
      title: "Strategic Thinkers",
      description: "We see the big picture and connect visibility strategies to broader business goals."
    }
  ]

  const processSteps = [
    {
      phase: "Discovery",
      description: "Initial consultation to understand your business, competitive landscape, current visibility, and strategic goals. We determine if there's a good fit and outline potential approach."
    },
    {
      phase: "Audit & Analysis",
      description: "Comprehensive assessment of your current AI visibility, content authority, technical infrastructure, and competitive positioning. We identify quick wins and long-term opportunities."
    },
    {
      phase: "Strategy Development",
      description: "Custom roadmap with prioritized tactics, timeline, resource requirements, and expected outcomes. Clear KPIs tied to business impact."
    },
    {
      phase: "Kickoff & Alignment",
      description: "Team introductions, tool access setup, stakeholder alignment on goals and communication cadence. We establish success criteria and reporting frameworks."
    },
    {
      phase: "Implementation",
      description: "Execute the strategy—content optimization, technical improvements, authority building, and ongoing monitoring. Weekly check-ins and progress updates."
    },
    {
      phase: "Measurement & Optimization",
      description: "Track performance against KPIs, identify what's working, double down on winners, and adjust tactics that underperform. Monthly strategic reviews."
    },
    {
      phase: "Continuous Improvement",
      description: "As AI platforms evolve and your business grows, we adapt strategies, test new opportunities, and maintain your competitive advantage."
    }
  ]

  const faqs = [
    {
      question: "What's your typical engagement model?",
      answer: "We offer both project-based engagements (audits, strategy development) and ongoing retainers for implementation and optimization. Most clients start with a discovery phase, then move to 6-12 month retainers as we execute and refine strategies together."
    },
    {
      question: "How hands-on is your team?",
      answer: "Very. We don't just deliver recommendations and disappear. We actively implement, monitor, optimize, and collaborate with your team throughout the engagement. You'll have direct access to strategists, not account managers reading from scripts."
    },
    {
      question: "Do you work with agencies or only direct clients?",
      answer: "We work with both. For agencies, we offer white-label GEO services and expert consultation. For direct clients, we can integrate with existing agency partners or serve as your full visibility team."
    },
    {
      question: "What size companies do you typically work with?",
      answer: "We work primarily with mid-market to enterprise B2B companies and ambitious growth-stage startups. If you're serious about AI visibility and have meaningful budget to invest in strategic advantage, we're a fit."
    },
    {
      question: "How do you handle confidentiality and competitive conflicts?",
      answer: "All client work is covered by NDAs. We don't work with direct competitors simultaneously in the same vertical. Your strategies, data, and insights remain confidential."
    },
    {
      question: "What do you need from us to be successful?",
      answer: "Access to your website, analytics, and existing marketing assets. Collaboration from your content and technical teams. Executive alignment on goals and KPIs. And a willingness to invest in long-term visibility rather than expecting overnight miracles."
    },
    {
      question: "How do you charge for services?",
      answer: "Pricing varies based on scope, complexity, and business size. We offer custom proposals after initial consultation. Generally: audits start at $5k, ongoing GEO retainers start at $8k/month, and comprehensive programs (GEO + SEO + PPC) start at $15k/month."
    },
    {
      question: "Do you guarantee specific results?",
      answer: "We don't guarantee rankings or specific mention counts because AI algorithms are proprietary and constantly changing. However, we do guarantee strategic rigor, transparent reporting, and continuous optimization based on performance data."
    }
  ]

  return (
    <div className="min-h-screen relative line-pattern">
      <Helmet>
        <title>How We Work - Strategy, Transparency & Trust | VISIBI</title>
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta name="description" content="Partner with VISIBI for data-driven AI visibility strategy. Learn our values, process, and approach to building lasting Gen AI presence through ethical tactics and relentless optimization." />
        <meta name="keywords" content="GEO methodology, AI visibility strategy, transparent SEO agency, data-driven marketing, ethical optimization" />
        <link rel="canonical" href="https://www.govisibi.ai/how-we-work" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.govisibi.ai/how-we-work" />
        <meta property="og:title" content="How We Work - Strategy, Transparency & Trust | VISIBI" />
        <meta property="og:description" content="Discover our values, methodology, and commitment to transparent, data-driven AI visibility optimization." />
        <meta property="og:site_name" content="VISIBI" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How We Work | VISIBI" />
        <meta name="twitter:description" content="Strategy, transparency, and trust in AI visibility optimization." />

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

      <Navigation currentPage="how-we-work" />

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
                  { label: "How We Work" }
                ]} />
                </div>
                <h1 className="font-open-sans text-3xl md:text-6xl font-semibold tracking-tight text-slate-950 md:leading-[1.15]">
                  Strategy, Transparency & Trust
                </h1>
                <h2 className="font-open-sans text-2xl md:text-3xl font-thin block md:leading-[1.4] pb-8">
                  How we partner with brands to build lasting Gen AI visibility through data-driven strategy, ethical tactics, and relentless optimization.
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
                  src="/vi/visibi-welcome.png" 
                  alt="Strategic planning and transparent methodology for AI visibility optimization" 
                  className="w-full h-auto max-w-md animate-subtle-bounce"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-full md:max-w-[90%] mx-auto px-12 py-12 relative z-10 bg-white border-t border-b border-r border-l border-slate-300 mb-2">
        <div className="lg:block absolute h-full w-0 md:w-16 bg-slate-200/20 border-0 md:border-r md:border-t-0 md:border-slate-200 left-0 top-0 pattern-background rounded-bl-xl"></div>
        <div className="lg:block absolute h-full w-0 md:w-16 bg-slate-200/20 border-0 md:border-l md:border-t-0 md:border-slate-200 right-0 top-0 pattern-background rounded-br-xl"></div>

        <div className="max-w-7xl mx-auto">
          {/* Attributes */}
          <section className="py-24 mb-12 border-b border-slate-200">
            <div className="md:max-w-7xl max-w-full mx-auto md:text-left md:px-16 px-0">
              <div className="mb-12 text-left">
                 <h2 className="font-open-sans font-thin text-3xl md:text-5xl leading-[1.3] text-slate-950 mb-4">
                  What we value (and hire for)
                </h2>
                <p className="font-open-sans text-xl leading-[1.5] text-slate-950 max-w-2xl">
                  These attributes define how we work, make decisions, and partner with clients.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border-slate-300 border transition-colors pattern-background">
                {attributes.map((attr, index) => {
                  const Icon = attr.icon
                  return (
                    <div key={index} className="bg-white p-8 hover:border-blue-700 transition-all">
                      <div className="w-12 h-12 bg-white flex items-center justify-center mb-6 flex-shrink-0">
                        <Icon className="w-6 h-6 text-slate-950" />
                      </div>
                      <h3 className="font-space-mono pb-2 text-xl font-normal uppercase text-slate-950 mb-3">{attr.title}</h3>
                      <p className="font-open-sans text-md text-slate-950">{attr.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="py-12 mb-12 border-t border-slate-200">
            <div className="max-w-7xl mx-auto md:px-16">
              <div className="text-center mb-12">
                <h2 className="font-open-sans font-thin text-3xl md:text-5xl leading-[1.3] text-slate-950 mb-4">
                  Our Client Process
                </h2>
                <p className="font-open-sans text-xl leading-[1.5] text-slate-950">
                  From first conversation to ongoing optimization—here's what working with VISIBI looks like.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 pattern-background p-4 border-slate-300 border">
                {processSteps.map((step, index) => (
                  <div key={index} className="bg-white border border-slate-300 p-8">
                    <div className="w-8 h-8 border border-slate-950 text-slate-950 rounded-full flex items-center justify-center font-open-sans font-semibold text-md mb-6">
                      {index + 1}
                    </div>
                    <h3 className="font-space-mono font-normal text-xl leading-[1.3] text-slate-950 mb-3 uppercase">{step.phase}</h3>
                    <p className="font-open-sans text-md leading-[1.5] text-slate-950">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Ethics */}
          <section className="py-24 mb-12 border-t border-slate-200">
            <div className="max-w-4xl mx-auto md:px-16">
              <div className="mb-12 text-left">
                <h2 className="font-inter font-medium text-3xl md:text-5xl leading-[1.3] text-slate-950 mb-4">
                  Our Ethical Commitments
                </h2>
              </div>
              <div className="space-y-6">
                <div className="bg-white border border-slate-300 rounded-xl p-8">
                  <h3 className="font-space-mono font-normal text-xl leading-[1.3] text-slate-950 mb-3 uppercase">White-Hat Only</h3>
                  <p className="font-open-sans text-md leading-[1.5] text-slate-950">
                    We never use manipulative tactics, spam, or black-hat techniques that could damage your brand reputation or result in penalties. Every strategy is built for sustainable, long-term success.
                  </p>
                </div>
                <div className="bg-white border border-slate-300 rounded-xl p-8">
                  <h3 className="font-space-mono font-normal text-xl leading-[1.3] text-slate-950 mb-3 uppercase">Accurate Information</h3>
                  <p className="font-open-sans text-md leading-[1.5] text-slate-950">
                    We optimize for truthful representation of your brand. We don't fabricate credentials, exaggerate capabilities, or mislead AI platforms about what your company offers.
                  </p>
                </div>
                <div className="bg-white border border-slate-300 rounded-xl p-8">
                  <h3 className="font-space-mono font-normal text-xl leading-[1.3] text-slate-950 mb-3 uppercase">Platform Respect</h3>
                  <p className="font-open-sans text-md leading-[1.5] text-slate-950">
                    We work within AI platform guidelines and terms of service. As platforms publish formal GEO standards, we'll adapt practices to align with their preferences.
                  </p>
                </div>
                <div className="bg-white border border-slate-300 rounded-xl p-8">
                  <h3 className="font-space-mono font-normal text-xl leading-[1.3] text-slate-950 mb-3 uppercase">Transparent Reporting</h3>
                  <p className="font-open-sans text-md leading-[1.5] text-slate-950">
                    We report both successes and challenges. If something isn't working, we tell you immediately and adjust course. No hiding behind jargon or inflated metrics.
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
                        <p className="font-open-sans text-md md:leading-[1.7] my-8 text-slate-950">{faq.answer}</p>
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
            Ready to Work Together?
          </h2>
          <p className="font-open-sans text-xl leading-[1.7] text-slate-950 pb-8">
            Let's discuss your AI visibility goals and explore whether VISIBI is the right partner for your brand.
          </p>
          <Link to="/">
            <Button className="inline-flex items-center px-8 py-6 bg-blue-700 text-white rounded-full font-medium hover:bg-blue-800 transition-colors">
              Start a Conversation
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
        </div>
      </footer>
    </div>
  )
}
