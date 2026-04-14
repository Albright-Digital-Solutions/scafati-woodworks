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
        title={`${service.title} in Dallas, TX`}
        description={service.description}
      />

      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={service.img} alt={service.title} className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-950/90 to-stone-950" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-3xl">
          <ScrollReveal>
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-xs text-stone-500 mb-6">
              <Link to="/services" className="hover:text-gold-500 transition-colors">Services</Link>
              <span>/</span>
              <span className="text-gold-600">{service.title}</span>
            </div>
            <div className="text-gold-600 font-medium tracking-[0.2em] uppercase text-xs mb-5">{service.subtitle}</div>
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-stone-50 mb-5">{service.title}</h1>
            <p className="text-base text-stone-400 font-light max-w-2xl mx-auto">
              {service.description}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-stone-950 grain-overlay">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start mb-28">
            <ScrollReveal variant="fadeLeft" className="order-2 lg:order-1 lg:sticky lg:top-24">
              <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-[4/3] img-zoom">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-600/30 to-transparent" />
              </div>
            </ScrollReveal>
            <ScrollReveal variant="fadeRight" delay={0.2} className="order-1 lg:order-2">
              <div>
                <h2 className="text-3xl font-serif font-semibold text-stone-50 mb-7">
                  Uncompromising <span className="text-gold-gradient">Craftsmanship</span>
                </h2>
                
                {/* Tech card */}
                <div className="bg-stone-900/30 border border-stone-800/30 p-6 rounded-xl mb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-full border border-gold-700/30 bg-gold-950/20 flex items-center justify-center">
                      <Wrench className="w-4 h-4 text-gold-600" />
                    </div>
                    <h3 className="font-serif font-semibold text-stone-100 text-base">Cabinet Tech & Construction</h3>
                  </div>
                  <p className="text-stone-400 text-sm leading-relaxed">
                    {service.tech}
                  </p>
                </div>

                <h3 className="font-serif font-semibold text-stone-100 text-lg mb-5">Key Features</h3>
                <ul className="space-y-4 mb-10">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-stone-400 text-sm">
                      <CheckCircle2 className="w-4.5 h-4.5 text-gold-600 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button asChild className="shimmer">
                  <Link to="/contact">
                    Discuss This Project
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="py-20 bg-stone-900/30 border-t border-stone-800/50 grain-overlay">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal className="mb-12">
            <h2 className="font-serif text-2xl text-stone-200">Related Services</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((rel) => (
              <ScrollReveal key={rel.slug}>
                <Link to={`/services/${rel.slug}`} className="group block relative h-[300px] overflow-hidden rounded-xl img-zoom">
                  <img src={rel.img} alt={rel.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent opacity-85" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-lg font-serif font-semibold text-stone-100 group-hover:text-gold-400 transition-colors">{rel.title}</h3>
                    <div className="inline-flex items-center text-gold-600 text-xs font-semibold uppercase tracking-[0.2em] mt-2">
                      Learn More <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform group-hover:translate-x-2" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-stone-950 grain-overlay">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <ScrollReveal variant="fadeLeft">
              <SectionDivider className="mb-6 justify-start" />
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-stone-50 mb-5">
                Begin Your <span className="text-gold-gradient">Project</span>
              </h2>
              <p className="text-stone-400 text-base font-light leading-relaxed">
                Request a private consultation to explore materials, design possibilities, and the process of bringing your bespoke space to life.
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
