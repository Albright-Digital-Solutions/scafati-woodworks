import { SEO } from '../components/SEO';
import { QuoteForm } from '../components/ui/QuoteForm';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { SectionDivider } from '../components/ui/SectionDivider';
import { Button } from '../components/ui/Button';

export function Kitchens() {
  return (
    <>
      <SEO 
        title="Luxury Custom Kitchen Cabinetry in Dallas"
        description="Elevate your culinary space with bespoke kitchen cabinetry. Scafati Woodworks designs and fabricates high-end, custom kitchen cabinets in the DFW area."
      />

      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/luxury-kitchen.png" alt="Kitchen hero" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-950/90 to-stone-950" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-3xl">
          <ScrollReveal>
            <div className="text-gold-600 font-medium tracking-[0.2em] uppercase text-xs mb-5">Service Silo</div>
            <h1 className="text-4xl md:text-6xl font-serif font-semibold text-stone-50 mb-5">
              Custom Kitchen <span className="text-gold-gradient">Cabinetry</span>
            </h1>
            <p className="text-lg text-stone-400 font-light">
              The kitchen is the heart of your home. We craft bespoke culinary spaces that marry flawless aesthetics with unparalleled functionality.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Details */}
      <section className="py-24 bg-stone-950 grain-overlay">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-28">
            <ScrollReveal variant="fadeLeft">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-stone-50 mb-7">
                  Uncompromising Quality <span className="text-gold-gradient">&</span> Design
                </h2>
                <p className="text-stone-400 text-base mb-8 leading-relaxed font-light">
                  Unlike modular or semi-custom options, our luxury kitchen cabinets are built from the ground up to your exact specifications. We source premium hardwoods and employ traditional joinery techniques to ensure your kitchen endures decades of daily use.
                </p>
                <ul className="space-y-4 mb-10">
                  {[
                    'Premium hardwood doors and face frames',
                    'Solid wood, dovetail drawer boxes',
                    'State-of-the-art soft-close hardware',
                    'Custom-tailored interior organizers and pull-outs'
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-stone-400 text-sm">
                      <CheckCircle2 className="w-4.5 h-4.5 text-gold-600 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="shimmer">
                  <Link to="/portfolio">
                    View Kitchen Projects
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="fadeRight" delay={0.2}>
              <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-[4/3] img-zoom">
                <img 
                  src="/images/luxury-kitchen.png" 
                  alt="Luxury custom kitchen cabinetry" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-600/30 to-transparent" />
              </div>
            </ScrollReveal>
          </div>

          {/* Second kitchen image */}
          <ScrollReveal>
            <div className="relative rounded-xl overflow-hidden aspect-[21/9] img-zoom mb-28">
              <img 
                src="/images/hero-kitchen-dark.png" 
                alt="Dark luxury kitchen at twilight" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-stone-950/60 via-transparent to-stone-950/60" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 bg-gradient-to-t from-stone-950/80 to-transparent">
                <p className="text-gold-500 text-xs uppercase tracking-[0.2em] mb-2">Featured Commission</p>
                <h3 className="font-serif text-2xl md:text-3xl text-stone-100">The Twilight Penthouse Kitchen</h3>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-stone-900/30 border-t border-stone-800/50 grain-overlay">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <ScrollReveal variant="fadeLeft">
              <SectionDivider className="mb-6 justify-start" />
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-stone-50 mb-5">
                Begin Your Kitchen <span className="text-gold-gradient">Project</span>
              </h2>
              <p className="text-stone-400 text-base font-light leading-relaxed">
                Request a private consultation to explore materials, design possibilities, and the process of bringing your bespoke kitchen to life.
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
