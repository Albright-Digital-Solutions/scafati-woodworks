/** DFW service-area cities with geo data and unique body copy */
export interface CityData {
  slug: string;
  name: string;
  state: string;
  county: string;
  lat: number;
  lng: number;
  /** Opening paragraph unique to this city */
  intro: string;
  /** Neighborhood/community callouts for local relevance */
  neighborhoods: string[];
  /** Unique project angle for this city */
  projectAngle: string;
}

export const dfwCities: CityData[] = [
  {
    slug: 'dallas',
    name: 'Dallas',
    state: 'TX',
    county: 'Dallas County',
    lat: 32.7767,
    lng: -96.797,
    intro:
      "Dallas homeowners expect quality that matches the ambition of the city itself. Whether you're updating a kitchen in Preston Hollow, adding a home office built-in in Lakewood, or refinishing cabinets in Oak Cliff, Scafati Woodworks delivers fully custom cabinetry that's built for your specific home — not pulled from a catalog.",
    neighborhoods: ['Preston Hollow', 'Lakewood', 'Uptown', 'Oak Cliff', 'M Streets', 'Bluffview'],
    projectAngle:
      'Custom kitchen cabinetry and entertainment wall built-ins are among the most requested projects from Dallas homeowners renovating older homes in established neighborhoods.',
  },
  {
    slug: 'fort-worth',
    name: 'Fort Worth',
    state: 'TX',
    county: 'Tarrant County',
    lat: 32.7555,
    lng: -97.3308,
    intro:
      "Fort Worth's mix of historic character and modern new construction makes it a great fit for custom woodworking. From built-in bookshelves in a Fairmount craftsman bungalow to a sleek mudroom in an Alliance-area new build, Scafati Woodworks brings precision and craftsmanship to every Fort Worth project.",
    neighborhoods: ['Fairmount', 'Westover Hills', 'Cultural District', 'Tanglewood', 'Alliance'],
    projectAngle:
      'Fort Worth homeowners frequently request mudroom storage and pantry systems to maximize the functionality of both new builds and renovated historic homes.',
  },
  {
    slug: 'plano',
    name: 'Plano',
    state: 'TX',
    county: 'Collin County',
    lat: 33.0198,
    lng: -96.6989,
    intro:
      "Plano is one of the most active home renovation markets in North Texas, and custom cabinetry is consistently at the top of homeowners' wish lists. Scafati Woodworks serves Plano with fully custom kitchen cabinets, pantry systems, bathroom vanities, and built-ins — all designed and built to fit your home perfectly.",
    neighborhoods: ['Legacy', 'Russell Creek', 'Willow Bend', 'Los Rios'],
    projectAngle:
      'Custom pantry systems and kitchen cabinet upgrades are the top projects for Plano homeowners looking to modernize mid-2000s builder homes with premium woodworking.',
  },
  {
    slug: 'frisco',
    name: 'Frisco',
    state: 'TX',
    county: 'Collin County',
    lat: 33.1507,
    lng: -96.8236,
    intro:
      "Frisco's rapidly growing luxury home market means homeowners are constantly looking to add custom features that set their homes apart. Scafati Woodworks serves Frisco with custom cabinetry, entertainment centers, mudrooms, and built-ins that elevate new construction homes beyond their standard finishes.",
    neighborhoods: ['Phillips Creek Ranch', 'Newman Village', 'Starwood', 'Stonebriar'],
    projectAngle:
      'Frisco homeowners most often request entertainment center built-ins and custom mudroom lockers to upgrade the builder-grade finishes common in newer construction.',
  },
  {
    slug: 'southlake',
    name: 'Southlake',
    state: 'TX',
    county: 'Tarrant County',
    lat: 32.9407,
    lng: -97.1342,
    intro:
      "Southlake homeowners have high standards — and Scafati Woodworks meets them. We've completed custom cabinet projects throughout Southlake, from full kitchen remodels in Timarron to custom closets and bathroom vanities in Clariden Ranch. Every project is built to the same standard of quality, no matter the size.",
    neighborhoods: ['Timarron', 'Clariden Ranch', 'Monticello', 'Carillon'],
    projectAngle:
      'In Southlake, custom bathroom vanities and walk-in closet systems are the most popular upgrades among homeowners in established luxury communities.',
  },
  {
    slug: 'keller',
    name: 'Keller',
    state: 'TX',
    county: 'Tarrant County',
    lat: 32.9343,
    lng: -97.2294,
    intro:
      "Keller is known for well-built family homes and strong community standards — and the cabinetry inside those homes should be no different. Scafati Woodworks serves Keller with custom kitchen cabinets, laundry room cabinetry, mudroom systems, and built-in storage designed for real families and real daily use.",
    neighborhoods: ['Hidden Lakes', 'Keller Crossing', 'Park Glen', 'Bear Creek'],
    projectAngle:
      'Family-focused storage solutions — mudroom lockers, laundry room cabinets, and pantry systems — are the most common requests from Keller homeowners.',
  },
  {
    slug: 'flower-mound',
    name: 'Flower Mound',
    state: 'TX',
    county: 'Denton County',
    lat: 33.0146,
    lng: -97.0966,
    intro:
      "Flower Mound homeowners value quality craftsmanship and designs that will last. Scafati Woodworks brings custom cabinetry and fine woodworking to Flower Mound — including kitchen cabinets, entertainment walls, bathroom vanities, and floating shelves that complement the area's well-established homes.",
    neighborhoods: ['Wellington', 'Bridlewood', 'The Landing', 'Forest Vista'],
    projectAngle:
      'Custom entertainment center built-ins and accent walls are popular with Flower Mound homeowners looking to update open-concept living spaces in established neighborhoods.',
  },
  {
    slug: 'colleyville',
    name: 'Colleyville',
    state: 'TX',
    county: 'Tarrant County',
    lat: 32.8887,
    lng: -97.1503,
    intro:
      "Colleyville's luxury home market is one of the most sought-after in the Mid-Cities area. Scafati Woodworks serves Colleyville with premium custom cabinetry — from full kitchen makeovers to custom library built-ins, wine bars, and bathroom vanities — all built and installed by our team.",
    neighborhoods: ['Savannah Estates', 'Mira Vista', 'Montclair Parc'],
    projectAngle:
      'Colleyville homeowners frequently invest in custom kitchen cabinetry and home bar/wine storage as part of complete home renovations.',
  },
  {
    slug: 'grapevine',
    name: 'Grapevine',
    state: 'TX',
    county: 'Tarrant County',
    lat: 32.9343,
    lng: -97.0781,
    intro:
      "Grapevine's historic downtown character and growing residential market make it a natural fit for custom woodworking. Whether you're in a classic home near Main Street or a newer build in a Grapevine subdivision, Scafati Woodworks can design and build custom cabinetry that fits your home and your style.",
    neighborhoods: ['Historic Downtown', 'Stone Bridge', 'Kelley Farm'],
    projectAngle:
      'Custom trim work, built-in shelving, and cabinet refacing are popular with Grapevine homeowners who want to preserve the character of older homes while modernizing their storage.',
  },
  {
    slug: 'arlington',
    name: 'Arlington',
    state: 'TX',
    county: 'Tarrant County',
    lat: 32.7357,
    lng: -97.1081,
    intro:
      "Arlington is one of the DFW area's largest cities, and its diverse housing stock — from mid-century homes to new construction — makes it a prime market for custom cabinetry and woodworking. Scafati Woodworks serves Arlington with custom cabinets, built-ins, and storage systems for any home style or budget.",
    neighborhoods: ['Pantego', 'Dalworthington Gardens', 'Interlochen', 'Parks of Arlington'],
    projectAngle:
      'Cabinet refacing and custom cabinet doors are the most cost-effective upgrades requested by Arlington homeowners looking to update existing kitchens and bathrooms.',
  },
  {
    slug: 'mansfield',
    name: 'Mansfield',
    state: 'TX',
    county: 'Tarrant County',
    lat: 32.5632,
    lng: -97.1417,
    intro:
      "Mansfield is one of the fastest-growing communities in the DFW area, with new construction homes and established neighborhoods both representing strong demand for custom cabinetry. Scafati Woodworks serves Mansfield with custom kitchen cabinets, mudrooms, pantry systems, and bathroom vanities for new and existing homes alike.",
    neighborhoods: ['Walnut Creek', 'South Pointe', 'Broad Park', 'Heritage'],
    projectAngle:
      'Custom pantry systems and mudroom storage are the top requests from Mansfield homeowners in newer construction communities with open floor plans.',
  },
  {
    slug: 'trophy-club',
    name: 'Trophy Club',
    state: 'TX',
    county: 'Denton County',
    lat: 32.9979,
    lng: -97.1786,
    intro:
      "Trophy Club homeowners take pride in their well-appointed homes — and the cabinetry should match. Scafati Woodworks serves Trophy Club with premium custom cabinetry and built-ins: kitchen cabinets, entertainment walls, laundry room cabinetry, floating shelves, and custom woodworking for homes throughout this upscale master-planned community.",
    neighborhoods: ['Trophy Club Country Club', 'The Estates', 'Highlands'],
    projectAngle:
      'Trophy Club homeowners frequently invest in full kitchen cabinet packages and entertainment wall built-ins to upgrade builder-grade finishes in newer luxury homes.',
  },
];

/** All services offered — used for city page service grids */
export const cityServices = [
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
  { name: 'Custom Woodworking', link: '/services/custom-woodworking' },
];
