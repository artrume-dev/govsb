import React from 'react';
import { Button } from '../ui/button';
import { FAQSection } from '../FAQSection';
import { CTABanner } from '../CTABanner';
import { Target, FileText, BarChart3, RefreshCw, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import geoBgImage from 'figma:asset/e2585964a0b726ac64bd6d0391078840da026ada.png';

interface GEOPageProps {
  onNavigate: (page: string) => void;
}

export function GEOPage({ onNavigate }: GEOPageProps) {
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
  ];

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
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-white text-black py-24 md:py-32 border-b border-[#EAEAEA] border-dashed relative overflow-hidden">
        {/* Background Image with Very Light Opacity */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.10]"
          style={{
            backgroundImage: `url(${geoBgImage})`,
            filter: 'grayscale(100%)',
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-inter font-bold text-[48px] md:text-[56px] leading-[1.2] mb-6">
              Generative Engine Optimisation (GEO)
            </h1>
            <p className="font-space-mono text-[18px] leading-[1.5] text-[#7A7A7A] mb-10 max-w-3xl mx-auto">
              Get discovered, cited, and positively represented by Gen AI platforms like ChatGPT, Gemini, and Perplexity.
            </p>
            <Button 
              onClick={() => onNavigate('contact')}
              className="bg-white text-black hover:bg-black hover:text-white border border-black rounded-md px-8 py-6 h-auto font-inter font-semibold text-[16px] inline-flex items-center gap-2 transition-all"
            >
              <Sparkles className="w-5 h-5" />
              Request GEO Audit
            </Button>
          </div>
        </div>
      </section>

      {/* What is GEO */}
      <section className="py-24 bg-white border-b border-[#EAEAEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-space-mono font-bold text-[40px] leading-[1.3] text-black mb-6">What is GEO?</h2>
            <p className="font-space-mono text-[18px] leading-[1.5] text-black mb-6">
              Generative Engine Optimization (GEO) is the practice of optimizing your digital presence to maximize visibility, citations, and positive perception within Gen AI-powered platforms.
            </p>
            <p className="font-space-mono text-[18px] leading-[1.5] text-black mb-6">
              As millions of users shift from traditional search to conversational Gen AI for discovery and research, your brand's presence in these Gen AI-generated responses becomes critical for awareness, consideration, and trust-building.
            </p>
            <p className="font-space-mono text-[18px] leading-[1.5] text-black">
              VISIBI's GEO methodology ensures your brand appears in the right context, with accurate information and positive sentiment, when potential customers ask Gen AI platforms about solutions in your category.
            </p>
          </div>
        </div>
      </section>

      {/* GEO Framework */}
      <section className="py-24 bg-white border-b border-[#EAEAEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-space-mono font-bold text-[40px] leading-[1.3] text-black mb-4">The VISIBI GEO Framework</h2>
            <p className="font-space-mono text-[16px] leading-[1.5] text-black max-w-2xl mx-auto">
              A comprehensive methodology for optimizing Gen AI visibility across all platforms.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {frameworkItems.map((item, index) => (
              <div key={index} className="bg-white border border-[#EAEAEA] rounded-xl p-8">
                <div className="w-12 h-12 bg-white border border-black rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-black" />
                </div>
                <h3 className="font-space-mono font-bold text-[20px] leading-[1.3] text-black mb-3">{item.title}</h3>
                <p className="font-space-mono text-[16px] leading-[1.5] text-black">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 bg-white border-b border-[#EAEAEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-space-mono font-bold text-[40px] leading-[1.3] text-black mb-4">Our GEO Process</h2>
            <p className="font-space-mono text-[16px] leading-[1.5] text-black max-w-2xl mx-auto">
              A systematic approach to building and maintaining Gen AI visibility.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            {[
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
            ].map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-inter font-semibold text-[16px]">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1 bg-white border border-[#EAEAEA] rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-space-mono font-bold text-[20px] leading-[1.3] text-black">{step.title}</h3>
                    <span className="font-space-mono text-[14px] text-[#7A7A7A]">({step.duration})</span>
                  </div>
                  <p className="font-space-mono text-[16px] leading-[1.5] text-black">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO vs GEO Comparison */}
      <section className="py-24 bg-white border-b border-[#EAEAEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-space-mono font-bold text-[40px] leading-[1.3] text-black mb-4">SEO vs GEO: Understanding the Difference</h2>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border border-[#EAEAEA] rounded-xl p-8">
                <h3 className="font-space-mono font-bold text-[24px] leading-[1.3] text-black mb-6">Traditional SEO</h3>
                <ul className="space-y-3 font-space-mono text-[16px] leading-[1.5] text-black">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                    <span>Optimizes for search engine rankings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                    <span>Focuses on keywords and backlinks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                    <span>Success = higher SERP positions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                    <span>Drives traffic to your website</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                    <span>User decides which result to click</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white border-2 border-black rounded-xl p-8">
                <h3 className="font-space-mono font-bold text-[24px] leading-[1.3] text-black mb-6">GEO (Generative Engine Optimization)</h3>
                <ul className="space-y-3 font-space-mono text-[16px] leading-[1.5] text-black">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                    <span>Optimizes for Gen AI platform mentions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                    <span>Focuses on citations and authority</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                    <span>Success = being cited in Gen AI responses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                    <span>Builds trust before website visit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                    <span>AI recommends your brand directly</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why VISIBI */}
      <section className="py-24 bg-white border-b border-[#EAEAEA] border-dashed">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-space-mono font-bold text-[40px] leading-[1.3] text-black mb-4">Why Choose VISIBI for GEO</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-white border border-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-black" />
              </div>
              <h3 className="font-space-mono font-bold text-[20px] leading-[1.3] text-black mb-3">Proven Methodology</h3>
              <p className="font-space-mono text-[16px] leading-[1.5] text-black">
                Built on 20+ years of search expertise, adapted for Gen AI platforms
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white border border-black rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-black" />
              </div>
              <h3 className="font-space-mono font-bold text-[20px] leading-[1.3] text-black mb-3">Transparent Tracking</h3>
              <p className="font-space-mono text-[16px] leading-[1.5] text-black">
                Real-time visibility dashboards showing mentions, citations, and sentiment
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white border border-black rounded-full flex items-center justify-center mx-auto mb-4">
                <RefreshCw className="w-8 h-8 text-black" />
              </div>
              <h3 className="font-space-mono font-bold text-[20px] leading-[1.3] text-black mb-3">Continuous Evolution</h3>
              <p className="font-space-mono text-[16px] leading-[1.5] text-black">
                We adapt strategies as Gen AI platforms evolve and new opportunities emerge
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={faqs} />

      {/* CTA */}
      <CTABanner
        title="Request Your GEO Audit"
        description="Discover how your brand appears across Gen AI platforms and get a custom roadmap for improving visibility and citations."
        buttonText="Get Started"
        onButtonClick={() => onNavigate('contact')}
      />
    </div>
  );
}
