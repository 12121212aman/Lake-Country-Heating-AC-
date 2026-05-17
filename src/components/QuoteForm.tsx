import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, this would send an email or store in a DB
  };

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-12 rounded-3xl shadow-2xl text-center border-2 border-orange/20"
      >
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="text-green-600 w-10 h-10" />
        </div>
        <h2 className="text-3xl font-black text-navy mb-4">REQUEST RECEIVED!</h2>
        <p className="text-gray-600 font-medium">
          Thank you for reaching out. One of our specialists will contact you within the next hour to discuss your project.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-8 text-orange font-bold uppercase tracking-widest hover:underline"
        >
          Send another request
        </button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-navy/5 relative overflow-hidden">
      {/* Accent strip */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-orange"></div>

      <div className="mb-8">
        <h2 className="text-3xl font-black text-navy mb-2">GET A FAST QUOTE</h2>
        <p className="text-gray-500 font-bold text-sm tracking-widest uppercase">Response within 60 minutes</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-navy/60">Full Name</label>
            <input 
              required
              type="text" 
              placeholder="John Doe"
              className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-orange transition-colors font-medium"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-navy/60">Phone Number</label>
            <input 
              required
              type="tel" 
              placeholder="(778) XXX-XXXX"
              className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-orange transition-colors font-medium"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-navy/60">Service Needed</label>
          <select className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-orange transition-colors font-medium appearance-none">
            <option>AC Repair</option>
            <option>Furnace / Heating Repair</option>
            <option>AC Installation</option>
            <option>Furnace Installation</option>
            <option>Heat Pump Service</option>
            <option>Duct Cleaning</option>
            <option>Maintenance Plan</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-navy/60">Message / Details</label>
          <textarea 
            rows={4}
            placeholder="Tell us about your issue..."
            className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-orange transition-colors font-medium"
          ></textarea>
        </div>

        <button 
          type="submit"
          className="w-full bg-navy text-white py-5 rounded-xl font-black text-xl flex items-center justify-center gap-3 hover:bg-navy/90 transition-all transform hover:-translate-y-1 shadow-xl"
        >
          <Send size={20} />
          SEND REQUEST
        </button>
      </form>
    </div>
  );
}
