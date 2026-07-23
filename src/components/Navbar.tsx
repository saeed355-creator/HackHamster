import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HamsterLogo } from './HamsterLogo';
import { Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenSignIn: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSignIn }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#09090B]/90 backdrop-blur-2xl border-b border-[#FF3B30]/30 py-3.5 shadow-2xl shadow-black/90'
          : 'bg-gradient-to-b from-[#09090B] via-[#09090B]/80 to-transparent py-5'
      }`}
    >
      {/* Top Shimmering Cyber Border Beam */}
      <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#FF3B30] to-transparent animate-pulse pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo with Pulsing Mascot Aura */}
          <a href="#" className="flex items-center gap-3 group relative">
            <motion.div
              whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              <HamsterLogo size={40} className="drop-shadow-[0_0_12px_rgba(255,59,48,0.7)]" />
            </motion.div>

            <div className="flex flex-col">
              <span className="font-heading text-lg sm:text-xl font-extrabold tracking-tight text-white group-hover:text-[#FF5247] transition-colors flex items-center gap-1">
                Hack Hamster
                <Sparkles className="w-3.5 h-3.5 text-[#FF3B30] opacity-0 group-hover:opacity-100 transition-opacity animate-spin" />
              </span>
              <span className="text-[9px] font-mono text-slate-400 tracking-widest uppercase -mt-1 hidden sm:block">
                HACKER COMMAND CENTER
              </span>
            </div>
          </a>

          {/* Right Action: Sign In Button with Interactive Click Animation */}
          <div className="flex items-center">
            <motion.button
              whileHover={{ scale: 1.06, boxShadow: '0 0 30px rgba(255, 59, 48, 0.7)' }}
              whileTap={{ scale: 0.92 }}
              onClick={onOpenSignIn}
              className="relative overflow-hidden px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#FF3B30] to-[#EE3B3B] text-white font-heading font-bold text-sm shadow-xl shadow-[#FF3B30]/30 transition-all border border-[#FF3B30]/50"
            >
              <span className="relative z-10">Sign In</span>
              {/* Shimmer line */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000" />
            </motion.button>
          </div>

        </div>
      </div>
    </motion.nav>
  );
};
