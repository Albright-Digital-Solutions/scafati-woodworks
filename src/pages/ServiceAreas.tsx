import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import { SEO, localBusinessSchema, buildBreadcrumbSchema } from '../components/SEO';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ui/ScrollReveal';
import { SectionDivider } from '../components/ui/SectionDivider';
import { dfwCities } from '../data/cities';

export function ServiceAreas() {
  const breadcrumbs = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Service Areas', path: '/service-areas' },
  ]);

  return (
    <>
      <SEO
        title="Custom Cabinet Service Areas in Dallas–Fort Worth"
        description="Scafati Woodworks serves homeowners throughout the DFW metroplex — Dallas, Fort Worth, Plano, Frisco, Southlake, Keller, Flower Mound, Colleyville, Grapevine, Arlington, Mansfield, and Trophy Club."
        canonical="/service-areas"
        schema={localBusinessSchema}
        additionalSchemas={[breadcrumbs]}
      />

      {/* Hero */}
      <section className="relative pt-40 pb-24 section-warm">
        <div className="absolute inset-0 grain-overlay" />
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-3xl">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-300 bg-gold-50 text-gold-700 text-xs font-medium tracking-widest uppercase mb-6">
              <MapPin className="w-3 h-3" />
              Dallas–Fort Worth Metroplex
            </div>
            <SectionDivider className="mb-6" />
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-wood-900 mb-5">
              Custom Cabinetry Serving All of{' '}
              <span className="text-gold-gradient">DFW</span>
            </h1>
            <p className="text-lg text-wood-500 font-light leading-relaxed">
              Scafati Woodworks serves homeowners throughout the Dallas–Fort Worth metroplex.
              Select your city below to learn about our services in your specific area.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* City Grid */}
      <section className="py-20 section-white">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal className="mb-14 text-center">
            <h2 className="text-2xl font-serif font-semibold text-wood-800 mb-2">
              Cities We Serve
            </h2>
            <p className="text-wood-400 text-sm">
              Click your city for service information and a free quote.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {dfwCities.map((city) => (
              <StaggerItem key={city.slug}>
                <Link
                  to={`/service-areas/${city.slug}`}
                  className="group card-warm block rounded-2xl p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-full bg-gold-50 border border-gold-200 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-gold-600" />
                    </div>
                    <ArrowRight className="w-4 h-4 text-wood-300 group-hover:text-gold-500 group-hover:translate-x-1 transition-all duration-300 mt-1" />
                  </div>
                  <h2 className="font-serif text-xl font-semibold text-wood-900 mb-1 group-hover:text-gold-700 transition-colors">
                    {city.name}, TX
                  </h2>
                  <p className="text-wood-400 text-xs mb-3">{city.county}</p>
                  <p className="text-wood-500 text-sm leading-relaxed line-clamp-3">
                    {city.intro.substring(0, 120)}…
                  </p>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Service CTA */}
      <section className="py-20 section-warm border-t border-cream-200 grain-overlay">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl">
          <ScrollReveal>
            <SectionDivider className="mb-6" />
            <h2 className="text-3xl font-serif font-semibold text-wood-900 mb-4">
              Don't See Your City?
            </h2>
            <p className="text-wood-500 font-light mb-8 leading-relaxed">
              We regularly serve areas beyond the cities listed above. If you're in the
              DFW area, give us a call or send us a message and we'll let you know if
              we can serve your location.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-wood-700 via-gold-700 to-wood-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all shimmer"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+18174036044"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-wood-300 text-wood-700 rounded-lg bg-white hover:bg-cream-100 hover:border-gold-400 hover:text-gold-700 transition-all font-medium"
              >
                (817) 403-6044
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
