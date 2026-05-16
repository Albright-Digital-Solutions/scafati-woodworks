import { SEO } from '../components/SEO';
import { QuoteForm } from '../components/ui/QuoteForm';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { SectionDivider } from '../components/ui/SectionDivider';
import { Button } from '../components/ui/Button';

export function BuiltIns() {
  return (
    <>
      <SEO 
        title="Architectural Built-ins & Library Shelving in Dallas"
        description="Transform your space with custom architectural built-ins, library shelving, and entertainment centers by Scafati Woodworks in Dallas."
      />

      {/* Hero — warm light banner */}
      <section className="relative pt-40 pb-24 overflow-hidden section-warm">
        <div className="absolute inset-0 grain-overlay" />
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-3xl">
          <ScrollReveal>
            <div className="text-gold-600 font-medium tracking-[0.2em] uppercase text-xs mb-5">Custom Woodworking</div>
            <SectionDivider className="mb-6" />
            <h1 className="text-4xl md:text-6xl font-serif font-semibold text-wood-900 mb-5">
              Custom <span className="text-gold-gradient">Built-Ins</span>
            </h1>
            <p className="text-lg text-wood-500 font-light">
              Seamlessly integrated custom built-ins — libraries, entertainment walls, and storage — designed to look like they were always part of your home.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 section-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-20">
            <ScrollReveal variant="fadeLeft" className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-lg shadow-wood-200/30 aspect-[4/3] img-zoom">
                <img 
                  src="/images/library-builtins.png" 
                  alt="Custom built-ins" 
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal variant="fadeRight" delay={0.2} className="order-1 lg:order-2">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-wood-900 mb-7">
                  Built for <span className="text-gold-gradient">Your Space</span>
                </h2>
                <p className="text-wood-500 text-base mb-8 leading-relaxed font-light">
                  Whether you want a floor-to-ceiling library, a custom entertainment wall, or a mudroom that keeps the whole family organized — our built-ins are designed from scratch for your exact room and finished to match your home's style.
                </p>
                <ul className="space-y-4 mb-10">
                  {[
                    'Floor-to-ceiling custom shelving and libraries',
                    'Entertainment walls with wire management',
                    'Mudroom lockers and bench seating',
                    'Home office and window seat built-ins',
                    'Seamless trim and molding integration'
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-wood-600 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="shimmer">
                  <Link to="/portfolio">
                    View Built-in Projects
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Mudroom feature banner */}
          <ScrollReveal>
            <div className="relative rounded-2xl overflow-hidden aspect-[21/9] img-zoom mb-4 shadow-sm shadow-wood-200/30">
              <img 
                src="/images/mudroom-builtins.png" 
                alt="Custom mudroom built-ins" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-wood-900/40 via-transparent to-wood-900/40" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 bg-gradient-to-t from-wood-900/70 to-transparent">
                <p className="text-gold-300 text-xs uppercase tracking-[0.2em] mb-2">Featured Project</p>
                <h3 className="font-serif text-2xl md:text-3xl text-white">Southlake Family Mudroom</h3>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 section-warm border-t border-cream-200 grain-overlay">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <ScrollReveal variant="fadeLeft">
              <SectionDivider className="mb-6 justify-start" />
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-wood-900 mb-5">
                Start Your Built-in <span className="text-gold-gradient">Project</span>
              </h2>
              <p className="text-wood-500 text-base font-light leading-relaxed">
                Tell us about your space and what you're envisioning — we'll get back to you with a free quote.
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
