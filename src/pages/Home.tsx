import React from 'react';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import QuoteForm from '@/components/QuoteForm';
import { Wind, Thermometer, ShieldCheck, Clock, Wrench, Droplet, Star } from 'lucide-react';
import { motion } from 'motion/react';

const AC_IMAGE = '/src/assets/images/ac_service_1778994523825.png';
const HEAT_IMAGE = '/src/assets/images/heating_service_1778994538977.png';

export default function Home() {
  return (
    <div>
      <Hero />

      {/* Services Overview */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-orange font-black uppercase tracking-[0.3em] text-xs">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-black text-navy mt-4 mb-6">HVAC SOLUTIONS FOR EVERY SEASON</h2>
            <p className="text-gray-500 font-medium text-lg leading-relaxed">
              From emergency repairs to precision installations, we provide Lake Country and Kelowna with top-tier heating and cooling services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="Air Conditioning"
              description="Keep your home cool and comfortable with our expert AC repair, maintenance, and installation services."
              icon={<Wind />}
              image={AC_IMAGE}
              delay={0.1}
            />
            <ServiceCard 
              title="Heating Systems"
              description="Reliable furnace repair and high-efficiency heating solutions to keep your family warm all winter."
              icon={<Thermometer />}
              image={HEAT_IMAGE}
              delay={0.2}
            />
            <ServiceCard 
              title="Maintenance Plans"
              description="Preventive care to extend the life of your equipment and lower your monthly energy bills."
              icon={<ShieldCheck />}
              image={AC_IMAGE} // Use AC as placeholder
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Trust & Promotions Section */}
      <section className="py-24 bg-navy text-white overflow-hidden relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                WHY LAKE COUNTRY <span className="text-orange">HEATING & AC?</span>
              </h2>
              <div className="space-y-8">
                {[
                  { icon: Clock, title: "24/7 EMERGENCY RESPONSE", desc: "Available when you need us most, including weekends and holidays." },
                  { icon: ShieldCheck, title: "LICENSED & NATE CERTIFIED", desc: "Our technicians are trained to the highest industry standards." },
                  { icon: Wrench, title: "UPFRONT TRANSPARENT PRICING", desc: "No hidden fees. We provide clear quotes before any work begins." }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-orange flex items-center justify-center shrink-0 shadow-lg shadow-orange/20">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-black mb-2">{item.title}</h3>
                      <p className="text-white/60 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <QuoteForm />
              
              {/* Branding Badges */}
              <div className="mt-12 flex flex-wrap justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
                {['Carrier', 'Trane', 'Lennox', 'Daikin'].map(brand => (
                  <span key={brand} className="text-2xl font-black tracking-tighter uppercase">{brand}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Teaser */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center gap-1 mb-6 text-orange">
            {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={24} />)}
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-navy mb-8 max-w-4xl mx-auto leading-tight italic">
            "Professional, punctual, and highly efficient. They had our AC back up and running within hours of our emergency call. Highly recommend!"
          </h2>
          <div className="flex flex-col items-center">
            <span className="text-navy font-black text-xl">MICHAEL JOHNSON</span>
            <span className="text-gray-500 font-bold uppercase tracking-widest text-xs mt-1">Verified Customer in Kelowna</span>
          </div>
        </div>
      </section>
    </div>
  );
}
