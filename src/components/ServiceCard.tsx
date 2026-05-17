import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  delay?: number;
}

export default function ServiceCard({ title, description, icon, image, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100"
    >
      <div className="h-48 overflow-hidden relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 w-12 h-12 bg-orange rounded-xl flex items-center justify-center text-white shadow-lg">
          {icon}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-black text-navy mb-3 uppercase tracking-tight">{title}</h3>
        <p className="text-gray-600 text-sm mb-6 leading-relaxed font-medium">
          {description}
        </p>
        <Link 
          to="/services" 
          className="inline-flex items-center gap-2 text-orange font-bold uppercase tracking-widest text-xs group-hover:gap-4 transition-all"
        >
          Learn More <ArrowRight size={14} />
        </Link>
      </div>
    </motion.div>
  );
}
