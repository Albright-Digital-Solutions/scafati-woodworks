import { useParams, Navigate, Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, MapPin, Phone, Star } from 'lucide-react';
import { SEO, localBusinessSchema, buildServiceSchema, buildBreadcrumbSchema } from '../components/SEO';
import { Button } from '../components/ui/Button';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ui/ScrollReveal';
import { SectionDivider } from '../components/ui/SectionDivider';
import { QuoteForm } from '../components/ui/QuoteForm';
import { dfwCities, cityServices } from '../data/cities';

/** FAQ items for city pages — unique question per city is injected below */
const sharedFaqs = [
  {
    question: 'How long does a custom cabinet project take?',
    answer:
      'Most custom cabinet projects take 4–8 weeks from signed contract to completed installation. This includes 1–2 weeks for design and approval, 2–4 weeks for fabrication in our shop, and 1–2 weeks for installation. Larger whole-home projects may take longer. We give every client a specific timeline at the start of their project.',
  },
  {
    question: 'Do you offer free estimates?',
    answer:
      'Yes — we offer free, no-obligation quotes on all projects. We will review your project details, visit the space if needed, and provide a detailed estimate with no pressure to commit.',
  },
  {
    question: 'What areas of DFW do you serve?',
    answer:
      'We serve the entire Dallas–Fort Worth metroplex including Dallas, Fort Worth, Plano, Frisco, Southlake, Keller, Flower Mound, Colleyville, Grapevine, Arlington, Mansfield, Trophy Club, and surrounding communities.',
  },
  {
    question: 'Can you match existing cabinetry or wood finishes?',
    answer:
      'In most cases, yes. We can custom-mix stain colors and work with the same wood species to closely match existing cabinetry when adding new cabinets or built-ins to an existing space.',
  },
  {
    question: 'What is the difference between custom and semi-custom cabinets?',
    answer:
      'Semi-custom cabinets come in preset sizes and limited modification options. Custom cabinets are built from scratch to any dimension, finish, and style you specify. We build fully custom — meaning your cabinets are made to fit your exact space and design preferences, not adapted from a stock size.',
  },
];

export function CityLandingPage() {
  const { citySlug } = useParams<{ citySlug: string }>();
  const city = dfwCities.find((c) => c.slug === citySlug);

  if (!city) {
    return <Navigate to="/service-areas" replace />;
  }

  const pageTitle = `Custom Cabinets & Built-Ins in ${city.name}, TX`;
  const pageDescription = `Scafati Woodworks builds fully custom cabinets, built-ins, entertainment centers, mudrooms, vanities, and more for homeowners in ${city.name}, TX. Free quotes — serving all of ${city.county}.`;

  const cityFaq = [
    {
      question: `Do you serve homeowners in ${city.name}, TX?`,
      answer: `Yes — we serve ${city.name} and the surrounding ${city.county} area. We handle everything from design to installation for custom cabinets, built-ins, mudrooms, vanities, and all other woodworking projects.`,
    },
    ...sharedFaqs,
  ];

  const serviceSchema = buildServiceSchema(
    'Custom Cabinetry & Built-Ins',
    pageDescription,
    city.name
  );

  const breadcrumbs = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Service Areas', path: '/service-areas' },
    { name: `${city.name}, TX`, path: `/service-areas/${city.slug}` },
  ]);

  return (
    <>
      <SEO
        title={pageTitle}
        description={pageDescription}
        canonical={`/service-areas/${city.slug}`}
        schema={localBusinessSchema}
        faqs={cityFaq}
        additionalSchemas={[serviceSchema, breadcrumbs]}
        geoRegion="US-TX"
        geoPosition={`${city.lat},${city.lng}`}
        geoPlacename={`${city.name}, Texas`}
      />

      {/* ── HERO ── */}
      <section className="relative pt-40 pb-24 overflow-hidden section-warm">
        <div className="absolute inset-0 grain-overlay" />
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              {/* Breadcrumb */}
              <nav aria-label="breadcrumb" className="flex items-center justify-center gap-2 text-xs text-wood-400 mb-6">
                <Link to="/" className="hover:text-gold-600 transition-colors">Home</Link>
                <span>/</span>
                <Link to="/service-areas" className="hover:text-gold-600 transition-colors">Service Areas</Link>
                <span>/</span>
                <span className="text-gold-700">{city.name}, TX</span>
              </nav>

              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-300 bg-gold-50 text-gold-700 text-xs font-medium tracking-widest uppercase mb-6">
                <MapPin className="w-3 h-3" />
                {city.name}, {city.state} — {city.county}
              </div>

              <SectionDivider className="mb-6" />

              {/* H1 — entity-optimized: service + city in first heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-wood-900 mb-6 leading-tight">
                Custom Cabinets & Built-Ins<br className="hidden md:block" />
                <span className="text-gold-gradient"> in {city.name}, TX</span>
              </h1>

              {/* First 100 words — who, what, where */}
              <p className="text-lg text-wood-600 font-light leading-relaxed max-w-2xl mx-auto mb-10">
                Scafati Woodworks builds fully custom cabinets, built-ins, and storage solutions
                for homeowners in <strong>{city.name}, Texas</strong> and throughout {city.county}.
                Every project is designed and built from scratch — sized for your space, finished to
                your style, and installed by our team. No catalogs, no stock sizes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="shimmer h-14 px-10 text-base">
                  <Link to="/contact">Get a Free Quote</Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="h-14 px-8 text-base">
                  <a href="tel:+18174036044">
                    <Phone className="w-4 h-4 mr-2" />
                    (817) 403-6044
                  </a>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>


      {/* ── UNIQUE CITY INTRO ── */}
      <section className="py-20 section-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal variant="fadeLeft">
              <div className="relative rounded-2xl overflow-hidden shadow-lg shadow-wood-200/30 aspect-[4/3] img-zoom">
                <img
                  src="/images/luxury-kitchen.png"
                  alt={`Custom cabinetry in ${city.name}, TX`}
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fadeRight" delay={0.2}>
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-wood-900 mb-6">
                  Serving <span className="text-gold-gradient">{city.name}</span> Homeowners
                </h2>

                {/* Unique city intro paragraph */}
                <p className="text-wood-600 text-base leading-relaxed font-light mb-6">
                  {city.intro}
                </p>

                {/* Project angle */}
                <p className="text-wood-600 text-base leading-relaxed font-light mb-8">
                  {city.projectAngle}
                </p>

                {/* Neighborhoods */}
                <div className="bg-cream-50 border border-cream-200 p-5 rounded-xl mb-8">
                  <p className="text-xs font-medium text-wood-500 uppercase tracking-widest mb-3">
                    Areas We Serve in {city.name}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {city.neighborhoods.map((n) => (
                      <span key={n} className="text-xs px-3 py-1 bg-white border border-cream-300 text-wood-700 rounded-full">
                        {n}
                      </span>
                    ))}
                  </div>
                </div>

                <Button asChild className="shimmer">
                  <Link to="/contact">
                    Start Your {city.name} Project
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>


      {/* ── SERVICES GRID ── */}
      <section className="py-20 section-warm border-y border-cream-200 grain-overlay">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-14">
            <SectionDivider className="mb-6" />
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-wood-900 mb-4">
              What We Build in{' '}
              <span className="text-gold-gradient">{city.name}</span>
            </h2>
            <p className="text-wood-500 font-light">
              Every service we offer is available to homeowners in {city.name} and {city.county}.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {cityServices.map((service, i) => (
              <StaggerItem key={i}>
                <Link
                  to={service.link}
                  className="group flex items-center gap-3 p-4 rounded-xl card-warm"
                >
                  <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0 group-hover:text-gold-600 transition-colors" />
                  <span className="text-wood-700 font-medium text-sm group-hover:text-wood-900 transition-colors">
                    {service.name}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 ml-auto text-wood-300 group-hover:text-gold-500 group-hover:translate-x-1 transition-all duration-300" />
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>


      {/* ── WHY CHOOSE US ── */}
      <section className="py-20 section-white">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-14">
            <SectionDivider className="mb-6" />
            <h2 className="text-3xl font-serif font-semibold text-wood-900 mb-4">
              Why {city.name} Homeowners{' '}
              <span className="text-gold-gradient">Choose Scafati</span>
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: '20+ Years in DFW',
                desc: `We've been building custom cabinetry for homeowners throughout the Dallas–Fort Worth area since 2004. ${city.name} is part of our home market — not a service area we're stretching to reach.`,
              },
              {
                title: 'Built from Scratch',
                desc: `Nothing we build comes from a stock design. Every cabinet, shelf, and built-in for your ${city.name} home is drawn up, sized, and fabricated specifically for your space.`,
              },
              {
                title: 'Free Quotes, No Pressure',
                desc: `Getting a quote from us is simple and free. We'll review your project, answer your questions, and give you a clear estimate — no sales pitch, no pressure.`,
              },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="group p-7 rounded-2xl card-warm h-full">
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-wood-900 mb-3 group-hover:text-gold-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-wood-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>


      {/* ── FAQ ── */}
      <section className="py-20 section-warm border-y border-cream-200 grain-overlay">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <ScrollReveal className="text-center mb-14">
            <SectionDivider className="mb-6" />
            <h2 className="text-3xl font-serif font-semibold text-wood-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-wood-500 font-light">
              Common questions from {city.name} homeowners about custom cabinetry.
            </p>
          </ScrollReveal>

          <div className="space-y-4">
            {cityFaq.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="bg-white border border-cream-200 rounded-xl p-6 shadow-sm shadow-wood-100/20">
                  <h3 className="font-serif font-semibold text-wood-900 text-base mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-wood-500 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>


      {/* ── CONTACT FORM ── */}
      <section className="py-24 section-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <ScrollReveal variant="fadeLeft">
              <SectionDivider className="mb-6 justify-start" />
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-wood-900 mb-5">
                Get a Free Quote in{' '}
                <span className="text-gold-gradient">{city.name}</span>
              </h2>
              <p className="text-wood-500 text-base font-light leading-relaxed mb-6">
                Ready to get started? Tell us about your project and we'll get back
                to you within 1–2 business days with a free, no-pressure estimate.
              </p>
              {/* NAP block — important for local SEO */}
              <address className="not-italic space-y-3 text-sm text-wood-500">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>Serving {city.name} and all of {city.county}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-gold-600 shrink-0" />
                  <a href="tel:+18174036044" className="hover:text-gold-700 transition-colors font-medium">
                    (817) 403-6044
                  </a>
                </div>
              </address>
            </ScrollReveal>

            <ScrollReveal variant="fadeRight" delay={0.2}>
              <QuoteForm />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── INTERNAL LINKS ── */}
      <section className="py-12 section-warm border-t border-cream-200">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollReveal>
            <p className="text-center text-xs text-wood-400 uppercase tracking-widest mb-6">
              Also Serving
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {dfwCities
                .filter((c) => c.slug !== city.slug)
                .map((c) => (
                  <Link
                    key={c.slug}
                    to={`/service-areas/${c.slug}`}
                    className="text-xs px-4 py-2 bg-white border border-cream-300 text-wood-600 rounded-full hover:border-gold-400 hover:text-gold-700 transition-all"
                  >
                    {c.name}, TX
                  </Link>
                ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
