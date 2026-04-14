import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Star, Award, Shield, ArrowDown } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Button } from '../components/ui/Button';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ui/ScrollReveal';
import { SectionDivider } from '../components/ui/SectionDivider';
import { CountUp } from '../components/ui/CountUp';

export function Home() {
  return (
    <>
      <SEO 
        title="Bespoke Cabinetry & Fine Woodworking in Dallas"
        description="Elevating homes with uncompromising craftsmanship and timeless design. Scafati Woodworks specializes in luxury custom kitchens, built-ins, and closets in the DFW area."
        schema={{
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          "name": "Scafati Woodworks",
          "url": "https://scafatiwoodworks.com",
          "telephone": "+18174036044",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Craftsman Way",
            "addressLocality": "Dallas",
            "addressRegion": "TX",
            "postalCode": "75201",
            "addressCountry": "US"
          },
          "priceRange": "$$$$"
        }}
      />

      {/* ━━━ HERO SECTION ━━━ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-kitchen-dark.png" 
            alt="Luxury custom kitchen cabinetry by Scafati Woodworks" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/85 to-stone-950/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/30" />
          <div className="absolute inset-0 grain-overlay" />
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-3xl pt-20">
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
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-700/30 bg-gold-950/30 text-gold-500 text-xs font-medium tracking-widest uppercase mb-8"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
                Dallas, Texas — Est. 2004
              </motion.div>

              {/* Headline */}
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-5xl md:text-6xl lg:text-[5.5rem] font-serif font-semibold text-stone-50 leading-[1.05] mb-7 tracking-tight"
              >
                Bespoke Cabinetry{' '}
                <span className="text-gold-gradient">&</span>{' '}
                <span className="italic font-light">Fine Woodworking</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="text-lg md:text-xl text-stone-400 mb-12 leading-relaxed max-w-xl font-light"
              >
                Elevating Dallas's finest homes with uncompromising craftsmanship, 
                timeless design, and a relentless pursuit of perfection.
              </motion.p>
              
              {/* CTAs */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button size="lg" asChild className="shimmer h-14 px-10 text-base">
                  <Link to="/contact">Request a Consultation</Link>
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
          <span className="text-stone-500 text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-4 h-4 text-gold-600/60" />
          </motion.div>
        </motion.div>
      </section>


      {/* ━━━ TRUST BAR ━━━ */}
      <section className="py-16 bg-stone-900/50 border-y border-stone-800/50 grain-overlay">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 text-center">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full border border-gold-700/30 bg-gold-950/20 flex items-center justify-center">
                  <Award className="w-6 h-6 text-gold-600" />
                </div>
                <div className="text-left">
                  <div className="text-3xl font-serif font-semibold text-stone-100">
                    <CountUp end={20} suffix="+" />
                  </div>
                  <div className="text-stone-500 text-xs uppercase tracking-[0.2em]">Years Experience</div>
                </div>
              </div>

              <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-stone-700 to-transparent" />

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full border border-gold-700/30 bg-gold-950/20 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-gold-600" />
                </div>
                <div className="text-left">
                  <div className="text-3xl font-serif font-semibold text-stone-100">
                    <CountUp end={500} suffix="+" />
                  </div>
                  <div className="text-stone-500 text-xs uppercase tracking-[0.2em]">Projects Completed</div>
                </div>
              </div>

              <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-stone-700 to-transparent" />

              <div className="flex items-center gap-4">
                <div className="flex gap-0.5 mr-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold-500 text-gold-500" />
                  ))}
                </div>
                <div className="text-left">
                  <div className="text-3xl font-serif font-semibold text-stone-100">5.0</div>
                  <div className="text-stone-500 text-xs uppercase tracking-[0.2em]">Client Rating</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>


      {/* ━━━ SERVICES ━━━ */}
      <section className="py-28 bg-stone-950 grain-overlay">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-20">
            <SectionDivider className="mb-6" />
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-stone-50 mb-5">
              Masterful <span className="text-gold-gradient">Creations</span>
            </h2>
            <p className="text-stone-500 text-lg font-light">
              We specialize in high-end, custom woodworking tailored to the unique rhythm of your home.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Custom Kitchens',
                desc: 'Bespoke culinary spaces designed for flawless aesthetics and unparalleled functionality.',
                img: '/images/luxury-kitchen.png',
                link: '/kitchens'
              },
              {
                title: 'Architectural Built-ins',
                desc: 'Seamless libraries, entertainment centers, and mudrooms that elevate your architecture.',
                img: '/images/library-builtins.png',
                link: '/built-ins'
              },
              {
                title: 'Luxury Closets',
                desc: 'Meticulously organized sanctuaries and dressing rooms crafted with premium materials.',
                img: '/images/luxury-closet.png',
                link: '/closets'
              }
            ].map((service, i) => (
              <StaggerItem key={i}>
                <Link to={service.link} className="group block relative h-[550px] overflow-hidden rounded-xl img-zoom">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                  
                  {/* Decorative top accent */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="overflow-hidden">
                      <h3 className="text-2xl md:text-3xl font-serif font-semibold text-stone-100 mb-3 group-hover:text-gold-400 transition-colors duration-500">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-stone-400 text-sm leading-relaxed mb-6 max-w-xs opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                      {service.desc}
                    </p>
                    <div className="inline-flex items-center text-gold-600 text-xs font-semibold uppercase tracking-[0.2em]">
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


      {/* ━━━ THE PROCESS ━━━ */}
      <section className="py-28 bg-stone-900/30 border-y border-stone-800/50 grain-overlay">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-20">
            <SectionDivider className="mb-6" />
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-stone-50 mb-5">
              The Scafati <span className="text-gold-gradient">Process</span>
            </h2>
            <p className="text-stone-500 text-lg font-light">
              A seamless journey from your initial vision to the final, flawless installation.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-px bg-gradient-to-r from-gold-800/30 via-gold-600/40 to-gold-800/30" />
            
            {[
              {
                step: '01',
                title: 'Design Consultation',
                subtitle: '& 3D Rendering',
                desc: 'We begin with a private consultation, followed by precise measurements and photorealistic 3D renderings of your bespoke space.'
              },
              {
                step: '02',
                title: 'Precision',
                subtitle: 'Fabrication',
                desc: 'Your project is meticulously crafted in our Dallas workshop, marrying time-honored techniques with state-of-the-art precision.'
              },
              {
                step: '03',
                title: 'White-Glove',
                subtitle: 'Installation',
                desc: 'Our master craftsmen handle every detail of the final installation, ensuring a perfect fit and flawless finish.'
              }
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="relative text-center z-10 group">
                  <div className="w-[70px] h-[70px] mx-auto bg-stone-950 border border-gold-700/30 rounded-full flex items-center justify-center mb-8 shadow-xl group-hover:border-gold-600/60 transition-colors duration-500">
                    <span className="font-serif text-2xl font-semibold text-gold-600">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-stone-100 mb-1">{item.title}</h3>
                  <h3 className="text-xl font-serif font-semibold text-gold-600 mb-5">{item.subtitle}</h3>
                  <p className="text-stone-500 leading-relaxed text-sm max-w-xs mx-auto">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>


      {/* ━━━ PORTFOLIO PREVIEW ━━━ */}
      <section className="py-28 bg-stone-950 grain-overlay">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div className="max-w-xl">
                <SectionDivider className="mb-6 justify-start" />
                <h2 className="text-4xl md:text-5xl font-serif font-semibold text-stone-50 mb-3">
                  Recent <span className="text-gold-gradient">Commissions</span>
                </h2>
                <p className="text-stone-500 font-light">A glimpse into our latest bespoke creations.</p>
              </div>
              <Button variant="outline" asChild>
                <Link to="/portfolio">
                  Explore the Portfolio
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>

          {/* Asymmetrical Grid */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[280px]">
            <StaggerItem className="md:col-span-8 md:row-span-2 relative rounded-xl overflow-hidden img-zoom group">
              <img src="/images/luxury-kitchen.png" alt="Luxury Kitchen Commission" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-transparent transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-stone-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-gold-500 text-xs uppercase tracking-[0.2em] mb-1">Kitchen</p>
                <h4 className="font-serif text-xl text-stone-100">Highland Park Estate</h4>
              </div>
            </StaggerItem>
            <StaggerItem className="md:col-span-4 relative rounded-xl overflow-hidden img-zoom group">
              <img src="/images/library-builtins.png" alt="Library Built-ins" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-transparent transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-stone-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-gold-500 text-xs uppercase tracking-[0.2em] mb-1">Built-ins</p>
                <h4 className="font-serif text-lg text-stone-100">Private Library</h4>
              </div>
            </StaggerItem>
            <StaggerItem className="md:col-span-4 relative rounded-xl overflow-hidden img-zoom group">
              <img src="/images/luxury-closet.png" alt="Luxury Closet" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-transparent transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-stone-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-gold-500 text-xs uppercase tracking-[0.2em] mb-1">Closets</p>
                <h4 className="font-serif text-lg text-stone-100">Master Suite Dressing Room</h4>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>


      {/* ━━━ TESTIMONIALS ━━━ */}
      <section className="py-32 bg-stone-900/30 border-y border-stone-800/50 relative overflow-hidden grain-overlay">
        {/* Decorative quote mark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-stone-800/10 font-serif text-[25rem] leading-none select-none pointer-events-none">
          "
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-4xl">
          <ScrollReveal>
            <SectionDivider className="mb-10" />
            <p className="text-2xl md:text-4xl font-serif text-stone-200 leading-relaxed mb-12 italic font-light">
              "Scafati Woodworks does not just build cabinets; they craft architectural art. 
              Their precision, professionalism, and ability to execute complex, high-end designs 
              makes them our exclusive partner for luxury builds."
            </p>
            <div>
              <div className="font-serif font-semibold text-xl text-gold-600 mb-1">Eleanor Vance</div>
              <div className="text-stone-500 uppercase tracking-[0.2em] text-xs">Principal Designer, Vance Interiors</div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
