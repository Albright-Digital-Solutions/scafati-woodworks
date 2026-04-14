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
        title="Our Story | Master Craftsmen in Dallas"
        description="At Scafati Woodworks, we believe that true luxury lies in the details. Learn about our 20+ year dedication to uncompromising craftsmanship."
      />

      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/craftsman-workshop.png" alt="Workshop" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-950/90 to-stone-950" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-3xl">
          <ScrollReveal>
            <SectionDivider className="mb-6" />
            <h1 className="text-4xl md:text-6xl font-serif font-semibold text-stone-50 mb-5">
              Our <span className="text-gold-gradient">Story</span>
            </h1>
            <p className="text-lg text-stone-400 font-light">
              Dedicated to the art of fine woodworking, blending traditional techniques with modern precision since 2004.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-stone-950 grain-overlay">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal variant="fadeLeft">
              <div className="relative">
                <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-2xl">
                  <img 
                    src="/images/craftsman-workshop.png" 
                    alt="Master craftsman at work" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold-700/20 rounded-xl -z-10 hidden md:block" />
                <div className="absolute -top-4 -left-4 w-20 h-20 border border-gold-700/10 rounded-xl -z-10 hidden md:block" />
                
                {/* Stats overlay */}
                <div className="absolute -bottom-8 -left-4 md:left-auto md:-right-10 glass rounded-xl p-5 shadow-xl hidden md:block">
                  <div className="text-3xl font-serif font-semibold text-gold-500 mb-1">
                    <CountUp end={20} suffix="+" />
                  </div>
                  <div className="text-stone-400 text-xs uppercase tracking-[0.15em]">Years of Excellence</div>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal variant="fadeRight" delay={0.2}>
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-stone-50 mb-8">
                  A Legacy of <span className="text-gold-gradient">Quality</span>
                </h2>
                <div className="space-y-6 text-stone-400 text-base leading-relaxed font-light">
                  <p>
                    At Scafati Woodworks, we believe that true luxury lies in the details. Founded on a dedication to uncompromising craftsmanship, our Dallas workshop marries time-honored woodworking techniques with modern precision.
                  </p>
                  <p>
                    We do not mass-produce; we meticulously tailor. Every piece we create — from expansive culinary spaces to intimate architectural built-ins — is a functional work of art, designed to endure for generations and crafted to reflect the unique rhythm of your home.
                  </p>
                  <p>
                    We source our materials responsibly, preferring locally milled hardwoods and sustainable suppliers. We believe that the natural beauty of the wood should be the star of the show, enhanced — not hidden — by our designs and finishes.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-stone-900/30 border-y border-stone-800/50 grain-overlay">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <SectionDivider className="mb-6" />
            <h2 className="text-3xl md:text-5xl font-serif font-semibold text-stone-50 mb-5">
              Our <span className="text-gold-gradient">Philosophy</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                num: '01',
                title: 'Uncompromising Quality',
                desc: 'If a joint isn\'t perfect, we do it again. We never cut corners. Period.'
              },
              {
                num: '02',
                title: 'True Customization',
                desc: 'Your piece is built for you, to your exact specifications, style, and space.'
              },
              {
                num: '03',
                title: 'Built to Endure',
                desc: 'We build furniture meant to be used, loved, and passed down through generations.'
              }
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="group p-8 rounded-xl bg-stone-950/50 border border-stone-800/30 hover:border-gold-700/30 transition-all duration-500">
                  <span className="font-serif text-3xl text-gold-600 font-semibold">{item.num}</span>
                  <h3 className="font-serif text-xl font-semibold text-stone-100 mt-4 mb-3 group-hover:text-gold-400 transition-colors">{item.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
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
