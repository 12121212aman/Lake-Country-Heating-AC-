import React from 'react';
import { Phone, AlertTriangle, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export default function EmergencyBanner() {
  return (
    <div className="bg-red-600 text-white py-2 px-4 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-4 text-sm font-medium">
        <div className="flex items-center gap-2">
          <AlertTriangle size={18} className="animate-pulse" />
          <span>24/7 EMERGENCY REPAIR AVAILABLE</span>
        </div>
        <div className="hidden md:block w-px h-4 bg-white/30"></div>
        <div className="flex items-center gap-2">
          <Clock size={18} />
          <span>Need help now? We specialize in same-day emergency calls.</span>
        </div>
        <a 
          href="tel:+17784804328"
          className="bg-white text-red-600 px-3 py-0.5 rounded-full hover:bg-gray-100 transition-colors flex items-center gap-2 animate-bounce"
        >
          <Phone size={14} />
          Call (778) 480-4328
        </a>
      </div>
    </div>
  );
}
