import { useParams, Navigate } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { QuoteForm } from '../components/ui/QuoteForm';
import { CheckCircle2, Wrench } from 'lucide-react';
import { servicesData } from '../data/services';

export function ServiceDetail() {
  const { slug } = useParams();
  const service = servicesData.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <>
      <SEO 
        title={`${service.title} in Dallas, TX | Scafati Woodworks`}
        description={service.description}
      />

      <section className="pt-32 pb-16 bg-stone-950 border-b border-stone-900">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <div className="text-wood-500 font-medium tracking-wider uppercase text-sm mb-4">{service.subtitle}</div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-50 mb-6">{service.title}</h1>
          <p className="text-lg text-stone-400">
            {service.description}
          </p>
        </div>
      </section>

      <section className="py-20 bg-stone-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-2 lg:order-1 relative rounded-lg overflow-hidden shadow-2xl aspect-[4/3]">
              <img 
                src={service.img} 
                alt={service.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-stone-900/10 rounded-lg"></div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-serif font-bold text-stone-50 mb-6">Uncompromising Craftsmanship</h2>
              
              <div className="bg-stone-900 border border-stone-800 p-6 rounded-lg mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <Wrench className="w-5 h-5 text-wood-500" />
                  <h3 className="font-serif font-bold text-stone-100 text-lg">Cabinet Tech & Construction</h3>
                </div>
                <p className="text-stone-300 leading-relaxed">
                  {service.tech}
                </p>
              </div>

              <h3 className="font-serif font-bold text-stone-100 text-xl mb-4">Key Features</h3>
              <ul className="space-y-4 mb-8">
                {service.features.map((feature, i) => (
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
