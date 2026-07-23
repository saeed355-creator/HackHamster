import React from 'react';
import { motion } from 'framer-motion';

export const VaultAndBulletinSection: React.FC = () => {
  const bulletins = [
    {
      tag: 'WORKSHOPS',
      time: '3h ago',
      title: 'Docker & K8s Bootcamp Announced',
      description: 'Register for the 3-day immersive containerization workshop by the dev...',
      color: 'bg-[#FF3B30]/20 text-[#FF5247] border-[#FF3B30]/30'
    },
    {
      tag: 'CLUBS',
      time: '1h ago',
      title: 'AI/ML Club Recruitment Open',
      description: 'We are looking for core members specializing in PyTorch and NLP for th...',
      color: 'bg-blue-500/20 text-blue-400 border-blue-500/30'
    },
    {
      tag: 'EVENTS',
      time: '1d ago',
      title: 'SSIP 2.0 Project Submissions',
      description: 'Submit your startup ideation decks before the Friday midnight deadline...',
      color: 'bg-[#FF3B30]/20 text-[#FF5247] border-[#FF3B30]/30'
    }
  ];

  return (
    <section id="resources" className="py-20 bg-[#09090B] relative overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#FF3B30]/10 rounded-full blur-[160px] pointer-events-none animate-plasma" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* College Tech Bulletin Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel glass-panel-hover rounded-3xl p-8 sm:p-10 border border-white/10 flex flex-col justify-between relative group bg-[#121218]/90"
        >
          <div>
            {/* Header Title */}
            <div className="mb-6">
              <h3 className="font-syne text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-2">
                College Tech Bulletin 💫
              </h3>
              <p className="text-xs font-sans text-slate-400 mt-1">
                Live news from campus clubs
              </p>
            </div>

            {/* Bulletin Dispatches List */}
            <div className="space-y-4 mb-8">
              {bulletins.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 6, borderColor: 'rgba(255, 59, 48, 0.4)' }}
                  className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 transition-all group/item cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${item.color}`}>
                      {item.tag}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">{item.time}</span>
                  </div>

                  <h4 className="font-heading font-bold text-white text-base group-hover/item:text-[#FF5247] transition-colors mb-1">
                    {item.title}
                  </h4>

                  <p className="text-xs text-slate-400 font-sans line-clamp-2">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* See All Announcements Button */}
          <div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-[#FF3B30]/20 to-[#E11D48]/20 hover:from-[#FF3B30] hover:to-[#E11D48] border border-[#FF3B30]/40 text-[#FF5247] hover:text-white font-mono font-bold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <span>SEE ALL ANNOUNCEMENTS</span>
            </motion.button>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
