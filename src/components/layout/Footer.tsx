import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { SectionDivider } from '../ui/SectionDivider';
import { Button } from '../ui/Button';
import { dfwCities } from '../../data/cities';

export function Footer() {
  return (
    <>
      {/* Pre-footer CTA */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/craftsman-workshop.png"
            alt="Master craftsman at work"
            className="w-full h-full object-cover"
          />
          {/* Light warm overlay — still shows the image but softens it */}
          <div className="absolute inset-0 bg-gradient-to-t from-wood-950/85 via-wood-900/75 to-wood-800/60" />
          <div className="absolute inset-0 grain-overlay" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-3xl">
          <ScrollReveal>
            <SectionDivider className="mb-8" light />
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-white mb-6 leading-tight">
              Ready to Start <span className="text-gold-gradient">Your Project?</span>
            </h2>
            <p className="text-lg text-stone-300 mb-10 font-light leading-relaxed max-w-xl mx-auto">
              Every great space starts with a conversation. Contact us today for a free quote and let's build something you'll love.
            </p>
            <Button size="lg" asChild className="shimmer h-14 px-10 text-base">
              <Link to="/contact">
                Get a Free Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <footer className="bg-wood-950 border-t border-wood-900/50 pt-16 pb-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
            {/* Brand */}
            <div className="flex flex-col gap-5 lg:col-span-1">
              <Link to="/" className="flex items-center group mb-1">
                <img
                  src="/images/logo-dark.png"
                  alt="Scafati Woodworks — Cabinets & More"
                  className="h-20 w-auto group-hover:opacity-80 transition-all duration-300"
                />
              </Link>
              <p className="text-stone-400 text-sm leading-relaxed">
                Custom cabinetry and fine woodworking for homeowners across the DFW metroplex — built with precision, installed with care.
              </p>
              <div className="flex gap-3 mt-1">
                <a href="https://www.instagram.com/scafati_woodworks" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-wood-700 flex items-center justify-center text-stone-500 hover:text-gold-400 hover:border-gold-600/50 transition-all">
                  <Instagram className="w-4 h-4" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="https://www.facebook.com/scafatiwoodworks" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-wood-700 flex items-center justify-center text-stone-500 hover:text-gold-400 hover:border-gold-600/50 transition-all">
                  <Facebook className="w-4 h-4" />
                  <span className="sr-only">Facebook</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-serif text-base font-semibold text-stone-200 mb-5 tracking-wide">Quick Links</h3>
              <ul className="flex flex-col gap-3">
                <li><Link to="/portfolio" className="text-stone-500 hover:text-gold-400 transition-colors text-sm">Project Portfolio</Link></li>
                <li><Link to="/about" className="text-stone-500 hover:text-gold-400 transition-colors text-sm">Our Story</Link></li>
                <li><Link to="/services" className="text-stone-500 hover:text-gold-400 transition-colors text-sm">All Services</Link></li>
                <li><Link to="/contact" className="text-stone-500 hover:text-gold-400 transition-colors text-sm">Request a Free Quote</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-serif text-base font-semibold text-stone-200 mb-5 tracking-wide">Services</h3>
              <ul className="flex flex-col gap-3">
                <li><Link to="/services/custom-cabinets" className="text-stone-500 hover:text-gold-400 transition-colors text-sm">Custom Cabinets</Link></li>
                <li><Link to="/built-ins" className="text-stone-500 hover:text-gold-400 transition-colors text-sm">Built-Ins</Link></li>
                <li><Link to="/services/entertainment-centers" className="text-stone-500 hover:text-gold-400 transition-colors text-sm">Entertainment Centers</Link></li>
                <li><Link to="/services/mudroom-storage" className="text-stone-500 hover:text-gold-400 transition-colors text-sm">Mudroom Storage</Link></li>
                <li><Link to="/services/bathroom-vanities" className="text-stone-500 hover:text-gold-400 transition-colors text-sm">Bathroom Vanities</Link></li>
                <li><Link to="/services/cabinet-refacing" className="text-stone-500 hover:text-gold-400 transition-colors text-sm">Cabinet Refacing</Link></li>
                <li><Link to="/services" className="text-gold-600 hover:text-gold-400 transition-colors text-sm font-medium">View All →</Link></li>
              </ul>
            </div>

            {/* Cities We Serve */}
            <div>
              <h3 className="font-serif text-base font-semibold text-stone-200 mb-5 tracking-wide">Cities We Serve</h3>
              <ul className="flex flex-col gap-3">
                {dfwCities.slice(0, 8).map((city) => (
                  <li key={city.slug}>
                    <Link to={`/service-areas/${city.slug}`} className="text-stone-500 hover:text-gold-400 transition-colors text-sm">
                      {city.name}, TX
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/service-areas" className="text-gold-600 hover:text-gold-400 transition-colors text-sm font-medium">View All →</Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-serif text-base font-semibold text-stone-200 mb-5 tracking-wide">Contact Us</h3>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3 text-sm text-stone-500">
                  <MapPin className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                  <span>Dallas–Fort Worth, TX</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-stone-500">
                  <Phone className="w-4 h-4 text-gold-600 shrink-0" />
                  <a href="tel:+18174036044" className="hover:text-gold-400 transition-colors">(817) 403-6044</a>
                </li>
                <li className="flex items-center gap-3 text-sm text-stone-500">
                  <Mail className="w-4 h-4 text-gold-600 shrink-0" />
                  <a href="mailto:info@scafatiwoodworks.com" className="hover:text-gold-400 transition-colors">info@scafatiwoodworks.com</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-wood-900/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-stone-600 text-xs">
              &copy; {new Date().getFullYear()} Scafati Woodworks. All rights reserved.
            </p>
            <div className="text-stone-600 text-xs text-center md:text-right max-w-sm">
              Proudly serving Dallas, Fort Worth, Plano, Frisco, Southlake, Keller, and the greater DFW metroplex.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
