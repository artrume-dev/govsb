import React from 'react';
import { Button } from '../ui/button';
import { FAQSection } from '../FAQSection';
import { CTABanner } from '../CTABanner';
import { Search, FileText, Link2, BarChart3, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import seoBgImage from 'figma:asset/9db832987f4ad315ac048191e729553e7d314dd4.png';

interface SEOPageProps {
  onNavigate: (page: string) => void;
}

export function SEOPage({ onNavigate }: SEOPageProps) {
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
  ];

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
  ];

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
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-24 md:py-32 border-b border-[#EAEAEA] border-dashed relative overflow-hidden">
        {/* Background Image with Very Light Opacity */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.10]"
          style={{
            backgroundImage: `url(${seoBgImage})`,
            filter: 'grayscale(100%)',
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-inter font-bold text-[48px] md:text-[56px] leading-[1.2] text-black mb-6">
              SEO That Feeds Your AI Visibility
            </h1>
            <p className="font-space-mono text-[18px] leading-[1.5] text-[#7A7A7A] mb-8 max-w-3xl mx-auto">
              We build search visibility that powers both traditional search and Gen AI discovery — helping your brand appear, get cited, and trusted across Google, ChatGPT, Gemini, and Perplexity.
            </p>
            <Button 
              onClick={() => onNavigate('contact')}
              className="bg-black text-white hover:bg-white hover:text-black border border-black rounded-md px-8 py-6 h-auto font-inter font-semibold text-[16px] inline-flex items-center gap-2 transition-all"
            >
              <Sparkles className="w-5 h-5" />
              Request SEO Audit
            </Button>
          </div>
        </div>
      </section>

      {/* SEO Framework */}
      <section className="py-24 border-b border-[#EAEAEA] border-dashed">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-space-mono font-bold text-[40px] leading-[1.3] text-black mb-4">
              The VISIBI SEO Framework
            </h2>
            <p className="font-space-mono text-[16px] leading-[1.5] text-black max-w-3xl mx-auto">
              Our approach combines proven SEO fundamentals with AI-first optimization
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {frameworkItems.map((item, index) => (
              <div key={index} className="border border-[#EAEAEA] rounded-xl p-8">
                <div className="w-12 h-12 border border-black rounded-xl flex items-center justify-center mb-6">
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
      <section className="py-24 border-b border-[#EAEAEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-space-mono font-bold text-[40px] leading-[1.3] text-black mb-4">
              How We Build Your SEO Success
            </h2>
            <p className="font-space-mono text-[16px] leading-[1.5] text-black max-w-3xl mx-auto">
              A structured 5-phase approach to sustainable organic growth
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {processSteps.map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-inter font-semibold text-[16px]">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1 border border-[#EAEAEA] rounded-xl p-6">
                  <h3 className="font-space-mono font-bold text-[20px] leading-[1.3] text-black mb-2">{step.title}</h3>
                  <p className="font-space-mono text-[16px] leading-[1.5] text-black">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Comparison */}
      <section className="py-24 border-b border-[#EAEAEA] border-dashed">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-space-mono font-bold text-[40px] leading-[1.3] text-black mb-4">
              AI-Ready SEO vs Traditional SEO
            </h2>
            <p className="font-space-mono text-[16px] leading-[1.5] text-black max-w-3xl mx-auto">
              The difference that powers AI citations
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-[#EAEAEA] rounded-xl p-8">
                <h3 className="font-space-mono font-bold text-[24px] leading-[1.3] text-black mb-6">Traditional SEO</h3>
                <ul className="space-y-3 font-space-mono text-[16px] leading-[1.5] text-black">
                  <li className="flex items-start gap-2">
                    <span className="text-[#7A7A7A] flex-shrink-0 mt-0.5">•</span>
                    <span>Optimizes for keyword rankings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#7A7A7A] flex-shrink-0 mt-0.5">•</span>
                    <span>Focuses on traffic volume</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#7A7A7A] flex-shrink-0 mt-0.5">•</span>
                    <span>Content structured for search engines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#7A7A7A] flex-shrink-0 mt-0.5">•</span>
                    <span>Success = top 3 rankings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#7A7A7A] flex-shrink-0 mt-0.5">•</span>
                    <span>Link building for PageRank</span>
                  </li>
                </ul>
              </div>
              <div className="border-2 border-black rounded-xl p-8">
                <h3 className="font-space-mono font-bold text-[24px] leading-[1.3] text-black mb-6">VISIBI AI-Ready SEO</h3>
                <ul className="space-y-3 font-space-mono text-[16px] leading-[1.5] text-black">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                    <span>Optimizes for AI comprehension & citations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                    <span>Focuses on authority & trust signals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                    <span>Content structured for AI & humans</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                    <span>Success = rankings + AI mentions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                    <span>Link building for entity authority</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose VISIBI */}
      <section className="py-24 border-b border-[#EAEAEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-space-mono font-bold text-[40px] leading-[1.3] text-black mb-4">
              Why Choose VISIBI for SEO
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 border border-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-black" />
              </div>
              <h3 className="font-space-mono font-bold text-[20px] leading-[1.3] text-black mb-3">AI-First Approach</h3>
              <p className="font-space-mono text-[16px] leading-[1.5] text-black">
                Every optimization considers how AI platforms will interpret and cite your content
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 border border-black rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-black" />
              </div>
              <h3 className="font-space-mono font-bold text-[20px] leading-[1.3] text-black mb-3">Complete Visibility Tracking</h3>
              <p className="font-space-mono text-[16px] leading-[1.5] text-black">
                Monitor rankings, traffic, AND AI citations in one unified dashboard
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 border border-black rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-black" />
              </div>
              <h3 className="font-space-mono font-bold text-[20px] leading-[1.3] text-black mb-3">White-Hat Only</h3>
              <p className="font-space-mono text-[16px] leading-[1.5] text-black">
                Sustainable, ethical tactics that build lasting authority and trust
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* CTA Banner */}
      <CTABanner
        title="Ready to Build AI-Ready SEO?"
        description="Get a comprehensive SEO audit that includes AI visibility analysis"
        buttonText="Request Your SEO Audit"
        onButtonClick={() => onNavigate('contact')}
      />
    </div>
  );
}
