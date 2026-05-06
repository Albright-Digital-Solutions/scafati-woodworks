import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Star, Award, Shield, ArrowDown, CheckCircle2 } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Button } from '../components/ui/Button';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ui/ScrollReveal';
import { SectionDivider } from '../components/ui/SectionDivider';
import { CountUp } from '../components/ui/CountUp';

export function Home() {
  return (
    <>
      <SEO
        title="Custom Cabinetry & Fine Woodworking in Dallas–Fort Worth"
        description="Scafati Woodworks crafts premium custom cabinets, built-ins, entertainment centers, vanities, and storage solutions for homeowners throughout the DFW area."
        schema={{
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          "name": "Scafati Woodworks",
          "url": "https://scafatiwoodworks.com",
          "telephone": "+18174036044",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Dallas",
            "addressRegion": "TX",
            "addressCountry": "US"
          },
          "priceRange": "$$$"
        }}
      />

      {/* ━━━ HERO ━━━ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image with warm light overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/luxury-kitchen.png"
            alt="Custom kitchen cabinetry by Scafati Woodworks"
            className="w-full h-full object-cover"
          />
          {/* Light warm overlay — let the natural wood tones breathe */}
          <div className="absolute inset-0 bg-gradient-to-r from-cream-50/95 via-cream-50/80 to-cream-50/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-cream-50/60 via-transparent to-transparent" />
          <div className="absolute inset-0 grain-overlay" />
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-2xl pt-24">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-300 bg-gold-50 text-gold-700 text-xs font-medium tracking-widest uppercase mb-8"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
                Dallas–Fort Worth, Texas
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-5xl md:text-6xl lg:text-[5rem] font-serif font-semibold text-wood-900 leading-[1.05] mb-6 tracking-tight"
              >
                Custom Cabinetry{' '}
                <span className="text-gold-gradient">&</span>{' '}
                <span className="italic font-light text-wood-700">Fine Woodworking</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="text-lg md:text-xl text-wood-600 mb-10 leading-relaxed max-w-lg font-light"
              >
                Scafati Woodworks builds fully custom cabinets, built-ins, and storage
                solutions for homeowners across the DFW area — crafted with precision, installed with care.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button size="lg" asChild className="shimmer h-14 px-10 text-base">
                  <Link to="/contact">Request a Free Quote</Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="h-14 px-8 text-base">
                  <Link to="/portfolio">
                    View Our Work
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        >
          <span className="text-wood-400 text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-4 h-4 text-gold-500/70" />
          </motion.div>
        </motion.div>
      </section>


      {/* ━━━ TRUST BAR ━━━ */}
      <section className="py-14 bg-white border-y border-cream-200 grain-overlay">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 text-center">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full border border-gold-200 bg-gold-50 flex items-center justify-center">
                  <Award className="w-6 h-6 text-gold-600" />
                </div>
                <div className="text-left">
                  <div className="text-3xl font-serif font-semibold text-wood-900">
                    <CountUp end={20} suffix="+" />
                  </div>
                  <div className="text-wood-400 text-xs uppercase tracking-[0.2em]">Years Experience</div>
                </div>
              </div>

              <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-cream-300 to-transparent" />

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full border border-gold-200 bg-gold-50 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-gold-600" />
                </div>
                <div className="text-left">
                  <div className="text-3xl font-serif font-semibold text-wood-900">
                    <CountUp end={500} suffix="+" />
                  </div>
                  <div className="text-wood-400 text-xs uppercase tracking-[0.2em]">Projects Completed</div>
                </div>
              </div>

              <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-cream-300 to-transparent" />

              <div className="flex items-center gap-4">
                <div className="flex gap-0.5 mr-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <div className="text-left">
                  <div className="text-3xl font-serif font-semibold text-wood-900">5.0</div>
                  <div className="text-wood-400 text-xs uppercase tracking-[0.2em]">Client Rating</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>


      {/* ━━━ CORE SERVICES — 3 hero cards ━━━ */}
      <section className="py-28 section-warm grain-overlay">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-20">
            <SectionDivider className="mb-6" />
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-wood-900 mb-5">
              What We <span className="text-gold-gradient">Build</span>
            </h2>
            <p className="text-wood-500 text-lg font-light">
              Custom cabinetry, built-ins, and storage solutions — designed and built right here in DFW.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Custom Cabinets & Built-Ins',
                desc: 'Kitchens, built-in libraries, entertainment walls, and storage — fully custom, floor to ceiling.',
                img: '/images/library-builtins.png',
                link: '/built-ins'
              },
              {
                title: 'Storage & Organization',
                desc: 'Pantry systems, mudrooms, laundry rooms, and closet systems designed around your life.',
                img: '/images/mudroom-builtins.png',
                link: '/services'
              },
              {
                title: 'Vanities & Accent Details',
                desc: 'Bathroom vanities, floating shelves, accent walls, trim work, and custom woodworking projects.',
                img: '/images/floating-vanity.png',
                link: '/services'
              }
            ].map((service, i) => (
              <StaggerItem key={i}>
                <Link to={service.link} className="group block relative h-[520px] overflow-hidden rounded-2xl img-zoom shadow-md shadow-wood-200/30">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Light-friendly gradient — only darkens bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-wood-950/80 via-wood-900/20 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-500" />

                  {/* Top gold line on hover */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-2xl md:text-2xl font-serif font-semibold text-white mb-3 group-hover:text-gold-200 transition-colors duration-500">
                      {service.title}
                    </h3>
                    <p className="text-stone-300 text-sm leading-relaxed mb-5 max-w-xs opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                      {service.desc}
                    </p>
                    <div className="inline-flex items-center text-gold-300 text-xs font-semibold uppercase tracking-[0.2em]">
                      Explore
                      <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>


      {/* ━━━ FULL SERVICE LIST ━━━ */}
      <section className="py-24 section-white">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <SectionDivider className="mb-6" />
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-wood-900 mb-4">
              Everything We <span className="text-gold-gradient">Offer</span>
            </h2>
            <p className="text-wood-500 font-light">
              From a single floating shelf to a full-home cabinetry package — we do it all.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {[
              { name: 'Custom Cabinets', link: '/services/custom-cabinets' },
              { name: 'Built-Ins', link: '/built-ins' },
              { name: 'Entertainment Centers', link: '/services/entertainment-centers' },
              { name: 'Custom Pantry Systems', link: '/services/custom-pantry-systems' },
              { name: 'Mudroom Storage', link: '/services/mudroom-storage' },
              { name: 'Laundry Room Cabinets', link: '/services/laundry-room-cabinets' },
              { name: 'Bathroom Vanities', link: '/services/bathroom-vanities' },
              { name: 'Cabinet Doors & Drawer Fronts', link: '/services/cabinet-doors-drawer-fronts' },
              { name: 'Cabinet Refacing', link: '/services/cabinet-refacing' },
              { name: 'Floating Shelves', link: '/services/floating-shelves' },
              { name: 'Accent Walls', link: '/services/accent-walls' },
              { name: 'Lattice Wall Panels', link: '/services/lattice-wall-panels' },
              { name: 'Custom Trim Work', link: '/services/custom-trim-work' },
              { name: 'Custom Woodworking Projects', link: '/services/custom-woodworking' },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <Link
                  to={item.link}
                  className="group flex items-center gap-3 p-4 rounded-xl card-warm"
                >
                  <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0 group-hover:text-gold-600 transition-colors" />
                  <span className="text-wood-700 font-medium text-sm group-hover:text-wood-900 transition-colors">{item.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-auto text-wood-300 group-hover:text-gold-500 group-hover:translate-x-1 transition-all duration-300" />
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/services">
                View All Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>


      {/* ━━━ THE PROCESS ━━━ */}
      <section className="py-28 section-warm border-y border-cream-200 grain-overlay">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-20">
            <SectionDivider className="mb-6" />
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-wood-900 mb-5">
              The Scafati <span className="text-gold-gradient">Process</span>
            </h2>
            <p className="text-wood-500 text-lg font-light">
              A seamless journey from your initial vision to the final, flawless installation.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-14 left-[20%] right-[20%] h-px bg-gradient-to-r from-gold-200/50 via-gold-400/40 to-gold-200/50" />

            {[
              {
                step: '01',
                title: 'Design Consultation',
                subtitle: '& 3D Rendering',
                desc: 'We start with a personal consultation at your home or our shop, take precise measurements, and create 3D renderings so you can see exactly what you\'re getting before a single board is cut.'
              },
              {
                step: '02',
                title: 'Custom',
                subtitle: 'Fabrication',
                desc: 'Your project is built to order in our DFW shop — not sourced from a catalog. Every cabinet box, door, and drawer is crafted for your specific space and finish preference.'
              },
              {
                step: '03',
                title: 'Professional',
                subtitle: 'Installation',
                desc: 'Our team handles the full installation with care. We protect your home, do clean work, and don\'t leave until everything is level, square, and exactly right.'
              }
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="relative text-center z-10 group">
                  <div className="w-[68px] h-[68px] mx-auto bg-white border border-gold-200 rounded-full flex items-center justify-center mb-8 shadow-sm group-hover:border-gold-400 group-hover:shadow-md transition-all duration-500">
                    <span className="font-serif text-2xl font-semibold text-gold-600">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-wood-900 mb-1">{item.title}</h3>
                  <h3 className="text-xl font-serif font-semibold text-gold-600 mb-5">{item.subtitle}</h3>
                  <p className="text-wood-500 leading-relaxed text-sm max-w-xs mx-auto">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>


      {/* ━━━ PORTFOLIO PREVIEW ━━━ */}
      <section className="py-28 section-white grain-overlay">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div className="max-w-xl">
                <SectionDivider className="mb-6 justify-start" />
                <h2 className="text-4xl md:text-5xl font-serif font-semibold text-wood-900 mb-3">
                  Recent <span className="text-gold-gradient">Work</span>
                </h2>
                <p className="text-wood-500 font-light">A look at some of our recent projects across DFW.</p>
              </div>
              <Button variant="outline" asChild>
                <Link to="/portfolio">
                  View Full Portfolio
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>

          {/* Asymmetrical Grid */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[260px]">
            <StaggerItem className="md:col-span-8 md:row-span-2 relative rounded-2xl overflow-hidden img-zoom group shadow-sm shadow-wood-200/30">
              <img src="/images/luxury-kitchen.png" alt="Custom Kitchen Cabinetry" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-wood-900/10 group-hover:bg-transparent transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-wood-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-gold-300 text-xs uppercase tracking-[0.2em] mb-1">Custom Kitchens</p>
                <h4 className="font-serif text-xl text-white">Highland Park Home</h4>
              </div>
            </StaggerItem>
            <StaggerItem className="md:col-span-4 relative rounded-2xl overflow-hidden img-zoom group shadow-sm shadow-wood-200/30">
              <img src="/images/library-builtins.png" alt="Library Built-Ins" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-wood-900/10 group-hover:bg-transparent transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-wood-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-gold-300 text-xs uppercase tracking-[0.2em] mb-1">Built-Ins</p>
                <h4 className="font-serif text-lg text-white">Home Library</h4>
              </div>
            </StaggerItem>
            <StaggerItem className="md:col-span-4 relative rounded-2xl overflow-hidden img-zoom group shadow-sm shadow-wood-200/30">
              <img src="/images/mudroom-builtins.png" alt="Mudroom Storage" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-wood-900/10 group-hover:bg-transparent transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-wood-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-gold-300 text-xs uppercase tracking-[0.2em] mb-1">Mudroom</p>
                <h4 className="font-serif text-lg text-white">Entryway Lockers</h4>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>


      {/* ━━━ TESTIMONIAL ━━━ */}
      <section className="py-32 section-warm border-y border-cream-200 relative overflow-hidden grain-overlay">
        {/* Decorative quote mark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-cream-200 font-serif text-[22rem] leading-none select-none pointer-events-none">
          "
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-4xl">
          <ScrollReveal>
            <SectionDivider className="mb-10" />
            <p className="text-2xl md:text-3xl font-serif text-wood-800 leading-relaxed mb-12 italic font-light">
              "Scafati Woodworks transformed our kitchen and mudroom into spaces we genuinely love.
              The quality, the attention to detail, and the craftsmanship exceeded every expectation.
              They are the only call to make for custom cabinetry in DFW."
            </p>
            <div>
              <div className="font-serif font-semibold text-xl text-gold-700 mb-1">Sarah M.</div>
              <div className="text-wood-400 uppercase tracking-[0.2em] text-xs">Southlake, Texas</div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
