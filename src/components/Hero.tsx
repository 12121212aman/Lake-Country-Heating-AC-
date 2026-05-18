import React from 'react';
import { motion } from 'motion/react';
import { Phone, CheckCircle2, ShieldCheck, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop';
const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 md:pt-32 overflow-hidden bg-navy">
      {/* Background with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={HERO_IMAGE} 
          alt="HVAC technician at work" 
          loading="lazy"
          onError={(e) => { (e.target as HTMLImageElement).src = FALLBACK_IMAGE; }}
          className="w-full h-full object-cover opacity-30"
          style={{ objectPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-orange text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-[0.3em] mb-6 shadow-xl">
              Kelowna's Trusted HVAC Experts
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9]">
              STAY COOL.<br />
              <span className="text-orange">STAY WARM.</span><br />
              FEEL BETTER.
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-xl font-medium leading-relaxed">
              Serving Lake Country & Kelowna with professional AC repair, furnace installation, and 24/7 priority emergency service.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a 
                href="tel:+17784804328"
                className="bg-orange text-white px-8 py-5 rounded-md font-black text-lg flex items-center justify-center gap-3 hover:bg-orange-600 transition-all transform hover:-translate-y-1 shadow-2xl shadow-orange/30"
              >
                <Phone size={24} />
                CALL NOW (778) 480-4328
              </a>
              <Link
                to="/services"
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-5 rounded-md font-black text-lg flex items-center justify-center gap-3 hover:bg-white/20 transition-all"
              >
                GET A FREE QUOTE
              </Link>
            </div>

            {/* Trust Signals */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { icon: ShieldCheck, label: "Certified & Insured" },
                { icon: CheckCircle2, label: "Satisfaction Guaranteed" },
                { icon: Award, label: "Top Rated Service" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-white/70">
                  <item.icon className="text-orange" size={24} />
                  <span className="text-sm font-bold uppercase tracking-wider">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Seasonal Promotion Floating Badge */}
      <motion.div
        initial={{ rotate: 12, x: 100 }}
        animate={{ rotate: -5, x: 0 }}
        className="hidden lg:block absolute bottom-12 right-12 bg-white p-6 rounded-2xl shadow-2xl skew-x-3 border-4 border-orange"
      >
        <div className="text-navy font-black text-lg leading-tight mb-2">
          SPRING SPECIAL:<br />
          <span className="text-orange text-3xl">$89 AC TUNE-UP</span>
        </div>
        <p className="text-gray-500 font-bold text-xs uppercase">Limited Time Offer • Book Online</p>
      </motion.div>
    </section>
  );
}
