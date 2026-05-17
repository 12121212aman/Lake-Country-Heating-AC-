import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import EmergencyBanner from './EmergencyBanner';
import Chatbot from './Chatbot';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation } from 'react-router-dom';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <header className="sticky top-0 z-50">
        <EmergencyBanner />
        <Navbar />
      </header>
      
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
      <Chatbot />
    </div>
  );
}
