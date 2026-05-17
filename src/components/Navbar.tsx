import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About Us', href: '/about' },
  { name: 'Service Area', href: '/service-area' },
  { name: 'Blog', href: '/blog' },
  { name: 'Reviews', href: '/reviews' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        scrolled ? "bg-navy h-16 shadow-lg" : "bg-navy md:h-24"
      )}
    >
      {/* Top Bar (Contact Info) - Visible on Desktop */}
      {!scrolled && (
        <div className="hidden md:flex bg-navy/90 border-b border-white/10 py-1">
          <div className="container mx-auto px-4 flex justify-between items-center text-[10px] uppercase tracking-widest text-white/60 font-bold">
            <div className="flex gap-6">
              <span>Kelowna • Lake Country • Vernon</span>
              <span>EPA 608 Certified</span>
            </div>
            <div className="flex gap-4">
              <span>Mon-Sat: 8AM-5PM</span>
              <span className="text-orange">24/7 Emergency</span>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex flex-col">
          <span className="text-white font-black text-xl md:text-2xl leading-tight">
            LAKE COUNTRY
          </span>
          <span className="text-orange font-bold text-xs md:text-sm tracking-[0.2em] -mt-1">
            HEATING & AC
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-sm font-bold uppercase tracking-wider transition-colors",
                location.pathname === link.href ? "text-orange" : "text-white/80 hover:text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:+17784804328"
            className="bg-orange text-white px-6 py-3 rounded-md font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-orange-600 transition-all transform hover:-translate-y-1 shadow-lg shadow-orange/20"
          >
            <Phone size={18} />
            (778) 480-4328
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-navy z-50 p-6 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-bold text-white border-b border-white/10 py-4 flex items-center justify-between"
            >
              {link.name}
              <ChevronRight className="text-orange" />
            </Link>
          ))}
          <a
            href="tel:+17784804328"
            className="bg-orange text-white p-6 rounded-md font-bold text-center mt-4 flex items-center justify-center gap-3"
          >
            <Phone size={24} />
            CALL NOW
          </a>
        </div>
      )}
    </nav>
  );
}
