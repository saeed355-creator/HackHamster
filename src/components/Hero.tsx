import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeroCanvas } from './HeroCanvas';
import { ArrowRight, Flame, Trophy, ShieldCheck, Zap, Users, Sparkles, Clock, ExternalLink, Search } from 'lucide-react';

interface HeroProps {
  onOpenSignIn: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSignIn }) => {
  const [activeTab, setActiveTab] = useState<'sprints' | 'leaderboard' | 'credentials'>('sprints');
  const [searchQuery, setSearchQuery] = useState('');

  const stats = [
    { label: 'Total Prize Pool', value: '₹50L+' },
    { label: 'Active Sprints', value: '14 Live' },
    { label: 'College Hackers', value: '18.4k+' },
    { label: 'ZKP Credentials', value: '3,240+' },
  ];

  // Featured Sprint Data for Hero HUD
  const heroSprints = [
    {
      id: 1,
      title: 'Smart India Hackathon 2026',
      organizer: 'AICTE / Govt. of India',
      prize: '₹15,00,000',
      tag: 'Grand Finale',
      color: 'from-amber-500 to-red-600',
      timeLeft: '04d 18h 22m',
      participants: 2840,
    },
    {
      id: 2,
      title: 'ETH India Builder Sprint',
      organizer: 'Devfolio & Polygon',
      prize: '$25,000 USD',
      tag: 'Web3 & ZKP',
      color: 'from-purple-500 to-blue-600',
      timeLeft: '02d 06h 15m',
      participants: 1950,
    },
    {
      id: 3,
      title: 'Unstoppable AI National Cup',
      organizer: 'Google Cloud & NVIDIA',
      prize: '₹10,00,000',
      tag: 'Generative AI',
      color: 'from-[#FF3B30] to-rose-600',
      timeLeft: '06d 12h 45m',
      participants: 3410,
    },
  ];

  // Leaderboard Preview
  const heroLeaderboard = [
    { rank: 1, name: 'Manas Chokai', college: 'IIT Bombay', xp: 14250, badge: '👑 Legend' },
    { rank: 2, name: 'Ananya Sharma', college: 'BITS Pilani', xp: 12800, badge: '⚡ Master' },
    { rank: 3, name: 'Rohan Verma', college: 'NIT Trichy', xp: 11450, badge: '🔥 Elite' },
  ];

  return (
    <section className="relative min-h-[92vh] pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden flex flex-col justify-center bg-[#07070B] cyber-grid">
      
      {/* DISCO LASER LIGHT BEAMS */}
      <div className="absolute -top-32 left-1/4 w-[600px] h-[1000px] bg-gradient-to-b from-[#00FFFF]/20 via-[#FF3B30]/15 to-transparent blur-[120px] pointer-events-none transform -rotate-30 origin-top animate-disco-beam-1 z-0" />
      <div className="absolute -top-32 right-1/4 w-[600px] h-[1000px] bg-gradient-to-b from-[#FF3B30]/25 via-[#F59E0B]/15 to-transparent blur-[120px] pointer-events-none transform rotate-30 origin-top animate-disco-beam-2 z-0" />

      {/* Ambient Plasma Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[650px] lg:w-[800px] h-[320px] sm:h-[650px] lg:h-[800px] bg-[#FF3B30]/14 rounded-full blur-[130px] sm:blur-[180px] pointer-events-none animate-plasma" />
      <div className="absolute bottom-10 right-10 w-[260px] sm:w-[480px] h-[260px] sm:h-[480px] bg-[#E11D48]/12 rounded-full blur-[110px] sm:blur-[160px] pointer-events-none animate-plasma" style={{ animationDelay: '-5s' }} />

      {/* 3D Particle Canvas Background */}
      <HeroCanvas />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* HERO MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 text-center lg:text-left space-y-5 sm:space-y-7"
          >
            {/* ANNOUNCEMENT PILL */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-yellow-400/30 text-yellow-300 text-xs font-mono font-bold tracking-wide shadow-lg shadow-yellow-500/10 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-yellow-400 animate-pulse" />
              <span>INDIA'S #1 COLLEGE HACKATHON AGGREGATOR</span>
            </div>

            {/* HERO RGB GLITCH TITLE */}
            <h1 className="font-syne fluid-hero-title font-extrabold tracking-tight text-white uppercase leading-[0.95]">
              UNLEASH YOUR <br />
              <span className="text-gradient-red glow-text-red glitch-text" data-text="INNER HAMSTER.">
                INNER HAMSTER.
              </span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 font-sans leading-relaxed font-normal">
              Discover 50+ live college hackathons, compete in national sprints, build elite developer teams, and earn verifiable ZKP credentials.
            </p>

            {/* SEARCH QUICK BAR */}
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by AI, Web3, College, Prize..."
                  className="w-full h-12 pl-11 pr-28 rounded-2xl bg-[#12121A]/90 border border-white/15 focus:border-[#FF3B30] text-white font-mono text-xs placeholder-slate-500 outline-none transition-all shadow-xl backdrop-blur-md focus:shadow-[0_0_25px_rgba(255,59,48,0.3)]"
                />
                <Search className="w-4 h-4 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
                
                <a
                  href="#featured-sprints"
                  className="absolute right-2 top-1/2 -translate-y-1/2 py-1.5 px-3.5 rounded-xl bg-[#FF3B30] hover:bg-[#EE3B3B] text-white font-syne font-bold text-xs transition-all shadow-md flex items-center gap-1"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-1">
              <motion.a
                whileHover={{ scale: 1.04, boxShadow: '0 0 35px rgba(255, 59, 48, 0.6)' }}
                whileTap={{ scale: 0.96 }}
                href="#featured-sprints"
                className="w-full sm:w-auto min-h-[50px] px-8 py-3.5 rounded-2xl bg-[#EE3B3B] hover:bg-[#FF3B30] text-white font-syne font-bold text-base shadow-xl shadow-[#FF3B30]/30 transition-all flex items-center justify-center gap-2 text-center"
              >
                <Flame className="w-5 h-5 text-yellow-300 animate-bounce" />
                <span>Browse Live Sprints</span>
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.04, borderColor: 'rgba(255, 255, 255, 0.4)' }}
                whileTap={{ scale: 0.96 }}
                onClick={onOpenSignIn}
                className="w-full sm:w-auto min-h-[50px] px-8 py-3.5 rounded-2xl bg-[#16161c]/90 hover:bg-[#1f1f28] border border-white/15 text-white font-syne font-bold text-base transition-all backdrop-blur-md flex items-center justify-center text-center gap-2"
              >
                <Zap className="w-4 h-4 text-yellow-400" />
                <span>Join as Hacker</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column: INTERACTIVE 3D CYBER COMMAND DASHBOARD HUD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative mt-6 lg:mt-0"
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer Glowing Atmosphere Ring */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#FF3B30] via-[#FFD700] to-purple-600 opacity-30 blur-3xl animate-pulse-slow pointer-events-none" />

              {/* FLOATING HOLOGRAPHIC BADGES AROUND HUD */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -left-6 z-30 hidden sm:flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#14141E]/95 border border-yellow-400/60 shadow-[0_0_25px_rgba(255,215,0,0.3)] backdrop-blur-xl"
              >
                <div className="w-8 h-8 rounded-xl bg-yellow-500/20 border border-yellow-400 flex items-center justify-center text-yellow-300">
                  <Trophy className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-mono text-[10px] text-slate-400 uppercase">Total Prize Pool</div>
                  <div className="font-syne text-xs font-extrabold text-white">₹50,00,000+ LIVE</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-6 -right-6 z-30 hidden sm:flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#14141E]/95 border border-emerald-400/60 shadow-[0_0_25px_rgba(34,197,94,0.3)] backdrop-blur-xl"
              >
                <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-mono text-[10px] text-slate-400 uppercase">Verification</div>
                  <div className="font-syne text-xs font-extrabold text-emerald-400">ZKP Credentials Sealed</div>
                </div>
              </motion.div>

              {/* MAIN GLASS HUD DASHBOARD CONTAINER */}
              <div className="relative rounded-3xl bg-[#0F0F17]/95 border border-white/20 p-5 sm:p-6 backdrop-blur-2xl shadow-2xl shadow-black/95 overflow-hidden">
                
                {/* Header Control Bar & Live Tabs */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 mb-4 border-b border-white/10 gap-3">
                  
                  {/* Status Pulse Indicator */}
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF3B30] opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FF3B30]" />
                    </span>
                    <span className="font-mono text-xs font-bold text-white tracking-wide">
                      HACKHAMSTER COMMAND CENTER
                    </span>
                  </div>

                  {/* Interactive Switcher Tabs */}
                  <div className="flex items-center p-1 bg-[#07070B] border border-white/10 rounded-xl w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={() => setActiveTab('sprints')}
                      className={`px-3 py-1.5 rounded-lg font-syne text-[11px] font-bold transition-all flex items-center gap-1.5 ${
                        activeTab === 'sprints'
                          ? 'bg-[#FF3B30] text-white shadow-md'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <Flame className="w-3 h-3 text-yellow-300" />
                      <span>Sprints</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveTab('leaderboard')}
                      className={`px-3 py-1.5 rounded-lg font-syne text-[11px] font-bold transition-all flex items-center gap-1.5 ${
                        activeTab === 'leaderboard'
                          ? 'bg-[#FF3B30] text-white shadow-md'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <Trophy className="w-3 h-3 text-yellow-300" />
                      <span>Ranks</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveTab('credentials')}
                      className={`px-3 py-1.5 rounded-lg font-syne text-[11px] font-bold transition-all flex items-center gap-1.5 ${
                        activeTab === 'credentials'
                          ? 'bg-[#FF3B30] text-white shadow-md'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <ShieldCheck className="w-3 h-3 text-emerald-400" />
                      <span>Vault</span>
                    </button>
                  </div>

                </div>

                {/* TAB CONTENT PANEL */}
                <AnimatePresence mode="wait">
                  
                  {/* 1. SPRINTS TAB */}
                  {activeTab === 'sprints' && (
                    <motion.div
                      key="tab-sprints"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-3"
                    >
                      <div className="flex items-center justify-between font-mono text-[11px] text-slate-400 pb-1">
                        <span>NATIONAL HACKATHON SPRINTS</span>
                        <span className="text-[#FF5247] font-bold">14 SPRINTS ACTIVE</span>
                      </div>

                      {heroSprints.map((sprint) => (
                        <motion.div
                          key={sprint.id}
                          whileHover={{ scale: 1.01, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                          className="p-3.5 rounded-2xl bg-[#151520] border border-white/10 flex items-center justify-between gap-3 transition-all"
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${sprint.color} flex items-center justify-center text-white font-extrabold text-sm shrink-0 shadow-md`}>
                              <Flame className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h4 className="font-syne text-xs sm:text-sm font-bold text-white tracking-tight flex items-center gap-2">
                                <span>{sprint.title}</span>
                                <span className="px-2 py-0.5 rounded-md bg-white/10 text-[9px] font-mono text-yellow-300">
                                  {sprint.tag}
                                </span>
                              </h4>
                              <p className="font-mono text-[10px] text-slate-400">{sprint.organizer}</p>
                            </div>
                          </div>

                          <div className="text-right shrink-0">
                            <div className="font-syne text-xs sm:text-sm font-extrabold text-yellow-400">{sprint.prize}</div>
                            <div className="font-mono text-[10px] text-emerald-400 flex items-center justify-end gap-1">
                              <Clock className="w-3 h-3" />
                              <span>{sprint.timeLeft}</span>
                            </div>
                          </div>
                        </motion.div>
                      ))}

                      <a
                        href="#featured-sprints"
                        className="w-full py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 font-syne text-xs font-bold text-white flex items-center justify-center gap-2 transition-all mt-2"
                      >
                        <span>View All 50+ Hackathons</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </motion.div>
                  )}

                  {/* 2. LEADERBOARD TAB */}
                  {activeTab === 'leaderboard' && (
                    <motion.div
                      key="tab-leaderboard"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-3"
                    >
                      <div className="flex items-center justify-between font-mono text-[11px] text-slate-400 pb-1">
                        <span>LIVE COLLEGE LEADERBOARD</span>
                        <span className="text-yellow-400 font-bold">UPDATED REAL-TIME</span>
                      </div>

                      {heroLeaderboard.map((item) => (
                        <div
                          key={item.rank}
                          className="p-3.5 rounded-2xl bg-[#151520] border border-white/10 flex items-center justify-between gap-3"
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-xl font-syne font-black text-xs flex items-center justify-center shrink-0 ${
                              item.rank === 1 ? 'bg-gradient-to-r from-yellow-400 to-amber-600 text-black shadow-lg shadow-yellow-500/30' :
                              item.rank === 2 ? 'bg-slate-300 text-black' : 'bg-amber-700 text-white'
                            }`}>
                              #{item.rank}
                            </div>
                            <div>
                              <h4 className="font-syne text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                                <span>{item.name}</span>
                                <span className="text-[10px] font-mono text-yellow-300">{item.badge}</span>
                              </h4>
                              <p className="font-mono text-[10px] text-slate-400">{item.college}</p>
                            </div>
                          </div>

                          <div className="font-mono text-xs font-bold text-emerald-400">
                            {item.xp.toLocaleString()} XP
                          </div>
                        </div>
                      ))}

                      <a
                        href="#leaderboard"
                        className="w-full py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 font-syne text-xs font-bold text-white flex items-center justify-center gap-2 transition-all mt-2"
                      >
                        <span>Check Your Rank #1 Position</span>
                        <Trophy className="w-3.5 h-3.5 text-yellow-400" />
                      </a>
                    </motion.div>
                  )}

                  {/* 3. CREDENTIALS VAULT TAB */}
                  {activeTab === 'credentials' && (
                    <motion.div
                      key="tab-credentials"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.3 }}
                      className="p-4 rounded-2xl bg-[#151520] border border-emerald-500/40 space-y-3 text-center"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-400 flex items-center justify-center mx-auto text-emerald-400 shadow-lg shadow-emerald-500/20">
                        <ShieldCheck className="w-8 h-8 animate-pulse" />
                      </div>

                      <div>
                        <h4 className="font-syne text-sm font-extrabold text-white">ZKP VERIFIABLE CREDENTIAL VAULT</h4>
                        <p className="font-mono text-[11px] text-slate-400 mt-1">
                          Cryptographically tamper-proof certificates issued directly to college hackathon winners.
                        </p>
                      </div>

                      <div className="p-2.5 rounded-xl bg-[#09090E] border border-white/10 font-mono text-[10px] text-emerald-400 flex items-center justify-between">
                        <span>ZKP PROOF HASH:</span>
                        <span className="font-bold text-white">0x7f8a...92b4c</span>
                      </div>
                    </motion.div>
                  )}

                </AnimatePresence>

              </div>
            </div>
          </motion.div>

        </div>

        {/* Statistics Bar (4 Cards) */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4, scale: 1.02 }}
              className="glass-panel glass-panel-hover rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center border border-white/10 bg-[#121218]/90 group"
            >
              <span className="text-[11px] sm:text-xs font-mono text-slate-400 block mb-1 sm:mb-2 truncate">{stat.label}</span>
              <span className="font-syne text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#FF5247] tracking-tight group-hover:scale-105 transition-transform inline-block">
                {stat.value}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

