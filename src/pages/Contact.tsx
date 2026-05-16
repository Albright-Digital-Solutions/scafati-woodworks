import { SEO } from '../components/SEO';
import { QuoteForm } from '../components/ui/QuoteForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { SectionDivider } from '../components/ui/SectionDivider';

export function Contact() {
  return (
    <>
      <SEO
        title="Contact Us | Get a Free Quote | Scafati Woodworks"
        description="Contact Scafati Woodworks for a free quote on custom cabinets, built-ins, vanities, and more. Serving homeowners throughout the Dallas–Fort Worth area."
      />

      {/* Hero — warm light banner */}
      <section className="relative pt-40 pb-24 overflow-hidden section-warm">
        <div className="absolute inset-0 grain-overlay" />
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-3xl">
          <ScrollReveal>
            <SectionDivider className="mb-6" />
            <h1 className="text-4xl md:text-6xl font-serif font-semibold text-wood-900 mb-5">
              Let's Talk About{' '}
              <span className="text-gold-gradient">Your Project</span>
            </h1>
            <p className="text-lg text-wood-500 font-light">
              Tell us what you have in mind and we'll get back to you with a free quote. No pressure — just a conversation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 section-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <ScrollReveal variant="fadeLeft" className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-2xl font-serif font-semibold text-wood-900 mb-8">Contact Information</h2>
                <div className="space-y-6">
                  {[
                    {
                      icon: Phone,
                      label: 'Call or Text',
                      value: '(817) 403-6044',
                      href: 'tel:+18174036044',
                    },
                    {
                      icon: Mail,
                      label: 'Email',
                      value: 'info@scafatiwoodworks.com',
                      href: 'mailto:info@scafatiwoodworks.com',
                    },
                    {
                      icon: MapPin,
                      label: 'Service Area',
                      value: 'Dallas–Fort Worth Metroplex',
                    },
                    {
                      icon: Clock,
                      label: 'Hours',
                      value: 'Mon – Fri: 8am – 5pm\nSat: By Appointment',
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 group">
                      <div className="w-11 h-11 rounded-full border border-cream-200 bg-cream-50 flex items-center justify-center shrink-0 group-hover:border-gold-300 transition-colors">
                        <item.icon className="w-4 h-4 text-gold-600" />
                      </div>
                      <div>
                        <div className="text-[10px] text-wood-400 uppercase tracking-[0.2em] mb-1">{item.label}</div>
                        {item.href ? (
                          <a href={item.href} className="text-base font-medium text-wood-800 hover:text-gold-700 transition-colors whitespace-pre-line">
                            {item.value}
                          </a>
                        ) : (
                          <div className="text-base font-medium text-wood-800 whitespace-pre-line">
                            {item.value}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-cream-50 border border-cream-200 p-6 rounded-xl">
                <h3 className="font-serif font-semibold text-wood-900 mb-2">Service Area</h3>
                <p className="text-sm text-wood-500 leading-relaxed">
                  We proudly serve the greater DFW metroplex including Dallas, Fort Worth, Plano, Frisco, Southlake, Keller, and surrounding communities.
                </p>
              </div>
            </ScrollReveal>

            {/* Form */}
            <ScrollReveal variant="fadeRight" delay={0.2} className="lg:col-span-2">
              <QuoteForm />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
