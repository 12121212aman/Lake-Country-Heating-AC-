import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex flex-col">
              <span className="text-white font-black text-2xl leading-tight">LAKE COUNTRY</span>
              <span className="text-orange font-bold text-sm tracking-[0.2em] -mt-1">HEATING & AC</span>
            </Link>
            <p className="text-white/60 font-medium leading-relaxed">
              Professional HVAC services in the Okanagan Valley. Licensed, insured, and committed to your comfort 24/7.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-orange hover:border-orange transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-black uppercase tracking-widest text-orange">Services</h3>
            <ul className="space-y-4">
              {['AC Repair', 'Heating Service', 'Installation', 'Duct Cleaning', 'Maintenance Plans', 'Heat Pumps'].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group">
                    <ChevronRight size={14} className="text-orange group-hover:translate-x-1 transition-transform" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h3 className="text-lg font-black uppercase tracking-widest text-orange">Company</h3>
            <ul className="space-y-4">
              {['About Us', 'Service Area', 'Reviews', 'Contact', 'Financing', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Contact' ? '/contact' : '/'} className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group">
                    <ChevronRight size={14} className="text-orange group-hover:translate-x-1 transition-transform" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-lg font-black uppercase tracking-widest text-orange">Contact Us</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center shrink-0 border border-orange/20">
                  <Phone className="text-orange" size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1">Call Anytime</p>
                  <a href="tel:+17784804328" className="text-lg font-bold hover:text-orange transition-colors">(778) 480-4328</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center shrink-0 border border-orange/20">
                  <MapPin className="text-orange" size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1">Our Location</p>
                  <p className="font-bold">720 Commonwealth Rd #73,<br />Kelowna, BC V4V 1R7</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-sm font-bold">
            © {new Date().getFullYear()} Lake Country Heating & AC. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
            <span>BC License #XXXXXX</span>
            <span>EPA 608 Certified</span>
            <span>NATE Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
