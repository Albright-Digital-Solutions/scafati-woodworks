import { SEO } from '../components/SEO';
import { QuoteForm } from '../components/ui/QuoteForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  return (
    <>
      <SEO 
        title="Contact Us | Request a Consultation | Scafati Woodworks"
        description="Begin your project with Scafati Woodworks. Request a private consultation to explore materials, design possibilities, and bespoke cabinetry."
      />

      <section className="pt-32 pb-16 bg-stone-950 border-b border-stone-900">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-50 mb-6">Begin Your Project</h1>
          <p className="text-lg text-stone-400">
            We invite you to discuss your vision with our master craftsmen. Request a private consultation to explore materials, design possibilities, and the process of bringing your bespoke space to life.
          </p>
        </div>
      </section>

      <section className="py-20 bg-stone-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-2xl font-serif font-bold text-stone-100 mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-wood-500" />
                    </div>
                    <div>
                      <div className="text-sm text-stone-400 mb-1">Call or Text</div>
                      <a href="tel:+15551234567" className="text-lg font-medium text-stone-200 hover:text-wood-400 transition-colors">
                        (555) 123-4567
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-wood-500" />
                    </div>
                    <div>
                      <div className="text-sm text-stone-400 mb-1">Email</div>
                      <a href="mailto:hello@scafatiwoodworks.com" className="text-lg font-medium text-stone-200 hover:text-wood-400 transition-colors break-all">
                        hello@scafatiwoodworks.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-wood-500" />
                    </div>
                    <div>
                      <div className="text-sm text-stone-400 mb-1">Workshop (By Appointment)</div>
                      <div className="text-lg font-medium text-stone-200">
                        123 Craftsman Way<br />
                        Dallas, TX 75201
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-wood-500" />
                    </div>
                    <div>
                      <div className="text-sm text-stone-400 mb-1">Hours</div>
                      <div className="text-lg font-medium text-stone-200">
                        Mon - Fri: 8am - 5pm<br />
                        Sat - Sun: Closed
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-stone-900 border border-stone-800 p-6 rounded-lg">
                <h3 className="font-serif font-bold text-stone-100 mb-2">Service Area</h3>
                <p className="text-sm text-stone-400 mb-4">
                  We proudly serve the greater DFW metroplex, including Dallas, Fort Worth, Plano, Frisco, Southlake, and surrounding affluent neighborhoods.
                </p>
                <div className="w-full h-48 rounded-md overflow-hidden bg-stone-800">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.66442603417!2d-96.7970!3d32.7767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e992147321683%3A0x864e992147321683!2sDallas%2C%20TX!5e0!3m2!1sen!2sus!4v1713042000000!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={false} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Service Area Map"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
