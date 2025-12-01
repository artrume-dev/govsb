import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Breadcrumbs from '../components/Breadcrumbs'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function PrivacyPolicy() {
  useEffect(() => {
    document.documentElement.classList.remove('dark')
  }, [])

  return (
    <div className="min-h-screen relative line-pattern">
      <Helmet>
        <title>Privacy Policy | Visibi Ai</title>
        <meta name="description" content="Learn how Visibi Ai collects, uses and protects your data, including GA4 analytics, cookies, AI services and your GDPR rights when you use govisibi.ai." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://www.govisibi.ai/privacy-policy" />
      </Helmet>

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-slate-300/60 bg-[linear-gradient(to_right,#1d4ed80A_1px,transparent_1px),linear-gradient(to_bottom,#1d4ed80A_1px,transparent_1px)] bg-[size:128px_104px]"></div>

      <Navigation />

      <div className="max-w-full md:max-w-[90%] mx-auto px-6 md:px-16 mt-8">
        <Breadcrumbs 
          items={[
            { label: 'Home', path: '/' },
            { label: 'Privacy Policy', path: '/privacy-policy' }
          ]}
        />
      </div>

      <main className="max-w-4xl mx-auto px-6 py-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>

        <div className="prose prose-lg max-w-none space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Visibi Ai ("we", "our", "us") is committed to protecting your privacy and personal data. This Privacy Policy explains how we collect, use, store, and protect your information when you visit our website at <a href="https://govisibi.ai" className="text-blue-600 hover:underline">govisibi.ai</a>, use our services, or interact with us.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We operate in compliance with the UK General Data Protection Regulation (UK GDPR) and the EU General Data Protection Regulation (EU GDPR).
            </p>
            <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-4">
              <p className="font-semibold mb-2">Contact Information:</p>
              <p className="text-gray-700">Visibi Ai</p>
              <p className="text-gray-700">167–169 Great Portland Street, Fifth Floor</p>
              <p className="text-gray-700">London, W1W 5PF, United Kingdom</p>
              <p className="text-gray-700">Email: <a href="mailto:info@govisibi.ai" className="text-blue-600 hover:underline">info@govisibi.ai</a></p>
            </div>
          </section>

          {/* What We Do */}
          <section>
            <h2 className="text-2xl font-bold mb-4">2. About Visibi Ai</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Visibi Ai is an AI-native agency and product company that helps brands become visible to AI and more productive with AI. We offer two core services:
            </p>
            <div className="ml-6 space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">AI Visibility / GEO (Generative Engine Optimisation)</h3>
                <p className="text-gray-700">
                  We make brands discoverable, trusted, and accurately represented inside AI platforms such as ChatGPT, Claude, Perplexity, Copilot, Gemini, DeepSeek, and others. Our goal is to help brands get found, understood, and recommended by AI systems.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">AI Agents</h3>
                <p className="text-gray-700">
                  We design and build autonomous, safe, integrated AI agents that act as digital workers across marketing, sales, support, finance, HR, and operations to reduce manual effort and improve operational efficiency.
                </p>
              </div>
            </div>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold mb-4">3. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold mb-3">3.1 Information You Provide</h3>
            <p className="text-gray-700 leading-relaxed mb-4">We collect information you voluntarily provide when you:</p>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>Fill out contact forms or enquiry forms on our website</li>
              <li>Join our waitlist for future services or products</li>
              <li>Subscribe to our newsletter or marketing communications</li>
              <li>Create an account or access our services via email "magic link"</li>
              <li>Communicate with us via email or other channels</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4 mt-4">This information may include:</p>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>Name and contact details (email address, phone number, company name)</li>
              <li>Job title and industry</li>
              <li>Communication preferences</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">3.2 Information Collected Automatically</h3>
            <p className="text-gray-700 leading-relaxed mb-4">When you visit our website, we automatically collect:</p>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li><strong>Analytics Data:</strong> We use Google Analytics 4 (GA4) with IP anonymisation and pseudonymous identifiers to understand how visitors use our website</li>
              <li><strong>Technical Data:</strong> Browser type, device type, operating system, referring URLs, pages viewed, and time spent on pages</li>
              <li><strong>Cookies:</strong> Small text files stored on your device (see Section 7 for details)</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">3.3 Third-Party AI/LLM Services</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              As part of our services, we may process data using third-party AI models (such as OpenAI, Anthropic, Google, or others). When we do so:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>We apply appropriate safeguards and data processing agreements</li>
              <li>We anonymise or pseudonymise data where possible</li>
              <li>We only send data necessary for service delivery</li>
              <li>We ensure compliance with data protection laws</li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-bold mb-4">4. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">We use your personal data for the following purposes:</p>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Service Delivery</h3>
                <p className="text-gray-700">To provide our AI visibility and AI agent services, respond to enquiries, and manage your account.</p>
                <p className="text-sm text-gray-600 mt-1"><strong>Legal Basis:</strong> Contract performance and legitimate interests</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Marketing Communications</h3>
                <p className="text-gray-700">To send newsletters, service updates, and relevant content (only with your consent or where we have legitimate interests).</p>
                <p className="text-sm text-gray-600 mt-1"><strong>Legal Basis:</strong> Consent and legitimate interests</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Website Analytics</h3>
                <p className="text-gray-700">To understand how visitors use our website and improve user experience.</p>
                <p className="text-sm text-gray-600 mt-1"><strong>Legal Basis:</strong> Legitimate interests</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Legal Compliance</h3>
                <p className="text-gray-700">To comply with legal obligations, enforce our terms, and protect our rights.</p>
                <p className="text-sm text-gray-600 mt-1"><strong>Legal Basis:</strong> Legal obligation and legitimate interests</p>
              </div>
            </div>
          </section>

          {/* Data Sharing */}
          <section>
            <h2 className="text-2xl font-bold mb-4">5. How We Share Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not sell your personal data. We may share your information with:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li><strong>Service Providers:</strong> Third-party vendors who help us operate our website and deliver services (e.g., hosting providers, email service providers, analytics providers)</li>
              <li><strong>AI Model Providers:</strong> When necessary for service delivery, we may share anonymised or pseudonymised data with AI/LLM providers under strict data processing agreements</li>
              <li><strong>Legal Requirements:</strong> Law enforcement, regulators, or courts when required by law or to protect our legal rights</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your data may be transferred to the new owner</li>
            </ul>
          </section>

          {/* International Transfers */}
          <section>
            <h2 className="text-2xl font-bold mb-4">6. International Data Transfers</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Some of our service providers and AI model providers are located outside the UK and European Economic Area (EEA). When we transfer your data internationally, we ensure appropriate safeguards are in place, such as:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
              <li>Adequacy decisions by the UK or EU confirming adequate data protection</li>
              <li>Other legally approved transfer mechanisms</li>
            </ul>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-bold mb-4">7. Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use cookies and similar tracking technologies to enhance your experience on our website.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">Types of Cookies We Use:</h3>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-gray-900">Essential Cookies</p>
                <p className="text-gray-700">Required for the website to function properly (e.g., session management, security)</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Analytics Cookies</p>
                <p className="text-gray-700">Used by Google Analytics 4 to understand website usage (with IP anonymisation and pseudonymous identifiers)</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Marketing Cookies</p>
                <p className="text-gray-700">Used with your consent to deliver relevant content and measure campaign effectiveness</p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mt-4">
              You can manage your cookie preferences through our cookie banner or your browser settings. Note that disabling certain cookies may affect website functionality.
            </p>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl font-bold mb-4">8. Data Retention</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We retain your personal data only for as long as necessary to fulfil the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
            </p>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li><strong>Enquiries and Communications:</strong> Up to 3 years after last contact</li>
              <li><strong>Marketing Consents:</strong> Until you withdraw consent or unsubscribe</li>
              <li><strong>Analytics Data:</strong> Up to 26 months (Google Analytics 4 default)</li>
              <li><strong>Account Data:</strong> For the duration of your account plus up to 6 years for legal and tax purposes</li>
            </ul>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-bold mb-4">9. Your Data Protection Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Under UK GDPR and EU GDPR, you have the following rights:
            </p>
            
            <div className="space-y-3">
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-semibold">Right of Access</p>
                <p className="text-gray-700">Request a copy of the personal data we hold about you</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-semibold">Right to Rectification</p>
                <p className="text-gray-700">Request correction of inaccurate or incomplete data</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-semibold">Right to Erasure ("Right to be Forgotten")</p>
                <p className="text-gray-700">Request deletion of your personal data in certain circumstances</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-semibold">Right to Restriction of Processing</p>
                <p className="text-gray-700">Request that we limit how we use your data</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-semibold">Right to Data Portability</p>
                <p className="text-gray-700">Receive your data in a structured, commonly used format</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-semibold">Right to Object</p>
                <p className="text-gray-700">Object to processing based on legitimate interests or for direct marketing</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-semibold">Right to Withdraw Consent</p>
                <p className="text-gray-700">Withdraw consent at any time where we rely on consent as the legal basis</p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mt-4">
              To exercise any of these rights, please contact us at <a href="mailto:info@govisibi.ai" className="text-blue-600 hover:underline">info@govisibi.ai</a>. We will respond within one month.
            </p>
          </section>

          {/* Security */}
          <section>
            <h2 className="text-2xl font-bold mb-4">10. Data Security</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>Encryption in transit (HTTPS/TLS) and at rest</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Regular security assessments and updates</li>
              <li>Data processing agreements with third-party providers</li>
              <li>Staff training on data protection and security</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              While we take security seriously, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security of your data.
            </p>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-2xl font-bold mb-4">11. Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Our services are not intended for individuals under the age of 16. We do not knowingly collect personal data from children. If you believe we have collected data from a child, please contact us immediately at <a href="mailto:info@govisibi.ai" className="text-blue-600 hover:underline">info@govisibi.ai</a>.
            </p>
          </section>

          {/* Changes to Policy */}
          <section>
            <h2 className="text-2xl font-bold mb-4">12. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The "Last updated" date at the top of this page indicates when the policy was last revised. We encourage you to review this page periodically.
            </p>
          </section>

          {/* Complaints */}
          <section>
            <h2 className="text-2xl font-bold mb-4">13. How to Complain</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have concerns about how we handle your personal data, please contact us first at <a href="mailto:info@govisibi.ai" className="text-blue-600 hover:underline">info@govisibi.ai</a>. We will do our best to resolve your concerns.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              You also have the right to lodge a complaint with the relevant supervisory authority:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold">UK:</p>
              <p className="text-gray-700">Information Commissioner's Office (ICO)</p>
              <p className="text-gray-700">Website: <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ico.org.uk</a></p>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold mb-4">14. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or how we handle your personal data, please contact us:
            </p>
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <p className="font-semibold text-lg mb-3">Visibi Ai</p>
              <p className="text-gray-700 mb-1">167–169 Great Portland Street, Fifth Floor</p>
              <p className="text-gray-700 mb-1">London, W1W 5PF</p>
              <p className="text-gray-700 mb-1">United Kingdom</p>
              <p className="text-gray-700 mt-3">
                <strong>Email:</strong> <a href="mailto:info@govisibi.ai" className="text-blue-600 hover:underline">info@govisibi.ai</a>
              </p>
              <p className="text-gray-700">
                <strong>Website:</strong> <a href="https://govisibi.ai" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">govisibi.ai</a>
              </p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-full md:max-w-[90%] mx-auto px-8 py-12 mt-0 border-t border-gray-200 bg-white rounded-xl rounded-bl-none rounded-br-none z-10">
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
                href="https://x.com/VisibiAI"
                target="_blank"
                rel="noopener noreferrer"
                className="font-space-mono text-sm text-gray-600 hover:text-blue-700 uppercase tracking-wide"
              >
                X
              </a>
              <a
                href="http://linkedin.com/company/visibi-ai"
                target="_blank"
                rel="noopener noreferrer"
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
          <div className="flex gap-6">
            <Link to="/terms-of-use" className="font-space-mono text-xs text-gray-600 hover:text-blue-700 uppercase tracking-wide">
              Terms of Use
            </Link>
            <Link to="/privacy-policy" className="font-space-mono text-xs text-gray-600 hover:text-blue-700 uppercase tracking-wide">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
