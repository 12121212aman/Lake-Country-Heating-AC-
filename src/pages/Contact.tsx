import React from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';

const CONTACT_INFO = [
  {
    icon: Phone,
    label: "Call Us Now",
    value: "(778) 480-4328",
    href: "tel:+17784804328",
    sub: "24/7 Emergency Support"
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "office@lakecountryhvac.com",
    href: "mailto:office@lakecountryhvac.com",
    sub: "Service & Install Inquiries"
  },
  {
    icon: MapPin,
    label: "Our Office",
    value: "720 Commonwealth Rd #73",
    href: "#",
    sub: "Kelowna, BC V4V 1R7"
  }
];

export default function Contact() {
  return (
    <div className="pt-24 bg-white">
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <span className="text-orange font-black uppercase tracking-[0.3em] text-xs">Reach Out</span>
              <h1 className="text-5xl md:text-7xl font-black text-navy mt-4 mb-8 leading-[0.85]">
                WE'RE HERE <br />TO <span className="text-orange">HELP.</span>
              </h1>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {CONTACT_INFO.map((item, i) => (
                  <div key={i} className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-orange/20 transition-all group">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-orange shadow-sm mb-6 group-hover:bg-orange group-hover:text-white transition-all">
                      <item.icon size={24} />
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-navy/40 mb-1">{item.label}</p>
                    <a href={item.href} className="text-xl font-black text-navy hover:text-orange transition-colors">{item.value}</a>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-2">{item.sub}</p>
                  </div>
                ))}
              </div>

              <div className="bg-navy p-10 rounded-[3rem] text-white">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-orange flex items-center justify-center shadow-lg">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-black">BUSINESS HOURS</h3>
                    <p className="text-white/40 text-xs font-bold uppercase tracking-widest">Office Hours (Service is 24/7)</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[
                    { day: "Monday - Friday", hours: "8:00 AM - 5:00 PM" },
                    { day: "Saturday", hours: "8:00 AM - 1:00 PM" },
                    { day: "Sunday", hours: "Closed (Emergency Only)" },
                    { day: "Public Holidays", hours: "Hours Vary" }
                  ].map((row, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-white/10 pb-4">
                      <span className="font-bold text-white/80">{row.day}</span>
                      <span className="font-black text-orange">{row.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <QuoteForm />
              <div className="mt-12 rounded-[3rem] overflow-hidden grayscale opacity-30 h-96 relative">
                 {/* Visual placeholder for Map */}
                 <div className="absolute inset-0 bg-navy/20"></div>
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                   <MapPin size={48} className="text-navy" />
                   <div className="mt-4 font-black uppercase tracking-widest text-navy">View on Google Maps</div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
