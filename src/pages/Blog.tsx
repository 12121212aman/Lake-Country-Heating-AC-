import React from 'react';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const POSTS = [
  {
    title: "5 Tips to Lower Your AC Bill This Summer",
    excerpt: "Keep your home cool without breaking the bank. Learn how simple maintenance can save you hundreds.",
    date: "May 15, 2026",
    category: "Energy Savings",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Is It Time to Replace Your Furnace?",
    excerpt: "Warning signs that your heating system is reaching the end of its life and what to do about it.",
    date: "May 10, 2026",
    category: "Heating",
    image: "https://images.unsplash.com/photo-1631545724185-3511eb311f6d?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "The Importance of Regular Duct Cleaning",
    excerpt: "Why clean air ducts are essential for your family's health and system efficiency.",
    date: "May 05, 2026",
    category: "Air Quality",
    image: "https://images.unsplash.com/photo-1558227751-fcd973f05931?q=80&w=1200&auto=format&fit=crop"
  }
];

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop';

export default function Blog() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h1 className="text-5xl font-black text-navy uppercase tracking-tighter">COMFORT TIPS & NEWS</h1>
            <div className="w-20 h-1 bg-orange mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {POSTS.map((post, i) => (
              <motion.article 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-video bg-gray-100 rounded-3xl mb-6 overflow-hidden relative shadow-lg">
                  <div className="absolute top-4 left-4 bg-orange text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest z-10">
                    {post.category}
                  </div>
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    loading="lazy"
                    onError={(e) => { (e.target as HTMLImageElement).src = FALLBACK_IMAGE; }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="flex items-center gap-4 text-gray-400 text-[10px] font-black uppercase tracking-widest mb-4">
                  <span className="flex items-center gap-1.5"><Calendar size={12} /> {post.date}</span>
                  <span className="flex items-center gap-1.5"><User size={12} /> Admin</span>
                </div>
                <h2 className="text-2xl font-black text-navy mb-4 group-hover:text-orange transition-colors leading-tight">
                  {post.title}
                </h2>
                <p className="text-gray-500 font-medium mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                <Link to="#" className="inline-flex items-center gap-2 text-navy font-black uppercase tracking-widest text-xs group-hover:gap-4 transition-all">
                  Read Full Article <ArrowRight size={14} className="text-orange" />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
