import { useState } from 'react';
import { SEO } from '../components/SEO';
import { motion, AnimatePresence } from 'motion/react';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { SectionDivider } from '../components/ui/SectionDivider';
import { ImageLightbox } from '../components/ui/ImageLightbox';

const projects = [
  {
    id: 1,
    title: 'Highland Park Kitchen',
    category: 'Kitchens',
    description: 'A complete luxury kitchen with walnut cabinetry, marble waterfall island, and brass hardware throughout.',
    img: '/images/luxury-kitchen.png'
  },
  {
    id: 2,
    title: 'Twilight Penthouse Kitchen',
    category: 'Kitchens',
    description: 'Dark moody kitchen with ebony and walnut cabinetry, marble countertops, and gold brass fixtures.',
    img: '/images/hero-kitchen-dark.png'
  },
  {
    id: 3,
    title: 'Gentleman\'s Library',
    category: 'Built-ins',
    description: 'Floor-to-ceiling custom library built-ins in dark wood with rolling brass ladder and integrated lighting.',
    img: '/images/library-builtins.png'
  },
  {
    id: 4,
    title: 'Master Suite Dressing Room',
    category: 'Closets',
    description: 'Boutique-style walk-in closet with LED lighting, glass-front display doors, and marble island.',
    img: '/images/luxury-closet.png'
  },
  {
    id: 5,
    title: 'Preston Hollow Home Bar',
    category: 'Bars',
    description: 'Custom home bar with dark wood cabinetry, wine rack, floating glass shelves, and marble top.',
    img: '/images/home-bar.png'
  },
  {
    id: 6,
    title: 'Modern Media Console',
    category: 'Built-ins',
    description: 'Floating walnut media console with slat-style doors and integrated LED strip lighting.',
    img: '/images/media-console.png'
  },
  {
    id: 7,
    title: 'Spa-Inspired Vanity',
    category: 'Vanities',
    description: 'Floating walnut vanity with white marble countertop, vessel sinks, and LED-backlit mirror.',
    img: '/images/floating-vanity.png'
  },
  {
    id: 8,
    title: 'Lakewood Mudroom',
    category: 'Built-ins',
    description: 'Custom shaker-style mudroom lockers with integrated bench, cubbies, and herringbone tile.',
    img: '/images/mudroom-builtins.png'
  },
  {
    id: 9,
    title: 'Workshop Craftsmanship',
    category: 'Process',
    description: 'Our master craftsman hand-planing a cabinet door panel in our Dallas workshop.',
    img: '/images/craftsman-workshop.png'
  },
];

const categories = ['All', 'Kitchens', 'Built-ins', 'Closets', 'Bars', 'Vanities', 'Process'];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const lightboxImages = filteredProjects.map(p => ({
    src: p.img,
    alt: p.title,
    title: p.title,
    category: p.category,
    description: p.description,
  }));

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <SEO 
        title="Custom Woodworking Portfolio"
        description="View our gallery of custom woodworking projects, including bespoke furniture, custom cabinets, and architectural built-ins."
      />

      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/luxury-kitchen.png" alt="Portfolio hero" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-950/90 to-stone-950" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-3xl">
          <ScrollReveal>
            <SectionDivider className="mb-6" />
            <h1 className="text-4xl md:text-6xl font-serif font-semibold text-stone-50 mb-5">
              Our <span className="text-gold-gradient">Portfolio</span>
            </h1>
            <p className="text-lg text-stone-400 font-light">
              A curated selection of our finest custom woodworking commissions. 
              Each piece is uniquely designed and meticulously crafted.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 bg-stone-950 min-h-screen grain-overlay">
        <div className="container mx-auto px-4 md:px-6">
          {/* Filters */}
          <ScrollReveal className="flex flex-wrap justify-center gap-2 md:gap-3 mb-14">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-xs font-medium tracking-wide uppercase transition-all duration-300 ${
                  activeCategory === category 
                    ? 'bg-gradient-to-r from-gold-700 to-gold-600 text-stone-950 shadow-lg shadow-gold-900/20' 
                    : 'bg-stone-900/50 text-stone-500 hover:bg-stone-800 hover:text-stone-300 border border-stone-800/50'
                }`}
              >
                {category}
              </button>
            ))}
          </ScrollReveal>

          {/* Gallery */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl img-zoom">
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-stone-950/0 group-hover:bg-stone-950/40 transition-all duration-500 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500">
                        <span className="text-stone-100 text-xs font-medium uppercase tracking-wider">View</span>
                      </div>
                    </div>
                    {/* Gold top accent */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="mt-4 px-1">
                    <div className="text-gold-600 text-[10px] font-medium uppercase tracking-[0.2em] mb-1.5">
                      {project.category}
                    </div>
                    <h3 className="text-lg font-serif font-semibold text-stone-200 group-hover:text-gold-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-stone-500 text-sm mt-1 line-clamp-2">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <ImageLightbox
        images={lightboxImages}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}
