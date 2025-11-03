import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Search, Share2, Briefcase, Video, Target, TrendingUp, Zap, Activity, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Navigation from '@/components/Navigation'

export default function PPCPage() {
  useEffect(() => {
    document.documentElement.classList.remove('dark')
  }, [])

  return (
    <div className="min-h-screen relative line-pattern">
      <Helmet>
        <title>PPC Management Services - Paid Media That Amplifies Visibility | VISIBI</title>
        <meta name="description" content="Performance-driven PPC campaigns across Google Ads, LinkedIn, Meta, and YouTube. Boost visibility, drive conversions, and reinforce your organic and AI search presence." />
        <meta name="keywords" content="PPC management, Google Ads, LinkedIn advertising, Meta ads, YouTube ads, paid media strategy, performance marketing" />
        <link rel="canonical" href="https://visibi.com/ppc" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://visibi.com/ppc" />
        <meta property="og:title" content="PPC Management Services - Paid Media That Amplifies Visibility | VISIBI" />
        <meta property="og:description" content="Data-driven PPC campaigns across Google Ads, LinkedIn, Meta, and YouTube that amplify your brand visibility." />
        <meta property="og:site_name" content="VISIBI" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PPC Management Services | VISIBI" />
        <meta name="twitter:description" content="Performance campaigns that boost visibility and drive conversions across all major platforms." />
      </Helmet>

      <div className="absolute inset-0 -z-10 h-full w-full bg-slate-300/60 bg-[linear-gradient(to_right,#1d4ed80A_1px,transparent_1px),linear-gradient(to_bottom,#1d4ed80A_1px,transparent_1px)] bg-[size:128px_104px]"></div>

      <Navigation currentPage="ppc" />

      {/* Hero */}
      <section className="max-w-[90%] mx-auto items-center lg:px-[5rem] mb-0 mt-12 relative bg-white border border-b-0 border-slate-300 rounded-xl rounded-bl-none rounded-br-none shadow-sm shadow-blue-200">
        <div className="lg:block h-full w-full">
          <div className="relative z-10 py-16 flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 border-l border-r border-slate-200">
            <div className="max-w-3xl px-16 space-y-8">
               <h1 className="font-open-sans text-4xl md:text-6xl font-semibold tracking-tight text-slate-950 md:leading-[1.15]">
                Performance campaigns that amplify visibility
              </h1>
              <h2 className="text-md md:text-xl md:leading-[1.7] tracking-tight font-thin text-slate-950 pb-8">
                From Google Ads to LinkedIn, our paid media strategies boost visibility, drive conversions, and reinforce your organic and Gen AI search presence.
              </h2>
              <Link to="/">
                <Button className="inline-flex items-center px-6 py-3 bg-blue-700 text-white rounded-full font-medium hover:bg-blue-800 transition-colors">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Book Paid Media Audit
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-[90%] mx-auto px-12 py-12 relative z-10 bg-white rounded-xl rounded-tl-none rounded-tr-none border-t border-b border-r border-l border-slate-300 mb-2">
        <div className="lg:block absolute h-full w-0 md:w-20 bg-slate-200/20 border-0 md:border-r md:border-t-0 md:border-slate-200 left-0 top-0 pattern-background rounded-bl-xl"></div>
        <div className="lg:block absolute h-full w-0 md:w-20 bg-slate-200/20 border-0 md:border-l md:border-t-0 md:border-slate-200 right-0 top-0 pattern-background rounded-br-xl"></div>

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
                  <Search size={32} strokeWidth={1.25} className="text-blue-700 mb-4" />
                  <h3 className="font-space-mono pb-2 text-xl font-normal uppercase text-slate-950 mb-3">Google & Bing Search</h3>
                  <p className="font-open-sans text-md text-slate-950">
                    High-intent search campaigns targeting buyers actively looking for solutions.
                  </p>
                </div>
                <div className="bg-white p-8 hover:border-blue-700 transition-all">
                  <Share2 size={32} strokeWidth={1.25} className="text-blue-700 mb-4" />
                  <h3 className="font-space-mono pb-2 text-xl font-normal uppercase text-slate-950 mb-3">Meta (Facebook & Instagram)</h3>
                  <p className="font-open-sans text-md text-slate-950">
                    Brand awareness and demand generation with sophisticated audience targeting.
                  </p>
                </div>
                <div className="bg-white p-8 hover:border-blue-700 transition-all">
                  <Briefcase size={32} strokeWidth={1.25} className="text-blue-700 mb-4" />
                  <h3 className="font-space-mono pb-2 text-xl font-normal uppercase text-slate-950 mb-3">LinkedIn Campaigns</h3>
                  <p className="font-open-sans text-md text-slate-950">
                    Precision B2B targeting by job title, industry, company size, and seniority.
                  </p>
                </div>
                <div className="bg-white p-8 hover:border-blue-700 transition-all">
                  <Video size={32} strokeWidth={1.25} className="text-blue-700 mb-4" />
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
            <div className="max-w-4xl mx-auto md:px-16">
              <div className="mb-12 text-left">
                <h2 className="font-inter font-thin text-3xl md:text-5xl leading-[1.3] text-slate-950 mb-4">
                  Our Approach
                </h2>
                <p className="font-open-sans text-xl md:leading-[1.5] text-slate-950">
                  Data-driven campaigns optimized for both immediate conversions and long-term brand visibility.
                </p>
              </div>
              <div className="bg-white border border-slate-300 p-4">
                <div className="p-8 grid md:grid-cols-2 gap-16">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white border border-slate-950 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-slate-950" />
                    </div>
                    <div>
                      <p className="font-space-mono text-md text-slate-950 font-normal uppercase">Precision Targeting</p>
                      <p className="font-open-sans text-sm text-slate-600">Right audience, right time</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white border border-slate-950 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-slate-950" />
                    </div>
                    <div>
                      <p className="font-space-mono text-md text-slate-950 font-normal uppercase">AI-Powered Optimization</p>
                      <p className="font-open-sans text-sm text-slate-600">Automated bid & budget management</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white border border-slate-950 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Activity className="w-6 h-6 text-slate-950" />
                    </div>
                    <div>
                      <p className="font-space-mono text-md text-slate-950 font-normal uppercase">Cross-Channel Synergy</p>
                      <p className="font-open-sans text-sm text-slate-600">Integrated with SEO & GEO data</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white border border-slate-950 rounded-xl flex items-center justify-center flex-shrink-0">
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
          </section>

          {/* Process */}
          <section className="py-12 mb-12 border-t border-slate-200">
            <div className="max-w-7xl mx-auto md:px-16">
              <div className="text-center mb-12">
                <h2 className="font-open-sans font-thin text-3xl md:text-5xl leading-[1.3] text-slate-950 mb-4">
                  Process → Plan → Launch → Optimise → Scale
                </h2>
                <p className="font-open-sans text-xl leading-[1.5] text-slate-950">
                  Our systematic approach to building high-performing paid media campaigns.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 pattern-background p-4 border-slate-300 border">
                <div className="bg-white border border-slate-300 p-8">
                  <div className="w-12 h-12 bg-slate-950 text-white rounded-full flex items-center justify-center font-inter font-semibold text-md mb-6">
                    1
                  </div>
                  <h3 className="font-space-mono font-normal text-xl leading-[1.3] text-slate-950 mb-3 uppercase">Plan</h3>
                  <p className="font-open-sans text-md leading-[1.5] text-slate-950">
                    Define objectives, research audiences, select channels, and establish KPIs and budget allocation strategy.
                  </p>
                </div>
                <div className="bg-white border border-slate-300 p-8">
                  <div className="w-12 h-12 bg-slate-950 text-white rounded-full flex items-center justify-center font-inter font-semibold text-md mb-6">
                    2
                  </div>
                  <h3 className="font-space-mono font-normal text-xl leading-[1.3] text-slate-950 mb-3 uppercase">Launch</h3>
                  <p className="font-open-sans text-md leading-[1.5] text-slate-950">
                    Build campaigns, create ad copy and creative, configure tracking, and deploy with proper attribution setup.
                  </p>
                </div>
                <div className="bg-white border border-slate-300 p-8">
                  <div className="w-12 h-12 bg-slate-950 text-white rounded-full flex items-center justify-center font-inter font-semibold text-md mb-6">
                    3
                  </div>
                  <h3 className="font-space-mono font-normal text-xl leading-[1.3] text-slate-950 mb-3 uppercase">Optimise</h3>
                  <p className="font-open-sans text-md leading-[1.5] text-slate-950">
                    Analyze performance, test variations, refine targeting, adjust bids, and improve quality scores continuously.
                  </p>
                </div>
                <div className="bg-white border border-slate-300 p-8">
                  <div className="w-12 h-12 bg-slate-950 text-white rounded-full flex items-center justify-center font-inter font-semibold text-md mb-6">
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
