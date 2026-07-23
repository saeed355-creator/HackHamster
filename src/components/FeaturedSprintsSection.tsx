import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, ArrowRight, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export const FeaturedSprintsSection: React.FC = () => {
  const [registered, setRegistered] = useState<number | null>(null);

  const sprints = [
    {
      id: 1,
      portal: 'SIH PORTAL',
      title: 'Smart India Hackathon 2026',
      titleColor: 'text-[#FF5247]',
      description: 'National level initiative to provide students with a platform to solve pressing problems of daily lives.',
      prizePool: '₹15,000,000',
      location: 'New Delhi, India',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      portal: 'UNSTOP',
      title: 'TATA Crucible Corporate Hack',
      titleColor: 'text-white',
      description: 'Bring your best solutions for real-world enterprise engineering problems sponsored by TATA Group.',
      prizePool: '₹5,000,000',
      location: 'Mumbai, Hybrid',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      portal: 'DEVFOLIO',
      title: 'Devfolio Winter Sprint 2026',
      titleColor: 'text-white',
      description: 'Collaborative building event focused on public goods, web3 rails, and open-source infrastructure.',
      prizePool: '₹3,500,000',
      location: 'Bengaluru, India',
      image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const handleRegister = (id: number) => {
    setRegistered(id);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#FF3B30', '#E11D48', '#FFFFFF'],
    });
  };

  return (
    <section id="featured-sprints" className="py-16 sm:py-24 bg-[#09090B] relative overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/3 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-[#FF3B30]/10 rounded-full blur-[120px] sm:blur-[160px] pointer-events-none animate-plasma" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Top Badge Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-3 sm:mb-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#141419] border border-[#FF3B30]/40 text-[#FF5247] font-mono text-[11px] sm:text-xs font-bold shadow-lg shadow-[#FF3B30]/10">
            <Trophy className="w-3.5 h-3.5 text-[#FF3B30]" />
            <span>Curated National Sprints</span>
          </div>
        </motion.div>

        {/* Section Title Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-syne fluid-section-title font-extrabold text-white tracking-tight"
          >
            Featured{' '}
            <span className="text-gradient-red glow-text-red glitch-text" data-text="Sprints">
              Sprints
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a
              href="#aggregator"
              className="text-xs font-mono font-bold text-[#FF5247] hover:text-white flex items-center gap-1.5 transition-colors group"
            >
              <span>Browse All Events</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* 3 Featured Sprint Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {sprints.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="glass-panel glass-panel-hover rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 flex flex-col justify-between bg-[#121218]/90 group relative"
            >
              <div>
                {/* Image Banner Container with Portal Tag Overlay */}
                <div className="relative h-44 sm:h-52 overflow-hidden bg-[#09090C]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-85 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121218] via-transparent to-black/40" />

                  {/* Portal Badge Pill */}
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <span className="text-[10px] font-mono font-extrabold px-2.5 py-1 rounded-full bg-[#09090B]/85 text-slate-200 border border-white/20 backdrop-blur-md tracking-wider uppercase">
                      {item.portal}
                    </span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-5 sm:p-6">
                  <h3 className={`font-syne text-lg sm:text-xl font-bold mb-2 ${item.titleColor} group-hover:text-[#FF5247] transition-colors`}>
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-400 font-sans leading-relaxed mb-5 font-normal">
                    {item.description}
                  </p>

                  {/* Footer Meta: Prize Pool & Location */}
                  <div className="flex items-center justify-between font-mono text-xs pt-4 border-t border-white/10">
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase block">PRIZE POOL</span>
                      <span className="font-extrabold text-[#FF5247]">{item.prizePool}</span>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] text-slate-500 uppercase block">LOCATION</span>
                      <span className="font-medium text-slate-300">{item.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Register Team Button */}
              <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-2">
                {registered === item.id ? (
                  <div className="py-3 sm:py-3.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-mono text-xs font-bold text-center flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Team Registered!</span>
                  </div>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleRegister(item.id)}
                    className="w-full min-h-[44px] py-3 rounded-xl bg-gradient-to-r from-[#FF3B30] to-[#E11D48] text-white font-syne font-bold text-xs shadow-lg shadow-[#FF3B30]/30 hover:shadow-[#FF3B30]/60 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Register Team</span>
                    <span>&rarr;</span>
                  </motion.button>
                )}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
