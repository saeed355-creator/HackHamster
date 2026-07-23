import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { HamsterLogo } from './HamsterLogo';
import { Sparkles, Send, Terminal, Coffee, Mail, CheckCircle2 } from 'lucide-react';

export const EmailDigest: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [status, setStatus] = useState<'idle' | 'flying' | 'thankyou'>('idle');

  // Live Typewriter writing text state for THANK YOU FOR SUBSCRIBE!
  const fullThankYouText = 'THANK YOU FOR SUBSCRIBE! 🎉';
  const [typedThankYouText, setTypedThankYouText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status !== 'idle') return;

    // 1. Fly Card away leaving empty screen space
    setStatus('flying');
    setTypedThankYouText('');

    // Launch confetti
    confetti({
      particleCount: 140,
      spread: 100,
      origin: { y: 0.7 },
      colors: ['#FF3B30', '#E11D48', '#F59E0B', '#22C55E', '#FFFFFF'],
    });

    // 2. Show big "THANK YOU FOR SUBSCRIBE" text in empty space
    setTimeout(() => {
      setStatus('thankyou');
    }, 1000);

    // 3. Return card back to normal like before after typing finishes
    setTimeout(() => {
      setStatus('idle');
      setEmail('');
    }, 4200);
  };

  // Typewriter effect when entering thankyou state
  useEffect(() => {
    if (status !== 'thankyou') return;

    let charIndex = 0;
    const timer = setInterval(() => {
      if (charIndex <= fullThankYouText.length) {
        setTypedThankYouText(fullThankYouText.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(timer);
      }
    }, 45); // Typing speed

    return () => clearInterval(timer);
  }, [status]);

  const getDeveloperThought = () => {
    if (status === 'flying') return '🚀 Flying Email Card across matrix...';
    if (status === 'thankyou') return '🎉 Thank you for subscribing! Dispatching welcome kit...';
    if (!email && !isFocused) return '☕ Sipping coffee... Waiting for a new hacker!';
    if (isFocused && !email) return '⌨️ Ooh! A developer is about to subscribe!';
    if (email.includes('@')) return '🚀 Valid email syntax! Ready to launch!';
    return '🔥 Keep typing... Hamster is compiling!';
  };

  return (
    <section className="py-20 bg-[#09090B] relative overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF3B30]/10 rounded-full blur-[170px] pointer-events-none animate-plasma" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full min-h-[420px] flex items-center justify-center">
        
        {/* BIG "THANK YOU FOR SUBSCRIBE" TEXT WITH LIVE TYPEWRITER WRITING ANIMATION & STYLISH FONT */}
        {status === 'thankyou' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-14 px-6 sm:px-10 rounded-3xl bg-[#121218]/90 border border-[#FF3B30]/50 backdrop-blur-2xl shadow-2xl shadow-[#FF3B30]/30 max-w-2xl w-full"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#FF3B30]/20 border border-[#FF3B30] flex items-center justify-center mx-auto mb-5 text-[#FF3B30] shadow-lg shadow-[#FF3B30]/40">
              <CheckCircle2 className="w-10 h-10 text-[#FF5247] animate-bounce" />
            </div>

            {/* LIVE TYPEWRITER WRITING ANIMATION HEADING ONLY */}
            <h2 className="font-syne text-2xl sm:text-4xl lg:text-5xl font-extrabold text-gradient-red glow-text-red uppercase tracking-tight min-h-[60px] flex items-center justify-center gap-1">
              <span>{typedThankYouText}</span>
              {typedThankYouText.length < fullThankYouText.length && (
                <span className="inline-block w-2.5 h-8 bg-[#FF3B30] animate-pulse shadow-[0_0_10px_#FF3B30] align-middle" />
              )}
            </h2>
          </motion.div>
        )}

        {/* ANIMATED EMAIL SECTION CARD CONTAINER */}
        {status !== 'thankyou' && (
          <motion.div
            animate={
              status === 'flying'
                ? { scale: [1, 0.35, 0.1, 0], x: [0, 300, 700, 1100], y: [0, -120, 50, -250], opacity: [1, 0.9, 0.5, 0], rotateZ: [0, -15, 15, -30] }
                : { scale: 1, rotateZ: 0, opacity: 1, x: 0, y: 0 }
            }
            transition={{
              duration: 1.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="w-full glass-panel rounded-3xl p-8 sm:p-12 border border-white/10 relative overflow-hidden bg-[#121218]/90 shadow-2xl"
          >
            {/* TOP FUNNY DEVELOPER HAMSTER DESK & THINKING BUBBLE */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 mb-6 border-b border-white/10">
              
              {/* Developer Hamster Mascot at Work */}
              <div className="flex items-center gap-4">
                <motion.div
                  animate={
                    status === 'flying'
                      ? { rotate: [0, 20, -20, 0], scale: 1.2 }
                      : email
                      ? { y: [0, -6, 0], scale: [1, 1.08, 1] }
                      : isFocused
                      ? { rotate: [-4, 4, -4] }
                      : { y: [0, -3, 0] }
                  }
                  transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative"
                >
                  <div className="relative p-1 rounded-2xl bg-[#09090C] border border-[#FF3B30]/40 shadow-lg shadow-[#FF3B30]/20">
                    <HamsterLogo size={54} />
                    
                    {/* Floating Coffee Cup Icon */}
                    <motion.div
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute -bottom-1.5 -right-1.5 p-1 rounded-lg bg-[#FF3B30] text-white shadow-md"
                    >
                      <Coffee className="w-3.5 h-3.5" />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Developer Live Thought Speech Bubble */}
                <div>
                  <motion.div
                    key={getDeveloperThought()}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="px-3.5 py-1.5 rounded-2xl bg-[#09090C] border border-[#FF3B30]/40 text-[#FF5247] font-mono text-xs font-bold inline-flex items-center gap-2 shadow-md shadow-[#FF3B30]/10"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-yellow-400 animate-spin" style={{ animationDuration: '4s' }} />
                    <span>{getDeveloperThought()}</span>
                  </motion.div>

                  {/* Mini Code Terminal Hint */}
                  <div className="text-[11px] font-mono text-slate-400 mt-1 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-slate-500" />
                    <span>status: <strong className="text-emerald-400 font-bold">200 READY_FOR_DISPATCH</strong></span>
                  </div>
                </div>

              </div>

              {/* Zero Spam Guarantee Badge */}
              <div className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 font-mono text-[11px] font-semibold flex items-center gap-1.5 self-start sm:self-center">
                <span className="w-2 h-2 rounded-full bg-[#FF3B30] animate-pulse" />
                <span>Zero Spam Guarantee</span>
              </div>

            </div>

            {/* Heading */}
            <h2 className="font-syne text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
              Get direct <span className="text-gradient-red glow-text-red">email digests.</span>
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed max-w-2xl mb-8 font-normal">
              Stay ahead with weekly code sprints, nominated 8H teams, and curated toolkit guides delivered to your inbox.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 max-w-2xl">
              
              {/* Input Field */}
              <div className="relative w-full sm:flex-1">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder="dev@hackhamster.com"
                  className={`w-full h-13 px-5 rounded-xl bg-[#09090C] border font-mono text-sm text-white placeholder-slate-500 transition-all duration-300 outline-none ${
                    isFocused
                      ? 'border-[#FF3B30] shadow-lg shadow-[#FF3B30]/25 bg-[#0e0e14]'
                      : 'border-white/15 hover:border-white/30'
                  }`}
                />

                {/* Animated Typing Sparkle Indicator */}
                {email && (
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-[#FF5247] font-bold flex items-center gap-1">
                    <Send className="w-3.5 h-3.5 animate-pulse" />
                  </span>
                )}
              </div>

              {/* Subscribe Button */}
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(255, 59, 48, 0.6)' }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                disabled={status !== 'idle'}
                className="w-full sm:w-auto h-13 px-8 rounded-xl bg-gradient-to-r from-[#FF3B30] to-[#EE3B3B] text-white font-syne font-bold text-sm tracking-wider uppercase shadow-xl shadow-[#FF3B30]/30 transition-all flex items-center justify-center gap-2 shrink-0 min-w-[140px]"
              >
                {status === 'flying' ? (
                  <div className="flex items-center gap-2 font-mono text-xs">
                    <Mail className="w-4 h-4 text-white animate-bounce" />
                    <span>FLYING...</span>
                  </div>
                ) : (
                  <span>Subscribe</span>
                )}
              </motion.button>

            </form>

          </motion.div>
        )}

      </div>
    </section>
  );
};
