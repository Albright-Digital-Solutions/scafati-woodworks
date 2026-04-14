import { SEO } from '../components/SEO';
import { QuoteForm } from '../components/ui/QuoteForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { SectionDivider } from '../components/ui/SectionDivider';

export function Contact() {
  return (
    <>
      <SEO 
        title="Contact Us | Request a Consultation"
        description="Begin your project with Scafati Woodworks. Request a private consultation to explore materials, design possibilities, and bespoke cabinetry."
      />

      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/hero-kitchen-dark.png" alt="Contact hero" className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-950/90 to-stone-950" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-3xl">
          <ScrollReveal>
            <SectionDivider className="mb-6" />
            <h1 className="text-4xl md:text-6xl font-serif font-semibold text-stone-50 mb-5">
              Let's Build Something{' '}
              <span className="text-gold-gradient">Extraordinary</span>
            </h1>
            <p className="text-lg text-stone-400 font-light">
              We invite you to discuss your vision with our master craftsmen. Every masterpiece begins with a conversation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-stone-950 grain-overlay">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <ScrollReveal variant="fadeLeft" className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-2xl font-serif font-semibold text-stone-100 mb-8">Contact Information</h2>
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
                      label: 'Workshop (By Appointment)',
                      value: '123 Craftsman Way\nDallas, TX 75201',
                    },
                    {
                      icon: Clock,
                      label: 'Hours',
                      value: 'Mon - Fri: 8am - 5pm\nSat - Sun: Closed',
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 group">
                      <div className="w-11 h-11 rounded-full border border-stone-800/50 bg-stone-900/30 flex items-center justify-center shrink-0 group-hover:border-gold-700/40 transition-colors">
                        <item.icon className="w-4.5 h-4.5 text-gold-600" />
                      </div>
                      <div>
                        <div className="text-[10px] text-stone-500 uppercase tracking-[0.2em] mb-1">{item.label}</div>
                        {item.href ? (
                          <a href={item.href} className="text-base font-medium text-stone-200 hover:text-gold-500 transition-colors whitespace-pre-line">
                            {item.value}
                          </a>
                        ) : (
                          <div className="text-base font-medium text-stone-200 whitespace-pre-line">
                            {item.value}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-stone-900/30 border border-stone-800/30 p-6 rounded-xl">
                <h3 className="font-serif font-semibold text-stone-100 mb-2">Service Area</h3>
                <p className="text-sm text-stone-500 leading-relaxed">
                  We proudly serve the greater DFW metroplex, including Dallas, Fort Worth, Plano, Frisco, Southlake, and surrounding communities.
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
