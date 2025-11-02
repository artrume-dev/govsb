import React from 'react';
import { ServiceCard } from '../ServiceCard';
import { Sparkles, Search, DollarSign, BarChart3 } from 'lucide-react';
import servicesBgImage from 'figma:asset/3df7e608e45f441c39bd2b060073b480d0fae211.png';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-white text-black py-24 md:py-32 border-b border-[#EAEAEA] border-dashed relative overflow-hidden">
        {/* Background Image with Very Light Opacity */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.10]"
          style={{
            backgroundImage: `url(${servicesBgImage})`,
            filter: 'grayscale(100%)',
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-inter font-bold text-[48px] md:text-[56px] leading-[1.2] mb-6">
              End-to-End Visibility Across Search & Gen AI
            </h1>
            <p className="font-space-mono text-[18px] leading-[1.5] text-[#7A7A7A] max-w-3xl mx-auto">
              From Generative Engine Optimization to traditional search and paid media, we deliver comprehensive solutions that drive discovery, trust, and growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ServiceCard
              icon={Sparkles}
              title="Generative Engine Optimization (GEO)"
              description="Optimize your brand's visibility, citations, and perception across ChatGPT, Gemini, Perplexity, and other Gen AI platforms. Get discovered when it matters most."
              onLearnMore={() => onNavigate('geo')}
            />
            <ServiceCard
              icon={Search}
              title="SEO & Content Strategy"
              description="Build the authoritative content foundation that feeds both traditional search rankings and Gen AI visibility. Technical SEO, content optimization, and link building."
              onLearnMore={() => onNavigate('seo')}
            />
            <ServiceCard
              icon={DollarSign}
              title="Paid Media & PPC"
              description="Amplify your reach with performance-driven campaigns across Google Ads, LinkedIn, and social platforms. Drive awareness and conversions at scale."
              onLearnMore={() => onNavigate('ppc')}
            />
            <ServiceCard
              icon={BarChart3}
              title="VISIBI Visibility Tool"
              description="Track and measure your brand's presence across Gen AI platforms. Monitor mentions, citations, sentiment, and competitive share with real-time dashboards."
              onLearnMore={() => onNavigate('tool')}
            />
          </div>
        </div>
      </section>

      {/* Why Integrated Approach */}
      <section className="py-24 bg-[#F7F8FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-inter mb-6">The Power of an Integrated Approach</h2>
            <p className="font-space-mono text-[#7A869A] mb-8">
              Gen AI visibility doesn't exist in isolation. The most effective strategies combine GEO with traditional SEO, content marketing, and paid amplification to create a comprehensive presence that dominates both human and Gen AI-powered discovery.
            </p>
            <p className="font-space-mono text-[#7A869A]">
              VISIBI orchestrates all these channels to work together, ensuring your brand appears consistently and authoritatively wherever your customers search—whether that's Google, ChatGPT, Perplexity, or any other platform.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
