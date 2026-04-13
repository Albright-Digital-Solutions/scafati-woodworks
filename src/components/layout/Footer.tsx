import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-stone-950 border-t border-stone-900 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2 group mb-2">
              <div className="w-8 h-8 bg-wood-600 rounded-sm flex items-center justify-center text-stone-50 font-serif font-bold group-hover:bg-wood-500 transition-colors">
                SW
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold text-stone-100 leading-none">Scafati</span>
                <span className="text-[10px] uppercase tracking-widest text-wood-500 font-medium">Woodworks</span>
              </div>
            </Link>
            <p className="text-stone-400 text-sm leading-relaxed">
              Premium custom woodworking, furniture, and built-ins crafted with precision and passion for high-end homes and commercial spaces.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="text-stone-400 hover:text-wood-500 transition-colors">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-stone-400 hover:text-wood-500 transition-colors">
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-stone-100 mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              <li><Link to="/portfolio" className="text-stone-400 hover:text-wood-400 transition-colors text-sm">Project Portfolio</Link></li>
              <li><Link to="/about" className="text-stone-400 hover:text-wood-400 transition-colors text-sm">Our Story</Link></li>
              <li><Link to="/contact" className="text-stone-400 hover:text-wood-400 transition-colors text-sm">Request a Consultation</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-stone-100 mb-4">Specialties</h3>
            <ul className="flex flex-col gap-3">
              <li><Link to="/kitchens" className="text-stone-400 hover:text-wood-400 transition-colors text-sm">Custom Kitchen Cabinetry</Link></li>
              <li><Link to="/built-ins" className="text-stone-400 hover:text-wood-400 transition-colors text-sm">Architectural Built-ins</Link></li>
              <li><Link to="/services/kitchen-islands" className="text-stone-400 hover:text-wood-400 transition-colors text-sm">Working Kitchen Islands</Link></li>
              <li><Link to="/services/mudrooms" className="text-stone-400 hover:text-wood-400 transition-colors text-sm">Mudroom Drop Zones</Link></li>
              <li><Link to="/services" className="text-stone-400 hover:text-wood-400 transition-colors text-sm">View All Services &rarr;</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-stone-100 mb-4">Contact Us</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-sm text-stone-400">
                <MapPin className="w-5 h-5 text-wood-600 shrink-0 mt-0.5" />
                <span>123 Craftsman Way<br />Dallas, TX 75201</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-stone-400">
                <Phone className="w-5 h-5 text-wood-600 shrink-0" />
                <a href="tel:+15551234567" className="hover:text-wood-400 transition-colors">(555) 123-4567</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-stone-400">
                <Mail className="w-5 h-5 text-wood-600 shrink-0" />
                <a href="mailto:hello@scafatiwoodworks.com" className="hover:text-wood-400 transition-colors">hello@scafatiwoodworks.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-stone-500 text-sm">
            &copy; {new Date().getFullYear()} Scafati Woodworks. All rights reserved.
          </p>
          <div className="text-stone-500 text-xs text-center md:text-right max-w-md">
            Proudly serving Dallas, Fort Worth, Plano, Frisco, Southlake, and the greater DFW metroplex with premium custom cabinetry and fine woodworking.
          </div>
        </div>
      </div>
    </footer>
  );
}
