import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Award, Eye, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import Navigation from '@/components/Navigation'
import Breadcrumbs from '@/components/Breadcrumbs'

export default function AboutPage() {
  // Set light mode on initial load
  useEffect(() => {
    document.documentElement.classList.remove('dark')
  }, [])

  return (
    <div className="min-h-screen relative line-pattern">
      <Helmet>
        <title>About VISIBI - 20+ Years Search Expertise | AI Visibility Pioneers</title>
        <meta name="description" content="VISIBI was founded by search marketing veterans with 20+ years experience. We combine deep SEO expertise with cutting-edge AI research to help brands dominate AI-powered discovery." />
        <meta name="keywords" content="VISIBI team, AI visibility experts, SEO professionals, GEO consultants, search marketing veterans" />
        <link rel="canonical" href="https://visibi.com/about" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://visibi.com/about" />
        <meta property="og:title" content="About VISIBI - 20+ Years Search Expertise | AI Visibility Pioneers" />
        <meta property="og:description" content="Founded by search marketing veterans with 20+ years experience. We help brands dominate AI-powered discovery across ChatGPT, Gemini, and Perplexity." />
        <meta property="og:site_name" content="VISIBI" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About VISIBI - AI Visibility Pioneers" />
        <meta name="twitter:description" content="20+ years of search expertise reimagined for the AI era. Learn about our mission and team." />
      </Helmet>

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-slate-300/60 bg-[linear-gradient(to_right,#1d4ed80A_1px,transparent_1px),linear-gradient(to_bottom,#1d4ed80A_1px,transparent_1px)] bg-[size:128px_104px]"></div>

      <Navigation currentPage="about" />

      {/* Hero Section */}
      <section className="max-w-full md:max-w-[90%] mx-auto items-center mb-0 mt-12 relative bg-[#FAFAFB] border border-b-0 border-slate-300 rounded-xl rounded-bl-none rounded-br-none overflow-hidden">
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
                  { label: "About" }
                ]} />
                </div>
                <h1 className="font-open-sans text-3xl md:text-6xl font-semibold tracking-tight text-slate-950 md:leading-[1.15]">
                  Born from Search.<span className="block">Built for Gen AI.</span>
                </h1>
                <h2 className="font-open-sans text-2xl md:text-3xl font-thin block md:leading-[1.4] pb-8">
                  Two decades of search expertise, reimagined for the era of generative AI.
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
                  src="/vi/visibi-llms.png" 
                  alt="VISIBI team expertise in AI visibility and search optimization" 
                  className="w-full h-auto max-w-md animate-subtle-bounce"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-full md:max-w-[90%] mx-auto px-12 py-12 relative z-10 bg-white dark:bg-gray-950 border-t border-b border-r border-l border-slate-300 dark:border-gray-800 mb-2">
        {/* Side Pattern Lines */}
        <div className="lg:block absolute h-full w-0 md:w-16 bg-slate-200/20 border-0 md:border-r md:border-t-0 md:border-slate-200 dark:border-gray-800 left-0 top-0 pattern-background rounded-bl-xl"></div>
        <div className="lg:block absolute h-full w-0 md:w-16 bg-slate-200/20 border-0 md:border-l md:border-t-0 md:border-slate-200 dark:border-gray-800 right-0 top-0 pattern-background rounded-br-xl"></div>

        <div className="max-w-7xl mx-auto">
          {/* Founder Story */}
          <section className="py-12 mb-12">
            <div className="max-w-4xl mx-auto md:px-16">
              <h2 className="font-inter font-thin text-3xl md:text-5xl leading-[1.3] text-slate-950 dark:text-white mb-8">
                The VISIBI Story
              </h2>
              <div className="space-y-6 font-open-sans text-lg font-thin leading-[1.7] text-slate-950 dark:text-gray-200">
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

          {/* Mission */}
          <section className="py-8 mb-24 md:px-16 px-0 bg-white dark:bg-slate-900/50 rounded-xl pattern-background">
             <div className="lg:max-w-3xl max-w-full lg:ms-8 mb-8 mx-auto">
                <div className="lg:px-16 px-0 py-16 bg-white dark:bg-slate-900/50 rounded-xl">
                    {/* <Target className="w-8 h-8 text-slate-950 dark:text-white" /> */}
                  <h3 className="font-inter font-medium text-3xl md:text-5xl leading-[1.3] text-slate-950 dark:text-white mb-4">
                    Our Mission
                  </h3>
                  <p className="font-open-sans text-3xl leading-[1.4] font-light text-slate-950 dark:text-gray-300">
                    To ensure every brand has the opportunity to be discovered, understood, and trusted by AI platforms—leveling the playing field in an era where algorithmic citations shape perception and influence purchase decisions.
                  </p>
                </div>
            </div>
         
           <div className="lg:max-w-3xl max-w-full lg:me-8 mx-auto">
                <div className="lg:px-16 px-0 py-16 bg-white dark:bg-slate-900/50 rounded-xl">
                  {/* <div className="w-16 h-16 bg-white dark:bg-slate-800 border border-slate-950 dark:border-white rounded-xl flex items-center justify-center mb-6">
                    <Eye className="w-8 h-8 text-slate-950 dark:text-white" />
                  </div> */}
                 <h3 className="font-inter font-medium text-3xl md:text-5xl leading-[1.3] text-slate-950 dark:text-white mb-4">
                    Our Vision
                  </h3>
                  <p className="font-open-sans text-3xl font-thin leading-[1.4] text-slate-950 dark:text-gray-300">
                    A future where AI-powered discovery is transparent, accurate, and accessible—where brands earn visibility through authority and quality, not manipulation or luck.
                  </p>
                </div>
              </div>
          </section>




          {/* VISIBI Framework Principles */}
          <section className="py-24 mb-12 border-t border-b border-slate-200 dark:border-gray-700">
            <div className="md:max-w-7xl max-w-full mx-auto md:text-left md:px-16 px-0">
              <div className="mb-12 text-left">
                <h2 className="font-inter font-medium text-3xl md:text-5xl leading-[1.3] text-slate-950 dark:text-white mb-4">
                  The VISIBI Framework
                </h2>
                <p className="font-open-sans text-xl leading-[1.5] text-slate-950 dark:text-gray-300 max-w-2xl">
                  Our methodology is built on three core principles that guide every strategy and recommendation.
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-12 py-0 border-slate-300 border transition-colors pattern-background">
                <Card className="rounded-none border-0 shadow-none lg:border-r border-slate-300 transition-colors">
                  <CardHeader className="mx-auto py-8">
                    <Award size={32} strokeWidth={1.25} absoluteStrokeWidth className="text-blue-700 mb-2" />
                    <CardTitle className="font-space-mono pb-2 text-xl font-normal uppercase">Authority First</CardTitle>
                    <CardDescription className="font-open-sans text-md text-slate-950 dark:text-gray-400">
                      AI platforms cite authoritative sources. We help you build the signals of credibility that earn citations.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="rounded-none border-0 shadow-none lg:border-r lg:border-l border-slate-300 transition-colors">
                  <CardHeader className="mx-auto py-8">
                    <Eye size={32} strokeWidth={1.25} absoluteStrokeWidth className="text-blue-700 mb-2" />
                    <CardTitle className="font-space-mono pb-2 text-xl font-normal uppercase">Context Matters</CardTitle>
                    <CardDescription className="font-open-sans text-md text-slate-950 dark:text-gray-400">
                      It's not just about mentions—it's about appearing in the right context with accurate, positive descriptions.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="rounded-none border-0 shadow-none lg:border-l border-slate-300 transition-colors">
                  <CardHeader className="mx-auto py-8">
                    <TrendingUp size={32} strokeWidth={1.25} absoluteStrokeWidth className="text-blue-700 mb-2" />
                    <CardTitle className="font-space-mono pb-2 text-xl font-normal uppercase">Measurement Drives Growth</CardTitle>
                    <CardDescription className="font-open-sans text-md text-slate-950 dark:text-gray-400">
                      You can't optimize what you don't measure. We quantify AI visibility and tie it to business outcomes.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </section>

          {/* Expertise */}
          <section className="py-24 mb-12">
            <div className="md:max-w-7xl max-w-full mx-auto md:text-left md:px-16 px-0">
              <div className="mb-12 text-left">
                <h2 className="font-inter font-medium text-3xl md:text-5xl leading-[1.3] text-slate-950 dark:text-white mb-8">
                  Built on Deep Expertise
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-slate-300 border transition-colors pattern-background">
                <Card className="rounded-none border-0 shadow-none md:border-r md:border-b border-slate-300 transition-colors">
                  <CardHeader className="w-3/4 mx-auto py-8">
                    <CardTitle className="font-space-mono pb-2 text-xl font-normal uppercase">20+ Years in Search</CardTitle>
                    <CardDescription className="font-open-sans text-md text-slate-950 dark:text-gray-400">
                      Enterprise SEO, paid media, and content strategy across B2B and consumer brands.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="rounded-none border-0 shadow-none md:border-l md:border-b border-slate-300 transition-colors">
                  <CardHeader className="w-3/4 mx-auto py-8">
                    <CardTitle className="font-space-mono pb-2 text-xl font-normal uppercase">EMEA Market Experience</CardTitle>
                    <CardDescription className="font-open-sans text-md text-slate-950 dark:text-gray-400">
                      Multi-market visibility strategies across Europe, Middle East, and Africa.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="rounded-none border-0 shadow-none md:border-r md:border-t border-slate-300 transition-colors">
                  <CardHeader className="w-3/4 mx-auto py-8">
                    <CardTitle className="font-space-mono pb-2 text-xl font-normal uppercase">AI Research & Development</CardTitle>
                    <CardDescription className="font-open-sans text-md text-slate-950 dark:text-gray-400">
                      Proprietary tools and methodologies for tracking and optimizing AI platform visibility.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="rounded-none border-0 shadow-none md:border-l md:border-t border-slate-300 transition-colors">
                  <CardHeader className="w-3/4 mx-auto py-8">
                    <CardTitle className="font-space-mono pb-2 text-xl font-normal uppercase">Cross-Disciplinary Team</CardTitle>
                    <CardDescription className="font-open-sans text-md text-slate-950 dark:text-gray-400">
                      SEO specialists, content strategists, data scientists, and AI researchers working together.
                    </CardDescription>
                  </CardHeader>
                </Card>
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
        
        
            <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
              <h2 className="font-open-sans font-thin text-4xl md:text-5xl md:leading-[1.3] text-slate-950">
              Let's Build Your AI Visibility Strategy
              </h2>
              <p className="font-open-sans text-xl leading-[1.5] text-slate-950 mb-8 pb-8">
              Ready to work with a team that combines decades of search expertise with cutting-edge AI optimization?
              </p>

              <Link to="/contact">
                <Button className="inline-flex items-center px-6 py-3 bg-blue-700 text-white rounded-full font-medium hover:bg-blue-800 transition-colors">
                  Talk to a Specialist
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>


              
            </div>
          </section>



      {/* Footer */}
      <footer className="max-w-full md:max-w-[90%] mx-auto px-8 py-12 mt-24 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-950 rounded-xl rounded-bl-none rounded-br-none z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Column - Logo and Description */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img src="/govisibi-logo.png" alt="VISIBI Logo" className="h-8 w-8" />
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
            <Link
              to="/privacy-policy"
              className="font-space-mono text-xs text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400 uppercase tracking-wide"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
