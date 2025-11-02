import React from 'react';
import { Button } from '../ui/button';
import { FAQSection } from '../FAQSection';
import { CTABanner } from '../CTABanner';
import { Search, Share2, Briefcase, Video, ArrowRight, Target, TrendingUp, Zap, BarChart3, DollarSign, Activity, Sparkles } from 'lucide-react';
import ppcBgImage from 'figma:asset/3df7e608e45f441c39bd2b060073b480d0fae211.png';

interface PPCPageProps {
  onNavigate: (page: string) => void;
}

export function PPCPage({ onNavigate }: PPCPageProps) {
  const faqs = [
    {
      question: "What PPC platforms do you manage?",
      answer: "We manage Google Ads (Search, Display, Shopping, YouTube), Microsoft Ads (Bing), LinkedIn Ads for B2B targeting, and Meta (Facebook & Instagram) campaigns. We select platforms based on where your target audience is most active and where we can achieve the best ROI for your specific goals."
    },
    {
      question: "How do you use AI in ad optimisation?",
      answer: "We leverage AI-powered bidding strategies, automated audience targeting, dynamic creative optimization, and predictive performance modeling. We also use AI tools to test ad copy variations, analyze competitor strategies, and identify high-performing audience segments—all while maintaining strategic human oversight."
    },
    {
      question: "Can PPC help improve AI visibility?",
      answer: "Yes. Paid campaigns drive traffic to high-quality content that signals authority to AI platforms. They also generate user engagement data, test messaging that can inform GEO strategies, and amplify content that's already optimized for AI citations—creating a virtuous cycle between paid, organic, and AI visibility."
    },
    {
      question: "What's your minimum ad spend?",
      answer: "We typically recommend a minimum monthly ad spend of $3,000-5,000 for meaningful testing and results, though this varies by industry, competition level, and campaign objectives. We'll provide specific budget recommendations during our initial audit based on your goals and market landscape."
    },
    {
      question: "How do you report results?",
      answer: "We provide monthly performance dashboards via Looker Studio or Data Studio, showing key metrics like ROAS, CPC, conversion rates, and attribution across channels. Reports include strategic insights, optimization actions taken, and clear recommendations for the next period—all tied to your business objectives."
    },
    {
      question: "Do you create ad copy and landing pages?",
      answer: "Yes. We develop ad copy, creative assets, and landing page recommendations aligned with your brand voice and conversion goals. For complex landing page builds, we can collaborate with your team or recommend development partners to ensure conversion-optimized experiences."
    },
    {
      question: "How quickly can campaigns launch?",
      answer: "Initial campaigns can launch within 1-2 weeks after kickoff, including account setup, audience research, keyword planning, creative development, and tracking configuration. Full optimization and scaling typically develop over 4-8 weeks as we gather performance data and refine strategies."
    },
    {
      question: "What makes VISIBI's paid media different?",
      answer: "We integrate paid media with your broader AI visibility strategy. Campaigns aren't siloed—they amplify content optimized for GEO, test messaging that informs SEO, and generate audience insights that improve overall brand discoverability across traditional search, AI platforms, and social channels."
    },
    {
      question: "How do you measure campaign success?",
      answer: "We track ROAS (Return on Ad Spend), CPC (Cost Per Click), conversion rates, quality scores, and customer acquisition cost. Most importantly, we tie these metrics to business outcomes—qualified leads, pipeline value, revenue attribution, and customer lifetime value—not just vanity metrics."
    },
    {
      question: "Can you take over existing campaigns?",
      answer: "Absolutely. We conduct a comprehensive audit of your existing campaigns, identify optimization opportunities, and create a transition plan that minimizes disruption while improving performance. Most clients see measurable improvements within the first 60-90 days of our management."
    }
  ];

  const relatedInsights = [
    {
      title: "How AI-Powered Bidding Strategies Improve ROAS",
      category: "Paid Media",
      excerpt: "Exploring machine learning bid optimization and when to use automated vs. manual bidding strategies."
    },
    {
      title: "Integrating PPC with GEO for Maximum Visibility",
      category: "Strategy",
      excerpt: "How paid campaigns can amplify content optimized for AI citations and create synergy across channels."
    },
    {
      title: "LinkedIn Ads for B2B: Targeting Strategies That Work",
      category: "Paid Media",
      excerpt: "Advanced audience segmentation, content formats, and campaign structures for B2B lead generation."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-white text-black py-24 md:py-32 border-b border-[#EAEAEA] border-dashed relative overflow-hidden">
        {/* Background Image with Very Light Opacity */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.10]"
          style={{
            backgroundImage: `url(${ppcBgImage})`,
            filter: 'grayscale(100%)',
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-inter font-bold text-[48px] md:text-[56px] leading-[1.2] mb-6">
              Performance Campaigns that Amplify Visibility
            </h1>
            <p className="font-space-mono text-[18px] leading-[1.5] text-[#7A7A7A] mb-10 max-w-3xl mx-auto">
              From Google Ads to LinkedIn, our paid media strategies boost visibility, drive conversions, and reinforce your organic and Gen AI search presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => onNavigate('contact')}
                className="bg-white text-black hover:bg-black hover:text-white border border-black rounded-md px-8 py-6 h-auto font-inter font-semibold text-[16px] inline-flex items-center gap-2 transition-all"
              >
                <Sparkles className="w-5 h-5" />
                Book Paid Media Audit
              </Button>
              <Button 
                onClick={() => onNavigate('insights')}
                variant="outline"
                className="bg-transparent text-black border border-black hover:bg-black hover:text-white rounded-md px-8 py-6 h-auto font-inter font-semibold text-[16px] inline-flex items-center gap-2 transition-all"
              >
                View Case Studies
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Channels & Platforms */}
      <section className="py-24 bg-white border-b border-[#EAEAEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-space-mono font-bold text-[40px] leading-[1.3] text-black mb-4">Channels & Platforms</h2>
            <p className="font-space-mono text-[16px] leading-[1.5] text-black max-w-2xl mx-auto">
              Strategic paid media across the platforms where your audience discovers and evaluates solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="bg-white border border-[#EAEAEA] rounded-xl p-8 text-center hover:border-black transition-all duration-300">
              <div className="w-16 h-16 bg-white border border-black rounded-xl flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-black" />
              </div>
              <h3 className="font-space-mono font-bold text-[20px] leading-[1.3] text-black mb-3">Google & Bing Search</h3>
              <p className="font-space-mono text-[14px] leading-[1.5] text-black">
                High-intent search campaigns targeting buyers actively looking for solutions.
              </p>
            </div>

            <div className="bg-white border border-[#EAEAEA] rounded-xl p-8 text-center hover:border-black transition-all duration-300">
              <div className="w-16 h-16 bg-white border border-black rounded-xl flex items-center justify-center mx-auto mb-6">
                <Share2 className="w-8 h-8 text-black" />
              </div>
              <h3 className="font-space-mono font-bold text-[20px] leading-[1.3] text-black mb-3">Meta (Facebook & Instagram)</h3>
              <p className="font-space-mono text-[14px] leading-[1.5] text-black">
                Brand awareness and demand generation with sophisticated audience targeting.
              </p>
            </div>

            <div className="bg-white border border-[#EAEAEA] rounded-xl p-8 text-center hover:border-black transition-all duration-300">
              <div className="w-16 h-16 bg-white border border-black rounded-xl flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-8 h-8 text-black" />
              </div>
              <h3 className="font-space-mono font-bold text-[20px] leading-[1.3] text-black mb-3">LinkedIn Campaigns</h3>
              <p className="font-space-mono text-[14px] leading-[1.5] text-black">
                Precision B2B targeting by job title, industry, company size, and seniority.
              </p>
            </div>

            <div className="bg-white border border-[#EAEAEA] rounded-xl p-8 text-center hover:border-black transition-all duration-300">
              <div className="w-16 h-16 bg-white border border-black rounded-xl flex items-center justify-center mx-auto mb-6">
                <Video className="w-8 h-8 text-black" />
              </div>
              <h3 className="font-space-mono font-bold text-[20px] leading-[1.3] text-black mb-3">YouTube Video Ads</h3>
              <p className="font-space-mono text-[14px] leading-[1.5] text-black">
                Video campaigns for brand storytelling and engagement with visual audiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 bg-white border-b border-[#EAEAEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-space-mono font-bold text-[40px] leading-[1.3] text-black mb-4">Our Approach</h2>
            <p className="font-space-mono text-[16px] leading-[1.5] text-black max-w-2xl mx-auto">
              Data-driven campaigns optimized for both immediate conversions and long-term brand visibility.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Column - Text */}
            <div>
              <h3 className="font-space-mono font-bold text-[28px] leading-[1.3] text-black mb-6">Smart Campaign Architecture</h3>
              <div className="space-y-6">
                <div>
                  <p className="font-space-mono text-[16px] leading-[1.5] text-black mb-2"><strong>Entity-Mapped Ad Groups</strong></p>
                  <p className="font-space-mono text-[16px] leading-[1.5] text-black">
                    We structure campaigns around your brand entities, product categories, and audience segments—mirroring how AI platforms understand your business and creating consistency across all visibility channels.
                  </p>
                </div>
                <div>
                  <p className="font-space-mono text-[16px] leading-[1.5] text-black mb-2"><strong>AI Copy Testing</strong></p>
                  <p className="font-space-mono text-[16px] leading-[1.5] text-black">
                    Using machine learning tools to test thousands of ad copy variations, we identify messaging that resonates with your audience while aligning with how AI platforms describe your brand—creating unified positioning.
                  </p>
                </div>
                <div>
                  <p className="font-space-mono text-[16px] leading-[1.5] text-black mb-2"><strong>Audience Intent Layers</strong></p>
                  <p className="font-space-mono text-[16px] leading-[1.5] text-black">
                    We segment audiences by awareness stage, behavior signals, and intent indicators, delivering the right message at the right moment—from discovery through decision.
                  </p>
                </div>
                <div>
                  <p className="font-space-mono text-[16px] leading-[1.5] text-black mb-2"><strong>Keyword + Creative Synergy</strong></p>
                  <p className="font-space-mono text-[16px] leading-[1.5] text-black">
                    Campaign insights inform our SEO keyword strategies and GEO content optimization. Data flows both ways—organic performance tells us which paid campaigns to scale, creating continuous improvement across channels.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="bg-white border border-[#EAEAEA] rounded-xl p-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white border border-black rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="font-space-mono text-[16px] text-black">Precision Targeting</p>
                    <p className="font-space-mono text-[14px] text-[#7A7A7A]">Right audience, right time</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white border border-black rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="font-space-mono text-[16px] text-black">AI-Powered Optimization</p>
                    <p className="font-space-mono text-[14px] text-[#7A7A7A]">Automated bid & budget management</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white border border-black rounded-xl flex items-center justify-center flex-shrink-0">
                    <Activity className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="font-space-mono text-[16px] text-black">Cross-Channel Synergy</p>
                    <p className="font-space-mono text-[14px] text-[#7A7A7A]">Integrated with SEO & GEO data</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white border border-black rounded-xl flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="font-space-mono text-[16px] text-black">Continuous Testing</p>
                    <p className="font-space-mono text-[14px] text-[#7A7A7A]">Always learning, always improving</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-white border-b border-[#EAEAEA] border-dashed">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-space-mono font-bold text-[40px] leading-[1.3] text-black mb-4">Process — Plan → Launch → Optimise → Scale</h2>
            <p className="font-space-mono text-[16px] leading-[1.5] text-black max-w-2xl mx-auto">
              Our systematic approach to building high-performing paid media campaigns.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="relative">
              <div className="bg-white border border-[#EAEAEA] rounded-xl p-8 h-full">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-inter font-semibold text-[16px] mb-6">
                  1
                </div>
                <h3 className="font-space-mono font-bold text-[20px] leading-[1.3] text-black mb-3">Plan</h3>
                <p className="font-space-mono text-[16px] leading-[1.5] text-black">
                  Define objectives, research audiences, select channels, and establish KPIs and budget allocation strategy.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white border border-[#EAEAEA] rounded-xl p-8 h-full">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-inter font-semibold text-[16px] mb-6">
                  2
                </div>
                <h3 className="font-space-mono font-bold text-[20px] leading-[1.3] text-black mb-3">Launch</h3>
                <p className="font-space-mono text-[16px] leading-[1.5] text-black">
                  Build campaigns, create ad copy and creative, configure tracking, and deploy with proper attribution setup.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white border border-[#EAEAEA] rounded-xl p-8 h-full">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-inter font-semibold text-[16px] mb-6">
                  3
                </div>
                <h3 className="font-space-mono font-bold text-[20px] leading-[1.3] text-black mb-3">Optimise</h3>
                <p className="font-space-mono text-[16px] leading-[1.5] text-black">
                  Analyze performance, test variations, refine targeting, adjust bids, and improve quality scores continuously.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white border border-[#EAEAEA] rounded-xl p-8 h-full">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-inter font-semibold text-[16px] mb-6">
                  4
                </div>
                <h3 className="font-space-mono font-bold text-[20px] leading-[1.3] text-black mb-3">Scale</h3>
                <p className="font-space-mono text-[16px] leading-[1.5] text-black">
                  Increase budget on proven winners, expand to new audiences, test new platforms, and maximize ROI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Measurement & Attribution */}
      <section className="py-24 bg-white border-b border-[#EAEAEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-space-mono font-bold text-[40px] leading-[1.3] text-black mb-4">Measurement & Attribution</h2>
            <p className="font-space-mono text-[16px] leading-[1.5] text-black max-w-2xl mx-auto">
              Transparent tracking and reporting across all channels and touchpoints.
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="bg-white border border-[#EAEAEA] rounded-xl p-12">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="font-space-mono font-bold text-[24px] leading-[1.3] text-black mb-6">Analytics Infrastructure</h3>
                  <p className="font-space-mono text-[16px] leading-[1.5] text-black mb-6">
                    VISIBI tracks performance across GA4, Looker Studio dashboards, and AI platform visibility metrics—giving you complete visibility into how paid campaigns drive results across traditional search, AI citations, and direct conversions.
                  </p>
                  <p className="font-space-mono text-[16px] leading-[1.5] text-black">
                    We implement multi-touch attribution models to understand the full customer journey, not just last-click conversions. This reveals how paid media assists organic and AI visibility goals throughout the discovery process.
                  </p>
                </div>
                <div>
                  <h3 className="font-space-mono font-bold text-[24px] leading-[1.3] text-black mb-6">Key Performance Indicators</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-4 border-b border-[#EAEAEA]">
                      <span className="font-space-mono text-[16px] text-black">ROAS</span>
                      <span className="font-space-mono text-[14px] text-[#7A7A7A]">Return on Ad Spend</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-[#EAEAEA]">
                      <span className="font-space-mono text-[16px] text-black">CPC</span>
                      <span className="font-space-mono text-[14px] text-[#7A7A7A]">Cost Per Click</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-[#EAEAEA]">
                      <span className="font-space-mono text-[16px] text-black">Conversion Quality</span>
                      <span className="font-space-mono text-[14px] text-[#7A7A7A]">Lead quality & LTV</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-[#EAEAEA]">
                      <span className="font-space-mono text-[16px] text-black">CTR</span>
                      <span className="font-space-mono text-[14px] text-[#7A7A7A]">Click-Through Rate</span>
                    </div>
                    <div className="flex justify-between items-center pb-4">
                      <span className="font-space-mono text-[16px] text-black">Quality Score</span>
                      <span className="font-space-mono text-[14px] text-[#7A7A7A]">Ad relevance & efficiency</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-[#EAEAEA]">
                <div className="flex items-start gap-4">
                  <BarChart3 className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                  <p className="font-space-mono text-[16px] leading-[1.5] text-black">
                    <strong>Unified Reporting:</strong> All metrics are combined into custom dashboards that show how paid media performance impacts your broader visibility goals—from organic rankings to AI platform citations to direct conversions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={faqs} />

      {/* Related Insights */}
      <section className="py-24 bg-white border-b border-[#EAEAEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-space-mono font-bold text-[40px] leading-[1.3] text-black mb-4">Related Insights</h2>
            <p className="font-space-mono text-[16px] leading-[1.5] text-black">
              Learn more about paid media strategies and optimization.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {relatedInsights.map((insight, index) => (
              <div 
                key={index}
                onClick={() => onNavigate('insights')}
                className="bg-white border border-[#EAEAEA] rounded-xl p-6 hover:border-black transition-all duration-300 cursor-pointer"
              >
                <span className="font-space-mono text-[12px] text-black bg-white border border-black px-3 py-1 rounded-full">
                  {insight.category}
                </span>
                <h3 className="font-space-mono font-bold text-[20px] leading-[1.3] text-black mt-4 mb-3">{insight.title}</h3>
                <p className="font-space-mono text-[14px] leading-[1.5] text-black mb-4">{insight.excerpt}</p>
                <button className="font-space-mono text-[14px] text-black hover:underline inline-flex items-center gap-1">
                  Read More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <CTABanner
        title="Amplify Your Reach. Accelerate Your Conversions."
        description="Get a comprehensive paid media audit and discover how to drive immediate visibility while building long-term authority."
        buttonText="Book Paid Media Audit"
        onButtonClick={() => onNavigate('contact')}
      />
    </div>
  );
}
