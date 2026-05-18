import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ServiceIconCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  gradient: string;
  delay?: number;
}

export default function ServiceIconCard({ title, description, icon, features, gradient, delay = 0 }: ServiceIconCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -12 }}
      className="relative group h-full"
    >
      {/* Animated Gradient Border Overlay */}
      <div className={cn(
        "absolute -inset-[1px] rounded-[2.5rem] bg-gradient-to-br opacity-20 group-hover:opacity-100 transition-opacity duration-500 blur-[2px]",
        gradient
      )} />
      
      {/* Main Glass Card */}
      <div className="relative h-full p-10 rounded-[2.5rem] bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl flex flex-col overflow-hidden">
        
        {/* Soft Background Glow */}
        <div className={cn(
          "absolute -bottom-24 -right-24 w-64 h-64 rounded-full blur-[80px] opacity-10 group-hover:opacity-30 transition-opacity duration-700",
          gradient
        )} />

        {/* Header: Icon & Title */}
        <div className="relative z-10 mb-8">
          <motion.div 
            whileHover={{ rotate: 12, scale: 1.1 }}
            className="w-20 h-20 rounded-2xl bg-navy flex items-center justify-center text-white mb-6 shadow-xl border border-white/10 relative overflow-hidden group-hover:bg-orange transition-colors duration-500"
          >
            <div className="relative z-10">{icon}</div>
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
          
          <h3 className="text-3xl font-black text-navy uppercase tracking-tighter leading-none mb-4 group-hover:text-orange transition-colors">
            {title}
          </h3>
          <p className="text-gray-500 font-medium text-sm leading-relaxed mb-6">
            {description}
          </p>
        </div>

        {/* Feature List */}
        <ul className="relative z-10 space-y-4 mb-10 flex-1">
          {features.map((feature, i) => (
            <motion.li 
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: delay + (i * 0.1) }}
              className="flex items-center gap-3 text-xs font-bold text-navy/70 border-b border-navy/5 pb-2"
            >
              <div className="w-5 h-5 rounded-full bg-orange/10 flex items-center justify-center text-orange shrink-0">
                <CheckCircle2 size={12} />
              </div>
              {feature}
            </motion.li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="relative z-10 pt-4">
          <Link 
            to="/services" 
            className="w-full inline-flex items-center justify-center gap-3 bg-navy text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-orange transition-all shadow-xl group-hover:shadow-orange/20"
          >
            Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
