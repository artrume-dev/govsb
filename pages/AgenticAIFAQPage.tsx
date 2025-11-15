import React from 'react';
import { FAQSection } from '../FAQSection';
import { Button } from '../ui/button';

interface AgenticAIFAQPageProps {
  onNavigate: (page: string) => void;
}

export function AgenticAIFAQPage({ onNavigate }: AgenticAIFAQPageProps) {
  const faqs = [
    {
      question: 'What is the difference between traditional AI and Agentic AI?',
      answer: 'Traditional AI responds to specific prompts or questions with individual answers. Agentic AI can autonomously plan, make decisions, use multiple tools, and complete complex multi-step tasks without constant human guidance. Think of it as the difference between asking a question and hiring an assistant who can handle entire projects.'
    },
    {
      question: 'How long does it take to develop a custom AI agent?',
      answer: 'Development timelines vary based on complexity and integration requirements. A basic agent with limited capabilities might take 4-6 weeks, while more sophisticated agents with multiple integrations and advanced decision-making capabilities typically require 8-16 weeks. We\'ll provide a detailed timeline during the discovery phase.'
    },
    {
      question: 'Can AI agents integrate with our existing systems?',
      answer: 'Yes, absolutely. AI agents can integrate with virtually any system that has an API or programmatic interface. This includes CRMs, databases, help desk software, communication platforms, and custom internal tools. We handle all integration work to ensure seamless connectivity.'
    },
    {
      question: 'How much does an AI agent cost?',
      answer: 'Costs depend on the complexity of the agent, required integrations, and ongoing operational requirements. Development typically ranges from $25,000 to $150,000+ for custom solutions. We also offer template-based agents starting at lower price points. Contact us for a detailed quote based on your specific needs.'
    },
    {
      question: 'What kind of tasks can AI agents handle?',
      answer: 'AI agents excel at tasks that involve information processing, decision-making, and system interactions. Common applications include customer service, data analysis, content creation, research, appointment scheduling, lead qualification, document processing, and IT operations. If a task follows logical patterns and can be clearly defined, it\'s likely a good candidate for an AI agent.'
    },
    {
      question: 'Are AI agents reliable and safe?',
      answer: 'When properly designed and implemented, AI agents are highly reliable. We build extensive safety measures including human oversight options, action verification, rate limiting, and comprehensive logging. Agents are thoroughly tested in controlled environments before deployment, and we implement monitoring systems to ensure ongoing performance and safety.'
    },
    {
      question: 'Do we need technical expertise to manage AI agents?',
      answer: 'No, you don\'t need technical expertise. We design our agents with user-friendly interfaces and provide comprehensive training for your team. We can also provide ongoing management and monitoring services if you prefer a fully managed solution.'
    },
    {
      question: 'Can agents learn and improve over time?',
      answer: 'Yes, agents can be designed to learn from interactions and feedback. This includes fine-tuning responses based on user feedback, optimizing decision-making processes, and adapting to new scenarios. We implement appropriate learning mechanisms based on your specific use case and compliance requirements.'
    },
    {
      question: 'What happens if an agent makes a mistake?',
      answer: 'We implement multiple safeguards to prevent errors, including verification steps, confidence thresholds, and human-in-the-loop options for critical decisions. All agent actions are logged for review. If an error occurs, we analyze it, implement corrections, and update the agent to prevent similar issues in the future.'
    },
    {
      question: 'How do you ensure data privacy and security?',
      answer: 'Data privacy and security are fundamental to our approach. We implement encryption for data in transit and at rest, follow industry best practices for authentication and authorization, comply with relevant regulations (GDPR, CCPA, etc.), and can deploy agents in your own infrastructure if required. We\'ll work with your security team to ensure all requirements are met.'
    },
    {
      question: 'Can we start with a pilot project?',
      answer: 'Absolutely! We recommend starting with a pilot project to validate the approach and demonstrate value. A pilot typically focuses on a specific use case with clear metrics for success. This allows you to see results quickly and make an informed decision about broader deployment.'
    },
    {
      question: 'What ongoing support do you provide?',
      answer: 'We offer various support options including monitoring and maintenance, performance optimization, capability expansion, technical support, and training. Support packages can be customized based on your needs, from basic monitoring to fully managed services where we handle all aspects of agent operations.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="mb-6">Agentic AI FAQ</h1>
            <p className="font-space-mono text-[18px] leading-relaxed text-black">
              Everything you need to know about agentic AI development, implementation, and management. Can't find your answer? Contact us directly.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQSection faqs={faqs} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">Still Have Questions?</h2>
          <p className="font-space-mono text-[18px] leading-relaxed text-white/80 mb-8 max-w-2xl mx-auto">
            Schedule a consultation to discuss your specific needs and learn how agentic AI can benefit your organization.
          </p>
          <Button 
            onClick={() => onNavigate('contact')}
            className="bg-white text-black border border-white hover:bg-transparent hover:text-white font-inter font-semibold px-8 py-6 rounded-md transition-all"
          >
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  );
}
