import React from 'react';
import { CTABanner } from '../CTABanner';
import { Target, Eye, TrendingUp, Award } from 'lucide-react';
import aboutBgImage from 'figma:asset/3df7e608e45f441c39bd2b060073b480d0fae211.png';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-white text-black py-24 md:py-32 border-b border-[#EAEAEA] border-dashed relative overflow-hidden">
        {/* Background Image with Very Light Opacity */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.10]"
          style={{
            backgroundImage: `url(${aboutBgImage})`,
            filter: 'grayscale(100%)',
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-inter font-bold text-[48px] md:text-[56px] leading-[1.2] mb-6">
              Born from Search. Built for Gen AI.
            </h1>
            <p className="font-space-mono text-[18px] leading-[1.5] text-[#7A7A7A] max-w-3xl mx-auto">
              Two decades of search expertise, reimagined for the era of generative AI.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-24 bg-white border-b border-[#EAEAEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-space-mono font-bold text-[40px] leading-[1.3] text-black mb-8">The VISIBI Story</h2>
            <div className="space-y-6 font-space-mono text-[18px] leading-[1.5] text-black">
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
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white border-b border-[#EAEAEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="border border-[#EAEAEA] rounded-xl p-8">
              <div className="w-16 h-16 bg-white border border-black rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-black" />
              </div>
              <h2 className="font-space-mono font-bold text-[32px] leading-[1.3] text-black mb-4">Our Mission</h2>
              <p className="font-space-mono text-[16px] leading-[1.5] text-black">
                To ensure every brand has the opportunity to be discovered, understood, and trusted by AI platforms—leveling the playing field in an era where algorithmic citations shape perception and influence purchase decisions.
              </p>
            </div>
            <div className="border border-[#EAEAEA] rounded-xl p-8">
              <div className="w-16 h-16 bg-white border border-black rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-black" />
              </div>
              <h2 className="font-space-mono font-bold text-[32px] leading-[1.3] text-black mb-4">Our Vision</h2>
              <p className="font-space-mono text-[16px] leading-[1.5] text-black">
                A future where AI-powered discovery is transparent, accurate, and accessible—where brands earn visibility through authority and quality, not manipulation or luck.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VISIBI Framework Principles */}
      <section className="py-24 bg-white border-b border-[#EAEAEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-space-mono font-bold text-[40px] leading-[1.3] text-black mb-4">The VISIBI Framework</h2>
            <p className="font-space-mono text-[16px] leading-[1.5] text-black max-w-2xl mx-auto">
              Our methodology is built on three core principles that guide every strategy and recommendation.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white border border-[#EAEAEA] rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-white border border-black rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-black" />
              </div>
              <h3 className="font-space-mono font-bold text-[24px] leading-[1.3] text-black mb-3">Authority First</h3>
              <p className="font-space-mono text-[16px] leading-[1.5] text-black">
                AI platforms cite authoritative sources. We help you build the signals of credibility that earn citations.
              </p>
            </div>
            <div className="bg-white border border-[#EAEAEA] rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-white border border-black rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-black" />
              </div>
              <h3 className="font-space-mono font-bold text-[24px] leading-[1.3] text-black mb-3">Context Matters</h3>
              <p className="font-space-mono text-[16px] leading-[1.5] text-black">
                It's not just about mentions—it's about appearing in the right context with accurate, positive descriptions.
              </p>
            </div>
            <div className="bg-white border border-[#EAEAEA] rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-white border border-black rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-black" />
              </div>
              <h3 className="font-space-mono font-bold text-[24px] leading-[1.3] text-black mb-3">Measurement Drives Growth</h3>
              <p className="font-space-mono text-[16px] leading-[1.5] text-black">
                You can't optimize what you don't measure. We quantify AI visibility and tie it to business outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-24 bg-white border-b border-[#EAEAEA] border-dashed">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-space-mono font-bold text-[40px] leading-[1.3] text-black mb-8 text-center">Built on Deep Expertise</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-[#EAEAEA] rounded-xl p-6">
                <h3 className="font-space-mono font-bold text-[20px] leading-[1.3] text-black mb-3">20+ Years in Search</h3>
                <p className="font-space-mono text-[16px] leading-[1.5] text-black">
                  Enterprise SEO, paid media, and content strategy across B2B and consumer brands.
                </p>
              </div>
              <div className="bg-white border border-[#EAEAEA] rounded-xl p-6">
                <h3 className="font-space-mono font-bold text-[20px] leading-[1.3] text-black mb-3">EMEA Market Experience</h3>
                <p className="font-space-mono text-[16px] leading-[1.5] text-black">
                  Multi-market visibility strategies across Europe, Middle East, and Africa.
                </p>
              </div>
              <div className="bg-white border border-[#EAEAEA] rounded-xl p-6">
                <h3 className="font-space-mono font-bold text-[20px] leading-[1.3] text-black mb-3">AI Research & Development</h3>
                <p className="font-space-mono text-[16px] leading-[1.5] text-black">
                  Proprietary tools and methodologies for tracking and optimizing AI platform visibility.
                </p>
              </div>
              <div className="bg-white border border-[#EAEAEA] rounded-xl p-6">
                <h3 className="font-space-mono font-bold text-[20px] leading-[1.3] text-black mb-3">Cross-Disciplinary Team</h3>
                <p className="font-space-mono text-[16px] leading-[1.5] text-black">
                  SEO specialists, content strategists, data scientists, and AI researchers working together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Let's Build Your AI Visibility Strategy"
        description="Ready to work with a team that combines decades of search expertise with cutting-edge AI optimization?"
        buttonText="Talk to a Specialist"
        onButtonClick={() => onNavigate('contact')}
      />
    </div>
  );
}
