import type { SVGProps } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Star, Quote, Award } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Button } from '../components/ui/Button';

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
          "image": "https://images.unsplash.com/photo-1610505466023-991c28c86514?auto=format&fit=crop&q=80",
          "@id": "",
          "url": "https://scafatiwoodworks.com",
          "telephone": "+15551234567",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Craftsman Way",
            "addressLocality": "Dallas",
            "addressRegion": "TX",
            "postalCode": "75201",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 32.7767,
            "longitude": -96.7970
          },
          "priceRange": "$$$$"
        }}
      />

      {/* Section 1: The Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1556910103-1c02745a872f?auto=format&fit=crop&q=80" 
            alt="Flawless completed luxury kitchen cabinetry" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/90 to-stone-950/40" />
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-wood-950/50 border border-wood-800 text-wood-400 text-sm font-medium mb-6">
                <MapPinIcon className="w-4 h-4" />
                <span>Dallas, Texas</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-stone-50 leading-tight mb-6">
                Bespoke Cabinetry & Fine Woodworking
              </h1>
              <p className="text-lg md:text-2xl text-stone-300 mb-10 leading-relaxed max-w-2xl font-light">
                Elevating homes with uncompromising craftsmanship and timeless design.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="text-base h-14 px-8">
                  <Link to="/contact">Request a Consultation</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Trust & Authority */}
      <section className="py-12 bg-stone-900 border-y border-stone-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center md:text-left">
            <div className="flex items-center gap-4">
              <Award className="w-12 h-12 text-wood-500" />
              <div>
                <div className="text-2xl font-serif font-bold text-stone-100">20+ Years</div>
                <div className="text-stone-400 text-sm uppercase tracking-widest">Master Craftsmanship</div>
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-stone-800"></div>
            <div className="flex items-center gap-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-wood-500 text-wood-500" />
                ))}
              </div>
              <div>
                <div className="text-xl font-serif font-bold text-stone-100">5-Star Rated</div>
                <div className="text-stone-400 text-sm uppercase tracking-widest">By Dallas Homeowners</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Service Silos */}
      <section className="py-24 bg-stone-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-50 mb-6">Masterful Creations</h2>
            <p className="text-stone-400 text-lg">
              We specialize in high-end, custom woodworking tailored to the unique rhythm of your home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Custom Kitchens',
                desc: 'Bespoke culinary spaces designed for flawless aesthetics and unparalleled functionality.',
                img: 'https://images.unsplash.com/photo-1556910103-1c02745a872f?auto=format&fit=crop&q=80',
                link: '/kitchens'
              },
              {
                title: 'Architectural Built-ins',
                desc: 'Seamless libraries, entertainment centers, and mudrooms that elevate your architecture.',
                img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
                link: '/built-ins'
              },
              {
                title: 'Luxury Closets',
                desc: 'Meticulously organized sanctuaries and dressing rooms crafted with premium materials.',
                img: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&q=80',
                link: '/closets'
              }
            ].map((service, i) => (
              <Link to={service.link} key={i} className="group block relative h-[500px] overflow-hidden rounded-lg">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-serif font-bold text-stone-100 mb-3 group-hover:text-wood-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-stone-300 text-sm mb-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    {service.desc}
                  </p>
                  <div className="inline-flex items-center text-wood-500 text-sm font-medium uppercase tracking-wider">
                    View Gallery <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: The Process */}
      <section className="py-24 bg-stone-900 border-y border-stone-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-50 mb-6">
              The Scafati Process
            </h2>
            <p className="text-stone-400 text-lg">
              A seamless, low-friction journey from your initial vision to the final, flawless installation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-stone-800"></div>
            
            {[
              {
                step: '01',
                title: 'Design Consultation & 3D Rendering',
                desc: 'We begin with a private consultation to understand your vision, followed by precise measurements and photorealistic 3D renderings of your bespoke space.'
              },
              {
                step: '02',
                title: 'Precision Fabrication',
                desc: 'Your project is meticulously crafted in our Dallas workshop, marrying time-honored woodworking techniques with state-of-the-art precision.'
              },
              {
                step: '03',
                title: 'White-Glove Installation',
                desc: 'Our master craftsmen handle the final installation with the utmost care, ensuring a perfect fit and a flawless finish in your home.'
              }
            ].map((item, i) => (
              <div key={i} className="relative text-center z-10">
                <div className="w-24 h-24 mx-auto bg-stone-950 border-2 border-wood-800 rounded-full flex items-center justify-center mb-8 shadow-xl">
                  <span className="font-serif text-3xl font-bold text-wood-500">{item.step}</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-stone-100 mb-4">{item.title}</h3>
                <p className="text-stone-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Visual Portfolio Preview */}
      <section className="py-24 bg-stone-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-50 mb-4">Recent Commissions</h2>
            </div>
            <Button variant="outline" asChild>
              <Link to="/portfolio">Explore the Portfolio</Link>
            </Button>
          </div>

          {/* Asymmetrical Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
            <div className="md:col-span-8 md:row-span-2 relative rounded-lg overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80" alt="Library Built-ins" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-transparent transition-colors" />
            </div>
            <div className="md:col-span-4 md:row-span-1 relative rounded-lg overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1556910103-1c02745a872f?auto=format&fit=crop&q=80" alt="Kitchen Details" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-transparent transition-colors" />
            </div>
            <div className="md:col-span-4 md:row-span-1 relative rounded-lg overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&q=80" alt="Custom Closet" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-transparent transition-colors" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Social Proof */}
      <section className="py-32 bg-stone-900 border-y border-stone-800 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl opacity-5 text-stone-100">
          <Quote className="w-full h-full" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-4xl">
          <p className="text-2xl md:text-4xl font-serif text-stone-100 leading-relaxed mb-10 italic">
            "Scafati Woodworks does not just build cabinets; they craft architectural art. Their precision, professionalism, and ability to execute complex, high-end designs makes them our exclusive partner for luxury builds."
          </p>
          <div>
            <div className="font-serif font-bold text-xl text-wood-500">Eleanor Vance</div>
            <div className="text-stone-400 uppercase tracking-widest text-sm mt-1">Principal Designer, Vance Interiors</div>
          </div>
        </div>
      </section>

      {/* Section 7: Final CTA */}
      <section className="py-24 bg-stone-950 text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-stone-50 mb-6">Begin Your Project</h2>
          <p className="text-xl text-stone-300 mb-10 font-light leading-relaxed">
            We invite you to discuss your vision with our master craftsmen. Request a private consultation to explore materials, design possibilities, and the process of bringing your bespoke space to life.
          </p>
          <Button size="lg" asChild className="h-14 px-10 text-lg">
            <Link to="/contact">Request a Consultation</Link>
          </Button>
        </div>
      </section>
    </>
  );
}

function MapPinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}
