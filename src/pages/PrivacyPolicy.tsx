import { SEO } from '../components/SEO';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { SectionDivider } from '../components/ui/SectionDivider';
import { Link } from 'react-router-dom';

export function PrivacyPolicy() {
  const lastUpdated = 'May 6, 2026';

  return (
    <>
      <SEO
        title="Privacy Policy | Scafati Woodworks"
        description="Privacy Policy for Scafati Woodworks. Learn how we collect, use, and protect your personal information."
        canonical="/privacy-policy"
      />

      {/* Hero */}
      <section className="relative pt-40 pb-16 section-warm">
        <div className="absolute inset-0 grain-overlay" />
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-2xl">
          <ScrollReveal>
            <SectionDivider className="mb-6" />
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-wood-900 mb-4">
              Privacy <span className="text-gold-gradient">Policy</span>
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
                <h2 className="font-serif text-xl font-semibold text-wood-900 mb-3">1. Introduction</h2>
                <p>
                  Scafati Woodworks ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy
                  explains how we collect, use, disclose, and safeguard your information when you visit our website
                  at <a href="https://scafati-woodworks.vercel.app" className="text-gold-700 hover:underline">scafatiwoodworks.com</a> or
                  contact us through any of our communication channels, including SMS/text messaging.
                  Please read this policy carefully. If you disagree with its terms, please stop using our site.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl font-semibold text-wood-900 mb-3">2. Information We Collect</h2>
                <p className="mb-3">We may collect the following types of personal information:</p>
                <ul className="list-disc list-inside space-y-2 pl-2">
                  <li><strong className="text-wood-800">Contact Information:</strong> Name, email address, phone number, and service address.</li>
                  <li><strong className="text-wood-800">Project Information:</strong> Details about your project, including type of service requested, budget range, and any notes you provide.</li>
                  <li><strong className="text-wood-800">Communication Data:</strong> Records of your communications with us, including emails, SMS messages, and form submissions.</li>
                  <li><strong className="text-wood-800">Usage Data:</strong> IP address, browser type, pages visited, and time spent on our site (collected automatically via analytics tools).</li>
                  <li><strong className="text-wood-800">SMS Opt-In Data:</strong> If you opt into SMS communications, we record your consent, the date/time of consent, and your phone number.</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-xl font-semibold text-wood-900 mb-3">3. How We Use Your Information</h2>
                <p className="mb-3">We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 pl-2">
                  <li>Respond to your quote requests and project inquiries</li>
                  <li>Send project updates, estimates, and scheduling information</li>
                  <li>Send SMS messages about your project if you have opted in</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
                <p className="mt-3">
                  We will never use your information for purposes unrelated to your project or inquiry without your explicit consent.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl font-semibold text-wood-900 mb-3">4. SMS / Text Message Communications</h2>
                <p className="mb-3">
                  By opting in to SMS communications on our contact form, you consent to receive text messages from Scafati Woodworks
                  regarding your project inquiry, scheduling, and follow-up communications. Message frequency varies based on project status.
                </p>
                <ul className="list-disc list-inside space-y-2 pl-2">
                  <li><strong className="text-wood-800">Opt-Out:</strong> You may opt out of SMS communications at any time by replying STOP to any message. You will receive one confirmation message and no further SMS communications.</li>
                  <li><strong className="text-wood-800">Help:</strong> Reply HELP for assistance or contact us at <a href="mailto:info@scafatiwoodworks.com" className="text-gold-700 hover:underline">info@scafatiwoodworks.com</a>.</li>
                  <li><strong className="text-wood-800">Message Rates:</strong> Message and data rates may apply depending on your carrier and plan.</li>
                  <li><strong className="text-wood-800">Data Sharing:</strong> Your SMS opt-in data and phone number will not be shared with or sold to third parties for marketing purposes.</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-xl font-semibold text-wood-900 mb-3">5. Sharing Your Information</h2>
                <p className="mb-3">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following limited circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-2">
                  <li>With trusted service providers who assist in operating our website or conducting our business (e.g., email services, analytics), under confidentiality agreements</li>
                  <li>When required by law or to respond to valid legal process</li>
                  <li>To protect the rights, property, or safety of Scafati Woodworks or others</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-xl font-semibold text-wood-900 mb-3">6. Data Retention</h2>
                <p>
                  We retain your personal information only as long as necessary to fulfill the purposes described in this policy
                  or as required by applicable law. Project-related records are typically retained for seven (7) years following
                  project completion for warranty and legal purposes.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl font-semibold text-wood-900 mb-3">7. Cookies and Analytics</h2>
                <p>
                  Our website may use cookies and similar tracking technologies to improve your experience and analyze site traffic.
                  You may disable cookies through your browser settings, though some features of the site may not function properly as a result.
                  We may use third-party analytics services such as Google Analytics to understand how visitors use our site.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl font-semibold text-wood-900 mb-3">8. Your Rights</h2>
                <p className="mb-3">Depending on your location, you may have the right to:</p>
                <ul className="list-disc list-inside space-y-2 pl-2">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt out of marketing communications at any time</li>
                </ul>
                <p className="mt-3">
                  To exercise any of these rights, contact us at <a href="mailto:info@scafatiwoodworks.com" className="text-gold-700 hover:underline">info@scafatiwoodworks.com</a>.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl font-semibold text-wood-900 mb-3">9. Security</h2>
                <p>
                  We implement commercially reasonable technical and organizational measures to protect your personal information
                  from unauthorized access, disclosure, or destruction. However, no transmission over the internet or electronic
                  storage system is completely secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl font-semibold text-wood-900 mb-3">10. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of material changes by updating the
                  "Last Updated" date at the top of this page. Your continued use of our website after any changes constitutes
                  your acceptance of the updated policy.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl font-semibold text-wood-900 mb-3">11. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us:</p>
                <address className="not-italic mt-3 space-y-1">
                  <p className="font-medium text-wood-800">Scafati Woodworks</p>
                  <p>Dallas–Fort Worth, TX</p>
                  <p>Email: <a href="mailto:info@scafatiwoodworks.com" className="text-gold-700 hover:underline">info@scafatiwoodworks.com</a></p>
                  <p>Phone: <a href="tel:+18174036044" className="text-gold-700 hover:underline">(817) 403-6044</a></p>
                </address>
              </div>

            </div>

            <div className="mt-12 pt-8 border-t border-cream-200 flex flex-wrap gap-4 text-xs text-wood-400">
              <Link to="/terms" className="hover:text-gold-700 transition-colors">Terms &amp; Conditions</Link>
              <span>·</span>
              <Link to="/" className="hover:text-gold-700 transition-colors">Back to Home</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
