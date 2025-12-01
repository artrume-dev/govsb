import { Helmet } from 'react-helmet-async'
import Navigation from '../../components/Navigation'
import Breadcrumbs from '../../components/Breadcrumbs'
import { CheckCircle, TrendingUp, Search, Users, Target, DollarSign, BarChart3 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function GEOPlaybook2026() {
  return (
    <>
      <Helmet>
        <title>The 2026 GEO Playbook: How to Win in AI-Enabled Search | Visibi Ai</title>
        <meta name="description" content="Search has quietly crossed a line. Learn the 7 key signals for organic success in 2026 and strategies for optimizing AI-enabled search." />
        <link rel="canonical" href="https://govisibi.ai/insights/geo-playbook-2026" />
        <meta property="og:title" content="The 2026 GEO Playbook: How to Win in AI-Enabled Search | Visibi Ai" />
        <meta property="og:description" content="Search has quietly crossed a line. Learn the 7 key signals for organic success in 2026 and strategies for optimizing AI-enabled search." />
        <meta property="og:url" content="https://govisibi.ai/insights/geo-playbook-2026" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The 2026 GEO Playbook: How to Win in AI-Enabled Search | Visibi Ai" />
        <meta name="twitter:description" content="Search has quietly crossed a line. Learn the 7 key signals for organic success in 2026 and strategies for optimizing AI-enabled search." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <Navigation />
        
        <main className="pt-24 pb-16">
          {/* Breadcrumbs */}
          <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 mb-8">
            <Breadcrumbs />
          </div>

          {/* Article Header */}
          <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="mb-12">
              <div className="flex items-center gap-4 mb-6 text-sm text-slate-400">
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
                  Strategy
                </span>
                <time dateTime="2025-12-01">Dec 1, 2025</time>
                <span>12 min read</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                The 2026 GEO Playbook: How to Win in AI-Enabled Search
              </h1>
              
              <p className="text-xl text-slate-300 leading-relaxed">
                Search has quietly crossed a line. Ranking first on Google is still positive, but it no longer guarantees that users see or trust your brand.
              </p>
            </header>

            {/* Key Stats Section */}
            <div className="bg-slate-800/50 rounded-lg border border-slate-700 p-8 mb-12">
              <h2 className="text-xl font-semibold text-white mb-6">By 2025:</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <p className="text-slate-300">
                    Approximately <strong className="text-white">80% of search users</strong> now rely on AI-generated results or summaries for many queries, leading to a <strong className="text-white">15-25% reduction in organic web traffic</strong> for many sites.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <p className="text-slate-300">
                    Google's <strong className="text-white">AI Overviews</strong> now appear for a significant share of queries in high-trust verticals like healthcare, education and B2B tech, while experiments continue in ecommerce and travel.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <p className="text-slate-300">
                    Research on Generative Engine Optimisation (GEO) shows that optimising specifically for generative engines can <strong className="text-white">increase visibility of AI answers by up to 40%</strong> across engines like ChatGPT.
                  </p>
                </div>
              </div>
            </div>

            {/* New Search Reality */}
            <section className="mb-12">
              <p className="text-slate-300 leading-relaxed mb-6">
                Simultaneously, users are searching on platforms such as TikTok, YouTube, Amazon, Reddit, G2, internal communities, and through multi-step conversations with AI agents.
              </p>
              
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/20 p-6 mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">Search is now:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold">•</span>
                    <span className="text-slate-300"><strong className="text-white">AI-first:</strong> Chatbots and AI summaries are the first touch for many queries.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold">•</span>
                    <span className="text-slate-300"><strong className="text-white">Multi-surface:</strong> Classic SERPs, AI Overviews, social search, marketplaces, reviews, and forums are all important.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold">•</span>
                    <span className="text-slate-300"><strong className="text-white">Zero-click:</strong> A growing share of sessions end without a single click on a website.</span>
                  </li>
                </ul>
              </div>

              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                In this environment, the question isn't <em>"How do I rank?"</em><br />
                It's <strong className="text-white">"How visible, trusted and profitable is my brand across AI and search ecosystems?"</strong>
              </p>

              <p className="text-slate-300 leading-relaxed">
                This article presents the <strong className="text-white">VISIBI GEO Playbook</strong>, which outlines seven key signals for organic success in 2026 and strategies for optimizing AI-enabled search. For clarity, these signals are: 1. Visitor Quality, 2. Multi-Surface Presence, 3. Trend Responsiveness, 4. Traffic Diversification, 5. Brand Trust and Reputation in AI Answers, 6. Paid and Organic Synergy, and 7. Combined Search Performance.
              </p>
            </section>

            {/* From SEO to GEO */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">From SEO to GEO: What Actually Changed?</h2>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                Traditional SEO was built on a simple model:
              </p>

              <div className="bg-slate-800/30 rounded-lg border border-slate-700 p-6 mb-6">
                <p className="text-slate-300 text-center">
                  User types keywords → search engine returns 10 blue links → user clicks one.
                </p>
              </div>

              <p className="text-slate-300 leading-relaxed mb-6">
                Generative engines break this pattern:
              </p>

              <ul className="space-y-3 mb-6 pl-6">
                <li className="text-slate-300 leading-relaxed">
                  A large language model (LLM) reads and synthesises information from many sources.
                </li>
                <li className="text-slate-300 leading-relaxed">
                  It responds with a single, conversational answer, often with a short list of citations.
                </li>
                <li className="text-slate-300 leading-relaxed">
                  Users may not leave the interface or may only click a single recommended link.
                </li>
              </ul>

              <p className="text-slate-300 leading-relaxed mb-6">
                The GEO research formalises this new world:
              </p>

              <ul className="space-y-3 mb-6 pl-6">
                <li className="text-slate-300 leading-relaxed">
                  Treats systems like ChatGPT, Perplexity and AI Overviews as "generative engines".
                </li>
                <li className="text-slate-300 leading-relaxed">
                  Defines visibility metrics such as: how often you're cited, how prominently, and with what sentiment.
                </li>
                <li className="text-slate-300 leading-relaxed">
                  Shows that small content changes (adding concrete statistics, quotes, clearer structure) can materially increase your presence in AI answers.
                </li>
              </ul>

              <div className="bg-blue-500/10 border-l-4 border-blue-400 rounded-r-lg p-6 mb-6">
                <p className="text-slate-300 leading-relaxed">
                  In parallel, enterprise analytics already show: AI-driven referrals from platforms such as ChatGPT, Gemini, Bing Copilot, Perplexity, and others are increasing rapidly. For many large sites, these referrals now match the impact of a mid-tier organic or paid campaign, often without a dedicated AI strategy.
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg border border-purple-500/20 p-6 text-center">
                <p className="text-lg text-white font-semibold mb-2">
                  Classic rankings are now just a leading indicator.
                </p>
                <p className="text-slate-300">
                  Real success lives in AI citations, multi-surface presence and business outcomes.
                </p>
              </div>
            </section>

            {/* The 7 Signals */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">The VISIBI 7 Signals of AI-Era Organic Success</h2>
              
              <p className="text-slate-300 leading-relaxed mb-8">
                At govisibi.ai, we categorize AI-era organic performance into seven signals. If these indicators are strong, you are succeeding regardless of individual rankings.
              </p>

              {/* Signal 1: Visitor Quality */}
              <div className="bg-slate-800/50 rounded-lg border border-slate-700 p-8 mb-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <Users className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">1. Visitor Quality</h3>
                    <p className="text-lg text-blue-400 font-semibold">
                      Are you attracting visitors who buy or take meaningful actions?
                    </p>
                  </div>
                </div>

                <p className="text-slate-300 leading-relaxed mb-6">
                  In a zero-click, AI-summarised world, the people who do click are often:
                </p>

                <ul className="space-y-2 mb-6 pl-6">
                  <li className="text-slate-300">Deep in research</li>
                  <li className="text-slate-300">Comparing final options</li>
                  <li className="text-slate-300">Or troubleshooting a specific issue</li>
                </ul>

                <h4 className="text-lg font-semibold text-white mb-3">What to track</h4>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Split organic and AI-driven traffic by landing page and look at:
                </p>
                <ul className="space-y-2 mb-6 pl-6">
                  <li className="text-slate-300">
                    <strong className="text-white">Conversion rate by intent:</strong>
                    <ul className="mt-2 space-y-1 pl-6">
                      <li>B2B – demo requests, trials, high-intent form fills.</li>
                      <li>E-commerce – purchases, add-to-cart, subscriptions.</li>
                    </ul>
                  </li>
                  <li className="text-slate-300">Revenue or pipeline per session from organic and AI referrals.</li>
                  <li className="text-slate-300">Downstream quality metrics: opportunity creation, win rates, LTV, repeat purchase.</li>
                </ul>

                <h4 className="text-lg font-semibold text-white mb-3">How to act</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">Identify pages with high traffic but low conversion rates; these should be prioritized for GEO and CRO improvements.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">Locate pages with modest traffic but high conversion rates. Amplify their visibility by linking to them and featuring them more prominently in navigation and content clusters.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">Create a list of high-intent search topics, such as pricing, comparisons, categories, products, and troubleshooting. Ensure these pages offer the best, fastest, and most trustworthy user experiences.</span>
                  </li>
                </ul>
              </div>

              {/* Signal 2: Multi-Surface Presence */}
              <div className="bg-slate-800/50 rounded-lg border border-slate-700 p-8 mb-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                    <Search className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">2. Multi-Surface Presence (SERP & AI Diversification)</h3>
                    <p className="text-lg text-purple-400 font-semibold">
                      Are you visible across the entire SERP and AI experience, rather than relying on a single organic listing?
                    </p>
                  </div>
                </div>

                <p className="text-slate-300 leading-relaxed mb-6">
                  For each important topic, aim to appear in as many of the following areas as possible:
                </p>

                <ul className="space-y-2 mb-6 pl-6">
                  <li className="text-slate-300">AI Overviews & answer boxes</li>
                  <li className="text-slate-300">Chatbots and generative engines (ChatGPT, Gemini, Claude, etc.)</li>
                  <li className="text-slate-300">People Also Ask and other Q&A modules</li>
                  <li className="text-slate-300">Video carousels and short-form placements (YouTube, TikTok, Reels)</li>
                  <li className="text-slate-300">Image, shopping, discussion, and forum results</li>
                </ul>

                <h4 className="text-lg font-semibold text-white mb-3">What to track</h4>
                <p className="text-slate-300 leading-relaxed mb-4">For your money queries:</p>
                <ul className="space-y-2 mb-6 pl-6">
                  <li className="text-slate-300">Where you appear in AI Overviews and how often.</li>
                  <li className="text-slate-300">Whether you're cited in generative answers from the main AI engines.</li>
                  <li className="text-slate-300">Presence in PAA, video carousels, product/shopping results, and discussions.</li>
                  <li className="text-slate-300">Share of voice per intent (informational vs comparison vs transactional).</li>
                </ul>

                <h4 className="text-lg font-semibold text-white mb-3">How to act</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">Audit your top 50–100 high-value queries and map which features and surfaces show.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">For each surface, assess whether you have the appropriate content format (B2B: in-depth guides, docs, FAQs, comparison matrices, case studies; E-commerce: enriched product data, FAQs, unboxing/how-to video, UGC, review snippets).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">Adopt FAQ modules and structured data (FAQ, HowTo, Product, Article) that are easily pulled into AI answers and SERP modules.</span>
                  </li>
                </ul>
              </div>

              {/* Signal 3: Trend Responsiveness */}
              <div className="bg-slate-800/50 rounded-lg border border-slate-700 p-8 mb-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                    <TrendingUp className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">3. Trend Responsiveness</h3>
                    <p className="text-lg text-green-400 font-semibold">
                      Are you identifying and addressing emerging topics before your competitors?
                    </p>
                  </div>
                </div>

                <p className="text-slate-300 leading-relaxed mb-6">
                  GEO research shows that generative engines are especially influential when queries don't have an established playbook yet – new frameworks, new problems, new product categories.
                </p>

                <h4 className="text-lg font-semibold text-white mb-3">What to track</h4>
                <ul className="space-y-2 mb-6 pl-6">
                  <li className="text-slate-300">New and rising queries in Search Console and internal site search.</li>
                  <li className="text-slate-300">Low-volume, high-velocity topics in keyword tools and AI Overviews.</li>
                  <li className="text-slate-300">Social and community chatter (TikTok, YouTube, Reddit, Discord, niche forums).</li>
                  <li className="text-slate-300">The time lag between: "We noticed this theme" → "We shipped useful content" → "We see impressions and citations".</li>
                </ul>

                <h4 className="text-lg font-semibold text-white mb-3">How to act</h4>
                <p className="text-slate-300 leading-relaxed mb-4">Conduct regular 'trend sprints':</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">Each month, have SEO, product, and content teams select one or two emerging topics.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">Develop answer-focused content such as FAQs, explainers, comparisons, and visual walkthroughs.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">Deliberately seed structured, statistic-rich, quotable content that LLMs can lift into answers.</span>
                  </li>
                </ul>
              </div>

              {/* Signal 4: Traffic Diversification */}
              <div className="bg-slate-800/50 rounded-lg border border-slate-700 p-8 mb-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-orange-500/10 rounded-lg border border-orange-500/20">
                    <Target className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">4. Traffic Diversification ("Search Everywhere")</h3>
                    <p className="text-lg text-orange-400 font-semibold">
                      Are you overly reliant on a single platform?
                    </p>
                  </div>
                </div>

                <p className="text-slate-300 leading-relaxed mb-6">
                  "Search" is now:
                </p>

                <ul className="space-y-2 mb-6 pl-6">
                  <li className="text-slate-300"><strong className="text-white">Marketplaces:</strong> Amazon, Etsy, app stores.</li>
                  <li className="text-slate-300"><strong className="text-white">Social & video:</strong> TikTok, YouTube, Instagram, Pinterest.</li>
                  <li className="text-slate-300"><strong className="text-white">Professional & B2B:</strong> G2, Capterra, industry review sites, community platforms.</li>
                  <li className="text-slate-300"><strong className="text-white">AI chat and agents:</strong> ChatGPT, Gemini, Perplexity, Bing Copilot and others.</li>
                </ul>

                <h4 className="text-lg font-semibold text-white mb-3">What to track</h4>
                <p className="text-slate-300 leading-relaxed mb-4">Segment discovery traffic across platforms and look at:</p>
                <ul className="space-y-2 mb-6 pl-6">
                  <li className="text-slate-300">Channel mix (share of total discovery by source)</li>
                  <li className="text-slate-300">Growth rate of non-Google sources</li>
                  <li className="text-slate-300">Conversion rate and revenue/pipeline per platform</li>
                </ul>

                <h4 className="text-lg font-semibold text-white mb-3">How to act</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">If 80–90% of your discovery traffic originates from one engine, consider this a concentration risk.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">Prioritize one or two additional platforms where your target audience is active (TikTok and Amazon for ecommerce or YouTube and G2/Reddit for B2B).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">Incorporate 'search everywhere optimization' into your roadmap.</span>
                  </li>
                </ul>
              </div>

              {/* Signal 5: Brand Trust */}
              <div className="bg-slate-800/50 rounded-lg border border-slate-700 p-8 mb-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                    <CheckCircle className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">5. Brand Trust & Reputation in AI Answers</h3>
                    <p className="text-lg text-cyan-400 font-semibold">
                      Does your brand appear trustworthy across all research platforms?
                    </p>
                  </div>
                </div>

                <p className="text-slate-300 leading-relaxed mb-6">
                  AI engines do not create your reputation; they amplify what is already present online.
                </p>

                <p className="text-slate-300 leading-relaxed mb-6">
                  Studies of AI Overviews and chatbot answers consistently show a strong bias towards:
                </p>

                <ul className="space-y-2 mb-6 pl-6">
                  <li className="text-slate-300">Recognised brands and institutions</li>
                  <li className="text-slate-300">Sites with clear expertise and trust signals</li>
                  <li className="text-slate-300">And third-party guide and review sites</li>
                </ul>

                <h4 className="text-lg font-semibold text-white mb-3">What to track</h4>
                <p className="text-slate-300 leading-relaxed mb-4">Blend SEO / GEO metrics with brand and CX signals:</p>
                <ul className="space-y-2 mb-6 pl-6">
                  <li className="text-slate-300">Branded search interest over time</li>
                  <li className="text-slate-300">"[Brand] reviews", "[Brand] vs [competitor]" style queries</li>
                  <li className="text-slate-300">Review volume and ratings across G2, Capterra, Trustpilot, app stores and retail partners</li>
                  <li className="text-slate-300">How you're described (and whether you're cited) in AI answers and comparison queries</li>
                </ul>

                <h4 className="text-lg font-semibold text-white mb-3">How to act</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">Invest in review generation and reputation management programs.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">Establish relationships with guide and comparison sites, as these domains are frequently cited by AI models.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">Incorporate user-generated content, testimonials, and social proof into your key SEO and GEO pages.</span>
                  </li>
                </ul>
              </div>

              {/* Signal 6: Paid & Organic Synergy */}
              <div className="bg-slate-800/50 rounded-lg border border-slate-700 p-8 mb-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-pink-500/10 rounded-lg border border-pink-500/20">
                    <DollarSign className="w-6 h-6 text-pink-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">6. Paid & Organic Synergy</h3>
                    <p className="text-lg text-pink-400 font-semibold">
                      Is your organic strategy enhancing the effectiveness and profitability of paid media?
                    </p>
                  </div>
                </div>

                <p className="text-slate-300 leading-relaxed mb-6">
                  As search gets more AI-driven, paid campaigns (Performance Max, AI-driven search campaigns, social ads) become heavily dependent on landing page quality, relevance and structured content.
                </p>

                <h4 className="text-lg font-semibold text-white mb-3">What to track</h4>
                <p className="text-slate-300 leading-relaxed mb-4">
                  For major themes and audiences, compare performance when ads land on old, generic pages vs SEO-optimised, GEO-aware pages. Metrics: conversion rate, ROAS, CPA/CAC, quality/relevance scores.
                </p>

                <h4 className="text-lg font-semibold text-white mb-3">How to act</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-pink-400 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">Maintain a shared landing page library accessible to both SEO and paid media teams.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-pink-400 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">When you enhance a high-intent SEO page, direct relevant paid traffic to it and tag for performance comparison.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-pink-400 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">Repurpose successful organic elements in advertisements and measure performance improvements.</span>
                  </li>
                </ul>
              </div>

              {/* Signal 7: Combined Search Performance */}
              <div className="bg-slate-800/50 rounded-lg border border-slate-700 p-8 mb-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-indigo-500/10 rounded-lg border border-indigo-500/20">
                    <BarChart3 className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">7. Combined Search Performance</h3>
                    <p className="text-lg text-indigo-400 font-semibold">
                      Is your overall search strategy driving profitable growth?
                    </p>
                  </div>
                </div>

                <p className="text-slate-300 leading-relaxed mb-6">
                  Executives are typically less concerned with the source of a click and more focused on total search-driven revenue and margin.
                </p>

                <h4 className="text-lg font-semibold text-white mb-3">What to track</h4>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Group queries into themes (problems, product categories, use cases) and then aggregate across channels:
                </p>
                <ul className="space-y-2 mb-6 pl-6">
                  <li className="text-slate-300">Total sessions from search & AI surfaces</li>
                  <li className="text-slate-300">Blended CVR and CAC/CPA for the theme</li>
                  <li className="text-slate-300">Revenue, pipeline, or LTV</li>
                  <li className="text-slate-300">Share of search vs key competitors, where you can estimate it</li>
                </ul>

                <h4 className="text-lg font-semibold text-white mb-3">How to act</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-indigo-400 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">Find themes where paid spend is high because organic is weak – that's your priority GEO/SEO roadmap.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-indigo-400 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">Find themes where organic is strong and paid only adds marginal value – potential budget reallocation.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-indigo-400 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">Use this view to show how investment in GEO and AI-ready content lowers blended CAC and increases revenue over time.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* What AI Engines Look For */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">What AI Engines Actually Look For (and How to Feed Them)</h2>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                Under the hood, AI engines rely on vector search and semantic retrieval as much as classic ranking.
              </p>

              <p className="text-slate-300 leading-relaxed mb-6">
                Across research and real-world testing, we see a recurring pattern of what increases the chance of being cited:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-slate-800/30 rounded-lg border border-slate-700 p-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Authoritativeness & brand mentions</h4>
                  <p className="text-slate-300">Recognisable brands and trusted domains are favoured.</p>
                </div>
                
                <div className="bg-slate-800/30 rounded-lg border border-slate-700 p-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Concise, structured answers</h4>
                  <p className="text-slate-300">Content that looks like a ready-made answer box or FAQ (H2/H3 structure, bullets, key facts).</p>
                </div>
                
                <div className="bg-slate-800/30 rounded-lg border border-slate-700 p-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Schema and markup</h4>
                  <p className="text-slate-300">Product, FAQ, HowTo, Article and Review schema make it easier for both classic and generative engines to parse and reuse your content.</p>
                </div>
                
                <div className="bg-slate-800/30 rounded-lg border border-slate-700 p-6">
                  <h4 className="text-lg font-semibold text-white mb-2">E-E-A-T</h4>
                  <p className="text-slate-300">Real experience, visible experts, clear sourcing, and trust signals (policies, support, security).</p>
                </div>
                
                <div className="bg-slate-800/30 rounded-lg border border-slate-700 p-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Crawlability & access</h4>
                  <p className="text-slate-300">AI crawlers need to be allowed in robots.txt, and key content can't be buried in tricky JS or unlinked fragments.</p>
                </div>
                
                <div className="bg-slate-800/30 rounded-lg border border-slate-700 p-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Freshness</h4>
                  <p className="text-slate-300">Frequently updated pages, especially for fast-changing topics like pricing, comparisons, troubleshooting and regulations.</p>
                </div>
                
                <div className="bg-slate-800/30 rounded-lg border border-slate-700 p-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Semantic relevance</h4>
                  <p className="text-slate-300">Modern models care less about exact keywords and more about intent and context.</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/20 p-6">
                <p className="text-slate-300 leading-relaxed">
                  In practice, this requires designing content that is <strong className="text-white">clear, structured, evidence-based, and easily quotable</strong> for both human users and machines.
                </p>
              </div>
            </section>

            {/* Making This Operational */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Making This Operational: A GEO Programme for 2026</h2>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                Brands can operationalize these strategies through a structured program, which govisibi.ai is designed to support.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/30 flex-shrink-0">
                    <span className="text-blue-400 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Map your search & AI surfaces</h4>
                    <p className="text-slate-300">Identify the key engines and platforms where customers search: Google (incl. AI Overviews), AI chat, social/video, marketplaces, forums, review sites.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/30 flex-shrink-0">
                    <span className="text-blue-400 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Instrument AI visibility & referrals</h4>
                    <p className="text-slate-300">Track traffic from AI engines (ChatGPT, Gemini, Copilot, Perplexity, and others) and measure engagement and revenue, not just sessions. Combine this with citation and sentiment monitoring, where possible.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/30 flex-shrink-0">
                    <span className="text-blue-400 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Build answer-first content architectures</h4>
                    <p className="text-slate-300">Use FAQ and Q&A modules, PAA-driven topics, and conversational headings. Add schema, statistics, quotes and real examples that LLMs can reuse.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/30 flex-shrink-0">
                    <span className="text-blue-400 font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Optimise for vector search & conversational use cases</h4>
                    <p className="text-slate-300">Write in natural language, covering use cases, comparisons and trade-offs – not just product specs.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/30 flex-shrink-0">
                    <span className="text-blue-400 font-bold">5</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Align with PR, community and review strategy</h4>
                    <p className="text-slate-300">Treat guide sites, reviewers and communities as core GEO assets, not just PR placements.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/30 flex-shrink-0">
                    <span className="text-blue-400 font-bold">6</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Redesign reporting to focus on the seven signals</h4>
                    <p className="text-slate-300">Use tailored reporting templates and KPIs for each signal. These metrics enable leaders to build comprehensive dashboards with actionable insights.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Why govisibi.ai Exists */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Why govisibi.ai Exists</h2>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                The shift toward AI-driven search is occurring regardless of brand preferences.
              </p>

              <p className="text-slate-300 leading-relaxed mb-6">
                Traffic from AI engines is already significant. Zero-click behavior is increasing, and AI Overviews and chatbots are becoming the primary first impression in many categories.
              </p>

              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/20 p-8 mb-6">
                <h3 className="text-xl font-semibold text-white mb-4">Winning in this world means:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">Being cited and trusted in AI answers.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">Showing up across multiple surfaces and platforms.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">Proving business impact, not just impressions.</span>
                  </li>
                </ul>
              </div>

              <p className="text-slate-300 leading-relaxed">
                The VISIBI GEO Playbook and govisibi.ai are designed to help you measure and improve visibility, sentiment, and performance across AI and search ecosystems. This approach moves beyond chasing rankings to building sustainable, profitable visibility in the era of generative search.
              </p>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/20 p-8 mb-12">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Win in AI-Enabled Search?</h3>
              <p className="text-slate-300 mb-6">
                Start with a comprehensive audit of your current search and AI visibility, or launch a pilot project to implement GEO strategies. An internal workshop can help align your team on these priorities and techniques.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/contact">
                  <Button variant="primary" size="lg">
                    Get Started
                  </Button>
                </a>
                <a href="/tool">
                  <Button variant="outline" size="lg">
                    Try AI Visibility Check
                  </Button>
                </a>
              </div>
            </section>
          </article>
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-800 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Newsletter */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Subscribe to Our Newsletter</h3>
                <p className="text-slate-400 mb-4">Get the latest insights on AI visibility and GEO strategies.</p>
                <form className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1"
                  />
                  <Button type="submit" variant="primary">
                    Subscribe
                  </Button>
                </form>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://x.com/VisibiAI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    X
                  </a>
                  <a
                    href="http://linkedin.com/company/visibi-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-slate-400 text-sm">
                © 2025 Visibi Ai. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm">
                <a href="/privacy-policy" className="text-slate-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="/terms" className="text-slate-400 hover:text-white transition-colors">
                  Terms of Use
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
