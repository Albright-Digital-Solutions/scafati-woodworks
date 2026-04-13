import { useState } from 'react';
import { SEO } from '../components/SEO';
import { motion, AnimatePresence } from 'motion/react';

const projects = [
  {
    id: 1,
    title: 'Modern Walnut Dining Table',
    category: 'Tables',
    description: 'A 10-foot solid walnut dining table with a custom blackened steel base. Finished with a durable, hand-rubbed oil.',
    img: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    title: 'Craftsman Kitchen Remodel',
    category: 'Cabinets',
    description: 'Quarter-sawn white oak cabinetry featuring authentic Craftsman details, inset doors, and custom drawer organizers.',
    img: 'https://images.unsplash.com/photo-1556910103-1c02745a872f?auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    title: 'Floor-to-Ceiling Library',
    category: 'Built-ins',
    description: 'Custom painted built-in bookcases spanning an entire wall, complete with a rolling ladder and integrated lighting.',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80'
  },
  {
    id: 4,
    title: 'Live Edge Coffee Table',
    category: 'Furniture',
    description: 'A stunning maple burl live edge coffee table with epoxy resin fills and mid-century modern inspired legs.',
    img: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&q=80'
  },
  {
    id: 5,
    title: 'Minimalist Platform Bed',
    category: 'Furniture',
    description: 'A sleek, low-profile platform bed crafted from solid ash, featuring integrated floating nightstands.',
    img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80'
  },
  {
    id: 6,
    title: 'Executive Office Desk',
    category: 'Tables',
    description: 'A massive cherry wood executive desk with leather inlay, hidden wire management, and locking drawers.',
    img: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80'
  }
];

const categories = ['All', 'Furniture', 'Cabinets', 'Built-ins', 'Tables'];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <>
      <SEO 
        title="Custom Woodworking Portfolio | Scafati Woodworks"
        description="View our gallery of custom woodworking projects, including bespoke furniture, custom cabinets, and architectural built-ins."
      />

      <section className="pt-32 pb-16 bg-stone-950 border-b border-stone-900">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-50 mb-6">Our Portfolio</h1>
          <p className="text-lg text-stone-400">
            A selection of our finest custom woodworking projects. Each piece is uniquely designed and meticulously crafted to our clients' exact specifications.
          </p>
        </div>
      </section>

      <section className="py-12 bg-stone-950 min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category 
                    ? 'bg-wood-600 text-white' 
                    : 'bg-stone-900 text-stone-400 hover:bg-stone-800 hover:text-stone-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map(project => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-stone-900 rounded-lg overflow-hidden border border-stone-800"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-wood-500 text-xs font-medium uppercase tracking-wider mb-2">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-serif font-bold text-stone-100 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-stone-400 text-sm line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
}
