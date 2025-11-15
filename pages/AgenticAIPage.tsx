import React from 'react';
import { Button } from '../ui/button';
import { FAQSection } from '../FAQSection';
import { CTABanner } from '../CTABanner';
import { Bot, Workflow, Zap, Database, Users, TrendingUp, CheckCircle2, Sparkles, Code, Shield, GitBranch } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface AgenticAIPageProps {
  onNavigate: (page: string) => void;
}

export function AgenticAIPage({ onNavigate }: AgenticAIPageProps) {
  const benefitItems = [
    {
      icon: Workflow,
      title: "Automate complex workflows",
      description: "Handle multi-step processes that previously needed human coordination."
    },
    {
      icon: TrendingUp,
      title: "Reduce operational overhead",
      description: "Remove repetitive manual work, reduce errors and free teams for higher-value tasks."
    },
    {
      icon: Zap,
      title: "Improve responsiveness",
      description: "Deliver faster decisions, instant support and real-time actions across systems."
    },
    {
      icon: Database,
      title: "Unlock value from existing data",
      description: "Let agents query, summarise and act on your internal data in natural language."
    },
    {
      icon: Users,
      title: "Scale operations 24/7",
      description: "Run processes continuously without additional headcount."
    },
    {
      icon: CheckCircle2,
      title: "Competitive advantage",
      description: "Agentic AI is not 'nice to have'. It's becoming a competitive advantage."
    }
  ];

  const prototypeCards = [
    {
      title: "Live prototypes",
      description: "You see your agent working with your data, processes and tools — not generic demo videos."
    },
    {
      title: "Agent templates",
      description: "Reusable patterns for support, operations, content, sales and insight agents tailored to your context."
    },
    {
      title: "Transparent engineering",
      description: "Clear architecture, behaviours and guardrails — no black boxes, no mystery."
    },
    {
      title: "You own everything",
      description: "You retain ownership of the code, workflows and architecture. No vendor lock-in."
    }
  ];

  const agentTypes = [
    {
      icon: Users,
      title: "Customer Support Agents",
      description: "Handle routine queries, escalate intelligently and provide consistent, always-on support."
    },
    {
      icon: Database,
      title: "Internal Knowledge (RAG) Agents",
      description: "Deliver instant, grounded answers from documentation, knowledge bases and internal systems."
    },
    {
      icon: Workflow,
      title: "Operations & Workflow Agents",
      description: "Automate document processing, onboarding, approvals, reporting and back-office workflows."
    },
    {
      icon: Bot,
      title: "Content & SEO/GEO Agents",
      description: "Analyse, generate and optimise content across search engines and generative platforms."
    },
    {
      icon: TrendingUp,
      title: "Sales & Lead Qualification Agents",
      description: "Qualify leads, summarise interactions, update your CRM and route opportunities to the right team."
    },
    {
      icon: Database,
      title: "Data & Insight Agents",
      description: "Query your internal data using natural language and receive accurate, contextual insights."
    }
  ];

  const processSteps = [
    {
      title: "Discovery & Workflow Mapping",
      description: "We identify high-value processes and define success metrics for your agents."
    },
    {
      title: "Data Audit & Architecture",
      description: "We assess data readiness, structure access, and design how agents will interact with your systems."
    },
    {
      title: "Rapid Prototyping (0–7 Days)",
      description: "We build a working agent specific to one of your workflows to validate value and feasibility."
    },
    {
      title: "Development & Integration",
      description: "We refine behaviours, add tools and connectors, and embed guardrails to ensure safe operation."
    },
    {
      title: "Evaluation & Refinement",
      description: "We test for reliability, accuracy, safety and user experience across real-world scenarios."
    },
    {
      title: "Deployment & Scaling",
      description: "We deploy agents into production workflows and monitor performance for continuous optimisation."
    }
  ];

  const technologies = [
    "LangGraph",
    "CrewAI",
    "LlamaIndex",
    "AutoGen",
    "OpenAI (GPT)",
    "Claude",
    "Google Gemini",
    "AWS Bedrock",
    "Vector databases",
    "RAG pipelines",
    "Tool-based AI",
    "Secure API integrations",
    "MCP Server Engineering",
    "Custom multi-agent orchestrators"
  ];

  const faqs = [
    {
      question: "What is the difference between traditional AI and Agentic AI?",
      answer: "Traditional AI responds to specific prompts or questions with individual answers. Agentic AI can autonomously plan, make decisions, use multiple tools, and complete complex multi-step tasks without constant human guidance. Think of it as the difference between asking a question and hiring an assistant who can handle entire projects."
    },
    {
      question: "How long does it take to develop a custom AI agent?",
      answer: "Development timelines vary based on complexity and integration requirements. A basic agent with limited capabilities might take 4-6 weeks, while more sophisticated agents with multiple integrations and advanced decision-making capabilities typically require 8-16 weeks. We'll provide a detailed timeline during the discovery phase."
    },
    {
      question: "Can AI agents integrate with our existing systems?",
      answer: "Yes, absolutely. AI agents can integrate with virtually any system that has an API or programmatic interface. This includes CRMs, databases, help desk software, communication platforms, and custom internal tools. We handle all integration work to ensure seamless connectivity."
    },
    {
      question: "How much does an AI agent cost?",
      answer: "Costs depend on the complexity of the agent, required integrations, and ongoing operational requirements. Development typically ranges from $25,000 to $150,000+ for custom solutions. We also offer template-based agents starting at lower price points. Contact us for a detailed quote based on your specific needs."
    },
    {
      question: "What kind of tasks can AI agents handle?",
      answer: "AI agents excel at tasks that involve information processing, decision-making, and system interactions. Common applications include customer service, data analysis, content creation, research, appointment scheduling, lead qualification, document processing, and IT operations. If a task follows logical patterns and can be clearly defined, it's likely a good candidate for an AI agent."
    },
    {
      question: "Are AI agents reliable and safe?",
      answer: "When properly designed and implemented, AI agents are highly reliable. We build extensive safety measures including human oversight options, action verification, rate limiting, and comprehensive logging. Agents are thoroughly tested in controlled environments before deployment, and we implement monitoring systems to ensure ongoing performance and safety."
    },
    {
      question: "Do we need technical expertise to manage AI agents?",
      answer: "No, you don't need technical expertise. We design our agents with user-friendly interfaces and provide comprehensive training for your team. We can also provide ongoing management and monitoring services if you prefer a fully managed solution."
    },
    {
      question: "Can agents learn and improve over time?",
      answer: "Yes, agents can be designed to learn from interactions and feedback. This includes fine-tuning responses based on user feedback, optimizing decision-making processes, and adapting to new scenarios. We implement appropriate learning mechanisms based on your specific use case and compliance requirements."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-24 md:py-32 border-b border-[#EAEAEA] border-dashed relative overflow-hidden">
        {/* Background Image with Very Light Opacity */}
        <div 
          className="absolute inset-0 opacity-[0.08]"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&q=80"
            alt="Neural network background"
            className="w-full h-full object-cover"
            style={{
              filter: 'grayscale(100%)',
            }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-inter font-bold text-[48px] md:text-[56px] leading-[1.2] text-black mb-6">
              Agentic AI Development
            </h1>
            <p className="font-space-mono text-[20px] leading-[1.5] text-black mb-4 max-w-3xl mx-auto">
              Build intelligent AI agents that automate workflows, make decisions, and scale your operations.
            </p>
            <p className="font-space-mono text-[18px] leading-[1.5] text-[#7A7A7A] mb-8 max-w-3xl mx-auto">
              We design, develop and deploy agentic AI systems that work across your data, tools and processes — built safely, transparently and fully aligned with your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => onNavigate('contact')}
                className="bg-black text-white hover:bg-white hover:text-black border border-black rounded-md px-8 py-6 h-auto font-inter font-semibold text-[16px] inline-flex items-center justify-center gap-2 transition-all"
              >
                <Sparkles className="w-5 h-5" />
                Book a Discovery Call
              </Button>
              <Button 
                onClick={() => onNavigate('contact')}
                variant="outline"
                className="bg-white text-black hover:bg-black hover:text-white border border-black rounded-md px-8 py-6 h-auto font-inter font-semibold text-[16px] inline-flex items-center justify-center gap-2 transition-all"
              >
                Talk to an AI Consultant
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 border-b border-[#EAEAEA] border-dashed">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-space-mono font-bold text-[40px] leading-[1.3] text-black mb-6 text-center">
              Intelligent AI agents built for real business impact
            </h2>
            <div className="space-y-6 font-space-mono text-[16px] leading-[1.5] text-black">
              <p>
                Agentic AI represents the next wave of automation. Unlike traditional chatbots or scripts, agents can understand context, take action, execute multi-step tasks, and work autonomously inside your workflows.
              </p>
              <p>
                At Govisibi, we help organisations move from AI experimentation to working, production-ready agentic systems — designed using the same principles we apply across our GEO, SEO and PPC consulting: precision, clarity, and measurable results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Agentic AI Now */}
      <section className="py-24 border-b border-[#EAEAEA] border-dashed">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-space-mono font-bold text-[40px] leading-[1.3] text-black mb-4">
              Why businesses are investing in agentic AI now
            </h2>
            <p className="font-space-mono text-[16px] leading-[1.5] text-black max-w-3xl mx-auto">
              Agentic AI allows organisations to go beyond simple automation and unlock new operational capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefitItems.map((item, index) => (
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

      {/* Prototypes Instead of Case Studies */}
      <section className="py-24 border-b border-[#EAEAEA] border-dashed">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-space-mono font-bold text-[40px] leading-[1.3] text-black mb-4">
              We focus on prototypes, not portfolios
            </h2>
            <p className="font-space-mono text-[16px] leading-[1.5] text-black max-w-3xl mx-auto">
              Agentic AI is a rapidly evolving field — and legacy case studies rarely reflect current capabilities. Instead of showcasing outdated examples, we show you working systems built around your world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {prototypeCards.map((card, index) => (
              <div key={index} className="border border-[#EAEAEA] rounded-xl p-8">
                <h3 className="font-space-mono font-bold text-[24px] leading-[1.3] text-black mb-4">{card.title}</h3>
                <p className="font-space-mono text-[16px] leading-[1.5] text-black">{card.description}</p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <p className="font-space-mono font-bold text-[24px] md:text-[28px] leading-[1.4] text-black border-l-4 border-black pl-6 py-4">
              You're not hiring us for what we built last year — you're hiring us for the agent we build for you next.
            </p>
          </div>
        </div>
      </section>

      {/* What We Build (Agent Types) */}
      <section className="py-24 border-b border-[#EAEAEA] border-dashed">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-space-mono font-bold text-[40px] leading-[1.3] text-black mb-4">
              Agentic systems tailored to your needs
            </h2>
            <p className="font-space-mono text-[16px] leading-[1.5] text-black max-w-3xl mx-auto">
              We design agents around your specific workflows, data and systems — not generic one-size-fits-all bots.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agentTypes.map((agent, index) => (
              <div key={index} className="border border-[#EAEAEA] rounded-xl p-8">
                <div className="w-12 h-12 border border-black rounded-xl flex items-center justify-center mb-6">
                  <agent.icon className="w-6 h-6 text-black" />
                </div>
                <h3 className="font-space-mono font-bold text-[20px] leading-[1.3] text-black mb-3">{agent.title}</h3>
                <p className="font-space-mono text-[16px] leading-[1.5] text-black">{agent.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 border-b border-[#EAEAEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-space-mono font-bold text-[40px] leading-[1.3] text-black mb-4">
              How we design and deploy agentic AI
            </h2>
            <p className="font-space-mono text-[16px] leading-[1.5] text-black max-w-3xl mx-auto">
              We use a structured, transparent framework that aligns technical decisions with clear business outcomes.
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

      {/* Technology We Use */}
      <section className="py-24 border-b border-[#EAEAEA] border-dashed">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-space-mono font-bold text-[40px] leading-[1.3] text-black mb-4">
              Modern agentic AI, built with leading frameworks
            </h2>
            <p className="font-space-mono text-[16px] leading-[1.5] text-black max-w-3xl mx-auto">
              We work across a range of agentic and generative AI technologies to design the right solution for your environment.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
            {technologies.map((tech, index) => (
              <div key={index} className="border border-[#EAEAEA] rounded-xl p-6 text-center flex items-center justify-center">
                <p className="font-space-mono font-bold text-[14px] text-black">{tech}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="font-space-mono text-[16px] leading-[1.5] text-black max-w-3xl mx-auto">
              You get fully transparent documentation, code, architecture and ownership of everything we build.
            </p>
          </div>
        </div>
      </section>

      {/* Why Govisibi */}
      <section className="py-24 border-b border-[#EAEAEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-space-mono font-bold text-[40px] leading-[1.3] text-black mb-12 text-center">
              Why Govisibi
            </h2>
            
            <div className="space-y-6 font-space-mono text-[16px] leading-[1.5] text-black">
              <p>
                Govisibi is built on precision. Our consulting roots are in GEO, SEO and PPC — disciplines that demand rigorous analysis, structured thinking and measurable outcomes.
              </p>
              <p>
                We bring the same discipline to agentic AI development: clear scoping, transparent architecture, and a relentless focus on business impact rather than technology for its own sake.
              </p>
              <p>
                We combine strong AI technical architecture, deep understanding of user behaviour, expertise in search, optimisation and automation, and a consultative approach focused on clarity and business alignment.
              </p>
              <p>
                Agentic AI is the natural extension of our mission: helping organisations achieve visibility, efficiency and intelligence across their digital ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} />

      {/* Final CTA */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-space-mono font-bold text-[40px] leading-[1.3] text-white mb-6">
              Book an Agentic AI Discovery Call
            </h2>
            <p className="font-space-mono text-[18px] leading-[1.5] text-white/80 mb-8 max-w-3xl mx-auto">
              If you're exploring how AI agents could automate workflows, augment teams or unlock value from your existing data, we can help you move from idea to working prototype.
            </p>
            <div className="flex flex-col items-center gap-6">
              <Button 
                onClick={() => onNavigate('contact')}
                className="bg-white text-black hover:bg-transparent hover:text-white border border-white rounded-md px-8 py-6 h-auto font-inter font-semibold text-[16px] inline-flex items-center gap-2 transition-all"
              >
                <Sparkles className="w-5 h-5" />
                Book a Discovery Call
              </Button>
              <p className="font-space-mono text-[14px] text-white/70">
                Prefer to start with a question? Email us at <a href="mailto:hello@govisibi.com" className="underline hover:text-white transition-colors">hello@govisibi.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
