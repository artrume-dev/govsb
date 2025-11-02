import React from 'react';
import { Button } from '../ui/button';
import { FAQSection } from '../FAQSection';
import { CTABanner } from '../CTABanner';
import { Eye, MessageSquare, Heart, TrendingUp, Users, Download, Zap, ArrowRight, BarChart3, Sparkles } from 'lucide-react';
import toolBgImage from 'figma:asset/3df7e608e45f441c39bd2b060073b480d0fae211.png';

interface ToolPageProps {
  onNavigate: (page: string) => void;
}

export function ToolPage({ onNavigate }: ToolPageProps) {
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
  ];

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
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-white text-black py-24 md:py-32 border-b border-[#EAEAEA] border-dashed relative overflow-hidden">
        {/* Background Image with Very Light Opacity */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.10]"
          style={{
            backgroundImage: `url(${toolBgImage})`,
            filter: 'grayscale(100%)',
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-inter font-bold text-[48px] md:text-[56px] leading-[1.2] mb-6">
              See How Gen AI Talks About Your Brand
            </h1>
            <p className="font-space-mono text-[18px] leading-[1.5] text-[#7A7A7A] mb-10 max-w-3xl mx-auto">
              Track mentions, citations, sentiment, and competitive positioning across ChatGPT, Gemini, Perplexity, and other Gen AI platforms.
            </p>
            <Button 
              onClick={() => onNavigate('contact')}
              className="bg-white text-black hover:bg-black hover:text-white border border-black rounded-md px-8 py-6 h-auto font-inter font-semibold text-[16px] inline-flex items-center gap-2 transition-all"
            >
              <Sparkles className="w-5 h-5" />
              Request Early Access
            </Button>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 bg-white border-b border-[#EAEAEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-space-mono font-bold text-[40px] leading-[1.3] text-black mb-4">Comprehensive AI Visibility Intelligence</h2>
            <p className="font-space-mono text-[16px] leading-[1.5] text-black max-w-2xl mx-auto">
              Everything you need to measure, monitor, and improve your brand's presence in the AI era.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white border border-[#EAEAEA] rounded-xl p-8 hover:border-black transition-all duration-300">
                <div className="w-12 h-12 bg-white border border-black rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-black" />
                </div>
                <h3 className="font-space-mono font-bold text-[20px] leading-[1.3] text-black mb-3">{feature.title}</h3>
                <p className="font-space-mono text-[16px] leading-[1.5] text-black">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-24 bg-white border-b border-[#EAEAEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-space-mono font-bold text-[40px] leading-[1.3] text-black mb-6 text-center">Why AI Visibility Tracking Matters</h2>
            <div className="space-y-6">
              <div className="bg-white border border-[#EAEAEA] rounded-xl p-8">
                <h3 className="font-space-mono font-bold text-[20px] leading-[1.3] text-black mb-3">You Can't Optimize What You Don't Measure</h3>
                <p className="font-space-mono text-[16px] leading-[1.5] text-black">
                  Traditional analytics show website traffic after users discover you. AI visibility tracking reveals how users discover you in the first place—the critical awareness stage that determines whether prospects ever reach your website.
                </p>
              </div>
              <div className="bg-white border border-[#EAEAEA] rounded-xl p-8">
                <h3 className="font-space-mono font-bold text-[20px] leading-[1.3] text-black mb-3">Competitive Intelligence</h3>
                <p className="font-space-mono text-[16px] leading-[1.5] text-black">
                  See exactly how your visibility compares to competitors. Identify which brands dominate AI mentions in your category and understand the specific contexts where they're being cited instead of you.
                </p>
              </div>
              <div className="bg-white border border-[#EAEAEA] rounded-xl p-8">
                <h3 className="font-space-mono font-bold text-[20px] leading-[1.3] text-black mb-3">Prove ROI of GEO Investments</h3>
                <p className="font-space-mono text-[16px] leading-[1.5] text-black">
                  Demonstrate the impact of GEO efforts with quantitative data. Track mention growth, sentiment improvements, and citation quality over time to show stakeholders the value of AI visibility optimization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-24 bg-white border-b border-[#EAEAEA] border-dashed">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-space-mono font-bold text-[40px] leading-[1.3] text-black mb-4">Powerful Insights, Intuitive Interface</h2>
            <p className="font-space-mono text-[16px] leading-[1.5] text-black max-w-2xl mx-auto">
              Access all your AI visibility data through clean, actionable dashboards designed for both tactical optimization and executive reporting.
            </p>
          </div>
          <div className="bg-white border border-[#EAEAEA] rounded-xl p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <BarChart3 className="w-32 h-32 text-black mx-auto mb-6" />
              <p className="font-space-mono text-[16px] leading-[1.5] text-black">
                Interactive dashboards showing real-time AI visibility metrics, historical trends, competitive benchmarks, and actionable recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={faqs} />

      {/* CTA */}
      <CTABanner
        title="Request Early Access to the VISIBI Tool"
        description="See exactly how AI platforms currently describe your brand and get visibility insights your competitors don't have."
        buttonText="Request Access"
        onButtonClick={() => onNavigate('contact')}
      />
    </div>
  );
}
