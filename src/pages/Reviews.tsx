import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

const REVIEWS = [
  {
    name: "Sarah Miller",
    location: "Lake Country",
    text: "Honest and straightforward pricing. They explained exactly what was wrong with our furnace and had it fixed the same afternoon. Won't call anyone else!",
    stars: 5,
    date: "2 weeks ago"
  },
  {
    name: "David Chen",
    location: "Kelowna",
    text: "The new heat pump installation was seamless. The crew was professional, clean, and took the time to show us how to use the new smart thermostat.",
    stars: 5,
    date: "1 month ago"
  },
  {
    name: "Emma Wilson",
    location: "West Kelowna",
    text: "Emergency AC repair on a 35-degree Saturday. They arrived within 3 hours and saved our sanity. Lifesavers!",
    stars: 5,
    date: "3 months ago"
  },
  {
    name: "Robert Thompson",
    location: "Vernon",
    text: "Duct cleaning service was thorough and professional. The air in our home feels so much fresher. Great team to work with.",
    stars: 5,
    date: "4 months ago"
  },
  {
    name: "Jessica P.",
    location: "Kelowna",
    text: "Lake Country Heating is the best! They helped us with our rebates and installed a top-of-the-line system for a great price.",
    stars: 5,
    date: "5 months ago"
  }
];

export default function Reviews() {
  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-orange font-black uppercase tracking-[0.3em] text-xs">Customer Praise</span>
            <h1 className="text-5xl md:text-6xl font-black text-navy mt-4 mb-8">REAL REVIEWS.</h1>
            <div className="flex justify-center items-center gap-4 mb-8">
              <div className="flex text-orange">
                {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={32} />)}
              </div>
              <span className="text-2xl font-black text-navy">4.9/5 RATING</span>
            </div>
            <p className="text-xl text-gray-600 font-medium leading-relaxed">
              We take pride in our work and it shows. Read what your neighbors have to say about Lake Country Heating & AC.
            </p>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {REVIEWS.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="break-inside-avoid bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col hover:shadow-2xl transition-all"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex text-orange">
                    {[...Array(review.stars)].map((_, i) => <Star key={i} fill="currentColor" size={16} />)}
                  </div>
                  <Quote className="text-navy/10" size={32} />
                </div>
                <p className="text-gray-600 font-medium leading-relaxed mb-8 italic">
                  "{review.text}"
                </p>
                <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <h3 className="font-black text-navy uppercase text-sm">{review.name}</h3>
                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">{review.location}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-green-600">
                    <CheckCircle size={14} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Verified</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <h3 className="text-2xl font-black text-navy mb-8">WANT TO LEAVE A REVIEW?</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {['Google', 'Yelp', 'Facebook', 'HomeStars'].map(platform => (
                <button key={platform} className="px-8 py-3 rounded-full border-2 border-navy/10 font-bold hover:bg-navy hover:text-white transition-all uppercase tracking-widest text-sm">
                  {platform}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
