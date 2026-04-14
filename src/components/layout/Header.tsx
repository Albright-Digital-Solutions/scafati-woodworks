import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '../ui/Button';
import { cn } from '@/src/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
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
    setServicesOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const serviceDropdown = [
    { name: 'Custom Kitchens', path: '/kitchens', img: '/images/luxury-kitchen.png' },
    { name: 'Architectural Built-ins', path: '/built-ins', img: '/images/library-builtins.png' },
    { name: 'Luxury Closets', path: '/closets', img: '/images/luxury-closet.png' },
    { name: 'All Services →', path: '/services' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled 
          ? 'py-3 glass shadow-lg shadow-stone-950/50' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <img 
            src="/images/logo-dark.png" 
            alt="Scafati Woodworks — Cabinets & More" 
            className="h-24 md:h-28 w-auto group-hover:opacity-80 transition-all duration-300"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              {link.hasDropdown ? (
                <button
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  className={cn(
                    'flex items-center gap-1 text-sm font-medium transition-colors line-reveal pb-1',
                    location.pathname === link.path || location.pathname.startsWith('/services') || location.pathname === '/kitchens' || location.pathname === '/built-ins' || location.pathname === '/closets'
                      ? 'text-gold-600' 
                      : 'text-stone-300 hover:text-stone-100'
                  )}
                >
                  {link.name}
                  <ChevronDown className={cn('w-3.5 h-3.5 transition-transform duration-300', servicesOpen && 'rotate-180')} />
                </button>
              ) : (
                <Link
                  to={link.path}
                  className={cn(
                    'text-sm font-medium transition-colors line-reveal pb-1',
                    location.pathname === link.path 
                      ? 'text-gold-600' 
                      : 'text-stone-300 hover:text-stone-100'
                  )}
                >
                  {link.name}
                </Link>
              )}

              {/* Services Dropdown */}
              {link.hasDropdown && (
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                    >
                      <div className="glass rounded-xl p-2 min-w-[280px] shadow-2xl shadow-stone-950/80">
                        {serviceDropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-stone-800/50 transition-colors group/item"
                          >
                            {item.img && (
                              <div className="w-12 h-12 rounded-md overflow-hidden shrink-0">
                                <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-500" />
                              </div>
                            )}
                            <span className={cn(
                              'text-sm font-medium',
                              item.img ? 'text-stone-200 group-hover/item:text-gold-500' : 'text-gold-600'
                            )}>
                              {item.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-5">
          <a href="tel:+18174036044" className="flex items-center gap-2 text-stone-400 hover:text-gold-500 transition-colors group text-sm">
            <div className="w-8 h-8 rounded-full border border-stone-700 flex items-center justify-center group-hover:border-gold-600/50 transition-colors">
              <Phone className="w-3.5 h-3.5" />
            </div>
            <span className="font-medium tracking-wide">(817) 403-6044</span>
          </a>
          <Button asChild className="shimmer">
            <Link to="/contact">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden relative w-10 h-10 flex items-center justify-center text-stone-300 hover:text-stone-100"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {mobileMenuOpen ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <Menu className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden"
          >
            <div className="glass border-t border-stone-800/50 p-6 flex flex-col gap-2 mx-4 mt-2 rounded-xl">
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={cn(
                      'px-4 py-3 rounded-lg text-base font-medium transition-colors',
                      location.pathname === link.path 
                        ? 'bg-gold-600/10 text-gold-500' 
                        : 'text-stone-300 hover:bg-stone-800/50'
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              <div className="flex flex-col gap-3 pt-4 border-t border-stone-800/50">
                <a href="tel:+18174036044" className="flex items-center justify-center gap-2 py-3 text-stone-300 font-medium">
                  <Phone className="w-5 h-5 text-gold-600" />
                  (817) 403-6044
                </a>
                <Button asChild size="lg" className="w-full shimmer">
                  <Link to="/contact">Get a Quote</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
