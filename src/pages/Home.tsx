import React from 'react';
import Hero from '@/components/Hero';
import ServiceIconCard from '@/components/ServiceIconCard';
import QuoteForm from '@/components/QuoteForm';
import { Wind, Thermometer, ShieldCheck, Clock, Wrench, Droplet, Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <div>
      <Hero />

      {/* Services Overview */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Accents / Floating Particles */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-20">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-400 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-orange-400 rounded-full blur-[120px] animate-pulse [animation-delay:2s]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-orange font-black uppercase tracking-[0.4em] text-[10px] bg-orange/10 px-4 py-1.5 rounded-full inline-block mb-4">
              Premium HVAC Solutions
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-navy mt-4 mb-6 leading-tight">
              DESIGNED FOR <br /><span className="text-orange">MAXIMUM COMFORT</span>
            </h2>
            <p className="text-gray-500 font-medium text-lg leading-relaxed">
              We've redesigned home comfort. No more guesswork—just high-performance heating and cooling solutions backed by professional expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            <ServiceIconCard 
              title="Air Conditioning"
              description="High-precision cooling systems designed to withstand the hottest Okanagan summers."
              icon={<Wind className="w-10 h-10" />}
              features={["24/7 Repairs", "Efficiency Tune-ups", "Refrigerant Management"]}
              gradient="from-blue-400 to-cyan-500"
              delay={0.1}
            />
            <ServiceIconCard 
              title="Heating Systems"
              description="Reliable furnace solutions that keep your family warm even on the coldest winter nights."
              icon={<Thermometer className="w-10 h-10" />}
              features={["Furnace Diagnostics", "Safety Inspections", "Heat Pump Specialist"]}
              gradient="from-orange-500 to-red-600"
              delay={0.2}
            />
            <ServiceIconCard 
              title="Priority Club"
              description="Exclusive maintenance membership that keeps your system running at peak performance year-round."
              icon={<ShieldCheck className="w-10 h-10" />}
              features={["Priority Scheduling", "15% Member Discount", "Bi-Annual Tune-ups"]}
              gradient="from-navy to-blue-800"
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
