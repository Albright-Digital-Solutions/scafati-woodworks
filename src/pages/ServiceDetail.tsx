import { useParams, Navigate, Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { QuoteForm } from '../components/ui/QuoteForm';
import { CheckCircle2, Wrench, ArrowRight } from 'lucide-react';
import { servicesData } from '../data/services';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { SectionDivider } from '../components/ui/SectionDivider';
import { Button } from '../components/ui/Button';

export function ServiceDetail() {
  const { slug } = useParams();
  const service = servicesData.find(s => s.slug === slug);
  const currentIndex = servicesData.findIndex(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Get related services (next 3, wrapping around)
  const relatedServices = [];
  for (let i = 1; i <= 3; i++) {
    relatedServices.push(servicesData[(currentIndex + i) % servicesData.length]);
  }

  return (
    <>
      <SEO
        title={`${service.title} in Dallas–Fort Worth | Scafati Woodworks`}
        description={service.description}
      />

      {/* Hero — warm light banner */}
      <section className="relative pt-40 pb-24 overflow-hidden section-warm">
        <div className="absolute inset-0 grain-overlay" />
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-3xl">
          <ScrollReveal>
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-xs text-wood-400 mb-6">
              <Link to="/services" className="hover:text-gold-600 transition-colors">Services</Link>
              <span>/</span>
              <span className="text-gold-700">{service.title}</span>
            </div>
            <div className="text-gold-600 font-medium tracking-[0.2em] uppercase text-xs mb-5">{service.subtitle}</div>
            <SectionDivider className="mb-6" />
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-wood-900 mb-5">{service.title}</h1>
            <p className="text-base text-wood-500 font-light max-w-2xl mx-auto leading-relaxed">
              {service.description}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 section-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start mb-20">
            <ScrollReveal variant="fadeLeft" className="order-2 lg:order-1 lg:sticky lg:top-24">
              <div className="relative rounded-2xl overflow-hidden shadow-lg shadow-wood-200/30 aspect-[4/3] img-zoom">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-300/50 to-transparent" />
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fadeRight" delay={0.2} className="order-1 lg:order-2">
              <div>
                <h2 className="text-3xl font-serif font-semibold text-wood-900 mb-7">
                  Built for <span className="text-gold-gradient">Your Home</span>
                </h2>

                {/* Construction details card */}
                <div className="bg-cream-50 border border-cream-200 p-6 rounded-xl mb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-full border border-gold-200 bg-gold-50 flex items-center justify-center">
                      <Wrench className="w-4 h-4 text-gold-600" />
                    </div>
                    <h3 className="font-serif font-semibold text-wood-800 text-base">Construction Details</h3>
                  </div>
                  <p className="text-wood-500 text-sm leading-relaxed">
                    {service.tech}
                  </p>
                </div>

                <h3 className="font-serif font-semibold text-wood-800 text-lg mb-5">What's Included</h3>
                <ul className="space-y-4 mb-10">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-wood-600 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button asChild className="shimmer">
                  <Link to="/contact">
                    Get a Free Quote
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="py-20 section-warm border-t border-cream-200 grain-overlay">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal className="mb-12">
            <h2 className="font-serif text-2xl text-wood-800">Related Services</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {relatedServices.map((rel) => (
              <ScrollReveal key={rel.slug}>
                <Link to={`/services/${rel.slug}`} className="group card-warm block rounded-2xl overflow-hidden">
                  <div className="relative h-[200px] img-zoom">
                    <img src={rel.img} alt={rel.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-wood-900/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-serif font-semibold text-wood-900 mb-2 group-hover:text-gold-700 transition-colors">{rel.title}</h3>
                    <div className="inline-flex items-center text-gold-600 text-xs font-semibold uppercase tracking-[0.2em]">
                      Learn More <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform group-hover:translate-x-2" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA with form */}
      <section className="py-24 section-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <ScrollReveal variant="fadeLeft">
              <SectionDivider className="mb-6 justify-start" />
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-wood-900 mb-5">
                Ready to <span className="text-gold-gradient">Get Started?</span>
              </h2>
              <p className="text-wood-500 text-base font-light leading-relaxed">
                Tell us about your project and we'll get back to you with a free quote. No pressure, just a conversation about what you're looking for and how we can help.
              </p>
            </ScrollReveal>
            <ScrollReveal variant="fadeRight" delay={0.2}>
              <QuoteForm />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
