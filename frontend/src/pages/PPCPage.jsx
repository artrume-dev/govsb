import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Search, Share2, Briefcase, Video, Target, TrendingUp, Zap, Activity, Sparkles, ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Navigation from '@/components/Navigation'
import Breadcrumbs from '@/components/Breadcrumbs'

export default function PPCPage() {
  useEffect(() => {
    document.documentElement.classList.remove('dark')
  }, [])

  const [openFaqIndex, setOpenFaqIndex] = useState(0)

  return (
    <div className="min-h-screen relative line-pattern">
      <Helmet>
        <title>PPC Management Services - Paid Media That Amplifies Visibility | VISIBI</title>
        <meta name="description" content="Performance-driven PPC campaigns across Google Ads, LinkedIn, Meta, and YouTube. Boost visibility, drive conversions, and reinforce your organic and AI search presence." />
        <meta name="keywords" content="PPC management, Google Ads, LinkedIn advertising, Meta ads, YouTube ads, paid media strategy, performance marketing" />
        <link rel="canonical" href="https://www.govisibi.ai/ppc" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.govisibi.ai/ppc" />
        <meta property="og:title" content="PPC Management Services - Paid Media That Amplifies Visibility | VISIBI" />
        <meta property="og:description" content="Data-driven PPC campaigns across Google Ads, LinkedIn, Meta, and YouTube that amplify your brand visibility." />
        <meta property="og:site_name" content="VISIBI" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PPC Management Services | VISIBI" />
        <meta name="twitter:description" content="Performance campaigns that boost visibility and drive conversions across all major platforms." />

        {/* Structured Data - FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What PPC platforms do you manage?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We manage Google Ads (Search, Display, Shopping, YouTube), Microsoft Ads (Bing), LinkedIn Ads for B2B targeting, and Meta (Facebook & Instagram) campaigns. We select platforms based on where your target audience is most active and where we can achieve the best ROI for your specific goals."
                }
              },
              {
                "@type": "Question",
                "name": "How do you use AI in ad optimisation?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We leverage AI-powered bidding strategies, automated audience targeting, dynamic creative optimization, and predictive performance modeling. We also use AI tools to test ad copy variations, analyze competitor strategies, and identify high-performing audience segments—all while maintaining strategic human oversight."
                }
              },
              {
                "@type": "Question",
                "name": "Can PPC help improve AI visibility?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Paid campaigns drive traffic to high-quality content that signals authority to AI platforms. They also generate user engagement data, test messaging that can inform GEO strategies, and amplify content that's already optimized for AI citations—creating a virtuous cycle between paid, organic, and AI visibility."
                }
              },
              {
                "@type": "Question",
                "name": "What's your minimum ad spend?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We typically recommend a minimum monthly ad spend of $3,000-5,000 for meaningful testing and results, though this varies by industry, competition level, and campaign objectives. We'll provide specific budget recommendations during our initial audit based on your goals and market landscape."
                }
              },
              {
                "@type": "Question",
                "name": "How do you report results?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We provide monthly performance dashboards via Looker Studio or Data Studio, showing key metrics like ROAS, CPC, conversion rates, and attribution across channels. Reports include strategic insights, optimization actions taken, and clear recommendations for the next period—all tied to your business objectives."
                }
              },
              {
                "@type": "Question",
                "name": "Do you create ad copy and landing pages?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. We develop ad copy, creative assets, and landing page recommendations aligned with your brand voice and conversion goals. For complex landing page builds, we can collaborate with your team or recommend development partners to ensure conversion-optimized experiences."
                }
              },
              {
                "@type": "Question",
                "name": "How quickly can campaigns launch?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Initial campaigns can launch within 1-2 weeks after kickoff, including account setup, audience research, keyword planning, creative development, and tracking configuration. Full optimization and scaling typically develop over 4-8 weeks as we gather performance data and refine strategies."
                }
              },
              {
                "@type": "Question",
                "name": "What makes VISIBI's paid media different?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We integrate paid media with your broader AI visibility strategy. Campaigns aren't siloed—they amplify content optimized for GEO, test messaging that informs SEO, and generate audience insights that improve overall brand discoverability across traditional search, AI platforms, and social channels."
                }
              },
              {
                "@type": "Question",
                "name": "How do you measure campaign success?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We track ROAS (Return on Ad Spend), CPC (Cost Per Click), conversion rates, quality scores, and customer acquisition cost. Most importantly, we tie these metrics to business outcomes—qualified leads, pipeline value, revenue attribution, and customer lifetime value—not just vanity metrics."
                }
              },
              {
                "@type": "Question",
                "name": "Can you take over existing campaigns?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely. We conduct a comprehensive audit of your existing campaigns, identify optimization opportunities, and create a transition plan that minimizes disruption while improving performance. Most clients see measurable improvements within the first 60-90 days of our management."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="absolute inset-0 -z-10 h-full w-full bg-slate-300/60 bg-[linear-gradient(to_right,#1d4ed80A_1px,transparent_1px),linear-gradient(to_bottom,#1d4ed80A_1px,transparent_1px)] bg-[size:128px_104px]"></div>

      <Navigation currentPage="ppc" />

      {/* Hero */}
      <section className="max-w-full md:max-w-[90%] mx-auto items-center  mb-0 mt-12 relative bg-[#FAFAFB] border border-b-0 border-slate-300 rounded-xl rounded-bl-none rounded-br-none overflow-hidden">
        {/* Graph paper style background with gradient fade at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-64 pointer-events-none">
          {/* Graph paper grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[length:14px_14px]"></div>
          {/* Gradient fade from white to gray-50 */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFB] via-white/40 to-[#FAFAFB]"></div>
        </div>#
        <div className="lg:block h-full w-full">
          <div className="relative z-10 py-16 border-l border-r border-slate-200">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center px-16">
              {/* Left Column - 60% (3 out of 5 columns) */}
              <div className="lg:col-span-3 space-y-4 text-left">
                <div className="text-left pb-8">
                <Breadcrumbs items={[
                  { label: "Home", path: "/" },
                  { label: "PPC" }
                ]} />
                </div>
                <h1 className="font-open-sans text-3xl md:text-6xl font-semibold tracking-tight text-slate-950 md:leading-[1.15]">
                  Performance campaigns that amplify visibility
                </h1>
                <h2 className="font-open-sans text-2xl md:text-3xl font-thin block md:leading-[1.4] pb-8">
                  From Google Ads to LinkedIn, our paid media strategies boost visibility, drive conversions, and reinforce your organic and Gen AI search presence.
                </h2>
                <Link to="/">
                  <Button className="inline-flex items-center px-6 py-3 bg-blue-700 text-white rounded-full font-medium hover:bg-blue-800 transition-colors">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Book Paid Media Audit
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
                  src="/vi/visibi-ppc-ai.png" 
                  alt="Digital advertising and paid media campaign management illustration" 
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
          {/* Channels & Platforms */}
          <section className="py-24 mb-12 border-b border-slate-200">
            <div className="md:max-w-7xl max-w-full mx-auto md:text-left md:px-16 px-0">
              <div className="mb-12 text-left">
               <h2 className="font-open-sans font-thin text-3xl md:text-5xl md:leading-[1.3] text-slate-950 mb-4">
                  Channels & Platforms
                </h2>
                <p className="font-open-sans text-xl leading-[1.5] text-slate-950 max-w-2xl">
                  Strategic paid media across the platforms where your audience discovers and evaluates solutions.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 border-slate-300 border transition-colors pattern-background">
                <div className="bg-white p-8 hover:border-blue-700 transition-all">
                  <Search size={32} strokeWidth={1.25} className="text-slate-950 mb-4" />
                  <h3 className="font-space-mono pb-2 text-xl font-normal uppercase text-slate-950 mb-3">Google & Bing Search</h3>
                  <p className="font-open-sans text-md text-slate-950">
                    High-intent search campaigns targeting buyers actively looking for solutions.
                  </p>
                </div>
                <div className="bg-white p-8 hover:border-blue-700 transition-all">
                  <Share2 size={32} strokeWidth={1.25} className="text-slate-950 mb-4" />
                  <h3 className="font-space-mono pb-2 text-xl font-normal uppercase text-slate-950 mb-3">Meta (Facebook & Instagram)</h3>
                  <p className="font-open-sans text-md text-slate-950">
                    Brand awareness and demand generation with sophisticated audience targeting.
                  </p>
                </div>
                <div className="bg-white p-8 hover:border-blue-700 transition-all">
                  <Briefcase size={32} strokeWidth={1.25} className="text-slate-950 mb-4" />
                  <h3 className="font-space-mono pb-2 text-xl font-normal uppercase text-slate-950 mb-3">LinkedIn Campaigns</h3>
                  <p className="font-open-sans text-md text-slate-950">
                    Precision B2B targeting by job title, industry, company size, and seniority.
                  </p>
                </div>
                <div className="bg-white p-8 hover:border-blue-700 transition-all">
                  <Video size={32} strokeWidth={1.25} className="text-slate-950 mb-4" />
                  <h3 className="font-space-mono pb-2 text-xl font-normal uppercase text-slate-950 mb-3">YouTube Video Ads</h3>
                  <p className="font-open-sans text-md text-slate-950">
                    Video campaigns for brand storytelling and engagement with visual audiences.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Our Approach */}
          <section className="py-12 mb-12">
            <div className="max-w-7xl mx-auto md:px-16">
              <div className="mb-12 text-left">
                <h2 className="font-open-sans font-thin text-3xl md:text-5xl leading-[1.3] text-slate-950 mb-4">
                  Our Approach
                </h2>
                <p className="font-open-sans text-xl md:leading-[1.5] text-slate-950">
                  Data-driven campaigns optimized for both immediate conversions and long-term brand visibility.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
                {/* Left Column - Smart Campaign Architecture */}
                <div>
                  <h3 className="font-space-mono font-normal text-2xl uppercase text-slate-950 mb-6">Smart Campaign Architecture</h3>
                  <div className="space-y-6">
                    <div>
                      <p className="font-open-sans text-lg font-semibold text-slate-950 mb-2">Entity-Mapped Ad Groups</p>
                      <p className="font-open-sans text-md text-slate-950">
                        We structure campaigns around your brand entities, product categories, and audience segments—mirroring how AI platforms understand your business and creating consistency across all visibility channels.
                      </p>
                    </div>
                    <div>
                      <p className="font-open-sans text-lg font-semibold text-slate-950 mb-2">AI Copy Testing</p>
                      <p className="font-open-sans text-md text-slate-950">
                        Using machine learning tools to test thousands of ad copy variations, we identify messaging that resonates with your audience while aligning with how AI platforms describe your brand—creating unified positioning.
                      </p>
                    </div>
                    <div>
                      <p className="font-open-sans text-lg font-semibold text-slate-950 mb-2">Audience Intent Layers</p>
                      <p className="font-open-sans text-md text-slate-950">
                        We segment audiences by awareness stage, behavior signals, and intent indicators, delivering the right message at the right moment—from discovery through decision.
                      </p>
                    </div>
                    <div>
                      <p className="font-open-sans text-lg font-semibold text-slate-950 mb-2">Keyword + Creative Synergy</p>
                      <p className="font-open-sans text-md text-slate-950">
                        Campaign insights inform our SEO keyword strategies and GEO content optimization. Data flows both ways—organic performance tells us which paid campaigns to scale, creating continuous improvement across channels.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Column - Visual */}
                <div className="bg-white border border-slate-300 p-8">
                  <div className="p-8 grid gap-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white flex items-center justify-center flex-shrink-0">
                        <Target className="w-6 h-6 text-slate-950" />
                      </div>
                      <div>
                        <p className="font-space-mono text-md text-slate-950 font-normal uppercase">Precision Targeting</p>
                        <p className="font-open-sans text-sm text-slate-600">Right audience, right time</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white flex items-center justify-center flex-shrink-0">
                        <Zap className="w-6 h-6 text-slate-950" />
                      </div>
                      <div>
                        <p className="font-space-mono text-md text-slate-950 font-normal uppercase">AI-Powered Optimization</p>
                        <p className="font-open-sans text-sm text-slate-600">Automated bid & budget management</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white flex items-center justify-center flex-shrink-0">
                        <Activity className="w-6 h-6 text-slate-950" />
                      </div>
                      <div>
                        <p className="font-space-mono text-md text-slate-950 font-normal uppercase">Cross-Channel Synergy</p>
                        <p className="font-open-sans text-sm text-slate-600">Integrated with SEO & GEO data</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-6 h-6 text-slate-950" />
                      </div>
                      <div>
                        <p className="font-space-mono text-md text-slate-950 font-normal uppercase">Continuous Testing</p>
                        <p className="font-open-sans text-sm text-slate-600">Always learning, always improving</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="py-12 mb-12 border-t border-slate-200">
            <div className="max-w-7xl mx-auto md:px-16">
              <div className="text-center mb-12">
                <h2 className="font-open-sans font-thin text-3xl md:text-5xl leading-[1.3] text-slate-950 mb-4">
                  Paid media campaign process
                </h2>
                <p className="font-open-sans text-xl leading-[1.5] text-slate-950 mb-8">
                  Our systematic approach to building high-performing paid media campaigns.
                </p>
                {/* Campaign Lifecycle Image */}
                <div className="flex justify-center mb-12">
                  <img 
                    src="/vi/visibi-lifecycle.png" 
                    alt="PPC campaign lifecycle process visualization" 
                    className="w-full h-auto max-w-lg"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 pattern-background p-4 border-slate-300 border">
                <div className="bg-white border border-slate-300 p-8">
                  <div className="w-8 h-8 border border-slate-950 text-slate-950 rounded-full flex items-center justify-center font-open-sans font-semibold text-md mb-6">
                    1
                  </div>

                  <h3 className="font-space-mono font-normal text-xl leading-[1.3] text-slate-950 mb-3 uppercase">Plan</h3>
                  <p className="font-open-sans text-md leading-[1.5] text-slate-950">
                    Define objectives, research audiences, select channels, and establish KPIs and budget allocation strategy.
                  </p>
                </div>
                <div className="bg-white border border-slate-300 p-8">
                  <div className="w-8 h-8 border border-slate-950 text-slate-950 rounded-full flex items-center justify-center font-open-sans font-semibold text-md mb-6">
                    2
                  </div>
                  <h3 className="font-space-mono font-normal text-xl leading-[1.3] text-slate-950 mb-3 uppercase">Launch</h3>
                  <p className="font-open-sans text-md leading-[1.5] text-slate-950">
                    Build campaigns, create ad copy and creative, configure tracking, and deploy with proper attribution setup.
                  </p>
                </div>
                <div className="bg-white border border-slate-300 p-8">
                  <div className="w-8 h-8 border border-slate-950 text-slate-950 rounded-full flex items-center justify-center font-open-sans font-semibold text-md mb-6">
                    3
                  </div>
                  <h3 className="font-space-mono font-normal text-xl leading-[1.3] text-slate-950 mb-3 uppercase">Optimise</h3>
                  <p className="font-open-sans text-md leading-[1.5] text-slate-950">
                    Analyze performance, test variations, refine targeting, adjust bids, and improve quality scores continuously.
                  </p>
                </div>
                <div className="bg-white border border-slate-300 p-8">
                  <div className="w-8 h-8 border border-slate-950 text-slate-950 rounded-full flex items-center justify-center font-open-sans font-semibold text-md mb-6">
                    4
                  </div>
                  <h3 className="font-space-mono font-normal text-xl leading-[1.3] text-slate-950 mb-3 uppercase">Scale</h3>
                  <p className="font-open-sans text-md leading-[1.5] text-slate-950">
                    Increase budget on proven winners, expand to new audiences, test new platforms, and maximize ROI.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Measurement & Attribution */}
          <section className="py-12 mb-12 border-t border-slate-200">
            <div className="max-w-7xl mx-auto md:px-16">
              <div className="mb-12 text-left">
                <h2 className="font-open-sans font-thin text-3xl md:text-5xl leading-[1.3] text-slate-950 mb-4">
                  Measurement & Attribution
                </h2>
                <p className="font-open-sans text-xl leading-[1.5] text-slate-950">
                  Transparent tracking and reporting across all channels and touchpoints.
                </p>
              </div>
              <div className="bg-white border border-slate-300 p-8">
                <div className="p-8 grid md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="font-space-mono font-normal text-xl uppercase text-slate-950 mb-6">Analytics Infrastructure</h3>
                    <p className="font-open-sans text-md leading-[1.5] text-slate-950 mb-6">
                      VISIBI tracks performance across GA4, Looker Studio dashboards, and AI platform visibility metrics—giving you complete visibility into how paid campaigns drive results across traditional search, AI citations, and direct conversions.
                    </p>
                    <p className="font-open-sans text-md leading-[1.5] text-slate-950">
                      We implement multi-touch attribution models to understand the full customer journey, not just last-click conversions. This reveals how paid media assists organic and AI visibility goals throughout the discovery process.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-space-mono font-normal text-xl uppercase text-slate-950 mb-6">Key Performance Indicators</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                        <span className="font-open-sans text-md text-slate-950">ROAS</span>
                        <span className="font-open-sans text-sm text-slate-600">Return on Ad Spend</span>
                      </div>
                      <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                        <span className="font-open-sans text-md text-slate-950">CPC</span>
                        <span className="font-open-sans text-sm text-slate-600">Cost Per Click</span>
                      </div>
                      <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                        <span className="font-open-sans text-md text-slate-950">Conversion Quality</span>
                        <span className="font-open-sans text-sm text-slate-600">Lead quality & LTV</span>
                      </div>
                      <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                        <span className="font-open-sans text-md text-slate-950">CTR</span>
                        <span className="font-open-sans text-sm text-slate-600">Click-Through Rate</span>
                      </div>
                      <div className="flex justify-between items-center pb-4">
                        <span className="font-open-sans text-md text-slate-950">Quality Score</span>
                        <span className="font-open-sans text-sm text-slate-600">Ad relevance & efficiency</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-8 pt-12 border-t border-slate-200 mt-8">
                  <div className="flex items-start gap-4">
                    <Activity className="w-6 h-6 text-slate-950 flex-shrink-0 mt-1" />
                    <p className="font-open-sans text-md leading-[1.5] text-slate-950">
                      <strong>Unified Reporting:</strong> All metrics are combined into custom dashboards that show how paid media performance impacts your broader visibility goals—from organic rankings to AI platform citations to direct conversions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-12 mb-12">
            <div className="max-w-7xl mx-auto md:px-16">
              <div className="mb-12 text-center">
                <h2 className="font-open-sans font-thin text-3xl md:text-5xl leading-[1.3] text-slate-950 mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="font-open-sans text-xl leading-[1.5] text-slate-950">
                  Common questions about PPC management and paid media strategy.
                </p>
              </div>
              <div className="max-w-4xl mx-auto space-y-4">
                <div className="bg-white border border-slate-300 overflow-hidden">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === 0 ? null : 0)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                  >
                    <h3 className="font-open-sans font-normal text-sm md:text-base text-slate-950 pr-4">What PPC platforms do you manage?</h3>
                    {openFaqIndex === 0 ? (
                      <ChevronUp className="w-5 h-5 text-slate-950 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-950 flex-shrink-0" />
                    )}
                  </button>
                  {openFaqIndex === 0 && (
                    <div className="px-8 pb-6">
                      <p className="font-open-sans text-sm md:leading-[1.7] my-8 text-slate-950">
                        We manage Google Ads (Search, Display, Shopping, YouTube), Microsoft Ads (Bing), LinkedIn Ads for B2B targeting, and Meta (Facebook & Instagram) campaigns. We select platforms based on where your target audience is most active and where we can achieve the best ROI for your specific goals.
                      </p>
                    </div>
                  )}
                </div>

                <div className="bg-white border border-slate-300 overflow-hidden">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === 1 ? null : 1)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                  >
                    <h3 className="font-open-sans font-normal text-sm md:text-base text-slate-950 pr-4">How do you use AI in ad optimisation?</h3>
                    {openFaqIndex === 1 ? (
                      <ChevronUp className="w-5 h-5 text-slate-950 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-950 flex-shrink-0" />
                    )}
                  </button>
                  {openFaqIndex === 1 && (
                    <div className="px-8 pb-6">
                      <p className="font-open-sans text-sm md:leading-[1.7] my-8 text-slate-950">
                        We leverage AI-powered bidding strategies, automated audience targeting, dynamic creative optimization, and predictive performance modeling. We also use AI tools to test ad copy variations, analyze competitor strategies, and identify high-performing audience segments—all while maintaining strategic human oversight.
                      </p>
                    </div>
                  )}
                </div>

                <div className="bg-white border border-slate-300 overflow-hidden">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === 2 ? null : 2)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                  >
                    <h3 className="font-open-sans font-normal text-sm md:text-base text-slate-950 pr-4">Can PPC help improve AI visibility?</h3>
                    {openFaqIndex === 2 ? (
                      <ChevronUp className="w-5 h-5 text-slate-950 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-950 flex-shrink-0" />
                    )}
                  </button>
                  {openFaqIndex === 2 && (
                    <div className="px-8 pb-6">
                      <p className="font-open-sans text-sm md:leading-[1.7] my-8 text-slate-950">
                        Yes. Paid campaigns drive traffic to high-quality content that signals authority to AI platforms. They also generate user engagement data, test messaging that can inform GEO strategies, and amplify content that's already optimized for AI citations—creating a virtuous cycle between paid, organic, and AI visibility.
                      </p>
                    </div>
                  )}
                </div>

                <div className="bg-white border border-slate-300 overflow-hidden">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === 3 ? null : 3)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                  >
                    <h3 className="font-open-sans font-normal text-sm md:text-base text-slate-950 pr-4">What's your minimum ad spend?</h3>
                    {openFaqIndex === 3 ? (
                      <ChevronUp className="w-5 h-5 text-slate-950 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-950 flex-shrink-0" />
                    )}
                  </button>
                  {openFaqIndex === 3 && (
                    <div className="px-8 pb-6">
                      <p className="font-open-sans text-sm md:leading-[1.7] my-8 text-slate-950">
                        We typically recommend a minimum monthly ad spend of $3,000-5,000 for meaningful testing and results, though this varies by industry, competition level, and campaign objectives. We'll provide specific budget recommendations during our initial audit based on your goals and market landscape.
                      </p>
                    </div>
                  )}
                </div>

                <div className="bg-white border border-slate-300 overflow-hidden">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === 4 ? null : 4)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                  >
                    <h3 className="font-open-sans font-normal text-sm md:text-base text-slate-950 pr-4">How do you report results?</h3>
                    {openFaqIndex === 4 ? (
                      <ChevronUp className="w-5 h-5 text-slate-950 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-950 flex-shrink-0" />
                    )}
                  </button>
                  {openFaqIndex === 4 && (
                    <div className="px-8 pb-6">
                      <p className="font-open-sans text-sm md:leading-[1.7] my-8 text-slate-950">
                        We provide monthly performance dashboards via Looker Studio or Data Studio, showing key metrics like ROAS, CPC, conversion rates, and attribution across channels. Reports include strategic insights, optimization actions taken, and clear recommendations for the next period—all tied to your business objectives.
                      </p>
                    </div>
                  )}
                </div>

                <div className="bg-white border border-slate-300 overflow-hidden">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === 5 ? null : 5)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                  >
                    <h3 className="font-open-sans font-normal text-sm md:text-base text-slate-950 pr-4">Do you create ad copy and landing pages?</h3>
                    {openFaqIndex === 5 ? (
                      <ChevronUp className="w-5 h-5 text-slate-950 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-950 flex-shrink-0" />
                    )}
                  </button>
                  {openFaqIndex === 5 && (
                    <div className="px-8 pb-6">
                      <p className="font-open-sans text-sm md:leading-[1.7] my-8 text-slate-950">
                        Yes. We develop ad copy, creative assets, and landing page recommendations aligned with your brand voice and conversion goals. For complex landing page builds, we can collaborate with your team or recommend development partners to ensure conversion-optimized experiences.
                      </p>
                    </div>
                  )}
                </div>

                <div className="bg-white border border-slate-300 overflow-hidden">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === 6 ? null : 6)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                  >
                    <h3 className="font-open-sans font-normal text-sm md:text-base text-slate-950 pr-4">How quickly can campaigns launch?</h3>
                    {openFaqIndex === 6 ? (
                      <ChevronUp className="w-5 h-5 text-slate-950 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-950 flex-shrink-0" />
                    )}
                  </button>
                  {openFaqIndex === 6 && (
                    <div className="px-8 pb-6">
                      <p className="font-open-sans text-sm md:leading-[1.7] my-8 text-slate-950">
                        Initial campaigns can launch within 1-2 weeks after kickoff, including account setup, audience research, keyword planning, creative development, and tracking configuration. Full optimization and scaling typically develop over 4-8 weeks as we gather performance data and refine strategies.
                      </p>
                    </div>
                  )}
                </div>

                <div className="bg-white border border-slate-300 overflow-hidden">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === 7 ? null : 7)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                  >
                    <h3 className="font-open-sans font-normal text-sm md:text-base text-slate-950 pr-4">What makes VISIBI's paid media different?</h3>
                    {openFaqIndex === 7 ? (
                      <ChevronUp className="w-5 h-5 text-slate-950 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-950 flex-shrink-0" />
                    )}
                  </button>
                  {openFaqIndex === 7 && (
                    <div className="px-8 pb-6">
                      <p className="font-open-sans text-sm md:leading-[1.7] my-8 text-slate-950">
                        We integrate paid media with your broader AI visibility strategy. Campaigns aren't siloed—they amplify content optimized for GEO, test messaging that informs SEO, and generate audience insights that improve overall brand discoverability across traditional search, AI platforms, and social channels.
                      </p>
                    </div>
                  )}
                </div>

                <div className="bg-white border border-slate-300 overflow-hidden">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === 8 ? null : 8)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                  >
                    <h3 className="font-open-sans font-normal text-sm md:text-base text-slate-950 pr-4">How do you measure campaign success?</h3>
                    {openFaqIndex === 8 ? (
                      <ChevronUp className="w-5 h-5 text-slate-950 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-950 flex-shrink-0" />
                    )}
                  </button>
                  {openFaqIndex === 8 && (
                    <div className="px-8 pb-6">
                      <p className="font-open-sans text-sm md:leading-[1.7] my-8 text-slate-950">
                        We track ROAS (Return on Ad Spend), CPC (Cost Per Click), conversion rates, quality scores, and customer acquisition cost. Most importantly, we tie these metrics to business outcomes—qualified leads, pipeline value, revenue attribution, and customer lifetime value—not just vanity metrics.
                      </p>
                    </div>
                  )}
                </div>

                <div className="bg-white border border-slate-300 overflow-hidden">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === 9 ? null : 9)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                  >
                    <h3 className="font-open-sans font-normal text-sm md:text-base text-slate-950 pr-4">Can you take over existing campaigns?</h3>
                    {openFaqIndex === 9 ? (
                      <ChevronUp className="w-5 h-5 text-slate-950 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-950 flex-shrink-0" />
                    )}
                  </button>
                  {openFaqIndex === 9 && (
                    <div className="px-8 pb-6">
                      <p className="font-open-sans text-sm md:leading-[1.7] my-8 text-slate-950">
                        Absolutely. We conduct a comprehensive audit of your existing campaigns, identify optimization opportunities, and create a transition plan that minimizes disruption while improving performance. Most clients see measurable improvements within the first 60-90 days of our management.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Related Insights */}
          <section className="py-12 mb-12 border-t border-slate-200">
            <div className="max-w-7xl mx-auto md:px-16">
              <div className="mb-12 text-center">
                <h2 className="font-open-sans font-thin text-3xl md:text-5xl leading-[1.3] text-slate-950 mb-4">
                  Related Insights
                </h2>
                <p className="font-open-sans text-xl leading-[1.5] text-slate-950">
                  Learn more about paid media strategies and optimization.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white border border-slate-300 p-6 hover:border-blue-700 transition-all">
                  <span className="font-space-mono text-xs text-slate-950 bg-slate-100 px-3 py-1 uppercase">
                    Paid Media
                  </span>
                  <h3 className="font-space-mono font-normal text-xl uppercase text-slate-950 mt-4 mb-3">How AI-Powered Bidding Strategies Improve ROAS</h3>
                  <p className="font-open-sans text-sm leading-[1.5] text-slate-950 mb-4">
                    Exploring machine learning bid optimization and when to use automated vs. manual bidding strategies.
                  </p>
                  <Link to="/insights" className="font-space-mono text-sm text-slate-950 hover:text-blue-700 inline-flex items-center gap-1 uppercase">
                    Read More <span>→</span>
                  </Link>
                </div>

                <div className="bg-white border border-slate-300 p-6 hover:border-blue-700 transition-all">
                  <span className="font-space-mono text-xs text-slate-950 bg-slate-100 px-3 py-1 uppercase">
                    Strategy
                  </span>
                  <h3 className="font-space-mono font-normal text-xl uppercase text-slate-950 mt-4 mb-3">Integrating PPC with GEO for Maximum Visibility</h3>
                  <p className="font-open-sans text-sm leading-[1.5] text-slate-950 mb-4">
                    How paid campaigns can amplify content optimized for AI citations and create synergy across channels.
                  </p>
                  <Link to="/insights" className="font-space-mono text-sm text-slate-950 hover:text-blue-700 inline-flex items-center gap-1 uppercase">
                    Read More <span>→</span>
                  </Link>
                </div>

                <div className="bg-white border border-slate-300 p-6 hover:border-blue-700 transition-all">
                  <span className="font-space-mono text-xs text-slate-950 bg-slate-100 px-3 py-1 uppercase">
                    Paid Media
                  </span>
                  <h3 className="font-space-mono font-normal text-xl uppercase text-slate-950 mt-4 mb-3">LinkedIn Ads for B2B: Targeting Strategies That Work</h3>
                  <p className="font-open-sans text-sm leading-[1.5] text-slate-950 mb-4">
                    Advanced audience segmentation, content formats, and campaign structures for B2B lead generation.
                  </p>
                  <Link to="/insights" className="font-space-mono text-sm text-slate-950 hover:text-blue-700 inline-flex items-center gap-1 uppercase">
                    Read More <span>→</span>
                  </Link>
                </div>
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
            Amplify Your Reach. Accelerate Your Conversions.
          </h2>
          <p className="font-open-sans text-xl leading-[1.7] text-slate-950 pb-8">
            Get a comprehensive paid media audit and discover how to drive immediate visibility while building long-term authority.
          </p>
          <Link to="/contact">
            <Button className="inline-flex items-center px-8 py-6 bg-blue-700 text-white rounded-full font-medium hover:bg-blue-800 transition-colors">
              <Sparkles className="w-5 h-5 mr-2" />
              Book Paid Media Audit
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
