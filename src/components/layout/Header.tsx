import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '@/src/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent',
        isScrolled ? 'bg-stone-950/95 backdrop-blur-md border-stone-800 py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-wood-600 rounded-sm flex items-center justify-center text-stone-50 font-serif font-bold text-xl group-hover:bg-wood-500 transition-colors">
            SW
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold text-stone-100 leading-none">Scafati</span>
            <span className="text-xs uppercase tracking-widest text-wood-500 font-medium">Woodworks</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'text-sm font-medium transition-colors hover:text-wood-400',
                location.pathname === link.path ? 'text-wood-500' : 'text-stone-300'
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <a href="tel:+15551234567" className="flex items-center gap-2 text-stone-300 hover:text-wood-400 transition-colors group">
            <Phone className="w-4 h-4 text-wood-500 group-hover:text-wood-400" />
            <span className="font-medium tracking-wide">(555) 123-4567</span>
          </a>
          <Button asChild size="lg" className="shadow-lg shadow-wood-900/20">
            <Link to="/contact">Request a Quote</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-stone-300 hover:text-stone-100"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-stone-950 border-b border-stone-800 p-4 flex flex-col gap-4 shadow-xl">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'px-4 py-3 rounded-md text-base font-medium transition-colors',
                  location.pathname === link.path ? 'bg-stone-900 text-wood-500' : 'text-stone-300 hover:bg-stone-900'
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-3 pt-4 border-t border-stone-800">
            <a href="tel:+15551234567" className="flex items-center justify-center gap-2 py-3 text-stone-300 font-medium">
              <Phone className="w-5 h-5 text-wood-500" />
              (555) 123-4567
            </a>
            <Button asChild size="lg" className="w-full">
              <Link to="/contact">Request a Quote</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
