import { Helmet } from 'react-helmet-async';

interface FAQItem {
  question: string;
  answer: string;
}

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  /** Primary structured data block (LocalBusiness, Service, etc.) */
  schema?: Record<string, any>;
  /** FAQ items — auto-generates FAQPage schema if provided */
  faqs?: FAQItem[];
  /** Additional schema blocks to inject alongside primary */
  additionalSchemas?: Record<string, any>[];
  /** Geo region for local SEO (e.g., "US-TX") */
  geoRegion?: string;
  /** ICBM coordinates for local SEO */
  geoPosition?: string;
  /** Placename (e.g., "Dallas, Texas") */
  geoPlacename?: string;
}

/** Canonical base for production — update when domain is live */
const SITE_URL = 'https://scafatiwoodworks.com';
const SITE_NAME = 'Scafati Woodworks';
const OG_IMAGE = `${SITE_URL}/images/og-share.png`;

export function SEO({
  title,
  description,
  canonical,
  schema,
  faqs,
  additionalSchemas = [],
  geoRegion = 'US-TX',
  geoPosition = '32.7767,-96.7970',
  geoPlacename = 'Dallas, Texas',
}: SEOProps) {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : undefined;

  // Build FAQ schema if questions are provided
  const faqSchema: Record<string, any> | null = faqs && faqs.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(({ question, answer }) => ({
          '@type': 'Question',
          name: question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: answer,
          },
        })),
      }
    : null;

  // Collect all schemas to inject
  const allSchemas: Record<string, any>[] = [
    ...(schema ? [schema] : []),
    ...(faqSchema ? [faqSchema] : []),
    ...additionalSchemas,
  ];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Geo meta tags for local SEO */}
      <meta name="geo.region" content={geoRegion} />
      <meta name="geo.position" content={geoPosition} />
      <meta name="ICBM" content={geoPosition} />
      <meta name="geo.placename" content={geoPlacename} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={SITE_NAME} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />

      {/* Inject all structured data blocks */}
      {allSchemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}

// ─── Shared schema builders ───────────────────────────────────────────────────

/** Full LocalBusiness schema for Scafati Woodworks */
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['HomeAndConstructionBusiness', 'LocalBusiness'],
  '@id': 'https://scafatiwoodworks.com/#business',
  name: 'Scafati Woodworks',
  description:
    'Custom cabinetry, built-ins, entertainment centers, pantry systems, mudrooms, vanities, and fine woodworking for homeowners throughout the Dallas–Fort Worth area.',
  url: 'https://scafatiwoodworks.com',
  telephone: '+18174036044',
  email: 'info@scafatiwoodworks.com',
  image: 'https://scafatiwoodworks.com/images/logo.png',
  logo: 'https://scafatiwoodworks.com/images/logo.png',
  priceRange: '$$$',
  currenciesAccepted: 'USD',
  paymentAccepted: 'Cash, Check, Credit Card',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dallas',
    addressRegion: 'TX',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 32.7767,
    longitude: -96.797,
  },
  areaServed: [
    { '@type': 'City', name: 'Dallas' },
    { '@type': 'City', name: 'Fort Worth' },
    { '@type': 'City', name: 'Plano' },
    { '@type': 'City', name: 'Frisco' },
    { '@type': 'City', name: 'Southlake' },
    { '@type': 'City', name: 'Keller' },
    { '@type': 'City', name: 'Flower Mound' },
    { '@type': 'City', name: 'Colleyville' },
    { '@type': 'City', name: 'Grapevine' },
    { '@type': 'City', name: 'Arlington' },
    { '@type': 'City', name: 'Mansfield' },
    { '@type': 'City', name: 'Trophy Club' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Custom Cabinetry & Woodworking Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Cabinets' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Built-Ins' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Entertainment Centers' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Pantry Systems' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mudroom Storage' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Laundry Room Cabinets' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bathroom Vanities' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cabinet Refacing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Floating Shelves' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Accent Walls' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Trim Work' } },
    ],
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '13:00',
    },
  ],
  sameAs: [
    'https://www.instagram.com/scafati_woodworks',
    'https://www.facebook.com/scafatiwoodworks',
  ],
};

/** Build a Service schema for a specific service + city */
export function buildServiceSchema(
  serviceName: string,
  description: string,
  city: string = 'Dallas'
): Record<string, any> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${serviceName} in ${city}, TX`,
    description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Scafati Woodworks',
      telephone: '+18174036044',
      url: 'https://scafatiwoodworks.com',
    },
    areaServed: {
      '@type': 'City',
      name: city,
      '@id': `https://www.wikidata.org/wiki/${city.replace(' ', '_')}`,
    },
    serviceType: serviceName,
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: 'https://scafatiwoodworks.com/contact',
      servicePhone: '+18174036044',
    },
  };
}

/** Build a BreadcrumbList schema */
export function buildBreadcrumbSchema(
  crumbs: { name: string; path: string }[]
): Record<string, any> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `https://scafatiwoodworks.com${c.path}`,
    })),
  };
}
