import { SEO } from '../components/SEO';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { SectionDivider } from '../components/ui/SectionDivider';
import { CountUp } from '../components/ui/CountUp';
import { ArrowRight } from 'lucide-react';

export function About() {
  return (
    <>
      <SEO
        title="About Scafati Woodworks | Custom Cabinetry in DFW"
        description="Learn about Scafati Woodworks — a family-owned custom cabinetry and woodworking shop serving homeowners throughout the Dallas–Fort Worth area with craftsmanship that lasts generations."
      />

      {/* Hero — warm light banner */}
      <section className="relative pt-40 pb-24 overflow-hidden section-warm">
        <div className="absolute inset-0 grain-overlay" />
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-3xl">
          <ScrollReveal>
            <SectionDivider className="mb-6" />
            <h1 className="text-4xl md:text-6xl font-serif font-semibold text-wood-900 mb-5">
              Our <span className="text-gold-gradient">Story</span>
            </h1>
            <p className="text-lg text-wood-500 font-light">
              Dedicated to the art of custom cabinetry and fine woodworking — built for DFW homeowners who care about quality.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 section-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal variant="fadeLeft">
              <div className="relative">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg shadow-wood-200/40">
                  <img
                    src="/images/craftsman-workshop.png"
                    alt="Master craftsman at work"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold-200 rounded-2xl -z-10 hidden md:block" />
                <div className="absolute -top-4 -left-4 w-20 h-20 border border-cream-300 rounded-2xl -z-10 hidden md:block" />

                {/* Stats badge */}
                <div className="absolute -bottom-8 -left-4 md:left-auto md:-right-10 bg-white border border-cream-200 shadow-lg shadow-wood-200/20 rounded-xl p-5 hidden md:block">
                  <div className="text-3xl font-serif font-semibold text-gold-600 mb-1">
                    <CountUp end={20} suffix="+" />
                  </div>
                  <div className="text-wood-500 text-xs uppercase tracking-[0.15em]">Years of Excellence</div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fadeRight" delay={0.2}>
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-wood-900 mb-8">
                  Built on <span className="text-gold-gradient">Craftsmanship</span>
                </h2>
                <div className="space-y-6 text-wood-600 text-base leading-relaxed font-light">
                  <p>
                    Scafati Woodworks was founded on one simple belief: that the cabinets and built-ins in your home should be as well-made as any other investment you put into it. We're a family-owned custom shop serving homeowners across the Dallas–Fort Worth area.
                  </p>
                  <p>
                    We don't work from stock designs or generic catalogs. Every project starts from scratch — designed around your space, your style, and the way you actually live. Whether it's a kitchen full of custom cabinets, a mudroom built for a busy family, or a single floating shelf done exactly right, we build it to last.
                  </p>
                  <p>
                    We believe natural wood tones, warm finishes, and clean craftsmanship speak for themselves. Our work is built to be used, loved, and passed down — not replaced in five years.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 section-warm border-y border-cream-200 grain-overlay">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <SectionDivider className="mb-6" />
            <h2 className="text-3xl md:text-5xl font-serif font-semibold text-wood-900 mb-5">
              Our <span className="text-gold-gradient">Philosophy</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                num: '01',
                title: 'No Shortcuts',
                desc: 'If a joint isn\'t perfect, we redo it. Every box is square, every door is level, and every finish is clean. That\'s the standard we hold ourselves to on every single project.'
              },
              {
                num: '02',
                title: 'Truly Custom',
                desc: 'Nothing we build comes from a stock design. Your project is drawn up, sized, and built specifically for your home — not adapted from a template.'
              },
              {
                num: '03',
                title: 'Built to Last',
                desc: 'We use solid plywood boxes, quality hardware, and durable finishes. Our work is built for real use over many years — not just to look good in photos.'
              }
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="group p-8 rounded-2xl card-warm">
                  <span className="font-serif text-3xl text-gold-500 font-semibold">{item.num}</span>
                  <h3 className="font-serif text-xl font-semibold text-wood-900 mt-4 mb-3 group-hover:text-gold-700 transition-colors">{item.title}</h3>
                  <p className="text-wood-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-14">
            <Button size="lg" asChild className="shimmer">
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
