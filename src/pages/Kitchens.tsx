import { SEO } from '../components/SEO';
import { QuoteForm } from '../components/ui/QuoteForm';
import { CheckCircle2 } from 'lucide-react';

export function Kitchens() {
  return (
    <>
      <SEO 
        title="Luxury Custom Kitchen Cabinetry in Portland | Scafati Woodworks"
        description="Elevate your culinary space with bespoke kitchen cabinetry. Scafati Woodworks designs and fabricates high-end, custom kitchen cabinets in Portland."
      />

      <section className="pt-32 pb-16 bg-stone-950 border-b border-stone-900">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <div className="text-wood-500 font-medium tracking-wider uppercase text-sm mb-4">Service Silo</div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-50 mb-6">Custom Kitchen Cabinetry</h1>
          <p className="text-lg text-stone-400">
            The kitchen is the heart of your home. We craft bespoke culinary spaces that marry flawless aesthetics with unparalleled functionality.
          </p>
        </div>
      </section>

      <section className="py-20 bg-stone-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <h2 className="text-3xl font-serif font-bold text-stone-50 mb-6">Uncompromising Quality & Design</h2>
              <p className="text-stone-300 text-lg mb-6 leading-relaxed">
                Unlike modular or semi-custom options, our luxury kitchen cabinets are built from the ground up to your exact specifications. We source premium hardwoods and employ traditional joinery techniques to ensure your kitchen endures decades of daily use.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Premium hardwood doors and face frames',
                  'Solid wood, dovetail drawer boxes',
                  'State-of-the-art soft-close hardware',
                  'Custom-tailored interior organizers and pull-outs'
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
                src="https://images.unsplash.com/photo-1556910103-1c02745a872f?auto=format&fit=crop&q=80" 
                alt="Luxury custom kitchen cabinetry" 
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
