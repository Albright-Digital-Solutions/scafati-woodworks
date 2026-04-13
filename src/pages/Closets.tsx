import { SEO } from '../components/SEO';
import { QuoteForm } from '../components/ui/QuoteForm';
import { CheckCircle2 } from 'lucide-react';

export function Closets() {
  return (
    <>
      <SEO 
        title="Custom Closets & Luxury Wardrobes in Portland"
        description="Experience the ultimate in organization with bespoke custom closets and luxury dressing rooms crafted by Scafati Woodworks."
      />

      <section className="pt-32 pb-16 bg-stone-950 border-b border-stone-900">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <div className="text-wood-500 font-medium tracking-wider uppercase text-sm mb-4">Service Silo</div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-50 mb-6">Custom Closets & Wardrobes</h1>
          <p className="text-lg text-stone-400">
            Elevate your daily routine with luxury storage solutions. We design and build high-end custom closets and dressing rooms.
          </p>
        </div>
      </section>

      <section className="py-20 bg-stone-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <h2 className="text-3xl font-serif font-bold text-stone-50 mb-6">The Ultimate Dressing Experience</h2>
              <p className="text-stone-300 text-lg mb-6 leading-relaxed">
                A luxury closet is more than just storage; it is a meticulously organized sanctuary. We utilize premium materials, integrated lighting, and specialized hardware to create wardrobes that display your collection beautifully while maximizing space.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Bespoke walk-in closets and dressing rooms',
                  'Integrated LED display and ambient lighting',
                  'Custom jewelry drawers and accessory islands',
                  'Premium wood finishes and glass display doors'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-stone-400">
                    <CheckCircle2 className="w-5 h-5 text-wood-600 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-2xl aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&q=80" 
                alt="Luxury custom closet and wardrobe" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-stone-900/10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-stone-900 border-t border-stone-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-50 mb-6">Begin Your Project</h2>
              <p className="text-stone-400 text-lg mb-8">
                We invite you to discuss your vision with our master craftsmen. Request a private consultation to explore materials, design possibilities, and the process of bringing your bespoke space to life.
              </p>
            </div>
            <div>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
