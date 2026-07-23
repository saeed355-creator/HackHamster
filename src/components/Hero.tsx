import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HeroCanvas } from './HeroCanvas';
import { ArrowRight, Terminal } from 'lucide-react';

interface HeroProps {
  onOpenSignIn: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSignIn }) => {
  const stats = [
    { label: 'Total XP Earned', value: '42.8k' },
    { label: 'Global Rank #1s', value: '12' },
    { label: 'Credentials Issued', value: '156' },
    { label: 'Active Sprints', value: '08' },
  ];

  const codeSnippets = [
    'const hamster = new Hacker();',
    'await sprint.deploy({ ZKP: true });',
    'XP += 500; // Rank #1 Elevated',
    'git commit -m "UNLEASH_INNER_HAMSTER"',
    '01010110 01001001 01010100 01000101',
    'npm run build:legendary',
  ];

  // LIVE CODING WRITING ANIMATION LINES FOR HUD TERMINAL SCREEN BACKGROUND
  const terminalCodeLines = [
    'const hamster = await Hacker.deploy();',
    'system.status = "ONLINE_LEVEL_99";',
    'hack_mode = true; // Unleash inner hamster',
    'compiling_sprint_payloads({ ZKP: true });',
    'leaderboard.rank1 = "MANAS_CHOKAI";',
    'git commit -m "DOMINATE_COLLEGE_SPRINTS";',
    'console.log("XP +999999 GRANTED");',
  ];

  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [typedCharIndex, setTypedCharIndex] = useState(0);
  const [codeBuffer, setCodeBuffer] = useState<string[]>([]);

  useEffect(() => {
    const currentLine = terminalCodeLines[currentLineIndex];

    const timer = setTimeout(() => {
      if (typedCharIndex < currentLine.length) {
        setTypedCharIndex((prev) => prev + 1);
      } else {
        // Line complete, push to buffer
        setCodeBuffer((prev) => [...prev.slice(-4), currentLine]);
        setTypedCharIndex(0);
        setCurrentLineIndex((prev) => (prev + 1) % terminalCodeLines.length);
      }
    }, 45); // Typewriter speed

    return () => clearTimeout(timer);
  }, [currentLineIndex, typedCharIndex]);

  return (
    <section className="relative min-h-[90vh] pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden flex flex-col justify-center bg-[#09090B] cyber-grid">
      
      {/* DISCO LASER LIGHT BEAMS */}
      <div className="absolute -top-32 left-1/4 w-[600px] h-[1000px] bg-gradient-to-b from-[#00FFFF]/20 via-[#FF3B30]/15 to-transparent blur-[120px] pointer-events-none transform -rotate-30 origin-top animate-disco-beam-1 z-0" />
      <div className="absolute -top-32 right-1/4 w-[600px] h-[1000px] bg-gradient-to-b from-[#FF3B30]/25 via-[#F59E0B]/15 to-transparent blur-[120px] pointer-events-none transform rotate-30 origin-top animate-disco-beam-2 z-0" />

      {/* Background Animated Plasma Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] lg:w-[750px] h-[300px] sm:h-[600px] lg:h-[750px] bg-[#FF3B30]/15 rounded-full blur-[120px] sm:blur-[170px] pointer-events-none animate-plasma" />
      <div className="absolute bottom-10 right-10 w-[250px] sm:w-[450px] h-[250px] sm:h-[450px] bg-[#E11D48]/12 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none animate-plasma" style={{ animationDelay: '-5s' }} />

      {/* FLOATING MATRIX CODE STREAMS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-40">
        {codeSnippets.map((snippet, idx) => (
          <div
            key={idx}
            className="absolute font-mono text-[11px] text-[#FF5247]/60 font-bold whitespace-nowrap animate-code-stream"
            style={{
              left: `${(idx + 1) * 15}%`,
              animationDuration: `${10 + idx * 3}s`,
              animationDelay: `${idx * 2.5}s`,
            }}
          >
            {snippet}
          </div>
        ))}
      </div>

      {/* 3D Particle Canvas Background */}
      <HeroCanvas />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-center lg:text-left space-y-5 sm:space-y-7"
          >
            {/* HERO RGB GLITCH TITLE */}
            <h1 className="font-syne fluid-hero-title font-extrabold tracking-tight text-white uppercase">
              UNLEASH YOUR <br />
              <span className="text-gradient-red glow-text-red glitch-text" data-text="INNER HAMSTER.">
                INNER HAMSTER.
              </span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 font-sans leading-relaxed font-normal">
              The ultimate command center for college hackers. Track XP, secure credentials, and dominate the leaderboard.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <motion.a
                whileHover={{ scale: 1.04, boxShadow: '0 0 35px rgba(255, 59, 48, 0.6)' }}
                whileTap={{ scale: 0.96 }}
                href="#featured-sprints"
                className="w-full sm:w-auto min-h-[50px] px-8 py-3.5 rounded-2xl bg-[#EE3B3B] hover:bg-[#FF3B30] text-white font-syne font-bold text-base shadow-xl shadow-[#FF3B30]/30 transition-all flex items-center justify-center gap-2 text-center"
              >
                <span>Explore Hub</span>
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.04, borderColor: 'rgba(255, 255, 255, 0.4)' }}
                whileTap={{ scale: 0.96 }}
                onClick={onOpenSignIn}
                className="w-full sm:w-auto min-h-[50px] px-8 py-3.5 rounded-2xl bg-[#16161c]/90 hover:bg-[#1f1f28] border border-white/15 text-white font-syne font-bold text-base transition-all backdrop-blur-md flex items-center justify-center text-center"
              >
                Join as Hacker
              </motion.button>
            </div>
          </motion.div>

          {/* Right Visual Cyber HUD Card with GENERATED HAMSTER IMAGE & LIVE CODE WRITING BACKGROUND ANIMATION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative mt-4 lg:mt-0"
          >
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              
              {/* Outer Ambient Glow Ring */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-[#FF3B30] via-[#FF5247] to-[#F59E0B] opacity-40 blur-2xl animate-pulse-slow" />

              {/* Glass Window HUD Container */}
              <div className="relative rounded-3xl bg-[#14141c]/95 border border-white/15 p-5 sm:p-7 backdrop-blur-2xl shadow-2xl shadow-black/90">
                
                {/* Header Control Bar */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <span className="font-mono text-xs font-bold text-slate-300 tracking-wide flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-[#FF3B30]" />
                    <span>Hack Hamster</span>
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#FF3B30] shadow-sm shadow-[#FF3B30]" />
                    <span className="w-3 h-3 rounded-full bg-[#F59E0B] shadow-sm shadow-[#F59E0B]" />
                    <span className="w-3 h-3 rounded-full bg-[#22C55E] shadow-sm shadow-[#22C55E]" />
                  </div>
                </div>

                {/* Inner Screen Display with LIVE CODE WRITING BACKGROUND ANIMATION & GENERATED HAMSTER AVATAR */}
                <div className="relative aspect-[4/3] rounded-2xl bg-[#07070B] overflow-hidden border border-[#FF3B30]/40 flex items-center justify-center group shadow-inner">
                  
                  {/* Cyber Grid Background */}
                  <div className="absolute inset-0 cyber-grid-red opacity-50 pointer-events-none" />

                  {/* LIVE TERMINAL CODE WRITING ANIMATION IN THE SCREEN BACKGROUND */}
                  <div className="absolute inset-0 p-4 font-mono text-[10px] sm:text-[11px] text-[#FF3B30]/40 overflow-hidden leading-relaxed select-none pointer-events-none flex flex-col justify-end">
                    {codeBuffer.map((line, idx) => (
                      <div key={idx} className="opacity-60 truncate">
                        <span className="text-[#FF3B30] font-bold">&gt;</span> {line}
                      </div>
                    ))}
                    {/* Current Typing Line */}
                    <div className="text-[#FF5247] font-bold truncate flex items-center gap-1">
                      <span className="text-[#FF3B30]">&gt;</span>
                      <span>{terminalCodeLines[currentLineIndex].slice(0, typedCharIndex)}</span>
                      <span className="w-1.5 h-3.5 bg-[#FF3B30] animate-pulse inline-block align-middle" />
                    </div>
                  </div>

                  {/* Red Floating Nodes inside screen */}
                  <div className="absolute top-4 left-6 w-2 h-2 rounded-full bg-[#FF3B30] opacity-90 animate-ping pointer-events-none" />
                  <div className="absolute bottom-6 right-8 w-2.5 h-2.5 rounded-full bg-[#FF3B30] opacity-100 animate-pulse pointer-events-none" />

                  {/* CENTRAL GENERATED CYBERPUNK HAMSTER AVATAR IMAGE */}
                  <div className="relative z-10 flex flex-col items-center justify-center p-4 text-center">
                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                      className="relative rounded-2xl overflow-hidden border-2 border-[#FF3B30] hud-neon-glow group-hover:scale-108 transition-transform duration-500 w-28 h-28 sm:w-36 sm:h-36 shadow-2xl shadow-[#FF3B30]/40"
                    >
                      <img
                        src="/cyber_hacker_hamster_avatar.png"
                        alt="Hack Hamster Cyber Avatar"
                        className="w-full h-full object-cover"
                      />

                      {/* CONTINUOUS GLOWING RED EYE BLINK OVERLAYS OVER GLASSES */}
                      <div className="absolute top-[48%] left-[36%] w-3 h-3 rounded-full bg-[#FF3B30] shadow-[0_0_12px_#FF3B30] animate-eye-blink pointer-events-none" />
                      <div className="absolute top-[48%] right-[36%] w-3 h-3 rounded-full bg-[#FF3B30] shadow-[0_0_12px_#FF3B30] animate-eye-blink pointer-events-none" />
                    </motion.div>
                  </div>

                  {/* Scanline Effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FF3B30]/15 to-transparent h-12 animate-scanline pointer-events-none" />
                </div>

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
