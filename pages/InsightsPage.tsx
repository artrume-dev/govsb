import React, { useState } from 'react';
import { Brain, Search, TrendingUp, Target, BookOpen, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

interface InsightsPageProps {
  onNavigate: (page: string) => void;
}

export function InsightsPage({ onNavigate }: InsightsPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'GEO', 'SEO', 'Strategy', 'Analytics', 'Case Studies'];
  
  const insights = [
    {
      title: "How ChatGPT Discovers & Cites Brands in 2025",
      category: "GEO",
      date: "Oct 15, 2025",
      excerpt: "Deep analysis of the technical mechanisms ChatGPT uses to source information and how brands can optimize for citations.",
      readTime: "8 min read"
    },
    {
      title: "The Complete Guide to AI Search Optimization",
      category: "Strategy",
      date: "Oct 10, 2025",
      excerpt: "Everything you need to know about optimizing your brand's presence across AI platforms—from fundamentals to advanced tactics.",
      readTime: "12 min read"
    },
    {
      title: "Measuring Brand Visibility Across AI Platforms",
      category: "Analytics",
      date: "Oct 5, 2025",
      excerpt: "How to track, measure, and report on your AI visibility performance with quantitative frameworks and tools.",
      readTime: "10 min read"
    },
    {
      title: "GEO vs SEO: Understanding the Strategic Difference",
      category: "GEO",
      date: "Sep 28, 2025",
      excerpt: "Why generative engine optimization requires fundamentally different tactics than traditional search engine optimization.",
      readTime: "7 min read"
    },
    {
      title: "The Authority Signals AI Platforms Trust",
      category: "Strategy",
      date: "Sep 20, 2025",
      excerpt: "Research findings on what makes AI engines more likely to cite certain sources over others.",
      readTime: "9 min read"
    },
    {
      title: "Case Study: 300% Increase in AI Mentions in 6 Months",
      category: "Case Studies",
      date: "Sep 15, 2025",
      excerpt: "How a B2B SaaS company transformed their AI visibility through structured GEO strategy.",
      readTime: "11 min read"
    },
    {
      title: "Content Structure for Maximum AI Comprehension",
      category: "GEO",
      date: "Sep 8, 2025",
      excerpt: "Technical best practices for structuring content so AI platforms can easily extract and cite information.",
      readTime: "8 min read"
    },
    {
      title: "The Future of Search: 2026 Predictions",
      category: "Strategy",
      date: "Sep 1, 2025",
      excerpt: "Expert predictions on how AI-powered search will evolve and what brands should prepare for.",
      readTime: "10 min read"
    },
    {
      title: "Schema Markup for AI Platforms",
      category: "SEO",
      date: "Aug 25, 2025",
      excerpt: "How structured data influences both traditional search rankings and AI platform understanding.",
      readTime: "9 min read"
    }
  ];

  const filteredInsights = selectedCategory === 'All' 
    ? insights 
    : insights.filter(insight => insight.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'GEO':
        return Brain;
      case 'SEO':
        return Search;
      case 'Strategy':
        return Target;
      case 'Analytics':
        return TrendingUp;
      case 'Case Studies':
        return BookOpen;
      default:
        return Brain;
    }
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-black text-white py-24 md:py-32 border-b border-[#EAEAEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-inter font-bold text-[48px] md:text-[56px] leading-[1.2] mb-6">
              AI Visibility Insights & Research
            </h1>
            <p className="font-space-mono text-[18px] leading-[1.5] text-white/90 max-w-3xl mx-auto">
              Deep dives, case studies, and strategic frameworks for mastering visibility in the age of generative AI.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-[#EAEAEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`rounded-md font-inter font-semibold text-[16px] ${
                  selectedCategory === category 
                    ? 'bg-black text-white hover:bg-black/90 border border-black' 
                    : 'bg-transparent text-black border border-[#EAEAEA] hover:border-black'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="py-24 bg-white border-b border-[#EAEAEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredInsights.map((insight, index) => {
              const IconComponent = getCategoryIcon(insight.category);
              return (
                <article 
                  key={index}
                  className="bg-white border border-[#EAEAEA] rounded-xl overflow-hidden hover:border-black transition-all duration-300 cursor-pointer"
                >
                  <div className="h-48 bg-white border-b border-[#EAEAEA] flex items-center justify-center">
                    <IconComponent className="w-16 h-16 text-black" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="font-space-mono text-[12px] text-black bg-white border border-black px-3 py-1 rounded-full">
                        {insight.category}
                      </span>
                      <span className="font-space-mono text-[12px] text-[#7A7A7A]">{insight.readTime}</span>
                    </div>
                    <h3 className="font-space-mono font-bold text-[20px] leading-[1.3] text-black mb-3">{insight.title}</h3>
                    <p className="font-space-mono text-[14px] leading-[1.5] text-black mb-4">{insight.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-space-mono text-[12px] text-[#7A7A7A]">{insight.date}</span>
                      <button className="font-space-mono text-[14px] text-black hover:underline inline-flex items-center gap-1">
                        Read More <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-white border-b border-[#EAEAEA] border-dashed">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-space-mono font-bold text-[40px] leading-[1.3] text-black mb-4">Stay Ahead of AI Search Evolution</h2>
          <p className="font-space-mono text-[16px] leading-[1.5] text-black mb-8">
            Get monthly insights, research findings, and strategic frameworks delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-md border border-[#EAEAEA] font-space-mono text-[16px] focus:outline-none focus:ring-2 focus:ring-black"
            />
            <Button className="bg-black text-white hover:bg-white hover:text-black border border-black rounded-md px-8 font-inter font-semibold text-[16px] transition-all">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
