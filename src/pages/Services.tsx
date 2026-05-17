import React from 'react';
import { motion } from 'motion/react';
import { Wind, Thermometer, Wrench, Droplet, Zap, ShieldCheck } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';

const SERVICES = [
  {
    title: "AC Repair & Service",
    icon: Wind,
    desc: "Complete diagnostics and repair for all central air and mini-split systems. We fix leaks, sensor issues, and compressor failures.",
    details: ["24/7 Emergency Service", "Refrigerant Recharging", "Thermostat Replacement", "Filter Changes"]
  },
  {
    title: "Heating & Furnace",
    icon: Thermometer,
    desc: "Expert furnace repair and maintenance to keep you warm. We service gas, electric, and oil systems throughout the Okanagan.",
    details: ["Pilot Light Repair", "Heat Exchanger Inspection", "Blower Motor Service", "Safety Checks"]
  },
  {
    title: "New Installations",
    icon: Zap,
    desc: "Upgrade to high-efficiency Carrier, Trane, or Lennox systems. We provide precision sizing and professional installation.",
    details: ["Free In-Home Estimates", "Energy Star Qualified", "Modern Heat Pumps", "Financing Available"]
  },
  {
    title: "Duct Cleaning",
    icon: Droplet,
    desc: "Improve your indoor air quality and system efficiency with our professional deep-cleansing duct services.",
    details: ["Microbial Treatments", "Video Inspections", "HEPA Filtration", "Odor Removal"]
  },
  {
    title: "Maintenance Plans",
    icon: ShieldCheck,
    desc: "Protect your investment with our Priority Comfort Club. Regular tune-ups reduce energy bills by up to 20%.",
    details: ["Bi-Annual Tune-ups", "15% Off All Repairs", "No Service Call Fees", "Priority Scheduling"]
  },
  {
    title: "Heat Pumps",
    icon: Wrench,
    desc: "Eco-friendly heating and cooling in one system. Ideal for the BC climate with available rebate assistance.",
    details: ["Hybrid Systems", "Ductless Mini-Splits", "Rebate Guidance", "Efficiency Audits"]
  }
];

export default function Services() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-navy py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-black mb-6">OUR SERVICES</h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto font-medium">
            Comprehensive heating and cooling solutions tailored for Kelowna's unique climate.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {SERVICES.map((service, i) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl transition-all group"
              >
                <div className="w-16 h-16 bg-navy rounded-2xl flex items-center justify-center text-white mb-6 group-hover:bg-orange transition-colors">
                  <service.icon size={32} />
                </div>
                <h3 className="text-2xl font-black text-navy mb-4 uppercase tracking-tighter">{service.title}</h3>
                <p className="text-gray-600 mb-8 font-medium leading-relaxed">{service.desc}</p>
                <ul className="space-y-3">
                  {service.details.map(detail => (
                    <li key={detail} className="flex items-center gap-3 text-sm font-bold text-navy/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Financing Section */}
      <section className="py-24 bg-gray-50 overflow-hidden relative">
        <div className="container mx-auto px-4">
          <div className="bg-navy rounded-[3rem] p-12 md:p-20 text-white relative flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <span className="bg-orange px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">Flexible Options</span>
              <h2 className="text-4xl md:text-5xl font-black mt-6 mb-8 leading-tight">
                UPGRADE NOW,<br />PAY OVER TIME
              </h2>
              <p className="text-white/60 text-lg font-medium mb-8 max-w-lg">
                We've partnered with leading lenders to offer low monthly payment plans for new HVAC installations and major repairs.
              </p>
              <ul className="space-y-4 mb-8">
                {['0% Interest for 12 Months', 'Low Monthly Payments', 'Quick Online Approval', 'No Prepayment Penalties'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-lg font-bold">
                    <ShieldCheck className="text-orange" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full lg:w-1/3">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
