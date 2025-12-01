import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Breadcrumbs from '../components/Breadcrumbs'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function TermsOfUse() {
  useEffect(() => {
    document.documentElement.classList.remove('dark')
  }, [])

  return (
    <div className="min-h-screen relative line-pattern">
      <Helmet>
        <title>Terms &amp; Conditions | VISIBI</title>
        <meta name="description" content="Terms and Conditions for Visibi Ai - govisibi.ai. Read our website usage terms, intellectual property, liability limitations, and legal information." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://govisibi.ai/terms-of-use" />
      </Helmet>

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-slate-300/60 bg-[linear-gradient(to_right,#1d4ed80A_1px,transparent_1px),linear-gradient(to_bottom,#1d4ed80A_1px,transparent_1px)] bg-[size:128px_104px]"></div>

      <Navigation />

      <div className="max-w-full md:max-w-[90%] mx-auto px-6 md:px-16 mt-8">
        <Breadcrumbs 
          items={[
            { label: 'Home', path: '/' },
            { label: 'Terms of Use', path: '/terms-of-use' }
          ]}
        />
      </div>

      <main className="max-w-4xl mx-auto px-6 py-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms &amp; Conditions &ndash; Visibi Ai / govisibi.ai</h1>
        <p className="text-gray-600 mb-8"><strong>Last updated:</strong> 1 December 2025</p>
        
        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <p className="text-gray-700 leading-relaxed">
              These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your use of the website
              <strong> govisibi.ai</strong> and any related pages or content (together, the &ldquo;Site&rdquo;).
              By accessing or using the Site, you agree to be bound by these Terms. If you do not agree, you must
              not use the Site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">1. Who we are</h2>
            <p className="text-gray-700 leading-relaxed mb-4">The Site is operated by <strong>Visibi Ai</strong> (&ldquo;Visibi&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;).</p>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li><strong>Company name:</strong> Visibi Ai</li>
              <li><strong>Address:</strong> 167&ndash;169 Great Portland Street, Fifth Floor, London, W1W 5PF, United Kingdom</li>
              <li><strong>Website:</strong> <a href="https://govisibi.ai" className="text-blue-600 hover:underline">https://govisibi.ai</a></li>
              <li><strong>Contact:</strong> <a href="mailto:info@govisibi.ai" className="text-blue-600 hover:underline">info@govisibi.ai</a></li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">Our Privacy Policy explains how we handle personal data. You can find it on the Site.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. What these Terms cover</h2>
            <p className="text-gray-700 leading-relaxed mb-4">These Terms apply to:</p>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>Your access to and use of the <strong>govisibi.ai</strong> marketing website and any content published on it.</li>
              <li>Any forms, contact points, waitlists, newsletter sign-ups or resources you access via the Site.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              These Terms <strong>do not</strong> govern any separate written contract we may enter into with you for paid
              services (for example, a statement of work, order form or master services agreement). If there is a conflict
              between these Terms and a signed contract, the signed contract will prevail for that relationship.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Use of the Site</h2>
            <p className="text-gray-700 leading-relaxed mb-4">You may use the Site only for lawful purposes and in accordance with these Terms.</p>
            <p className="text-gray-700 leading-relaxed mb-4">You must not:</p>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>Use the Site in any way that breaches applicable law or regulation.</li>
              <li>Attempt to gain unauthorised access to the Site, our systems or any related infrastructure.</li>
              <li>Introduce viruses, malware or other harmful code.</li>
              <li>Use automated systems (bots, scrapers, crawlers) to access the Site in a way that could impair performance or security.</li>
              <li>Use the Site to send unsolicited or unauthorised advertising, spam or similar content.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              We reserve the right to suspend or restrict access to the Site (or any part of it) if we reasonably believe you have
              breached these Terms or pose a security or misuse risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Information on the Site (no legal, financial or technical advice)</h2>
            <p className="text-gray-700 leading-relaxed mb-4">The content on the Site is provided for <strong>general information only</strong>. It:</p>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>Is not intended to amount to legal, financial, tax, or other professional advice.</li>
              <li>Is not a guarantee of results or specific outcomes.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Before acting on any information from the Site, you should obtain appropriate professional advice tailored to your
              situation.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              We make reasonable efforts to keep the Site content accurate and up to date, but we do not guarantee:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>That the content is complete, accurate or current at all times; or</li>
              <li>That the Site will be free from errors or omissions.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Accounts, waitlists and early access</h2>
            <p className="text-gray-700 leading-relaxed mb-4">From time to time, we may offer:</p>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li><strong>Waitlists</strong> or early access lists for upcoming products or services.</li>
              <li><strong>Accounts</strong> or login access (for example, via email &ldquo;magic links&rdquo;) for a client control panel or dashboard.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">We may set eligibility requirements and retain discretion over who is granted access.</p>
            <p className="text-gray-700 leading-relaxed mt-4">You must ensure that:</p>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>Any information you provide during sign-up is accurate and kept up to date.</li>
              <li>You keep your email and any login mechanisms secure and do not allow unauthorised access.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              We may suspend or terminate access to an account, waitlist or early access programme if we reasonably believe there is
              misuse, security risk or breach of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Intellectual property</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Unless otherwise stated, all content on the Site is owned by us or licensed to us. This includes:</p>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>Text, copy and marketing content</li>
              <li>Designs, graphics and images</li>
              <li>Logos, branding and trade names</li>
              <li>Layouts, interfaces and underlying code</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              You are granted a <strong>limited, non-exclusive, revocable licence</strong> to access and use the Site for personal
              or internal business purposes only.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">You must not, without our prior written consent:</p>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>
                Copy, reproduce, modify, adapt, distribute, or publicly display any part of the Site content, except as reasonably
                necessary for personal or internal business use.
              </li>
              <li>Use our trade marks, brand names or logos in a way that suggests endorsement or affiliation without permission.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">Any rights not expressly granted in these Terms are reserved.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Third-party links and services</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Site may contain links to third-party websites, tools or services (for example, external articles, social channels,
              booking tools or documentation).
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">We:</p>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>Provide these links for convenience only;</li>
              <li>Do not control and are not responsible for the content, policies or practices of third-party sites or services;</li>
              <li>Do not endorse or make any representations about them.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              If you access any third-party site or service, you do so at your own risk and should review their terms and privacy
              policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. AI, experimental features and limitations</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Visibi Ai focuses on AI visibility and AI agents. Any AI-related content, demos or explanations on the Site are for
              general illustrative purposes only.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">Unless explicitly agreed in a separate written contract:</p>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>
                Any AI examples, outputs or descriptions on the Site are <strong>not</strong> guarantees of performance or suitability
                for your specific use case.
              </li>
              <li>
                AI systems may produce inaccurate or incomplete outputs; you remain responsible for reviewing and validating any use of
                AI in your business.
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              If you engage us to provide AI-related services (such as GEO consulting or AI agents), the terms governing those services
              will be set out in a separate contract.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. No warranty</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To the fullest extent permitted by law, the Site is provided on an <strong>&ldquo;as is&rdquo; and &ldquo;as
              available&rdquo;</strong> basis.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">We do not guarantee that:</p>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>The Site will always be available, uninterrupted or error-free.</li>
              <li>The Site will be free from viruses or other harmful components.</li>
              <li>The content on the Site is complete, accurate or suitable for your specific needs.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              You are responsible for implementing suitable security measures (such as anti-virus software) and ensuring that your use
              of the Site is compatible with your systems.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">10. Limitation of liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nothing in these Terms excludes or limits any liability that cannot be excluded or limited under applicable law (for
              example, liability for death or personal injury caused by negligence, or for fraud).
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">To the fullest extent permitted by law:</p>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>
                We shall not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of
                profits, revenue, business, data or goodwill arising out of or in connection with your use of (or inability to use) the
                Site.
              </li>
              <li>
                Our total aggregate liability arising out of or in connection with your use of the Site shall be limited to
                <strong> £100 GBP</strong>.
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">If you are a consumer using the Site, your statutory rights are not affected by these Terms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">11. Indemnity (for business users)</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you are using the Site on behalf of a business or organisation, you agree to indemnify and hold harmless Visibi Ai
              from and against any claims, liabilities, damages, losses and expenses (including reasonable legal fees) arising out of
              or in connection with:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>Your misuse of the Site;</li>
              <li>Your breach of these Terms; or</li>
              <li>Your violation of any law or third-party rights in relation to your use of the Site.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">12. Data protection and privacy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a> explains how we collect, use and protect personal data, including how we
              use cookies and analytics (such as Google Analytics 4). By using the Site, you acknowledge that we will handle personal
              data in accordance with our Privacy Policy.
            </p>
            <p className="text-gray-700 leading-relaxed">You should read the Privacy Policy alongside these Terms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">13. Changes to the Site and these Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may update or change the Site from time to time, including adding, removing or modifying content or features.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">We may also update these Terms to reflect:</p>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>Changes in law or regulatory requirements;</li>
              <li>Updates to our services or business; or</li>
              <li>Other operational reasons.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              When we make changes, we will update the &ldquo;Last updated&rdquo; date at the top of these Terms. The updated Terms
              will apply from the date of publication on the Site. Your continued use of the Site after changes are made constitutes
              acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">14. Suspension or withdrawal of the Site</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not guarantee that the Site, or any content on it, will always be available. We may suspend, withdraw or restrict
              the availability of all or any part of the Site for business or operational reasons.
            </p>
            <p className="text-gray-700 leading-relaxed">We will try to give reasonable notice of any significant suspension or withdrawal where practical.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">15. Governing law and jurisdiction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms, and any dispute or claim arising out of or in connection with them or your use of the Site, are governed by
              the laws of <strong>England and Wales</strong>, without regard to conflict of law principles.
            </p>
            <p className="text-gray-700 leading-relaxed">
              You agree that the courts of <strong>England and Wales</strong> will have exclusive jurisdiction to settle any such
              disputes or claims, subject to any mandatory consumer protection rules that apply in your country of residence (if you
              are a consumer).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">16. Contact</h2>
            <p className="text-gray-700 leading-relaxed mb-4">If you have any questions about these Terms or the Site, you can contact us at:</p>
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <p className="text-gray-700 mb-1"><strong>Email:</strong> <a href="mailto:info@govisibi.ai" className="text-blue-600 hover:underline">info@govisibi.ai</a></p>
              <p className="text-gray-700"><strong>Address:</strong> Visibi Ai, 167&ndash;169 Great Portland Street, Fifth Floor, London, W1W 5PF, United Kingdom</p>
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
