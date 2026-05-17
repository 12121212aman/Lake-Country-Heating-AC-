import React from 'react';
import { MapPin, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

const CITIES = [
  "Kelowna", "West Kelowna", "Lake Country", "Vernon", 
  "Penticton", "Peachland", "Winfield", "Oyama", 
  "Carr's Landing", "Coldstream", "Summerland"
];

export default function ServiceArea() {
  return (
    <div className="pt-24 min-h-screen">
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-orange font-black uppercase tracking-[0.3em] text-xs">Our Territory</span>
              <h1 className="text-5xl md:text-6xl font-black text-navy mt-4 mb-8 leading-[0.9]">
                WHERE WE <span className="text-orange">WORK.</span>
              </h1>
              <p className="text-xl text-gray-600 font-medium leading-relaxed mb-12">
                Based in Lake Country, we provide priority HVAC services across the entire Central Okanagan region. From residential repairs to commercial installations, we're just a phone call away.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8">
                {CITIES.map((city, i) => (
                  <motion.div 
                    key={city}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3 text-navy font-bold hover:text-orange transition-colors cursor-default"
                  >
                    <MapPin size={18} className="text-orange" />
                    {city}
                  </motion.div>
                ))}
              </div>

              <div className="mt-16 p-8 bg-navy rounded-3xl text-white">
                <div className="flex items-center gap-4 mb-4">
                  <CheckCircle2 className="text-orange" />
                  <h3 className="text-xl font-black">FAST LOCAL RESPONSE</h3>
                </div>
                <p className="text-white/60 font-medium">
                  Because we're locally owned and operated, we can often arrive within 2-4 hours for emergency service calls in Lake Country and Kelowna.
                </p>
              </div>
            </div>

            <div className="aspect-square bg-gray-100 rounded-[3rem] relative overflow-hidden shadow-2xl flex items-center justify-center">
              {/* Map Placeholder */}
              <div className="absolute inset-0 bg-blue-100/50">
                 {/* Visual simulation of a map */}
                 <div className="absolute inset-20 border-4 border-white/50 rounded-full blur-2xl bg-orange/20"></div>
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                   <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center text-white shadow-2xl animate-bounce">
                     <MapPin size={24} />
                   </div>
                   <div className="mt-4 px-4 py-2 bg-white rounded-full shadow-lg font-black text-navy text-xs tracking-widest uppercase">
                     Kelowna HQ
                   </div>
                 </div>
              </div>
              <div className="relative z-10 text-center p-12">
                <h2 className="text-3xl font-black text-navy mb-4">MAP VIEW</h2>
                <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Serving the Okanagan Valley</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
