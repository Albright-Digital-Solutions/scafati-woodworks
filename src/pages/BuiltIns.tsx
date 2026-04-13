import { SEO } from '../components/SEO';
import { QuoteForm } from '../components/ui/QuoteForm';
import { CheckCircle2 } from 'lucide-react';

export function BuiltIns() {
  return (
    <>
      <SEO 
        title="Architectural Built-ins & Library Shelving in Portland"
        description="Transform your space with custom architectural built-ins, library shelving, and entertainment centers by Scafati Woodworks in Portland."
      />

      <section className="pt-32 pb-16 bg-stone-950 border-b border-stone-900">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <div className="text-wood-500 font-medium tracking-wider uppercase text-sm mb-4">Service Silo</div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-50 mb-6">Architectural Built-ins</h1>
          <p className="text-lg text-stone-400">
            Seamlessly integrate luxury storage and display solutions into your home's architecture with our bespoke built-ins.
          </p>
        </div>
      </section>

      <section className="py-20 bg-stone-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-2 lg:order-1 relative rounded-lg overflow-hidden shadow-2xl aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80" 
                alt="Custom architectural built-ins and library shelving" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-stone-900/10 rounded-lg"></div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-serif font-bold text-stone-50 mb-6">Designed for Your Space</h2>
              <p className="text-stone-300 text-lg mb-6 leading-relaxed">
                Whether you envision a floor-to-ceiling library, a sophisticated entertainment center, or an elegant mudroom, our built-ins are designed to look as though they were part of your home's original, high-end construction.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Custom library shelving and rolling ladders',
                  'Integrated media and entertainment centers',
                  'Elegant mudroom lockers and bench seating',
                  'Seamless trim and molding integration'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-stone-400">
                    <CheckCircle2 className="w-5 h-5 text-wood-600 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
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
