import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, Eye, EyeOff, ArrowRight, CheckCircle2, ShieldCheck, User, Sparkles, Github } from 'lucide-react';
import confetti from 'canvas-confetti';
import { HamsterLogo } from './HamsterLogo';

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SignInModal: React.FC<SignInModalProps> = ({ isOpen, onClose }) => {
  const [lampOn, setLampOn] = useState(true);
  const [isPulling, setIsPulling] = useState(false);
  const [activeTab, setActiveTab] = useState<'signin' | 'signup'>('signin');
  
  // Form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Set lamp ON whenever modal opens
  useEffect(() => {
    if (isOpen) {
      setLampOn(true);
      setIsSuccess(false);
      setIsLoading(false);
    }
  }, [isOpen]);

  const handleModalClose = () => {
    setIsSuccess(false);
    onClose();
  };

  // Pull Lamp Thread Action
  const handlePullThread = () => {
    setIsPulling(true);
    setTimeout(() => {
      setIsPulling(false);
      setLampOn(prev => !prev);
    }, 220);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password || isLoading) return;

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      confetti({
        particleCount: 140,
        spread: 100,
        origin: { y: 0.5 },
        colors: ['#FF3B30', '#FFD700', '#22C55E', '#3B82F6', '#FFFFFF'],
      });

      setTimeout(() => {
        handleModalClose();
      }, 1900);
    }, 1100);
  };

  const handleSocialSignIn = (provider: 'google' | 'github') => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      confetti({
        particleCount: 140,
        spread: 100,
        origin: { y: 0.5 },
        colors: provider === 'google' 
          ? ['#4285F4', '#EA4335', '#FBBC05', '#34A853', '#FFFFFF']
          : ['#24292E', '#FF3B30', '#FFD700', '#A855F7', '#FFFFFF'],
      });

      setTimeout(() => {
        handleModalClose();
      }, 1900);
    }, 1100);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto min-h-screen">
          
          {/* Dark Ambient Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleModalClose}
            className="fixed inset-0 bg-[#040407]/92 backdrop-blur-xl transition-colors duration-500"
          />

          {/* VOLUMETRIC VOLTAGE LIGHT CONE (ACTIVE WHEN LAMP IS ON) */}
          <AnimatePresence>
            {lampOn && (
              <motion.div
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1 }}
                exit={{ opacity: 0, scaleY: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="fixed top-0 left-1/2 -translate-x-1/2 w-[650px] sm:w-[950px] h-screen pointer-events-none z-0 origin-top"
                style={{
                  background: 'conic-gradient(from 165deg at 50% 8%, rgba(255, 215, 0, 0.38) 0deg, rgba(255, 59, 48, 0.2) 30deg, transparent 65deg, transparent 295deg, rgba(255, 59, 48, 0.2) 330deg, rgba(255, 215, 0, 0.38) 360deg)',
                  filter: 'blur(10px)',
                }}
              />
            )}
          </AnimatePresence>

          {/* MAIN CENTERED MODAL DIALOG CONTAINER */}
          <div className="relative z-10 w-full max-w-[440px] flex flex-col items-center my-auto py-4">
            
            {/* 3D METALLIC TABLE LAMP ASSEMBLY WITH INTERACTIVE PULL CHAIN */}
            <div className="relative flex flex-col items-center mb-1 z-20">
              
              {/* Ceiling Mounting Cord */}
              <div className="w-1.5 h-10 bg-gradient-to-b from-[#0A0A0E] via-[#2A2A35] to-[#1A1A24] rounded-full shadow-inner" />

              {/* Hyper-Realistic Lamp Hood */}
              <div className="relative">
                <svg width="140" height="76" viewBox="0 0 140 76" fill="none" className="drop-shadow-[0_15px_30px_rgba(0,0,0,0.95)]">
                  <defs>
                    <linearGradient id="lampHoodGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#2A2A36" />
                      <stop offset="45%" stopColor="#14141D" />
                      <stop offset="85%" stopColor="#0B0B0F" />
                      <stop offset="100%" stopColor="#222230" />
                    </linearGradient>

                    <linearGradient id="brassGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#B8860B" />
                      <stop offset="30%" stopColor="#FFD700" />
                      <stop offset="70%" stopColor="#FFF8DC" />
                      <stop offset="100%" stopColor="#DAA520" />
                    </linearGradient>

                    <radialGradient id="bulbGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#FFFFFF" />
                      <stop offset="40%" stopColor="#FFD700" />
                      <stop offset="75%" stopColor="#FF3B30" stopOpacity="0.85" />
                      <stop offset="100%" stopColor="#FF0000" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* Top Brass Hinge Nut */}
                  <rect x="62" y="2" width="16" height="7" rx="2" fill="url(#brassGrad)" stroke="#443000" strokeWidth="0.8" />

                  {/* Upper Lamp Hood Body */}
                  <path
                    d="M 40 9 C 40 9, 70 3, 100 9 C 118 14, 134 56, 134 60 C 134 64, 6 64, 6 60 C 6 56, 22 14, 40 9 Z"
                    fill="url(#lampHoodGrad)"
                    stroke={lampOn ? "url(#brassGrad)" : "#FF3B30"}
                    strokeWidth="2.2"
                  />

                  {/* Vents */}
                  <line x1="55" y1="18" x2="85" y2="18" stroke="#111" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="51" y1="23" x2="89" y2="23" stroke="#111" strokeWidth="1.5" strokeLinecap="round" />

                  {/* Lower Brass Rim Band */}
                  <ellipse cx="70" cy="60" rx="63" ry="5.5" fill="url(#brassGrad)" stroke="#443000" strokeWidth="1" />

                  {/* Bulb Chamber */}
                  {lampOn ? (
                    <>
                      <ellipse cx="70" cy="60" rx="59" ry="4.5" fill="url(#bulbGlow)" />
                      <path d="M 63 58 Q 70 52 77 58" fill="none" stroke="#FFFFFF" strokeWidth="2.5" className="animate-pulse" />
                    </>
                  ) : (
                    <ellipse cx="70" cy="60" rx="59" ry="4.5" fill="#09090C" stroke="#222" />
                  )}
                </svg>

                {/* INTERACTIVE PULL CHAIN */}
                <div
                  onClick={handlePullThread}
                  className="absolute top-[56px] right-7 cursor-pointer group flex flex-col items-center z-30"
                  title="Click chain to turn lamp ON/OFF"
                >
                  <motion.div
                    animate={{ height: isPulling ? 56 : 38 }}
                    transition={{ type: 'spring', stiffness: 450, damping: 14 }}
                    className="flex flex-col items-center gap-1 py-0.5"
                  >
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-1.5 h-1.5 rounded-full border transition-all ${
                          lampOn
                            ? 'bg-yellow-300 border-yellow-500 shadow-[0_0_6px_#FFD700]'
                            : 'bg-slate-500 border-slate-700'
                        }`}
                      />
                    ))}
                  </motion.div>

                  <motion.div
                    animate={{ y: isPulling ? 18 : 0, scale: isPulling ? 1.25 : 1 }}
                    whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                    className={`w-3.5 h-6 rounded-b-full border-2 transition-all duration-300 shadow-xl ${
                      lampOn
                        ? 'bg-gradient-to-b from-[#FFD700] to-[#B8860B] border-yellow-100 shadow-[0_0_16px_#FFD700]'
                        : 'bg-gradient-to-b from-[#FF3B30] to-[#990000] border-white shadow-[0_0_10px_#FF3B30]'
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* PERFECTLY PROPORTIONED SIGN IN DIALOG CARD */}
            <AnimatePresence mode="wait">
              {lampOn ? (
                <motion.div
                  key="card-open"
                  initial={{ opacity: 0, scale: 0.92, y: 25 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92, y: 25 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                  className="relative w-full bg-[#0F0F16]/96 border border-yellow-400/40 rounded-3xl p-5 sm:p-6 shadow-[0_0_60px_rgba(255,215,0,0.22)] backdrop-blur-2xl z-10 overflow-hidden"
                >
                  {/* Top Glowing Beam Strip */}
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent animate-pulse" />

                  {/* Close Modal Button */}
                  <button
                    onClick={handleModalClose}
                    className="absolute top-4 right-4 p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-[#FF3B30]/20 hover:border-[#FF3B30]/40 transition-all group"
                  >
                    <X className="w-4 h-4 text-slate-400 group-hover:text-[#FF5247] transition-colors" />
                  </button>

                  {/* Header Branding */}
                  <div className="flex flex-col items-center text-center mb-5">
                    <motion.div 
                      whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
                      className="p-1 rounded-2xl bg-[#09090D] border border-yellow-400/40 mb-2 shadow-lg shadow-yellow-500/20"
                    >
                      <HamsterLogo size={46} />
                    </motion.div>
                    
                    <h2 className="font-syne text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                      Welcome to <span className="text-gradient-red glow-text-red">HackHamster</span>
                    </h2>
                    <p className="text-[11px] font-mono text-slate-400 mt-0.5">
                      Join India's Premier College Hackathon Network
                    </p>
                  </div>

                  {/* SUCCESS STATE */}
                  {isSuccess ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-6 text-center space-y-3"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/60 flex items-center justify-center mx-auto text-emerald-400 shadow-xl shadow-emerald-500/20">
                        <CheckCircle2 className="w-8 h-8 animate-bounce" />
                      </div>
                      <h3 className="font-syne text-xl font-bold text-white tracking-tight">AUTHENTICATED! 🎉</h3>
                      <p className="font-mono text-xs text-emerald-400">Welcome back, Hacker! Loading your dashboard...</p>
                    </motion.div>
                  ) : (
                    <div className="space-y-4">
                      
                      {/* DUAL MODE TABS: SIGN IN vs CREATE ACCOUNT */}
                      <div className="relative flex items-center p-1 bg-[#09090E] border border-white/10 rounded-2xl">
                        <button
                          type="button"
                          onClick={() => setActiveTab('signin')}
                          className={`relative flex-1 py-2 font-syne text-xs font-bold transition-colors z-10 ${
                            activeTab === 'signin' ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          {activeTab === 'signin' && (
                            <motion.div
                              layoutId="activeTab"
                              className="absolute inset-0 bg-gradient-to-r from-[#FF3B30] to-[#E11D48] rounded-xl shadow-md"
                              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                            />
                          )}
                          <span className="relative z-10">Sign In</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setActiveTab('signup')}
                          className={`relative flex-1 py-2 font-syne text-xs font-bold transition-colors z-10 ${
                            activeTab === 'signup' ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          {activeTab === 'signup' && (
                            <motion.div
                              layoutId="activeTab"
                              className="absolute inset-0 bg-gradient-to-r from-[#FF3B30] to-[#E11D48] rounded-xl shadow-md"
                              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                            />
                          )}
                          <span className="relative z-10 flex items-center justify-center gap-1">
                            <span>Register</span>
                            <Sparkles className="w-3 h-3 text-yellow-300" />
                          </span>
                        </button>
                      </div>

                      {/* SOCIAL QUICK AUTH BUTTONS */}
                      <div className="grid grid-cols-2 gap-2.5">
                        <motion.button
                          whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleSocialSignIn('google')}
                          disabled={isLoading}
                          className="py-2.5 px-3 rounded-xl bg-white/5 border border-white/10 text-white font-syne text-xs font-semibold flex items-center justify-center gap-2 transition-all"
                        >
                          <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                          </svg>
                          <span>Google</span>
                        </motion.button>

                        <motion.button
                          whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleSocialSignIn('github')}
                          disabled={isLoading}
                          className="py-2.5 px-3 rounded-xl bg-white/5 border border-white/10 text-white font-syne text-xs font-semibold flex items-center justify-center gap-2 transition-all"
                        >
                          <Github className="w-4 h-4 text-white" />
                          <span>GitHub</span>
                        </motion.button>
                      </div>

                      {/* DIVIDER */}
                      <div className="relative flex items-center justify-center my-3">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-white/10" />
                        </div>
                        <span className="relative px-2.5 bg-[#0F0F16] font-mono text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                          OR WITH EMAIL
                        </span>
                      </div>

                      {/* CREDENTIALS FORM */}
                      <form onSubmit={handleSubmit} className="space-y-3">
                        
                        {/* Name Input (Only on Sign Up Tab) */}
                        {activeTab === 'signup' && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                          >
                            <label className="block font-mono text-[11px] text-slate-400 mb-1 font-medium">
                              Full Name
                            </label>
                            <div className="relative">
                              <input
                                type="text"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Alex Mercer"
                                className="w-full h-11 pl-10 pr-3 rounded-xl bg-[#08080C] border border-white/15 focus:border-yellow-400 text-white font-mono text-xs placeholder-slate-500 outline-none transition-all focus:shadow-[0_0_15px_rgba(255,215,0,0.2)]"
                              />
                              <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                            </div>
                          </motion.div>
                        )}

                        {/* Email Input */}
                        <div>
                          <label className="block font-mono text-[11px] text-slate-400 mb-1 font-medium">
                            Email Address
                          </label>
                          <div className="relative">
                            <input
                              type="email"
                              required
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="hacker@hackhamster.com"
                              className="w-full h-11 pl-10 pr-3 rounded-xl bg-[#08080C] border border-white/15 focus:border-yellow-400 text-white font-mono text-xs placeholder-slate-500 outline-none transition-all focus:shadow-[0_0_15px_rgba(255,215,0,0.2)]"
                            />
                            <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          </div>
                        </div>

                        {/* Password Input */}
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <label className="font-mono text-[11px] text-slate-400 font-medium">
                              Password
                            </label>
                            {activeTab === 'signin' && (
                              <a href="#" className="font-mono text-[10px] text-[#FF5247] hover:underline">
                                Forgot?
                              </a>
                            )}
                          </div>
                          <div className="relative">
                            <input
                              type={showPassword ? 'text' : 'password'}
                              required
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              placeholder="••••••••••••"
                              className="w-full h-11 pl-10 pr-10 rounded-xl bg-[#08080C] border border-white/15 focus:border-yellow-400 text-white font-mono text-xs placeholder-slate-500 outline-none transition-all focus:shadow-[0_0_15px_rgba(255,215,0,0.2)]"
                            />
                            <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                            
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 p-1 transition-colors"
                            >
                              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            </button>
                          </div>
                        </div>

                        {/* Remember Me / Terms Checkbox */}
                        <div className="flex items-center gap-2 pt-0.5">
                          <input
                            type="checkbox"
                            id="remember"
                            defaultChecked
                            className="w-3.5 h-3.5 rounded bg-[#08080C] border-white/20 text-[#FF3B30] focus:ring-0 accent-[#FF3B30] cursor-pointer"
                          />
                          <label htmlFor="remember" className="font-mono text-[11px] text-slate-400 cursor-pointer select-none">
                            {activeTab === 'signin' ? 'Keep me logged in' : 'Agree to Hacker Code of Conduct'}
                          </label>
                        </div>

                        {/* Submit Button */}
                        <motion.button
                          whileHover={{ scale: 1.02, boxShadow: '0 0 25px rgba(255, 59, 48, 0.55)' }}
                          whileTap={{ scale: 0.98 }}
                          type="submit"
                          disabled={isLoading}
                          className="w-full h-11 mt-1 rounded-xl bg-gradient-to-r from-[#FF3B30] via-[#E11D48] to-[#FF3B30] text-white font-syne font-bold text-xs tracking-wider uppercase shadow-lg shadow-[#FF3B30]/30 transition-all flex items-center justify-center gap-2"
                        >
                          {isLoading ? (
                            <div className="flex items-center gap-2 font-mono text-xs">
                              <svg className="animate-spin w-4 h-4 text-white" viewBox="0 0 24 24" fill="none">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                              </svg>
                              <span>AUTHENTICATING...</span>
                            </div>
                          ) : (
                            <>
                              <span>{activeTab === 'signin' ? 'Sign In to Dashboard' : 'Create Hacker Account'}</span>
                              <ArrowRight className="w-4 h-4" />
                            </>
                          )}
                        </motion.button>

                      </form>

                      {/* Footer Security Note */}
                      <div className="pt-2.5 border-t border-white/10 flex items-center justify-center gap-1.5 text-[10px] font-mono text-slate-500">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                        <span>256-Bit Encrypted ZKP Hacker Auth</span>
                      </div>

                    </div>
                  )}

                </motion.div>
              ) : (
                /* LAMP OFF STATE HINT */
                <motion.div
                  key="card-closed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-[#09090E]/90 border border-slate-700/50 rounded-2xl px-5 py-3 text-center shadow-xl backdrop-blur-md cursor-pointer mt-4"
                  onClick={handlePullThread}
                >
                  <p className="font-mono text-xs text-yellow-400 font-medium flex items-center justify-center gap-2">
                    <span>💡 Click the lamp pull string above to reveal Sign In</span>
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>
      )}
    </AnimatePresence>
  );
};

