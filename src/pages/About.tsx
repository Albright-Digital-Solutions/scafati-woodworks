import { SEO, localBusinessSchema, buildBreadcrumbSchema } from '../components/SEO';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ui/ScrollReveal';
import { SectionDivider } from '../components/ui/SectionDivider';
import { CountUp } from '../components/ui/CountUp';
import { ArrowRight, Hammer, Layers, ShieldCheck } from 'lucide-react';

const breadcrumbs = buildBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Our Story', path: '/about' },
]);

export function About() {
  return (
    <>
      <SEO
        title="Our Story | Scafati Woodworks — Custom Cabinetry in DFW"
        description="Scafati Woodworks is rooted in family legacy and a lifelong passion for craftsmanship. Built on the values of precision, integrity, and pride in doing things the right way — serving homeowners throughout Dallas–Fort Worth."
        canonical="/about"
        schema={localBusinessSchema}
        additionalSchemas={[breadcrumbs]}
      />

      {/* ── HERO ── */}
      <section className="relative pt-44 pb-28 overflow-hidden section-warm">
        <div className="absolute inset-0 grain-overlay" />
        {/* Subtle decorative arc */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-white" style={{ clipPath: 'ellipse(70% 100% at 50% 100%)' }} />

        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-3xl">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-300 bg-gold-50 text-gold-700 text-xs font-medium tracking-widest uppercase mb-8">
              Family · Tradition · Craftsmanship
            </div>
            <SectionDivider className="mb-6" />
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-wood-900 leading-[1.05] mb-6">
              Our <span className="text-gold-gradient italic font-light">Story</span>
            </h1>
            <p className="text-xl text-wood-500 font-light leading-relaxed">
              Built on legacy. Crafted with precision.
            </p>
          </ScrollReveal>
        </div>
      </section>


      {/* ── MAIN STORY ── */}
      <section className="py-24 section-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">

            {/* Image column */}
            <ScrollReveal variant="fadeLeft">
              <div className="relative">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl shadow-wood-200/30 img-zoom">
                  <img
                    src="/images/craftsman-workshop.png"
                    alt="Scafati Woodworks craftsman at work in the shop"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Decorative corner accents */}
                <div className="absolute -bottom-5 -right-5 w-28 h-28 border border-gold-200 rounded-2xl -z-10 hidden md:block" />
                <div className="absolute -top-4 -left-4 w-20 h-20 border border-cream-300 rounded-2xl -z-10 hidden md:block" />

                {/* Floating stat card */}
                <div className="absolute -bottom-8 md:-right-10 left-4 md:left-auto bg-white border border-cream-200 shadow-lg shadow-wood-200/20 rounded-xl px-6 py-5 hidden md:block">
                  <div className="text-4xl font-serif font-semibold text-gold-600 mb-1">
                    <CountUp end={20} suffix="+" />
                  </div>
                  <div className="text-wood-400 text-xs uppercase tracking-[0.15em]">Years of Excellence</div>
                </div>
              </div>
            </ScrollReveal>

            {/* Story text column */}
            <ScrollReveal variant="fadeRight" delay={0.2}>
              <div className="lg:pt-4">
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-wood-900 mb-8 leading-snug">
                  Scafati Woodworks is more than a name —{' '}
                  <span className="text-gold-gradient">it's a legacy.</span>
                </h2>

                <div className="space-y-6 text-wood-600 text-base leading-relaxed font-light">
                  <p>
                    My grandfather, a Scafati, worked in construction and carried his tools with
                    honor. Some of my earliest memories are standing beside him, fascinated by the
                    weight of a hammer, the sound of a saw, and the quiet confidence that came from
                    knowing how to build something with your hands. While other kids played with
                    toys, I played with tools — learning what each one did, how it felt, and why
                    craftsmanship mattered.
                  </p>
                  <p>
                    Those moments planted a lifelong appreciation for the trade. What began as
                    curiosity grew into skill and, eventually, a passion for woodworking. Over time,
                    that passion turned into a commitment: to build with intention, precision, and
                    integrity — just like my grandfather did.
                  </p>
                  <p>
                    Today, Scafati Woodworks reflects that heritage. Every cabinet, built-in, and
                    custom piece is crafted with the same respect for quality and detail that first
                    inspired me as a kid. We don't believe in shortcuts — only thoughtful design,
                    solid materials, and work that stands the test of time.
                  </p>

                  {/* Pull quote */}
                  <blockquote className="border-l-2 border-gold-400 pl-6 py-2 my-8">
                    <p className="font-serif text-lg text-wood-800 italic leading-relaxed">
                      "This is craftsmanship rooted in family, tradition, and pride in doing
                      things the right way."
                    </p>
                  </blockquote>
                </div>

                <div className="mt-10">
                  <Button size="lg" asChild className="shimmer">
                    <Link to="/contact">
                      Start Your Project
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>


      {/* ── VALUES ── */}
      <section className="py-24 section-warm border-y border-cream-200 grain-overlay">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
            <SectionDivider className="mb-6" />
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-wood-900 mb-4">
              What We <span className="text-gold-gradient">Stand For</span>
            </h2>
            <p className="text-wood-500 font-light">
              The same values my grandfather carried into every job site guide our work today.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Hammer,
                num: '01',
                title: 'No Shortcuts',
                desc: "If a joint isn't perfect, we redo it. Every box is square, every door is level, and every finish is clean. That's the standard we hold ourselves to on every single project — because it's the standard my grandfather held himself to.",
              },
              {
                icon: Layers,
                num: '02',
                title: 'Truly Custom',
                desc: 'Nothing we build comes from a stock design. Every project is drawn up, sized, and built specifically for your home and the way you actually live in it — not adapted from a catalog template.',
              },
              {
                icon: ShieldCheck,
                num: '03',
                title: 'Built to Last',
                desc: 'We use solid materials, quality hardware, and durable finishes. Our work is built for real use over many years — not just to look good in photos. We build things meant to be passed down.',
              },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="group p-8 rounded-2xl card-warm h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gold-50 border border-gold-200 flex items-center justify-center shrink-0 group-hover:border-gold-400 transition-colors duration-300">
                      <item.icon className="w-5 h-5 text-gold-600" />
                    </div>
                    <span className="font-serif text-2xl text-gold-400 font-light">{item.num}</span>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-wood-900 mb-3 group-hover:text-gold-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-wood-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>


      {/* ── CTA ── */}
      <section className="py-24 section-white">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl">
          <ScrollReveal>
            <SectionDivider className="mb-8" />
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-wood-900 mb-5">
              Ready to Work <span className="text-gold-gradient">Together?</span>
            </h2>
            <p className="text-wood-500 font-light leading-relaxed mb-10">
              Whether you have a full kitchen in mind or a single built-in you've been putting off,
              let's talk about your project. No pressure — just a conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="shimmer h-14 px-10 text-base">
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="h-14 px-8 text-base">
                <Link to="/services">
                  Explore Our Services
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
