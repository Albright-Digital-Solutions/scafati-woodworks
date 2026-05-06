import { SEO } from '../components/SEO';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { SectionDivider } from '../components/ui/SectionDivider';
import { Link } from 'react-router-dom';

export function TermsAndConditions() {
  const lastUpdated = 'May 6, 2026';

  return (
    <>
      <SEO
        title="Terms & Conditions | Scafati Woodworks"
        description="Terms and Conditions for Scafati Woodworks. Review the terms governing use of our website and services."
        canonical="/terms"
      />

      {/* Hero */}
      <section className="relative pt-40 pb-16 section-warm">
        <div className="absolute inset-0 grain-overlay" />
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-2xl">
          <ScrollReveal>
            <SectionDivider className="mb-6" />
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-wood-900 mb-4">
              Terms &amp; <span className="text-gold-gradient">Conditions</span>
            </h1>
            <p className="text-wood-400 text-sm">Last Updated: {lastUpdated}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 section-white">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <ScrollReveal>
            <div className="prose prose-wood max-w-none space-y-10 text-wood-600 text-sm leading-relaxed">

              <div>
                <h2 className="font-serif text-xl font-semibold text-wood-900 mb-3">1. Agreement to Terms</h2>
                <p>
                  By accessing or using the website of Scafati Woodworks ("we," "us," or "our") at{' '}
                  <a href="https://scafati-woodworks.vercel.app" className="text-gold-700 hover:underline">scafatiwoodworks.com</a>,
                  you agree to be bound by these Terms and Conditions. If you do not agree, please do not use this website.
                  These terms apply to all visitors and users of this site.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl font-semibold text-wood-900 mb-3">2. Use of Website</h2>
                <p className="mb-3">You agree to use this website only for lawful purposes. You may not:</p>
                <ul className="list-disc list-inside space-y-2 pl-2">
                  <li>Use the site in any way that violates applicable local, state, or federal laws or regulations</li>
                  <li>Transmit any unsolicited or unauthorized advertising or promotional material</li>
                  <li>Attempt to gain unauthorized access to any portion of the site or its related systems</li>
                  <li>Reproduce, duplicate, or resell any part of this website without express written permission</li>
                  <li>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the site</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-xl font-semibold text-wood-900 mb-3">3. Services and Quotes</h2>
                <p className="mb-3">
                  Information provided through our website, including quote request forms, is for inquiry purposes only.
                  Submission of a quote request does not constitute a binding contract or guarantee of services.
                  All services are subject to a separate written agreement signed by both parties.
                </p>
                <p>
                  Prices, availability, and lead times are subject to change without notice. A formal written estimate will
                  be provided following an in-person or phone consultation and will reflect current pricing.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl font-semibold text-wood-900 mb-3">4. SMS Communications</h2>
                <p className="mb-3">
                  By providing your phone number and checking the SMS opt-in box on our contact or quote request form,
                  you expressly consent to receive text messages from Scafati Woodworks at the phone number provided.
                  These messages may include project updates, scheduling information, follow-up communications,
                  and other information related to your inquiry or project.
                </p>
                <ul className="list-disc list-inside space-y-2 pl-2">
                  <li><strong className="text-wood-800">Message frequency:</strong> Varies based on project activity; typically 1–5 messages per project phase.</li>
                  <li><strong className="text-wood-800">Opt-Out:</strong> Reply STOP at any time to stop receiving SMS messages. A final confirmation message will be sent.</li>
                  <li><strong className="text-wood-800">Help:</strong> Reply HELP for support information or email <a href="mailto:info@scafatiwoodworks.com" className="text-gold-700 hover:underline">info@scafatiwoodworks.com</a>.</li>
                  <li><strong className="text-wood-800">Rates:</strong> Message and data rates may apply. Contact your carrier for details.</li>
                  <li><strong className="text-wood-800">Data:</strong> No mobile information will be shared with third parties for marketing purposes. See our <Link to="/privacy-policy" className="text-gold-700 hover:underline">Privacy Policy</Link> for details.</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-xl font-semibold text-wood-900 mb-3">5. Intellectual Property</h2>
                <p>
                  All content on this website — including text, images, logos, graphics, and design elements — is the
                  property of Scafati Woodworks and is protected by applicable copyright and intellectual property laws.
                  You may not copy, reproduce, distribute, or create derivative works from any content on this site
                  without our prior written consent.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl font-semibold text-wood-900 mb-3">6. Disclaimer of Warranties</h2>
                <p>
                  This website is provided on an "as is" and "as available" basis without warranties of any kind, either
                  express or implied. We do not warrant that the website will be uninterrupted, error-free, or free of
                  viruses or other harmful components. We reserve the right to modify or discontinue the website at any
                  time without notice.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl font-semibold text-wood-900 mb-3">7. Limitation of Liability</h2>
                <p>
                  To the fullest extent permitted by law, Scafati Woodworks shall not be liable for any indirect,
                  incidental, special, consequential, or punitive damages arising out of your use of, or inability to use,
                  this website or its content. Our total liability to you for any claim arising out of your use of the
                  site shall not exceed one hundred dollars ($100).
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl font-semibold text-wood-900 mb-3">8. Third-Party Links</h2>
                <p>
                  Our website may contain links to third-party websites. These links are provided for your convenience only.
                  We have no control over the content of those sites and accept no responsibility for them or for any loss
                  or damage that may arise from your use of them.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl font-semibold text-wood-900 mb-3">9. Governing Law</h2>
                <p>
                  These Terms and Conditions are governed by and construed in accordance with the laws of the State of
                  Texas, without regard to its conflict of law provisions. Any disputes arising under these terms shall
                  be subject to the exclusive jurisdiction of the courts located in Tarrant County or Dallas County, Texas.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl font-semibold text-wood-900 mb-3">10. Changes to These Terms</h2>
                <p>
                  We reserve the right to update these Terms and Conditions at any time. We will indicate the date of the
                  most recent revision at the top of this page. Your continued use of the website after any changes
                  constitutes your acceptance of the revised terms.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl font-semibold text-wood-900 mb-3">11. Contact</h2>
                <p>If you have questions about these Terms and Conditions, please contact us:</p>
                <address className="not-italic mt-3 space-y-1">
                  <p className="font-medium text-wood-800">Scafati Woodworks</p>
                  <p>Dallas–Fort Worth, TX</p>
                  <p>Email: <a href="mailto:info@scafatiwoodworks.com" className="text-gold-700 hover:underline">info@scafatiwoodworks.com</a></p>
                  <p>Phone: <a href="tel:+18174036044" className="text-gold-700 hover:underline">(817) 403-6044</a></p>
                </address>
              </div>

            </div>

            <div className="mt-12 pt-8 border-t border-cream-200 flex flex-wrap gap-4 text-xs text-wood-400">
              <Link to="/privacy-policy" className="hover:text-gold-700 transition-colors">Privacy Policy</Link>
              <span>·</span>
              <Link to="/" className="hover:text-gold-700 transition-colors">Back to Home</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
