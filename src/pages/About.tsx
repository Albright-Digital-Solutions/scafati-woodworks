import { SEO } from '../components/SEO';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

export function About() {
  return (
    <>
      <SEO 
        title="Our Story | Scafati Woodworks | Portland Custom Woodworker"
        description="At Scafati Woodworks, we believe that true luxury lies in the details. Learn about our dedication to uncompromising craftsmanship."
      />

      <section className="pt-32 pb-16 bg-stone-950 border-b border-stone-900">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-50 mb-6">Our Story</h1>
          <p className="text-lg text-stone-400">
            Dedicated to the art of fine woodworking, blending traditional techniques with modern precision.
          </p>
        </div>
      </section>

      <section className="py-20 bg-stone-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[3/4] rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80" 
                  alt="Craftsman in workshop" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-wood-900 rounded-lg -z-10 hidden md:block"></div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-50 mb-6">A Legacy of Quality</h2>
              <div className="space-y-6 text-stone-300 text-lg leading-relaxed font-light">
                <p>
                  At Scafati Woodworks, we believe that true luxury lies in the details. Founded on a dedication to uncompromising craftsmanship, our workshop marries time-honored woodworking techniques with modern precision.
                </p>
                <p>
                  We do not mass-produce; we meticulously tailor. Every piece we create—from expansive culinary spaces to intimate architectural built-ins—is a functional work of art, designed to endure for generations and crafted to reflect the unique rhythm of your home.
                </p>
                <p>
                  We source our materials responsibly, preferring locally milled hardwoods and sustainable suppliers. We believe that the natural beauty of the wood should be the star of the show, enhanced—not hidden—by our designs and finishes.
                </p>
              </div>
              
              <div className="mt-10 pt-10 border-t border-stone-800">
                <h3 className="font-serif text-2xl font-bold text-stone-100 mb-4">Our Philosophy</h3>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <span className="font-serif text-xl text-wood-500 font-bold">01.</span>
                    <div>
                      <strong className="block text-stone-200 mb-1">Uncompromising Quality</strong>
                      <span className="text-stone-400 text-sm">We never cut corners. If a joint isn't perfect, we do it again.</span>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-serif text-xl text-wood-500 font-bold">02.</span>
                    <div>
                      <strong className="block text-stone-200 mb-1">True Customization</strong>
                      <span className="text-stone-400 text-sm">Your piece is built for you, to your exact specifications and style.</span>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-serif text-xl text-wood-500 font-bold">03.</span>
                    <div>
                      <strong className="block text-stone-200 mb-1">Durability</strong>
                      <span className="text-stone-400 text-sm">We build furniture meant to be used, loved, and passed down.</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-10">
                <Button size="lg" asChild>
                  <Link to="/contact">Request a Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
