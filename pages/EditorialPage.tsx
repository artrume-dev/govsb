import React from 'react';
import { CTABanner } from '../CTABanner';

interface EditorialPageProps {
  onNavigate: (page: string) => void;
}

export function EditorialPage({ onNavigate }: EditorialPageProps) {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-white text-black py-24 md:py-32 border-b border-[#EAEAEA] border-dashed">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-inter font-bold text-[48px] md:text-[56px] leading-[1.2] mb-6">
              Editorial Page Title
            </h1>
            <p className="font-space-mono text-[18px] leading-[1.5] text-[#7A7A7A] max-w-3xl mx-auto">
              Editorial page subtitle or introduction text goes here.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24 bg-white border-b border-[#EAEAEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 font-space-mono text-[18px] leading-[1.5] text-black">
              <p>
                This is a template for editorial content pages. Replace this content with your actual editorial text.
              </p>
              <p>
                You can include multiple paragraphs, headings, lists, and other content elements following the same typography and spacing patterns used throughout the site.
              </p>
              <p>
                The layout uses a centered narrow container (max-w-4xl) for optimal reading experience, matching the pattern used in the AboutPage and other content sections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Optional: Additional Content Section */}
      <section className="py-24 bg-white border-b border-[#EAEAEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-space-mono font-bold text-[40px] leading-[1.3] text-black mb-8">
              Section Heading
            </h2>
            <div className="space-y-6 font-space-mono text-[18px] leading-[1.5] text-black">
              <p>
                Additional content sections can be added here with the same styling patterns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to Get Started?"
        description="Contact us to learn more about how we can help your business."
        buttonText="Get in Touch"
        onButtonClick={() => onNavigate('contact')}
      />
    </div>
  );
}
