import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { servicesData } from '../data/services';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ui/ScrollReveal';
import { SectionDivider } from '../components/ui/SectionDivider';

export function ServicesIndex() {
  // Featured top 3 services for hero cards
  const featured = [
    { name: 'Custom Cabinets & Built-Ins', path: '/built-ins', img: '/images/library-builtins.png' },
    { name: 'Storage & Organization', path: '/services/mudroom-storage', img: '/images/mudroom-builtins.png' },
    { name: 'Vanities & Woodworking', path: '/services/bathroom-vanities', img: '/images/floating-vanity.png' },
  ];

  return (
    <>
      <SEO
        title="Custom Woodworking Services in Dallas–Fort Worth | Scafati Woodworks"
        description="Explore Scafati Woodworks' full range of custom cabinetry and woodworking services — including custom cabinets, built-ins, pantry systems, mudrooms, vanities, and more in DFW."
      />

      {/* Hero — light warm banner */}
      <section className="relative pt-40 pb-24 overflow-hidden section-warm">
        <div className="absolute inset-0 grain-overlay" />
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-3xl">
          <ScrollReveal>
            <SectionDivider className="mb-6" />
            <h1 className="text-4xl md:text-6xl font-serif font-semibold text-wood-900 mb-5">
              Our <span className="text-gold-gradient">Services</span>
            </h1>
            <p className="text-lg text-wood-500 font-light">
              Custom cabinetry, storage solutions, and fine woodworking — designed for your home, built to last.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 section-white">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal className="mb-12">
            <h2 className="font-serif text-2xl text-wood-700 text-center mb-2">Our Core Focus Areas</h2>
            <p className="text-wood-400 text-sm text-center">Custom cabinetry and storage built for DFW homeowners.</p>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {featured.map((item) => (
              <StaggerItem key={item.name}>
                <Link to={item.path} className="group block relative h-[380px] overflow-hidden rounded-2xl img-zoom shadow-sm shadow-wood-200/30">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-wood-950/75 via-wood-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-xl font-serif font-semibold text-white mb-2 group-hover:text-gold-200 transition-colors">{item.name}</h3>
                    <div className="inline-flex items-center text-gold-300 text-xs font-semibold uppercase tracking-[0.2em]">
                      View Details <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform group-hover:translate-x-2" />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* All services grid */}
      <section className="py-20 section-warm grain-overlay">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal className="mb-12">
            <h2 className="font-serif text-2xl text-wood-800 mb-2">All Services</h2>
            <p className="text-wood-500 text-sm">Every service we offer — click any to learn more.</p>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {servicesData.map((service) => (
              <StaggerItem key={service.slug}>
                <Link to={`/services/${service.slug}`} className="group card-warm block rounded-xl overflow-hidden">
                  <div className="relative h-[200px] img-zoom">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-wood-950/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  </div>
                  <div className="p-6">
                    <p className="text-gold-600 text-[10px] uppercase tracking-[0.2em] mb-2">{service.subtitle}</p>
                    <h3 className="text-lg font-serif font-semibold text-wood-900 mb-2 group-hover:text-gold-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-wood-500 text-sm leading-relaxed line-clamp-2 mb-4">{service.description}</p>
                    <div className="inline-flex items-center text-gold-600 text-xs font-semibold uppercase tracking-[0.2em]">
                      Learn More <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform group-hover:translate-x-2" />
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
