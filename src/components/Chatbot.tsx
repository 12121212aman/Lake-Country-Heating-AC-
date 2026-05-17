import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Send, X, Phone, Calendar, Info, MapPin, Wrench, Thermometer, Zap, CreditCard, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  type: 'bot' | 'user';
  content: string;
  timestamp: string;
}

const QUICK_REPLIES = [
  "Emergency Repair",
  "Furnace Repair",
  "AC Repair",
  "Heat Pumps",
  "Financing",
  "Book Appointment",
  "Service Areas",
  "Maintenance Plans"
];

const BOT_RESPONSES: Record<string, string> = {
  "emergency": "⚠️ We offer 24/7 emergency AC and furnace repair in Kelowna and nearby areas. A certified technician can usually arrive the same day. Would you like to call now at (778) 480-4328?",
  "repair": "🔧 Our expert team handles all types of HVAC repairs, from weird noises to complete system failures. We provide upfront, transparent pricing before any work begins.",
  "furnace": "💡 Furnace repair pricing typically ranges from $120–$450 depending on the issue. We service all major brands and offer high-efficiency replacements.",
  "ac": "❄️ Is your AC blowing warm air or making strange sounds? Our technicians specialize in high-efficiency AC repair and maintenance to keep you cool.",
  "cost": "💰 Transparent pricing is our promise. Most repairs range from $120–$450. We'll give you a firm quote after our diagnostic visit.",
  "price": "💰 Transparent pricing is our promise. Most repairs range from $120–$450. We'll give you a firm quote after our diagnostic visit.",
  "financing": "Yes ✅ We offer flexible HVAC financing options for installations and replacements. Monthly payment plans are available for qualified homeowners.",
  "appointment": "📅 Great! Please call us at (778) 480-4328 or use the booking form on our Contact page and our team will contact you shortly.",
  "book": "📅 Great! Please call us at (778) 480-4328 or use the booking form on our Contact page and our team will contact you shortly.",
  "areas": "📍 We proudly serve: • Kelowna • West Kelowna • Lake Country • Vernon • Penticton • Peachland",
  "service": "📍 We proudly serve: • Kelowna • West Kelowna • Lake Country • Vernon • Penticton • Peachland",
  "heat pump": "🔥 Yes! We specialize in high-efficiency heat pump installations including ductless mini-splits and central systems. They are perfect for the Okanagan climate!",
  "hours": "🕒 Our team is available 24/7 for emergency HVAC service. Standard office hours are Monday–Saturday: 8 AM – 5 PM.",
  "maintenance": "🛠️ Our Maintenance Plans help prevent breakdowns and extend the life of your equipment. Members get 15% off repairs and priority scheduling!",
};

const FALLBACK = "Thanks for your message 👋 One of our HVAC specialists can help you further. Please call (778) 480-4328 for immediate assistance.";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: "👋 Hi! I'm the Lake Country Heating & AC AI Assistant. How can I help you today?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI thinking
    setTimeout(() => {
      const lowerText = text.toLowerCase();
      let botContent = FALLBACK;

      for (const [keyword, response] of Object.entries(BOT_RESPONSES)) {
        if (lowerText.includes(keyword)) {
          botContent = response;
          break;
        }
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: botContent,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 chatbot-glow",
          isOpen ? "bg-red-600 rotate-90" : "bg-navy"
        )}
      >
        {isOpen ? <X className="text-white" /> : <MessageSquare className="text-white" />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-orange"></span>
          </span>
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="absolute bottom-20 right-0 w-[90vw] md:w-96 h-[600px] max-h-[80vh] rounded-3xl overflow-hidden flex flex-col shadow-2xl glass border-navy/20 border-2"
          >
            {/* Header */}
            <div className="bg-navy p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-400">
                  <Wrench className="text-blue-400 w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">Lake Country AI</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-white/60 text-xs">Online & Ready</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/60 hover:text-white transition-colors"
              >
                <ChevronDown />
              </button>
            </div>

            {/* Messages Area */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-950/90"
            >
              <div className="space-y-4">
                {messages.map((msg) => (
                  <motion.div
                    initial={{ opacity: 0, x: msg.type === 'bot' ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    key={msg.id}
                    className={cn(
                      "flex flex-col max-w-[85%]",
                      msg.type === 'user' ? "ml-auto items-end" : "mr-auto items-start"
                    )}
                  >
                    <div className={cn(
                      "p-3 rounded-2xl text-sm",
                      msg.type === 'user' 
                        ? "bg-blue-600 text-white rounded-tr-none" 
                        : "bg-gray-800 text-gray-100 rounded-tl-none border border-gray-700 neon-border"
                    )}>
                      {msg.content}
                    </div>
                    <span className="text-[10px] text-gray-500 mt-1 px-1">{msg.timestamp}</span>
                  </motion.div>
                ))}
                
                {isTyping && (
                  <div className="flex items-center gap-1 p-2 bg-gray-800 rounded-xl w-14 border border-gray-700">
                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                )}
              </div>

              {/* Quick Buttons */}
              {messages.length < 5 && (
                <div className="pt-4 flex flex-wrap gap-2">
                  {QUICK_REPLIES.map((reply) => (
                    <button
                      key={reply}
                      onClick={() => handleSend(reply)}
                      className="px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs hover:bg-blue-500/20 transition-colors"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input Area */}
            <form 
              onSubmit={(e) => { e.preventDefault(); handleSend(inputValue); }}
              className="p-4 bg-gray-900 border-t border-gray-800 flex gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="How can we help?"
                className="flex-1 bg-gray-800 border border-gray-700 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button
                type="submit"
                className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-500 transition-colors shadow-lg"
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
