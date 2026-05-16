import { SEO } from '../components/SEO';
import { QuoteForm } from '../components/ui/QuoteForm';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { SectionDivider } from '../components/ui/SectionDivider';
import { Button } from '../components/ui/Button';

export function Closets() {
  return (
    <>
      <SEO 
        title="Custom Closets & Luxury Wardrobes in Dallas"
        description="Experience the ultimate in organization with bespoke custom closets and luxury dressing rooms crafted by Scafati Woodworks in Dallas."
      />

      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/luxury-closet.png" alt="Closets hero" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-950/90 to-stone-950" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-3xl">
          <ScrollReveal>
            <div className="text-gold-600 font-medium tracking-[0.2em] uppercase text-xs mb-5">Service Silo</div>
            <h1 className="text-4xl md:text-6xl font-serif font-semibold text-stone-50 mb-5">
              Custom Closets & <span className="text-gold-gradient">Wardrobes</span>
            </h1>
            <p className="text-lg text-stone-400 font-light">
              Elevate your daily routine with luxury storage solutions. We design and build high-end custom closets and dressing rooms.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-stone-950 grain-overlay">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-28">
            <ScrollReveal variant="fadeLeft">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-stone-50 mb-7">
                  The Ultimate Dressing <span className="text-gold-gradient">Experience</span>
                </h2>
                <p className="text-stone-400 text-base mb-8 leading-relaxed font-light">
                  A luxury closet is more than just storage; it is a meticulously organized sanctuary. We utilize premium materials, integrated lighting, and specialized hardware to create wardrobes that display your collection beautifully while maximizing space.
                </p>
                <ul className="space-y-4 mb-10">
                  {[
                    'Bespoke walk-in closets and dressing rooms',
                    'Integrated LED display and ambient lighting',
                    'Custom jewelry drawers and accessory islands',
                    'Premium wood finishes and glass display doors'
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-stone-400 text-sm">
                      <CheckCircle2 className="w-4.5 h-4.5 text-gold-600 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="shimmer">
                  <Link to="/portfolio">
                    View Closet Projects
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="fadeRight" delay={0.2}>
              <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-[4/3] img-zoom">
                <img 
                  src="/images/luxury-closet.png" 
                  alt="Luxury custom closet and wardrobe" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-600/30 to-transparent" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-stone-900/30 border-t border-stone-800/50 grain-overlay">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <ScrollReveal variant="fadeLeft">
              <SectionDivider className="mb-6 justify-start" />
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-stone-50 mb-5">
                Begin Your Closet <span className="text-gold-gradient">Project</span>
              </h2>
              <p className="text-stone-400 text-base font-light leading-relaxed">
                Request a private consultation to design the luxury dressing room you've always dreamed of.
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
