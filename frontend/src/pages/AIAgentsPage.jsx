import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Bot, Workflow, Zap, Database, Users, TrendingUp, CheckCircle2, Sparkles, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Navigation from '@/components/Navigation'

export default function AIAgentsPage() {
  useEffect(() => {
    document.documentElement.classList.remove('dark')
  }, [])

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
  ]

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
  ]

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
  ]

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
  ]

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
  ]

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
    },
    {
      question: "What happens if an agent makes a mistake?",
      answer: "We implement multiple safeguards to prevent errors, including verification steps, confidence thresholds, and human-in-the-loop options for critical decisions. All agent actions are logged for review. If an error occurs, we analyze it, implement corrections, and update the agent to prevent similar issues in the future."
    },
    {
      question: "How do you ensure data privacy and security?",
      answer: "Data privacy and security are fundamental to our approach. We implement encryption for data in transit and at rest, follow industry best practices for authentication and authorization, comply with relevant regulations (GDPR, CCPA, etc.), and can deploy agents in your own infrastructure if required. We'll work with your security team to ensure all requirements are met."
    },
    {
      question: "Can we start with a pilot project?",
      answer: "Absolutely! We recommend starting with a pilot project to validate the approach and demonstrate value. A pilot typically focuses on a specific use case with clear metrics for success. This allows you to see results quickly and make an informed decision about broader deployment."
    },
    {
      question: "What ongoing support do you provide?",
      answer: "We offer various support options including monitoring and maintenance, performance optimization, capability expansion, technical support, and training. Support packages can be customized based on your needs, from basic monitoring to fully managed services where we handle all aspects of agent operations."
    }
  ]

  const [openFaqIndex, setOpenFaqIndex] = useState(0)

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
  }

  return (
    <div className="min-h-screen relative line-pattern">
      <Helmet>
        <title>Agentic AI Development - Custom Intelligent Automation | VISIBI</title>
        <meta name="description" content="Build intelligent AI agents that automate workflows, make decisions, and scale your operations. We design, develop and deploy agentic AI systems built safely and transparently." />
        <meta name="keywords" content="agentic AI, AI agents, intelligent automation, custom AI development, workflow automation, AI integration, autonomous agents" />
        <link rel="canonical" href="https://visibi.com/ai-agents" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://visibi.com/ai-agents" />
        <meta property="og:title" content="Agentic AI Development | VISIBI" />
        <meta property="og:description" content="Intelligent AI agents that automate workflows, make decisions, and scale operations." />
        <meta property="og:site_name" content="VISIBI" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Agentic AI Development | VISIBI" />
        <meta name="twitter:description" content="Build intelligent AI agents that automate complex workflows and make autonomous decisions." />
      </Helmet>

      <div className="absolute inset-0 -z-10 h-full w-full bg-slate-300/60 bg-[linear-gradient(to_right,#1d4ed80A_1px,transparent_1px),linear-gradient(to_bottom,#1d4ed80A_1px,transparent_1px)] bg-[size:128px_104px]"></div>

      <Navigation currentPage="ai-agents" />

      {/* Hero */}
      <section className="max-w-[90%] mx-auto items-center lg:px-[5rem] mb-0 mt-12 relative bg-[#FAFAFB] border border-b-0 border-slate-300 rounded-xl rounded-bl-none rounded-br-none shadow-sm shadow-blue-200 overflow-hidden">
        {/* Graph paper style background with gradient fade at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-64 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[length:14px_14px]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFB] via-white/40 to-[#FAFAFB]"></div>
        </div>

        <div className="lg:block h-full w-full">
          <div className="relative z-10 py-16 border-l border-r border-slate-200">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center px-16">
              {/* Left Column - 60% (3 out of 5 columns) */}
              <div className="lg:col-span-3 space-y-4 text-left">
                <h1 className="font-open-sans text-3xl md:text-6xl font-semibold tracking-tight text-slate-950 md:leading-[1.15]">
                  Agentic AI Development
                </h1>
                <h2 className="font-open-sans text-2xl md:text-3xl font-thin block md:leading-[1.4] pb-2">
                  Build intelligent AI agents that automate workflows, make decisions, and scale your operations. 
                  
                </h2>

                <h3 className="text-xl md:text-xl font-thin md:leading-[1.7] b  pb-8">We design, develop and deploy agentic AI systems that work across your data, tools and processes, built safely, transparently and fully aligned with your business goals.</h3>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact">
                    <Button className="inline-flex items-center px-6 py-3 bg-blue-700 text-white rounded-full font-medium hover:bg-blue-800 transition-colors">
                      <Sparkles className="w-5 h-5 mr-2" />
                      Book a Discovery Call
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline" className="inline-flex items-center px-6 py-3 bg-white text-slate-950 border-2 border-slate-950 rounded-full font-medium hover:bg-slate-950 hover:text-white transition-colors">
                      Talk to an AI Consultant
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right Column - 40% (2 out of 5 columns) */}
              <div className="lg:col-span-2 flex items-center justify-center">
                <style>{`
                  @keyframes subtleBounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                  }
                  .animate-subtle-bounce {
                    animation: subtleBounce 4s ease-in-out infinite;
                  }
                `}</style>
                <img
                  src="/vi/visibi-ai-agents.png"
                  alt="AI agent development and automation illustration"
                  className="w-full h-auto max-w-md animate-subtle-bounce"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-[90%] mx-auto px-12 py-12 relative z-10 bg-white rounded-xl rounded-tl-none rounded-tr-none rounded-bl-none rounded-br-none border-t border-r border-l border-slate-300 mb-2">
        <div className="lg:block absolute h-full w-0 md:w-20 bg-slate-200/20 border-0 md:border-r md:border-t-0 md:border-slate-200 left-0 top-0 pattern-background rounded-bl-xl"></div>
        <div className="lg:block absolute h-full w-0 md:w-20 bg-slate-200/20 border-0 md:border-l md:border-t-0 md:border-slate-200 right-0 top-0 pattern-background rounded-br-xl"></div>

        <div className="max-w-7xl mx-auto">
          {/* Intro Section */}
          <section className="py-12 mb-12 border-b border-slate-200">
            <div className="md:max-w-4xl max-w-full mx-auto md:px-16">
              <h2 className="font-open-sans font-thin text-3xl md:text-5xl md:leading-[1.3] text-slate-950 mb-6 text-center">
                Intelligent AI agents built for real business impact
              </h2>
              <div className="space-y-6 font-open-sans text-md md:text-lg leading-[1.6] text-slate-950">
                <p>
                  Agentic AI represents the next wave of automation. Unlike traditional chatbots or scripts, agents can understand context, take action, execute multi-step tasks, and work autonomously inside your workflows.
                </p>
                <p>
                  At VISIBI, we help organisations move from AI experimentation to working, production-ready agentic systems — designed using the same principles we apply across our GEO, SEO and PPC consulting: precision, clarity, and measurable results.
                </p>
              </div>
            </div>
          </section>

          {/* Why Agentic AI Now */}
          <section className="py-12 mb-12 border-b border-slate-200">
            <div className="md:max-w-3xl max-w-full mx-0 md:text-left md:px-16 px-0">
              <div className="mb-12 text-left">
                <h2 className="font-open-sans font-thin text-3xl md:text-5xl md:leading-[1.3] text-slate-950 mb-4">
                  Why businesses are investing in agentic AI now
                </h2>
                <p className="font-open-sans text-md md:text-lg leading-[1.5] text-slate-950 max-w-2xl">
                  Agentic AI allows organisations to go beyond simple automation and unlock new operational capabilities.
                </p>
              </div>
            </div>

            <div className="md:max-w-7xl max-w-full mx-auto md:text-left md:px-16 px-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border-slate-300 border transition-colors pattern-background">
                {benefitItems.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div key={index} className="bg-white border-0 border-slate-300 p-8">
                      <Icon size={32} strokeWidth={1.25} className="text-slate-950 mb-4" />
                      <h3 className="font-space-mono pb-2 text-lg font-normal uppercase text-slate-950 mb-3">{item.title}</h3>
                      <p className="font-open-sans text-md text-slate-950">{item.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* Prototypes Instead of Case Studies */}
          <section className="py-12 mb-12 border-b border-slate-200">
            <div className="md:max-w-3xl max-w-full mx-0 md:text-left md:px-16 px-0">
              <div className="mb-12 text-left">
                <h2 className="font-open-sans font-thin text-3xl md:text-5xl md:leading-[1.3] text-slate-950 mb-4">
                  We focus on prototypes, not portfolios
                </h2>
                <p className="font-open-sans text-md md:text-lg leading-[1.5] text-slate-950 max-w-2xl">
                  Agentic AI is a rapidly evolving field — and legacy case studies rarely reflect current capabilities. Instead of showcasing outdated examples, we show you working systems built around your world.
                </p>
              </div>
            </div>

            <div className="md:max-w-7xl max-w-full mx-auto md:px-16">
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {prototypeCards.map((card, index) => (
                  <div key={index} className="border border-slate-300 p-8">
                    <h3 className="font-space-mono font-normal text-xl md:text-2xl leading-[1.3] text-slate-950 mb-4">{card.title}</h3>
                    <p className="font-open-sans text-md leading-[1.5] text-slate-950">{card.description}</p>
                  </div>
                ))}
              </div>

              <div className="max-w-4xl mx-auto text-center">
                <p className="font-open-sans font-semibold text-xl md:text-2xl leading-[1.4] text-slate-950 border-l-4 border-slate-950 pl-6 py-4 text-left">
                  You're not hiring us for what we built last year — you're hiring us for the agent we build for you next.
                </p>
              </div>
            </div>
          </section>

          {/* What We Build (Agent Types) */}
          <section className="py-12 mb-12 border-b border-slate-200">
            <div className="md:max-w-3xl max-w-full mx-0 md:text-left md:px-16 px-0">
              <div className="mb-12 text-left">
                <h2 className="font-open-sans font-thin text-3xl md:text-5xl md:leading-[1.3] text-slate-950 mb-4">
                  Agentic systems tailored to your needs
                </h2>
                <p className="font-open-sans text-md md:text-lg leading-[1.5] text-slate-950 max-w-2xl">
                  We design agents around your specific workflows, data and systems — not generic one-size-fits-all bots.
                </p>
              </div>
            </div>

            <div className="md:max-w-7xl max-w-full mx-auto md:px-16">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border-slate-300 border transition-colors pattern-background">
                {agentTypes.map((agent, index) => {
                  const Icon = agent.icon
                  return (
                    <div key={index} className="bg-white border-0 border-slate-300 p-8">
                      <Icon size={32} strokeWidth={1.25} className="text-slate-950 mb-4" />
                      <h3 className="font-space-mono pb-2 text-lg font-normal uppercase text-slate-950 mb-3">{agent.title}</h3>
                      <p className="font-open-sans text-md text-slate-950">{agent.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* Our Process */}
          <section className="py-12 mb-12 border-b border-slate-200">
            <div className="md:max-w-4xl max-w-full mx-0 md:text-left md:px-16 px-0">
              <div className="text-left mb-12">
                <h2 className="font-open-sans font-thin text-3xl md:text-5xl md:leading-[1.3] text-slate-950 mb-4">
                  How we design and deploy agentic AI
                </h2>
                <p className="font-open-sans text-md md:text-lg leading-[1.5] text-slate-950">
                  We use a structured, transparent framework that aligns technical decisions with clear business outcomes.
                </p>
              </div>
            </div>

            <div className="max-w-7xl mx-0 md:px-16">
              <div className="mx-auto p-4 grid md:grid-cols-1 lg:grid-cols-2 gap-4 border-slate-300 border transition-colors pattern-background">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex-1 bg-white p-6 mb-4 border border-slate-300">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-slate-950 text-white rounded-full flex items-center justify-center font-open-sans font-semibold text-md mb-4">
                          {index + 1}
                        </div>
                      </div>
                      <h3 className="font-space-mono font-normal text-lg leading-[1.3] text-slate-950 mb-2 uppercase">{step.title}</h3>
                      <p className="font-open-sans text-md leading-[1.5] text-slate-950">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Technology We Use */}
          <section className="py-12 mb-12 border-b border-slate-200">
            <div className="md:max-w-3xl max-w-full mx-0 md:text-left md:px-16 px-0">
              <div className="mb-12 text-left">
                <h2 className="font-open-sans font-thin text-3xl md:text-5xl md:leading-[1.3] text-slate-950 mb-4">
                  Modern agentic AI, built with leading frameworks
                </h2>
                <p className="font-open-sans text-md md:text-lg leading-[1.5] text-slate-950 max-w-2xl">
                  We work across a range of agentic and generative AI technologies to design the right solution for your environment.
                </p>
              </div>
            </div>

            <div className="md:max-w-7xl max-w-full mx-auto md:px-16">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
                {technologies.map((tech, index) => (
                  <div key={index} className="border border-slate-300 p-6 text-center flex items-center justify-center">
                    <p className="font-space-mono font-semibold text-sm text-slate-950">{tech}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <p className="font-open-sans text-md md:text-lg leading-[1.5] text-slate-950 max-w-3xl mx-auto">
                  You get fully transparent documentation, code, architecture and ownership of everything we build.
                </p>
              </div>
            </div>
          </section>

          {/* Why VISIBI */}
          <section className="py-12 mb-12 border-b border-slate-200">
            <div className="md:max-w-4xl max-w-full mx-auto md:px-16">
              <h2 className="font-open-sans font-thin text-3xl md:text-5xl leading-[1.3] text-slate-950 mb-12 text-center">
                Why VISIBI
              </h2>

              <div className="space-y-6 font-open-sans text-md md:text-lg leading-[1.6] text-slate-950">
                <p>
                  VISIBI is built on precision. Our consulting roots are in GEO, SEO and PPC — disciplines that demand rigorous analysis, structured thinking and measurable outcomes.
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
          </section>

          {/* FAQ Section */}
          <section className="py-12 mb-12">
            <div className="md:max-w-3xl max-w-full mx-auto md:text-left md:px-16 px-0">
              <div className="text-center mb-12">
                <h2 className="font-open-sans font-thin text-3xl md:text-5xl leading-[1.3] text-slate-950 mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="font-open-sans text-xl leading-[1.5] text-slate-950">
                  Everything you need to know about agentic AI development.
                </p>
              </div>
            </div>
            <div className="md:max-w-4xl max-w-full mx-auto md:px-16">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-slate-300 bg-white">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                    >
                      <h3 className="font-open-sans font-normal text-sm md:text-base text-slate-950 pr-4">
                        {faq.question}
                      </h3>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-950 flex-shrink-0 transition-transform ${
                          openFaqIndex === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openFaqIndex === index && (
                      <div className="px-6 pb-6 pt-2">
                        <p className="font-open-sans text-md leading-[1.6] text-slate-950">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Final CTA Section */}
      <section className="max-w-[90%] mx-auto px-12 py-24 relative z-10 bg-[#FAFAFB] rounded-xl rounded-tl-none rounded-tr-none border-t border-b border-r border-l border-slate-300 mb-32 overflow-hidden">
        {/* Graph paper style background with gradient fade */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Graph paper grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[length:14px_14px]"></div>
          {/* Gradient fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFB] via-white/40 to-[#FAFAFB]"></div>
        </div>

        <div className="lg:block absolute h-full w-0 md:w-20 bg-slate-200/20 border-0 md:border-r md:border-t-0 md:border-slate-200 left-0 top-0 pattern-background rounded-bl-xl"></div>
        <div className="lg:block absolute h-full w-0 md:w-20 bg-slate-200/20 border-0 md:border-l md:border-t-0 md:border-slate-200 right-0 top-0 pattern-background rounded-br-xl"></div>

        <div className="max-w-3xl mx-auto text-center space-y-6 relative z-10">
          <h2 className="font-open-sans font-thin text-4xl md:text-5xl md:leading-[1.3] text-slate-950">
            Book an Agentic AI Discovery Call
          </h2>
          <p className="font-open-sans text-xl leading-[1.7] text-slate-950 pb-8">
            If you're exploring how AI agents could automate workflows, augment teams or unlock value from your existing data, we can help you move from idea to working prototype.
          </p>
          <Link to="/contact">
            <Button className="inline-flex items-center px-8 py-6 bg-blue-700 text-white rounded-full font-medium hover:bg-blue-800 transition-colors">
              <Sparkles className="w-5 h-5 mr-2" />
              Book a Discovery Call
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-[90%] mx-auto px-8 py-12 mt-0 border-t border-gray-200 bg-white rounded-xl rounded-bl-none rounded-br-none z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img src="/govisibi-logo.png" alt="VISIBI Logo" className="h-8 w-8" />
              <span className="text-2xl font-bold bg-slate-950 bg-clip-text text-transparent">VISIBI</span>
            </div>
            <p className="font-open-sans text-lg text-slate-900 max-w-md leading-relaxed">
              Track and manage your brand's presence across leading AI platforms.
            </p>
            <div className="flex gap-6">
              <a
                href="https://github.com"
                className="font-space-mono text-sm text-gray-600 hover:text-blue-700 uppercase tracking-wide"
              >
                Github
              </a>
              <a
                href="https://linkedin.com"
                className="font-space-mono text-sm text-gray-600 hover:text-blue-700 uppercase tracking-wide"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="font-sans text-xl text-slate-950 mb-2">
                Want your brand to stand out in the age of AI conversations?
              </h3>
              <p className="text-sm text-slate-600">
                Stay informed with expert updates on brand visibility across AI platforms.
              </p>
            </div>
            <div className="flex gap-2">
              <Input type="email" placeholder="Email Address" className="flex-1 font-space-mono text-sm placeholder:text-gray-400 rounded-full text-gray-900" />
              <Button className="bg-slate-900 text-white hover:bg-gray-800 font-space-mono text-sm uppercase px-6 rounded-full">Start Now</Button>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-space-mono text-xs text-gray-500">© 2025 VISIBI — ALL RIGHTS RESERVED</p>
        </div>
      </footer>
    </div>
  )
}
