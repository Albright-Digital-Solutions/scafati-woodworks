import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { servicesData } from '../data/services';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ui/ScrollReveal';
import { SectionDivider } from '../components/ui/SectionDivider';

export function ServicesIndex() {
  return (
    <>
      <SEO 
        title="Custom Woodworking Services in Dallas"
        description="Explore our comprehensive range of custom woodworking services, from working kitchen islands and mudrooms to floating vanities and media consoles."
      />

      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/hero-kitchen-dark.png" alt="Services hero" className="w-full h-full object-cover opacity-12" />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-950/90 to-stone-950" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-3xl">
          <ScrollReveal>
            <SectionDivider className="mb-6" />
            <h1 className="text-4xl md:text-6xl font-serif font-semibold text-stone-50 mb-5">
              Our <span className="text-gold-gradient">Services</span>
            </h1>
            <p className="text-lg text-stone-400 font-light">
              We specialize in high-end, custom woodworking tailored to the unique rhythm of your home. Explore our specialized capabilities.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-stone-950 grain-overlay">
        <div className="container mx-auto px-4 md:px-6">
          {/* Featured services */}
          <ScrollReveal className="mb-16">
            <h2 className="font-serif text-2xl text-stone-200 mb-8">Featured Specialties</h2>
          </ScrollReveal>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {[
              { name: 'Custom Kitchens', path: '/kitchens', img: '/images/luxury-kitchen.png' },
              { name: 'Architectural Built-ins', path: '/built-ins', img: '/images/library-builtins.png' },
              { name: 'Luxury Closets', path: '/closets', img: '/images/luxury-closet.png' },
            ].map((item) => (
              <StaggerItem key={item.name}>
                <Link to={item.path} className="group block relative h-[400px] overflow-hidden rounded-xl img-zoom">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-2xl font-serif font-semibold text-stone-100 mb-2 group-hover:text-gold-400 transition-colors">{item.name}</h3>
                    <div className="inline-flex items-center text-gold-600 text-xs font-semibold uppercase tracking-[0.2em]">
                      View Details <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform group-hover:translate-x-2" />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* All services */}
          <ScrollReveal className="mb-12">
            <h2 className="font-serif text-2xl text-stone-200 mb-2">All Services</h2>
            <p className="text-stone-500 text-sm">Explore our complete range of custom woodworking capabilities.</p>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service) => (
              <StaggerItem key={service.slug}>
                <Link to={`/services/${service.slug}`} className="group block relative h-[350px] overflow-hidden rounded-xl img-zoom">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent opacity-85 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <p className="text-gold-600/70 text-[10px] uppercase tracking-[0.2em] mb-2">{service.subtitle}</p>
                    <h3 className="text-xl font-serif font-semibold text-stone-100 mb-2 group-hover:text-gold-400 transition-colors">
                      {service.title}
                    </h3>
                    <div className="inline-flex items-center text-gold-600 text-xs font-semibold uppercase tracking-[0.2em]">
                      View Details <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform group-hover:translate-x-2" />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
