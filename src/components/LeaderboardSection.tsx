import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Crown, Sparkles, Flame } from 'lucide-react';

export const LeaderboardSection: React.FC = () => {
  return (
    <section id="leaderboard" className="py-24 bg-[#09090B] relative overflow-hidden">
      
      {/* Background Radial Gold/Red Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-[#F59E0B]/10 via-[#FF3B30]/10 to-transparent rounded-full blur-[170px] pointer-events-none animate-plasma" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/30 text-[#F59E0B] font-mono text-xs font-bold mb-3 shadow-lg shadow-[#F59E0B]/10">
            <Trophy className="w-3.5 h-3.5 text-[#F59E0B] animate-bounce" />
            <span>NATIONAL CAMPUS RANKINGS</span>
          </div>
          <h2 className="font-syne text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase">
            COLLEGE <span className="text-gradient-red">LEADERBOARD</span>
          </h2>
        </motion.div>

        {/* KING Crown Tag above center */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-3"
        >
          <span className="px-3.5 py-1 rounded-full bg-gradient-to-r from-[#F59E0B]/20 to-[#FF3B30]/20 text-[#F59E0B] border border-[#F59E0B]/40 font-mono text-xs font-bold flex items-center gap-1.5 shadow-lg shadow-[#F59E0B]/20">
            <Crown className="w-3.5 h-3.5 text-[#F59E0B]" />
            &lt;KING
          </span>
        </motion.div>

        {/* Podium Layout (3 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8 items-stretch">
          
          {/* Left: #2 SILVER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="order-2 md:order-1 glass-panel glass-panel-hover rounded-2xl p-6 text-center border border-white/15 flex flex-col justify-between items-center bg-[#121218]/90 relative group"
          >
            <div className="w-full flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#94A3B8]/30 to-[#475569]/40 border border-[#94A3B8]/40 flex items-center justify-center mb-3 text-slate-200 shadow-lg shadow-[#94A3B8]/20 group-hover:rotate-6 transition-transform">
                <Award className="w-8 h-8 text-[#94A3B8]" />
              </div>
              <h3 className="font-syne text-xl font-bold text-white mb-0.5 group-hover:text-[#94A3B8] transition-colors">
                Duv_Zero
              </h3>
              <span className="text-[11px] font-mono text-[#94A3B8] font-bold block mb-4 px-2.5 py-0.5 rounded bg-[#94A3B8]/10 border border-[#94A3B8]/20">
                #2 SILVER
              </span>
            </div>

            <div className="w-full py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono font-bold text-slate-200 group-hover:border-[#94A3B8]/40 transition-colors">
              24,500 XP
            </div>
          </motion.div>

          {/* Center: #1 KING (Manas Chokai - Taller & Golden Beam) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -10, scale: 1.04 }}
            className="order-1 md:order-2 glass-panel rounded-2xl p-8 text-center border border-[#F59E0B]/60 flex flex-col justify-between items-center bg-gradient-to-b from-[#1c1a14]/95 via-[#161622]/95 to-[#121218]/95 shadow-2xl shadow-[#F59E0B]/30 scale-105 z-10 relative group overflow-hidden"
          >
            {/* Top Shimmering Golden Beam */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#F59E0B] to-transparent animate-pulse" />

            <div className="w-full flex flex-col items-center">
              {/* Crown Emblem */}
              <div className="w-18 h-18 rounded-full bg-gradient-to-br from-[#F59E0B]/30 via-[#FBBF24]/30 to-[#D97706]/40 border-2 border-[#F59E0B] flex items-center justify-center mb-3 text-[#F59E0B] shadow-xl shadow-[#F59E0B]/40 group-hover:scale-110 transition-transform duration-500">
                <Trophy className="w-9 h-9 text-[#F59E0B] drop-shadow-[0_0_15px_rgba(245,158,11,0.8)]" />
              </div>

              <h3 className="font-syne text-2xl font-extrabold text-white mb-0.5 group-hover:text-[#FBBF24] transition-colors">
                Manas Chokai
              </h3>

              <span className="text-xs font-mono text-[#FBBF24] font-extrabold block mb-4 px-3 py-1 rounded-full bg-[#F59E0B]/20 border border-[#F59E0B]/50 shadow-md">
                👑 #1 GLOBAL RANK
              </span>
            </div>

            <div className="w-full py-3 rounded-xl bg-gradient-to-r from-[#F59E0B]/20 via-[#FF3B30]/20 to-[#F59E0B]/20 border border-[#F59E0B]/50 text-sm font-mono font-extrabold text-[#FBBF24] shadow-inner">
              32,840 XP
            </div>
          </motion.div>

          {/* Right: #3 BRONZE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="order-3 glass-panel glass-panel-hover rounded-2xl p-6 text-center border border-white/15 flex flex-col justify-between items-center bg-[#121218]/90 relative group"
          >
            <div className="w-full flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D97706]/30 to-[#78350F]/40 border border-[#D97706]/40 flex items-center justify-center mb-3 text-[#D97706] shadow-lg shadow-[#D97706]/20 group-hover:-rotate-6 transition-transform">
                <Award className="w-8 h-8 text-[#D97706]" />
              </div>
              <h3 className="font-syne text-xl font-bold text-[#D97706] mb-0.5 group-hover:text-amber-400 transition-colors">
                Pixel_Prism
              </h3>
              <span className="text-[11px] font-mono text-[#D97706] font-bold block mb-4 px-2.5 py-0.5 rounded bg-[#D97706]/10 border border-[#D97706]/20">
                #3 BRONZE
              </span>
            </div>

            <div className="w-full py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono font-bold text-slate-200 group-hover:border-[#D97706]/40 transition-colors">
              21,100 XP
            </div>
          </motion.div>

        </div>

        {/* Standings Rows #4 & #5 */}
        <div className="max-w-4xl mx-auto space-y-3 font-mono text-xs">
          
          {/* Row #4: Ghost_Kernel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ x: 6, borderColor: 'rgba(255, 255, 255, 0.3)' }}
            className="p-4 rounded-xl glass-panel border border-white/10 flex items-center justify-between bg-[#121218]/90 transition-all group"
          >
            <div className="flex items-center gap-4">
              <span className="text-slate-500 font-extrabold w-6 text-center font-mono">#4</span>
              <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-hover:border-[#FF3B30]/40 transition-colors">
                <Flame className="w-4 h-4 text-slate-400 group-hover:text-[#FF3B30] transition-colors" />
              </div>
              <span className="font-syne font-bold text-white text-base group-hover:text-[#FF5247] transition-colors">
                Ghost_Kernel
              </span>
            </div>
            <span className="text-slate-300 font-bold text-sm font-mono">19,900 XP</span>
          </motion.div>

          {/* Row #5: YOU (MATCH) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ x: 6, borderColor: 'rgba(255, 59, 48, 0.6)' }}
            className="p-4 rounded-xl glass-panel border border-[#FF3B30]/40 flex items-center justify-between bg-gradient-to-r from-[#FF3B30]/15 via-[#181824] to-[#121218] shadow-lg shadow-[#FF3B30]/10 transition-all group"
          >
            <div className="flex items-center gap-4">
              <span className="text-[#FF5247] font-extrabold w-6 text-center font-mono">#5</span>
              <div className="w-7 h-7 rounded-lg bg-[#FF3B30]/20 border border-[#FF3B30]/40 flex items-center justify-center text-[#FF3B30]">
                <Sparkles className="w-4 h-4 text-[#FF3B30] animate-spin" style={{ animationDuration: '8s' }} />
              </div>
              <div className="flex items-center gap-2.5">
                <span className="font-syne font-bold text-white text-base">YOU</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-extrabold bg-gradient-to-r from-[#FF3B30] to-[#E11D48] text-white shadow-md shadow-[#FF3B30]/40 animate-pulse">
                  MATCH
                </span>
              </div>
            </div>
            <span className="text-[#FF5247] font-extrabold text-sm font-mono glow-text-red">
              18,540 XP
            </span>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
