import React from 'react';
import { FAQSection } from '../FAQSection';
import { CTABanner } from '../CTABanner';
import { Heart, Brain, Target, Users, TrendingUp, Shield, Lightbulb } from 'lucide-react';
import howWeWorkBgImage from 'figma:asset/3df7e608e45f441c39bd2b060073b480d0fae211.png';

interface HowWeWorkPageProps {
  onNavigate: (page: string) => void;
}

export function HowWeWorkPage({ onNavigate }: HowWeWorkPageProps) {
  const attributes = [
    {
      icon: Brain,
      title: "Curious & Analytical",
      description: "We question assumptions, test hypotheses, and base recommendations on data—not trends or guesses."
    },
    {
      icon: Heart,
      title: "Radically Transparent",
      description: "Full visibility into methods, performance, and challenges. No black boxes, no BS."
    },
    {
      icon: Target,
      title: "Results-Obsessed",
      description: "We optimize for business outcomes, not vanity metrics. Every action ties to revenue impact."
    },
    {
      icon: Users,
      title: "Partnership-Oriented",
      description: "We're an extension of your team—collaborative, responsive, and invested in your success."
    },
    {
      icon: TrendingUp,
      title: "Continuous Learners",
      description: "AI platforms evolve daily. We stay ahead through constant research, testing, and adaptation."
    },
    {
      icon: Shield,
      title: "Ethical & Sustainable",
      description: "We use only white-hat tactics that build long-term authority, never shortcuts that risk penalties."
    },
    {
      icon: Lightbulb,
      title: "Strategic Thinkers",
      description: "We see the big picture and connect visibility strategies to broader business goals."
    }
  ];

  const faqs = [
    {
      question: "What's your typical engagement model?",
      answer: "We offer both project-based engagements (audits, strategy development) and ongoing retainers for implementation and optimization. Most clients start with a discovery phase, then move to 6-12 month retainers as we execute and refine strategies together."
    },
    {
      question: "How hands-on is your team?",
      answer: "Very. We don't just deliver recommendations and disappear. We actively implement, monitor, optimize, and collaborate with your team throughout the engagement. You'll have direct access to strategists, not account managers reading from scripts."
    },
    {
      question: "Do you work with agencies or only direct clients?",
      answer: "We work with both. For agencies, we offer white-label GEO services and expert consultation. For direct clients, we can integrate with existing agency partners or serve as your full visibility team."
    },
    {
      question: "What size companies do you typically work with?",
      answer: "We work primarily with mid-market to enterprise B2B companies and ambitious growth-stage startups. If you're serious about AI visibility and have meaningful budget to invest in strategic advantage, we're a fit."
    },
    {
      question: "How do you handle confidentiality and competitive conflicts?",
      answer: "All client work is covered by NDAs. We don't work with direct competitors simultaneously in the same vertical. Your strategies, data, and insights remain confidential."
    },
    {
      question: "What do you need from us to be successful?",
      answer: "Access to your website, analytics, and existing marketing assets. Collaboration from your content and technical teams. Executive alignment on goals and KPIs. And a willingness to invest in long-term visibility rather than expecting overnight miracles."
    },
    {
      question: "How do you charge for services?",
      answer: "Pricing varies based on scope, complexity, and business size. We offer custom proposals after initial consultation. Generally: audits start at $5k, ongoing GEO retainers start at $8k/month, and comprehensive programs (GEO + SEO + PPC) start at $15k/month."
    },
    {
      question: "Do you guarantee specific results?",
      answer: "We don't guarantee rankings or specific mention counts because AI algorithms are proprietary and constantly changing. However, we do guarantee strategic rigor, transparent reporting, and continuous optimization based on performance data."
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
            backgroundImage: `url(${howWeWorkBgImage})`,
            filter: 'grayscale(100%)',
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-inter font-bold text-[48px] md:text-[56px] leading-[1.2] mb-6">
              Strategy, Transparency & Trust
            </h1>
            <p className="font-space-mono text-[18px] leading-[1.5] text-[#7A7A7A] max-w-3xl mx-auto">
              How we partner with brands to build lasting Gen AI visibility through data-driven strategy, ethical tactics, and relentless optimization.
            </p>
          </div>
        </div>
      </section>

      {/* Hiring Attributes */}
      <section className="py-24 bg-white border-b border-[#EAEAEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-space-mono font-bold text-[40px] leading-[1.3] text-black mb-4">What We Value (And Hire For)</h2>
            <p className="font-space-mono text-[16px] leading-[1.5] text-black max-w-2xl mx-auto">
              These attributes define how we work, make decisions, and partner with clients.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attributes.map((attr, index) => (
              <div key={index} className="bg-white border border-[#EAEAEA] rounded-xl p-8">
                <div className="w-12 h-12 bg-white border border-black rounded-xl flex items-center justify-center mb-6">
                  <attr.icon className="w-6 h-6 text-black" />
                </div>
                <h3 className="font-space-mono font-bold text-[20px] leading-[1.3] text-black mb-3">{attr.title}</h3>
                <p className="font-space-mono text-[16px] leading-[1.5] text-black">{attr.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 bg-white border-b border-[#EAEAEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-space-mono font-bold text-[40px] leading-[1.3] text-black mb-4">Our Client Process</h2>
            <p className="font-space-mono text-[16px] leading-[1.5] text-black max-w-2xl mx-auto">
              From first conversation to ongoing optimization—here's what working with VISIBI looks like.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                phase: "Discovery",
                description: "Initial consultation to understand your business, competitive landscape, current visibility, and strategic goals. We determine if there's a good fit and outline potential approach."
              },
              {
                phase: "Audit & Analysis",
                description: "Comprehensive assessment of your current AI visibility, content authority, technical infrastructure, and competitive positioning. We identify quick wins and long-term opportunities."
              },
              {
                phase: "Strategy Development",
                description: "Custom roadmap with prioritized tactics, timeline, resource requirements, and expected outcomes. Clear KPIs tied to business impact."
              },
              {
                phase: "Kickoff & Alignment",
                description: "Team introductions, tool access setup, stakeholder alignment on goals and communication cadence. We establish success criteria and reporting frameworks."
              },
              {
                phase: "Implementation",
                description: "Execute the strategy—content optimization, technical improvements, authority building, and ongoing monitoring. Weekly check-ins and progress updates."
              },
              {
                phase: "Measurement & Optimization",
                description: "Track performance against KPIs, identify what's working, double down on winners, and adjust tactics that underperform. Monthly strategic reviews."
              },
              {
                phase: "Continuous Improvement",
                description: "As AI platforms evolve and your business grows, we adapt strategies, test new opportunities, and maintain your competitive advantage."
              }
            ].map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-inter font-semibold text-[16px]">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1 bg-white border border-[#EAEAEA] rounded-xl p-6">
                  <h3 className="font-space-mono font-bold text-[20px] leading-[1.3] text-black mb-2">{step.phase}</h3>
                  <p className="font-space-mono text-[16px] leading-[1.5] text-black">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ethics */}
      <section className="py-24 bg-white border-b border-[#EAEAEA] border-dashed">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-space-mono font-bold text-[40px] leading-[1.3] text-black mb-8 text-center">Our Ethical Commitments</h2>
            <div className="space-y-6">
              <div className="bg-white border border-[#EAEAEA] rounded-xl p-8">
                <h3 className="font-space-mono font-bold text-[20px] leading-[1.3] text-black mb-3">White-Hat Only</h3>
                <p className="font-space-mono text-[16px] leading-[1.5] text-black">
                  We never use manipulative tactics, spam, or black-hat techniques that could damage your brand reputation or result in penalties. Every strategy is built for sustainable, long-term success.
                </p>
              </div>
              <div className="bg-white border border-[#EAEAEA] rounded-xl p-8">
                <h3 className="font-space-mono font-bold text-[20px] leading-[1.3] text-black mb-3">Accurate Information</h3>
                <p className="font-space-mono text-[16px] leading-[1.5] text-black">
                  We optimize for truthful representation of your brand. We don't fabricate credentials, exaggerate capabilities, or mislead AI platforms about what your company offers.
                </p>
              </div>
              <div className="bg-white border border-[#EAEAEA] rounded-xl p-8">
                <h3 className="font-space-mono font-bold text-[20px] leading-[1.3] text-black mb-3">Platform Respect</h3>
                <p className="font-space-mono text-[16px] leading-[1.5] text-black">
                  We work within AI platform guidelines and terms of service. As platforms publish formal GEO standards, we'll adapt practices to align with their preferences.
                </p>
              </div>
              <div className="bg-white border border-[#EAEAEA] rounded-xl p-8">
                <h3 className="font-space-mono font-bold text-[20px] leading-[1.3] text-black mb-3">Transparent Reporting</h3>
                <p className="font-space-mono text-[16px] leading-[1.5] text-black">
                  We report both successes and challenges. If something isn't working, we tell you immediately and adjust course. No hiding behind jargon or inflated metrics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={faqs} />

      {/* CTA */}
      <CTABanner
        title="Ready to Work Together?"
        description="Let's discuss your AI visibility goals and explore whether VISIBI is the right partner for your brand."
        buttonText="Start a Conversation"
        onButtonClick={() => onNavigate('contact')}
      />
    </div>
  );
}
