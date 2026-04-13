import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { servicesData } from '../data/services';

export function ServicesIndex() {
  return (
    <>
      <SEO 
        title="Custom Woodworking Services in Dallas | Scafati Woodworks"
        description="Explore our comprehensive range of custom woodworking services, from working kitchen islands and mudrooms to floating vanities and media consoles."
      />

      <section className="pt-32 pb-16 bg-stone-950 border-b border-stone-900">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-50 mb-6">Our Services</h1>
          <p className="text-lg text-stone-400">
            We specialize in high-end, custom woodworking tailored to the unique rhythm of your home. Explore our specialized fabrication capabilities below.
          </p>
        </div>
      </section>

      <section className="py-24 bg-stone-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Hardcoded Silos First */}
            <Link to="/kitchens" className="group block relative h-[400px] overflow-hidden rounded-lg">
              <img src="https://images.unsplash.com/photo-1556910103-1c02745a872f?auto=format&fit=crop&q=80" alt="Custom Kitchens" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-serif font-bold text-stone-100 mb-2 group-hover:text-wood-400 transition-colors">Custom Kitchens</h3>
                <div className="inline-flex items-center text-wood-500 text-sm font-medium uppercase tracking-wider">
                  View Details <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2" />
                </div>
              </div>
            </Link>
            <Link to="/built-ins" className="group block relative h-[400px] overflow-hidden rounded-lg">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80" alt="Architectural Built-ins" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-serif font-bold text-stone-100 mb-2 group-hover:text-wood-400 transition-colors">Architectural Built-ins</h3>
                <div className="inline-flex items-center text-wood-500 text-sm font-medium uppercase tracking-wider">
                  View Details <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2" />
                </div>
              </div>
            </Link>
            <Link to="/closets" className="group block relative h-[400px] overflow-hidden rounded-lg">
              <img src="https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&q=80" alt="Luxury Closets" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-serif font-bold text-stone-100 mb-2 group-hover:text-wood-400 transition-colors">Luxury Closets</h3>
                <div className="inline-flex items-center text-wood-500 text-sm font-medium uppercase tracking-wider">
                  View Details <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2" />
                </div>
              </div>
            </Link>

            {/* Dynamic Services */}
            {servicesData.map((service) => (
              <Link to={`/services/${service.slug}`} key={service.slug} className="group block relative h-[400px] overflow-hidden rounded-lg">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-serif font-bold text-stone-100 mb-2 group-hover:text-wood-400 transition-colors">
                    {service.title}
                  </h3>
                  <div className="inline-flex items-center text-wood-500 text-sm font-medium uppercase tracking-wider">
                    View Details <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
