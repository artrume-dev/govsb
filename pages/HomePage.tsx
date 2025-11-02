import React from 'react';
import { Button } from '../ui/button';
import { 
  ArrowRight, 
  Sparkles, 
  BrainCircuit, 
  FileText, 
  Link2, 
  GraduationCap,
  Database,
  Search,
  Users,
  Shield,
  Heart,
  BarChart3,
  Workflow,
  Award,
  LineChart,
  Settings,
  Bot
} from 'lucide-react';
import aiFunnelDiagram from 'figma:asset/9bdefe078c46ed72de7786b6e50938ef26c05ed1.png';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import aiBgImage from 'figma:asset/f7e1504dcfcf4d9d9e376a8efb89089a46d51dbe.png';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const aiEngines = ['ChatGPT', 'Gemini', 'Claude', 'Bing Copilot', 'Perplexity', 'Mistral', 'Grok'];
  
  // CTA Divider Component
  const CTADivider = ({ text, onClick, variant = 'primary' }: { text: string; onClick: () => void; variant?: 'primary' | 'secondary' }) => (
    <div className="py-8 border-b border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Button 
          onClick={onClick}
          variant={variant === 'primary' ? 'default' : 'outline'}
          className={variant === 'primary' 
            ? 'bg-black text-white hover:bg-white hover:text-black border border-black font-inter font-semibold text-[14px] px-6 py-3 rounded-md transition-all'
            : 'bg-transparent text-black border border-black hover:bg-black hover:text-white font-inter font-semibold text-[14px] px-6 py-3 rounded-md transition-all'
          }
        >
          {text}
        </Button>
      </div>
    </div>
  );
  
  const services = [
    {
      icon: BrainCircuit,
      title: 'GEO Consultancy & Implementation',
      description: 'Comprehensive optimisation to enhance your brand\'s visibility in ChatGPT, Gemini, and Bing Copilot. We align structured data, content architecture, and entity signals for accurate Gen AI interpretation and discoverability.'
    },
    {
      icon: FileText,
      title: 'SEO & Content Intelligence',
      description: 'We develop EEAT-driven, NLP-optimised content that establishes topical authority for both keyword and Gen AI-focused strategies. Our expert contributors create content recognised by both humans and Gen AI as reliable and trustworthy.'
    },
    {
      icon: Link2,
      title: 'Authority Context Optimisation (ACO)',
      description: 'We work with PR agencies and internal teams to clarify Gen AI visibility mechanics and manage how your brand is mentioned in Gen AI contexts.',
      bullets: [
        'Align PR narratives with GEO and EEAT principles.',
        'Identify content gaps and outreach opportunities.',
        'Find trusted publishers and influencers.',
        'Build campaigns Gen AI systems recognise as authoritative and contextually relevant.'
      ],
      footer: 'We transform every earned mention into a visibility asset - strengthening your digital reputation with both audiences and Gen AI systems.'
    },
    {
      icon: GraduationCap,
      title: 'GEO Consultancy & Training',
      description: 'Training and enablement for internal teams covering:',
      bullets: [
        'LLM prompt alignment',
        'AIO content structure',
        'Entity optimisation and sentiment tracking'
      ],
      footer: 'Empowering brands to sustain Gen AI-era visibility independently.'
    }
  ];

  const insights = [
    {
      icon: Sparkles,
      title: 'The Rise of Generative Search: Why GEO Is the New SEO',
      description: 'Search is now Gen AI-driven, conversational, and context-aware. Learn why structured data and authority are more important than backlinks - and how to stay discoverable across Gen AI ecosystems such as ChatGPT, Gemini, and Bing Copilot.'
    },
    {
      icon: Settings,
      title: 'How Gen AI Engines Choose What (and Who) to Cite',
      description: 'Why do Gen AI engines reference some brands but ignore others? This article explains Gen AI citation logic, from training data trust signals to clear entity markup.'
    }
  ];

  const faqs = [
    {
      question: 'What is Generative Engine Optimisation (GEO)?',
      answer: 'GEO is the practice of optimising content and digital presence so that Gen AI platforms like ChatGPT, Gemini, and Perplexity accurately discover, interpret, and reference your brand. Unlike traditional SEO, which focuses on ranking in search results, GEO ensures your brand is mentioned and cited within Gen AI-generated responses.'
    },
    {
      question: 'How is GEO different from SEO?',
      answer: 'SEO optimises for search engine rankings and click-through rates. GEO optimises for being mentioned, cited, and correctly represented in conversational Gen AI responses. While SEO remains important, GEO addresses a new discovery layer where users ask Gen AI tools for recommendations instead of browsing search results.'
    },
    {
      question: 'Which Gen AI platforms does VISIBI optimise for?',
      answer: 'We optimise for major generative Gen AI platforms including ChatGPT (OpenAI), Gemini (Google), Claude (Anthropic), Perplexity, and Bing Copilot. Our approach ensures broad Gen AI visibility across the platforms shaping modern discovery and decision-making.'
    },
    {
      question: 'How do you measure Gen AI visibility?',
      answer: 'We track brand mentions, citation frequency, sentiment, and context across Gen AI responses. Our proprietary Gen AI Visibility Scoring™ framework measures how often and how positively your brand appears when users ask relevant questions to Gen AI platforms.'
    },
    {
      question: 'Do I still need SEO if I invest in GEO?',
      answer: 'Yes. SEO and GEO work together. Strong SEO foundations - structured data, authoritative content, and technical excellence - directly support Gen AI discoverability. VISIBI integrates both strategies to maximise visibility across traditional search and Gen AI platforms.'
    },
    {
      question: 'How long does it take to see results?',
      answer: 'Gen AI visibility improvements can begin within 8-12 weeks as structured data, content optimisation, and authority signals take effect. However, sustained visibility requires ongoing optimisation, content development, and monitoring as Gen AI models evolve.'
    },
    {
      question: 'What industries benefit most from GEO?',
      answer: 'Any industry where trust, authority, and discoverability matter. This includes SaaS, professional services, healthcare, finance, education, and e-commerce. If your customers research solutions or ask questions before buying, GEO ensures your brand is part of the conversation.'
    }
  ];

  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <section className="py-24 border-b border-[#EAEAEA] border-dashed relative overflow-hidden">
        {/* Gen AI Circuit Board Background - Greyscale with Very Light Opacity */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.04]"
          style={{
            backgroundImage: `url(${aiBgImage})`,
            filter: 'grayscale(100%)',
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-inter font-bold text-[48px] md:text-[56px] leading-[1.2] text-black mb-6">
              Generative Engine Optimisation (GEO): Visibility That Moves Beyond Search
            </h1>
            <p className="font-space-mono text-[18px] leading-[1.5] text-black mb-8">
              We optimise your brand for the new discovery layer, where platforms like ChatGPT, Gemini, and Perplexity determine which businesses to recommend.
              <br /><br />
              VISIBI ensures your content is visible, accurately interpreted, and positively referenced by Gen AI systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => onNavigate('contact')}
                className="bg-black text-white hover:bg-white hover:text-black border border-black font-inter font-semibold text-[16px] px-8 py-6 h-auto rounded-md transition-all inline-flex items-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                Request My Gen AI Visibility Audit
              </Button>
              <Button 
                onClick={() => onNavigate('geo')}
                variant="outline"
                className="bg-transparent text-black border border-black hover:bg-black hover:text-white font-inter font-semibold text-[16px] px-8 py-6 h-auto rounded-md transition-all inline-flex items-center gap-2"
              >
                Learn How GEO Works
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Gen AI Engines Marquee */}
      <section className="py-16 border-b border-[#EAEAEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-space-mono text-[14px] text-[#7A7A7A] text-center mb-8">
            Visible where decisions start
          </p>
          
          {/* Marquee Container */}
          <div className="relative overflow-hidden">
            <div className="flex gap-4 animate-marquee whitespace-nowrap">
              {/* First set */}
              {aiEngines.map((engine, idx) => (
                <span 
                  key={`a-${idx}`}
                  className="inline-flex items-center gap-2 px-4 py-2 border border-[#EAEAEA] rounded-full font-inter text-[14px] text-black"
                >
                  <Bot className="w-4 h-4" />
                  {engine}
                </span>
              ))}
              {/* Duplicate for seamless scroll */}
              {aiEngines.map((engine, idx) => (
                <span 
                  key={`b-${idx}`}
                  className="inline-flex items-center gap-2 px-4 py-2 border border-[#EAEAEA] rounded-full font-inter text-[14px] text-black"
                >
                  <Bot className="w-4 h-4" />
                  {engine}
                </span>
              ))}
              {/* Triple for extra seamlessness */}
              {aiEngines.map((engine, idx) => (
                <span 
                  key={`c-${idx}`}
                  className="inline-flex items-center gap-2 px-4 py-2 border border-[#EAEAEA] rounded-full font-inter text-[14px] text-black"
                >
                  <Bot className="w-4 h-4" />
                  {engine}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Gen AI Search Revolution */}
      <section className="py-24 border-b border-[#EAEAEA] border-dashed">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-space-mono font-bold text-[40px] leading-[1.3] text-black mb-8">
            The Gen AI Search Revolution
          </h2>
          <div className="font-space-mono text-[18px] leading-[1.5] text-black space-y-6">
            <p>
              Gen AI has changed how customers discover brands. Large Language Models (LLMs) such as ChatGPT, Claude, Bing, Perplexity, and Gemini now serve as research tools, answering questions and influencing trust before customers visit your website.
            </p>
            <p>
              Your visibility now relies on being referenced and regarded as a trusted source, not just being found.
            </p>
            <p>
              VISIBI combines human expertise with Gen AI insights to ensure your brand is accurately represented and frequently cited in generative results.
            </p>
          </div>
        </div>
      </section>

      {/* 4. What GEO Really Means */}
      <section className="py-24 border-b border-[#EAEAEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Text */}
            <div>
              <h2 className="font-space-mono font-bold text-[40px] leading-[1.3] text-black mb-8">
                What GEO Really Means
              </h2>
              <p className="font-space-mono text-[18px] leading-[1.5] text-black mb-6">
                GEO - Generative Engine Optimisation - is the evolution of SEO for the Gen AI Search Era. It ensures Gen AI systems interpret, reference, and recommend your brand with confidence and consistency.
              </p>
              
              <ul className="font-space-mono text-[18px] leading-[1.5] text-black space-y-4 mb-6">
                <li className="flex gap-3">
                  <Database className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span><strong>AIO (AI Optimisation):</strong> Structured, entity-rich data to help LLMs understand your brand.</span>
                </li>
                <li className="flex gap-3">
                  <Search className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span><strong>SEO Intelligence:</strong> EEAT-driven content, technical architecture, and schema excellence.</span>
                </li>
                <li className="flex gap-3">
                  <Users className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span><strong>Human Expertise:</strong> Collaboration with renowned content creators whose writing naturally earns citations and positive sentiment.</span>
                </li>
                <li className="flex gap-3">
                  <Shield className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span><strong>Authority Context Optimisation (ACO):</strong> Guiding PR partners with Gen AI visibility insights to shape how your brand is mentioned and perceived.</span>
                </li>
                <li className="flex gap-3">
                  <Heart className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span><strong>Sentiment Engineering:</strong> Ensuring Gen AI platforms associate your brand with accuracy, trust, and relevance.</span>
                </li>
              </ul>

              <p className="font-space-mono text-[18px] leading-[1.5] text-[#7A7A7A] italic">
                VISIBI connects human creativity with machine interpretation, positioning your brand as a trusted source for Gen AI-generated answers.
              </p>
            </div>

            {/* Right: Gen AI Funnel Diagram */}
            <div className="flex items-center justify-center">
              <div className="w-full flex items-center justify-center">
                <img 
                  src={aiFunnelDiagram} 
                  alt="Gen AI Funnel Diagram showing the relationship between AI, Machine Learning, Deep Learning, Natural Language Processing, and Large Language Models"
                  className="w-full max-w-[500px] h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Divider */}
      <CTADivider text="Learn more about our strategies" onClick={() => onNavigate('how-we-work')} variant="secondary" />

      {/* 5. Core Services */}
      <section className="py-24 border-b border-[#EAEAEA] border-dashed">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white border border-[#EAEAEA] rounded-xl p-6"
                >
                  <div className="mb-4">
                    <IconComponent className="w-10 h-10 text-black" />
                  </div>
                  <h3 className="font-space-mono font-bold text-[28px] leading-[1.3] text-black mb-4">
                    {service.title}
                  </h3>
                <p className="font-space-mono text-[16px] leading-[1.5] text-black mb-4">
                  {service.description}
                </p>
                {service.bullets && (
                  <ul className="font-space-mono text-[16px] leading-[1.5] text-black space-y-2 mb-4">
                    {service.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex gap-2">
                        <span className="flex-shrink-0">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {service.footer && (
                  <p className="font-space-mono text-[16px] leading-[1.5] text-black">
                    {service.footer}
                  </p>
                )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Divider */}
      <CTADivider text="Get in touch" onClick={() => onNavigate('contact')} variant="primary" />

      {/* 6. Why VISIBI */}
      <section className="py-24 border-b border-[#EAEAEA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-space-mono font-bold text-[40px] leading-[1.3] text-black mb-12 text-center">
            Why VISIBI
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <BarChart3 className="w-12 h-12 text-black" />
              </div>
              <h3 className="font-space-mono font-bold text-[24px] leading-[1.3] text-black mb-3">
                Data Meets Depth
              </h3>
              <p className="font-space-mono text-[16px] leading-[1.5] text-black">
                Our recommendations are driven by Gen AI visibility analytics that track mentions, sentiment, and citation authority.
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Workflow className="w-12 h-12 text-black" />
              </div>
              <h3 className="font-space-mono font-bold text-[24px] leading-[1.3] text-black mb-3">
                Human + Machine Harmony
              </h3>
              <p className="font-space-mono text-[16px] leading-[1.5] text-black">
                We collaborate with leading content experts and PR teams to build content ecosystems that Gen AI engines trust.
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Award className="w-12 h-12 text-black" />
              </div>
              <h3 className="font-space-mono font-bold text-[24px] leading-[1.3] text-black mb-3">
                Proven Expertise
              </h3>
              <p className="font-space-mono text-[16px] leading-[1.5] text-black">
                With 20 years of experience in SEO, paid media, and digital strategy, we now drive measurable visibility, perception, and trust in the Gen AI Search era.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Divider */}
      <CTADivider text="Talk to our GEO Experts" onClick={() => onNavigate('contact')} variant="secondary" />

      {/* 7. Featured Insights */}
      <section className="py-24 border-b border-[#EAEAEA] border-dashed">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-space-mono text-[16px] leading-[1.5] text-black mb-12 text-center max-w-3xl mx-auto">
            Discover how Gen AI search is transforming digital visibility and learn practical strategies to maintain your competitive edge.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {insights.map((insight, idx) => {
              const IconComponent = insight.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white border border-[#EAEAEA] rounded-xl p-6"
                >
                  <div className="mb-4">
                    <IconComponent className="w-10 h-10 text-black" />
                  </div>
                  <h3 className="font-space-mono font-bold text-[20px] leading-[1.3] text-black mb-3">
                    {insight.title}
                  </h3>
                <p className="font-space-mono text-[16px] leading-[1.5] text-black mb-4">
                  {insight.description}
                </p>
                <Button 
                  onClick={() => onNavigate('insights')}
                  variant="outline"
                  className="bg-transparent text-black border border-black hover:bg-black hover:text-white font-inter font-semibold text-[14px] rounded-md transition-all inline-flex items-center gap-2"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </Button>
                </div>
              );
            })}
          </div>

          <div className="text-right">
            <Button 
              onClick={() => onNavigate('insights')}
              variant="outline"
              className="bg-transparent text-black border border-black hover:bg-black hover:text-white font-inter font-semibold text-[16px] px-8 py-3 rounded-md transition-all"
            >
              View All Insights
            </Button>
          </div>
        </div>
      </section>

      {/* 8. FAQs */}
      <section className="py-24 border-b border-[#EAEAEA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-space-mono font-bold text-[40px] leading-[1.3] text-black mb-12 text-center">
            GoVisibi FAQs
          </h2>
          
          <Accordion type="multiple" defaultValue={["item-0"]} className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-black">
                <AccordionTrigger className="font-space-mono font-bold text-[18px] text-left text-black hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-space-mono text-[16px] leading-[1.5] text-black pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Divider */}
      <CTADivider text="Learn more about our strategies" onClick={() => onNavigate('how-we-work')} variant="secondary" />

      {/* 9. Final CTA Block */}
      <section className="py-24 border-b border-[#EAEAEA] border-dashed">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-space-mono font-bold text-[40px] leading-[1.3] text-black mb-6">
            Discover how Gen AI platforms describe your brand.
          </h2>
          <p className="font-space-mono text-[16px] leading-[1.5] text-black mb-8">
            Request a free audit to learn how frequently and positively your business appears in Gen AI results.
          </p>
          <Button 
            onClick={() => onNavigate('contact')}
            className="bg-black text-white hover:bg-white hover:text-black border border-black font-inter font-semibold text-[16px] px-8 py-6 h-auto rounded-md transition-all inline-flex items-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            Request My Audit
          </Button>
        </div>
      </section>
    </div>
  );
}
