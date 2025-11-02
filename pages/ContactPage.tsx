import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Mail, MessageSquare, CheckCircle2 } from 'lucide-react';
import contactBgImage from 'figma:asset/3df7e608e45f441c39bd2b060073b480d0fae211.png';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    topic: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Post the form to our serverless API which will send the email
    fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then(async (res) => {
        if (!res.ok) throw new Error((await res.text()) || 'Server error');
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ name: '', company: '', email: '', topic: '', message: '' });
        }, 5000);
      })
      .catch((err) => {
        // TODO: surface error to user in UI; for now log
        // eslint-disable-next-line no-console
        console.error('Failed to send contact message', err);
        alert('Sorry — something went wrong sending your message. Please try again or email us directly at hello@govisibi.agency');
      });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-white text-black py-24 md:py-32 border-b border-[#EAEAEA] border-dashed relative overflow-hidden">
        {/* Background Image with Very Light Opacity */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.10]"
          style={{
            backgroundImage: `url(${contactBgImage})`,
            filter: 'grayscale(100%)',
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-inter font-bold text-[48px] md:text-[56px] leading-[1.2] mb-6">
              Let's Make Your Brand Visible in Gen AI Search
            </h1>
            <p className="font-space-mono text-[18px] leading-[1.5] text-[#7A7A7A] max-w-3xl mx-auto">
              Tell us about your Gen AI visibility goals and we'll show you how VISIBI can help you get discovered, cited, and trusted by millions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-white border-b border-[#EAEAEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="font-space-mono font-bold text-[40px] leading-[1.3] text-black mb-8">Send Us a Message</h2>
              {submitted ? (
                <div className="bg-white border-2 border-black rounded-xl p-8 text-center">
                  <CheckCircle2 className="w-16 h-16 text-black mx-auto mb-4" />
                  <h3 className="font-space-mono font-bold text-[24px] leading-[1.3] text-black mb-2">Thank You!</h3>
                  <p className="font-space-mono text-[16px] leading-[1.5] text-[#7A7A7A]">
                    We've received your message and will respond within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="font-space-mono text-black">Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className="mt-2 rounded-md border-[#EAEAEA] font-space-mono"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="company" className="font-space-mono text-black">Company *</Label>
                    <Input
                      id="company"
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => handleChange('company', e.target.value)}
                      className="mt-2 rounded-md border-[#EAEAEA] font-space-mono"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="font-space-mono text-black">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className="mt-2 rounded-md border-[#EAEAEA] font-space-mono"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="topic" className="font-space-mono text-black">What are you interested in? *</Label>
                    <Select onValueChange={(value) => handleChange('topic', value)} required>
                      <SelectTrigger className="mt-2 rounded-md border-[#EAEAEA] font-space-mono">
                        <SelectValue placeholder="Select a topic" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="geo">GEO Services</SelectItem>
                        <SelectItem value="seo">SEO & Content</SelectItem>
                        <SelectItem value="ppc">Paid Media</SelectItem>
                        <SelectItem value="tool">VISIBI Tool</SelectItem>
                        <SelectItem value="audit">AI Visibility Audit</SelectItem>
                        <SelectItem value="integrated">Integrated Strategy</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="font-space-mono text-black">Message *</Label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      className="mt-2 rounded-md border-[#EAEAEA] font-space-mono min-h-[150px]"
                      placeholder="Tell us about your AI visibility goals..."
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-black text-white hover:bg-white hover:text-black border border-black rounded-md py-6 h-auto font-inter font-semibold text-[16px] transition-all"
                  >
                    Submit Request
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-space-mono font-bold text-[40px] leading-[1.3] text-black mb-6">Get in Touch</h2>
                <p className="font-space-mono text-[16px] leading-[1.5] text-black mb-8">
                  Ready to improve your brand's visibility across AI platforms? We'd love to hear from you.
                </p>
              </div>

              <div className="bg-white border border-[#EAEAEA] rounded-xl p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-white border border-black rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-space-mono font-bold text-[20px] leading-[1.3] text-black mb-2">Email</h3>
                    <a 
                      href="mailto:hello@govisibi.agency" 
                      className="font-space-mono text-[16px] text-black hover:underline"
                    >
                      hello@govisibi.agency
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-[#EAEAEA] rounded-xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white border border-black rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-space-mono font-bold text-[20px] leading-[1.3] text-black mb-2">What to Expect</h3>
                    <ul className="font-space-mono text-[16px] leading-[1.5] text-black space-y-2">
                      <li className="flex gap-2">
                        <span className="flex-shrink-0">•</span>
                        <span>Response within 24 hours</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="flex-shrink-0">•</span>
                        <span>Initial consultation to understand your needs</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="flex-shrink-0">•</span>
                        <span>Custom proposal outlining approach and pricing</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="flex-shrink-0">•</span>
                        <span>No pressure, no obligation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-black rounded-xl p-8">
                <h3 className="font-space-mono font-bold text-[20px] leading-[1.3] text-black mb-3">Need an AI Visibility Audit?</h3>
                <p className="font-space-mono text-[16px] leading-[1.5] text-black mb-4">
                  Get a comprehensive analysis of how your brand currently appears across AI platforms, plus strategic recommendations.
                </p>
                <Button 
                  onClick={() => handleChange('topic', 'audit')}
                  variant="outline"
                  className="bg-transparent text-black border border-black hover:bg-black hover:text-white rounded-md font-inter font-semibold text-[16px] transition-all"
                >
                  Request Audit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-24 bg-white border-b border-[#EAEAEA] border-dashed">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-space-mono font-bold text-[40px] leading-[1.3] text-black mb-4">Have Questions?</h2>
            <p className="font-space-mono text-[16px] leading-[1.5] text-black">
              Check out our service pages for detailed FAQs and information.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Button
              onClick={() => onNavigate('geo')}
              variant="outline"
              className="bg-transparent text-black border border-[#EAEAEA] hover:border-black hover:bg-black hover:text-white rounded-md p-6 h-auto flex flex-col items-center gap-2 transition-all"
            >
              <span className="font-space-mono text-[16px]">GEO FAQs</span>
            </Button>
            <Button
              onClick={() => onNavigate('seo')}
              variant="outline"
              className="bg-transparent text-black border border-[#EAEAEA] hover:border-black hover:bg-black hover:text-white rounded-md p-6 h-auto flex flex-col items-center gap-2 transition-all"
            >
              <span className="font-space-mono text-[16px]">SEO FAQs</span>
            </Button>
            <Button
              onClick={() => onNavigate('ppc')}
              variant="outline"
              className="bg-transparent text-black border border-[#EAEAEA] hover:border-black hover:bg-black hover:text-white rounded-md p-6 h-auto flex flex-col items-center gap-2 transition-all"
            >
              <span className="font-space-mono text-[16px]">PPC FAQs</span>
            </Button>
            <Button
              onClick={() => onNavigate('how-we-work')}
              variant="outline"
              className="bg-transparent text-black border border-[#EAEAEA] hover:border-black hover:bg-black hover:text-white rounded-md p-6 h-auto flex flex-col items-center gap-2 transition-all"
            >
              <span className="font-space-mono text-[16px]">Process FAQs</span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
