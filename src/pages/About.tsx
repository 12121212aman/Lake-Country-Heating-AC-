import React from 'react';
import { motion } from 'motion/react';
import { Award, CheckCircle2, MapPin, Users } from 'lucide-react';

const TEAM_IMAGE = '/src/assets/images/hvac_team_1778994555027.png';

export default function About() {
  return (
    <div className="pt-24">
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <span className="text-orange font-black uppercase tracking-[0.3em] text-xs">Our Story</span>
              <h2 className="text-4xl md:text-6xl font-black text-navy mt-4 mb-8 leading-[0.9]">
                SERVING THE VALLEY <br />FOR OVER 15 YEARS
              </h2>
              <div className="space-y-6 text-gray-600 font-medium text-lg leading-relaxed">
                <p>
                  Lake Country Heating & AC was founded on a simple principle: provide honest, high-quality HVAC service that families can rely on. What started as a single van operation in Kelowna has grown into a premier team of NATE-certified experts.
                </p>
                <p>
                  We understand that HVAC issues don't follow a schedule. That's why we've built our reputation on 24/7 reliability and transparent pricing. When you call us, you're not just getting a technician—you're getting a commitment to your home's comfort.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 mt-12">
                <div className="border-l-4 border-orange pl-6">
                  <div className="text-4xl font-black text-navy">15+</div>
                  <div className="text-gray-500 font-bold uppercase tracking-widest text-xs mt-1">Years Experience</div>
                </div>
                <div className="border-l-4 border-orange pl-6">
                  <div className="text-4xl font-black text-navy">5000+</div>
                  <div className="text-gray-500 font-bold uppercase tracking-widest text-xs mt-1">Happy Customers</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="rounded-[3rem] overflow-hidden shadow-2xl relative z-10 aspect-[4/5] md:aspect-auto">
                <img src={TEAM_IMAGE} alt="The Team" className="w-full h-full object-cover" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-orange/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-navy uppercase tracking-tighter">FULLY CERTIFIED & LICENSED</h2>
            <div className="w-20 h-1 bg-orange mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { icon: Award, title: "NATE CERTIFIED", desc: "North American Technician Excellence" },
              { icon: ShieldCheck, title: "EPA 608 CERTIFIED", desc: "Safe handling of refrigerants" },
              { icon: CheckCircle2, title: "BC LICENSED", desc: "Fully registered & compliant" },
              { icon: Users, title: "BBB ACCREDITED", desc: "A+ Rating for service excellence" }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-white rounded-3xl shadow-lg border border-gray-100 flex flex-col items-center">
                <div className="w-12 h-12 bg-orange/10 rounded-full flex items-center justify-center text-orange mb-6">
                  <item.icon size={24} />
                </div>
                <h3 className="text-lg font-black text-navy mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
