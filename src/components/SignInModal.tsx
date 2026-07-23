import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, Eye, EyeOff, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { HamsterLogo } from './HamsterLogo';

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SignInModal: React.FC<SignInModalProps> = ({ isOpen, onClose }) => {
  const [lampOn, setLampOn] = useState(false);
  const [isPulling, setIsPulling] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Reset lamp state when modal opens/closes
  const handleModalClose = () => {
    setLampOn(false);
    setIsPulling(false);
    setIsSuccess(false);
    onClose();
  };

  // Pull Thread Action
  const handlePullThread = () => {
    setIsPulling(true);
    setTimeout(() => {
      setIsPulling(false);
      setLampOn(!lampOn);
    }, 250);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password || isLoading) return;

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      confetti({
        particleCount: 130,
        spread: 90,
        origin: { y: 0.5 },
        colors: ['#FF3B30', '#E11D48', '#F59E0B', '#22C55E', '#FFFFFF'],
      });

      setTimeout(() => {
        handleModalClose();
      }, 2000);
    }, 1200);
  };

  const handleGoogleSignIn = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      confetti({
        particleCount: 130,
        spread: 90,
        origin: { y: 0.5 },
        colors: ['#FF3B30', '#4285F4', '#EA4335', '#FBBC05', '#34A853'],
      });

      setTimeout(() => {
        handleModalClose();
      }, 2000);
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          
          {/* Dark Room Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleModalClose}
            className="fixed inset-0 bg-[#050508]/94 backdrop-blur-2xl transition-colors duration-700"
          />

          {/* HYPER-REALISTIC VOLUMETRIC LIGHT CONE BEAM (EXPANDS WHEN LAMP IS TURNED ON) */}
          <AnimatePresence>
            {lampOn && (
              <motion.div
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1 }}
                exit={{ opacity: 0, scaleY: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="fixed top-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-screen pointer-events-none z-0 origin-top"
                style={{
                  background: 'conic-gradient(from 165deg at 50% 12%, rgba(255, 220, 100, 0.45) 0deg, rgba(255, 59, 48, 0.25) 30deg, transparent 60deg, transparent 300deg, rgba(255, 59, 48, 0.25) 330deg, rgba(255, 220, 100, 0.45) 360deg)',
                  filter: 'blur(8px)',
                }}
              />
            )}
          </AnimatePresence>

          {/* MAIN INTERACTIVE CONTAINER */}
          <div className="relative z-10 w-full max-w-md flex flex-col items-center">
            
            {/* HYPER-REALISTIC 3D METALLIC TABLE LAMP WITH BEADED PULL CHAIN */}
            <div className="relative flex flex-col items-center mb-2 z-20">
              
              {/* Ceiling Mounting Rod / Cord */}
              <div className="w-1.5 h-14 bg-gradient-to-b from-[#111] via-[#333] to-[#222] rounded-full shadow-md" />

              {/* Hyper-Realistic Lamp Hood & Assembly */}
              <div className="relative">
                <svg width="150" height="85" viewBox="0 0 150 85" fill="none" className="drop-shadow-[0_20px_35px_rgba(0,0,0,0.9)]">
                  <defs>
                    {/* Metallic Hood Gradient */}
                    <linearGradient id="lampHoodGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#2A2A36" />
                      <stop offset="40%" stopColor="#14141C" />
                      <stop offset="80%" stopColor="#0B0B0E" />
                      <stop offset="100%" stopColor="#1F1F2A" />
                    </linearGradient>

                    {/* Polished Brass Ring Gradient */}
                    <linearGradient id="brassGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#B8860B" />
                      <stop offset="30%" stopColor="#FFD700" />
                      <stop offset="70%" stopColor="#FFF8DC" />
                      <stop offset="100%" stopColor="#DAA520" />
                    </linearGradient>

                    {/* Volumetric Glow Bulb Inner */}
                    <radialGradient id="bulbGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#FFFFFF" />
                      <stop offset="35%" stopColor="#FFD700" />
                      <stop offset="70%" stopColor="#FF3B30" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#FF0000" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* Top Brass Hinge Mount Nut */}
                  <rect x="67" y="2" width="16" height="8" rx="2" fill="url(#brassGrad)" stroke="#553C00" strokeWidth="0.8" />

                  {/* Upper Lamp Hood Body */}
                  <path
                    d="M 45 10 C 45 10, 75 4, 105 10 C 125 15, 142 62, 142 66 C 142 70, 8 70, 8 66 C 8 62, 25 15, 45 10 Z"
                    fill="url(#lampHoodGrad)"
                    stroke={lampOn ? "url(#brassGrad)" : "#FF3B30"}
                    strokeWidth="2.5"
                  />

                  {/* Metallic Ventilation Vents on Hood */}
                  <line x1="60" y1="20" x2="90" y2="20" stroke="#111" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="56" y1="25" x2="94" y2="25" stroke="#111" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="52" y1="30" x2="98" y2="30" stroke="#111" strokeWidth="1.5" strokeLinecap="round" />

                  {/* Lower Brass Rim Band */}
                  <ellipse cx="75" cy="66" rx="67" ry="6" fill="url(#brassGrad)" stroke="#553C00" strokeWidth="1" />

                  {/* Glass Bulb Chamber (Illuminates Brightly when ON) */}
                  {lampOn ? (
                    <>
                      <ellipse cx="75" cy="66" rx="63" ry="5" fill="url(#bulbGlow)" />
                      {/* Hot Halogen Filament */}
                      <path d="M 68 64 Q 75 58 82 64" fill="none" stroke="#FFFFFF" strokeWidth="2.5" className="animate-pulse" />
                    </>
                  ) : (
                    <ellipse cx="75" cy="66" rx="63" ry="5" fill="#0A0A0E" stroke="#222" />
                  )}
                </svg>

                {/* REALISTIC METAL BEADED PULL CHAIN WITH BRASS PENDANT */}
                <div
                  onClick={handlePullThread}
                  className="absolute top-[62px] right-8 cursor-pointer group flex flex-col items-center z-30"
                  title="Pull chain to switch light ON/OFF"
                >
                  {/* Metal Beaded Chain */}
                  <motion.div
                    animate={{ height: isPulling ? 62 : 44 }}
                    transition={{ type: 'spring', stiffness: 450, damping: 14 }}
                    className="flex flex-col items-center gap-1 py-0.5"
                  >
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-1.5 h-1.5 rounded-full border shadow-sm ${
                          lampOn
                            ? 'bg-yellow-300 border-yellow-500 shadow-[#FFD700]'
                            : 'bg-slate-400 border-slate-600'
                        }`}
                      />
                    ))}
                  </motion.div>

                  {/* Solid Brass Pull Drop Teardrop Pendant */}
                  <motion.div
                    animate={{ y: isPulling ? 20 : 0, scale: isPulling ? 1.3 : 1 }}
                    whileHover={{ scale: 1.3, rotate: [0, -10, 10, 0] }}
                    className={`w-4 h-7 rounded-b-full border-2 transition-all duration-300 shadow-xl ${
                      lampOn
                        ? 'bg-gradient-to-b from-[#FFD700] to-[#B8860B] border-yellow-200 shadow-[0_0_20px_#FFD700]'
                        : 'bg-gradient-to-b from-[#FF3B30] to-[#990000] border-white shadow-[0_0_12px_#FF3B30]'
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* HYPER-REALISTIC SIGN IN DIALOG CARD (REVEALED IN LIGHT CONE) */}
            <AnimatePresence>
              {lampOn && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 40 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 40 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                  className="relative w-full bg-[#121218]/95 border border-[#FFD700]/50 rounded-3xl p-6 sm:p-8 shadow-[0_0_70px_rgba(255,215,0,0.25)] backdrop-blur-2xl z-10 overflow-hidden mt-2"
                >
                  {/* Top Glowing Beam */}
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent animate-pulse" />

                  {/* Close Button */}
                  <button
                    onClick={handleModalClose}
                    className="absolute top-4 right-4 p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-[#FF3B30]/20 transition-all"
                  >
                    <X className="w-5 h-5 text-[#FF5247]" />
                  </button>

                  {/* Header Brand Mark & Title */}
                  <div className="flex flex-col items-center text-center mb-6">
                    <div className="p-1 rounded-2xl bg-[#09090C] border border-yellow-400/50 mb-3 shadow-lg shadow-yellow-500/20">
                      <HamsterLogo size={52} />
                    </div>
                    
                    <h2 className="font-syne text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      Sign In to <span className="text-gradient-red glow-text-red">Hacker Hub</span>
                    </h2>
                    <p className="text-xs font-mono text-slate-400 mt-1">
                      Access your XP rating, team credentials & active sprints
                    </p>
                  </div>

                  {/* SUCCESS STATE */}
                  {isSuccess ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-8 text-center space-y-3"
                    >
                      <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500 flex items-center justify-center mx-auto text-emerald-400 shadow-xl shadow-emerald-500/20">
                        <CheckCircle2 className="w-10 h-10 animate-bounce" />
                      </div>
                      <h3 className="font-syne text-2xl font-bold text-white">AUTHENTICATED! 🎉</h3>
                      <p className="font-mono text-xs text-emerald-400">Welcome back, Hacker! Redirecting to dashboard...</p>
                    </motion.div>
                  ) : (
                    <div className="space-y-4">
                      
                      {/* 1. SIGN IN WITH GOOGLE BUTTON */}
                      <motion.button
                        whileHover={{ scale: 1.02, boxShadow: '0 0 25px rgba(255, 255, 255, 0.15)' }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleGoogleSignIn}
                        disabled={isLoading}
                        className="w-full py-3.5 px-4 rounded-2xl bg-[#1A1A24] border border-white/15 text-white font-syne font-bold text-sm flex items-center justify-center gap-3 transition-all hover:bg-[#222230]"
                      >
                        {/* Google Multicolor SVG Logo */}
                        <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                          <path
                            fill="#4285F4"
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          />
                          <path
                            fill="#34A853"
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          />
                          <path
                            fill="#FBBC05"
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                          />
                          <path
                            fill="#EA4335"
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                          />
                        </svg>
                        <span>Sign in with Google</span>
                      </motion.button>

                      {/* DIVIDER */}
                      <div className="relative flex items-center justify-center my-4">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-white/10" />
                        </div>
                        <span className="relative px-3 bg-[#121218] font-mono text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                          OR ENTER EMAIL & PASSWORD
                        </span>
                      </div>

                      {/* 2. EMAIL & PASSWORD FORM */}
                      <form onSubmit={handleSubmit} className="space-y-3.5">
                        
                        {/* Email Input */}
                        <div>
                          <label className="block font-mono text-xs text-slate-400 mb-1 font-medium">
                            Email Address
                          </label>
                          <div className="relative">
                            <input
                              type="email"
                              required
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="hacker@hackhamster.com"
                              className="w-full h-12 pl-11 pr-4 rounded-xl bg-[#09090C] border border-white/15 focus:border-yellow-400 text-white font-mono text-xs placeholder-slate-500 outline-none transition-all focus:shadow-lg focus:shadow-yellow-500/20"
                            />
                            <Mail className="w-4 h-4 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
                          </div>
                        </div>

                        {/* Password Input */}
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <label className="font-mono text-xs text-slate-400 font-medium">
                              Password
                            </label>
                            <a href="#" className="font-mono text-[11px] text-[#FF5247] hover:underline">
                              Forgot?
                            </a>
                          </div>
                          <div className="relative">
                            <input
                              type={showPassword ? 'text' : 'password'}
                              required
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              placeholder="••••••••••••"
                              className="w-full h-12 pl-11 pr-11 rounded-xl bg-[#09090C] border border-white/15 focus:border-yellow-400 text-white font-mono text-xs placeholder-slate-500 outline-none transition-all focus:shadow-lg focus:shadow-yellow-500/20"
                            />
                            <Lock className="w-4 h-4 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
                            
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 p-1"
                            >
                              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            </button>
                          </div>
                        </div>

                        {/* Remember Me Checkbox */}
                        <div className="flex items-center gap-2 pt-1">
                          <input
                            type="checkbox"
                            id="remember"
                            defaultChecked
                            className="w-4 h-4 rounded bg-[#09090C] border-white/20 text-[#FF3B30] focus:ring-0 accent-[#FF3B30] cursor-pointer"
                          />
                          <label htmlFor="remember" className="font-mono text-xs text-slate-400 cursor-pointer select-none">
                            Remember this hacker session
                          </label>
                        </div>

                        {/* Submit Button */}
                        <motion.button
                          whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(255, 59, 48, 0.6)' }}
                          whileTap={{ scale: 0.98 }}
                          type="submit"
                          disabled={isLoading}
                          className="w-full h-13 mt-2 rounded-xl bg-gradient-to-r from-[#FF3B30] via-[#E11D48] to-[#FF3B30] text-white font-syne font-bold text-sm tracking-wider uppercase shadow-xl shadow-[#FF3B30]/30 transition-all flex items-center justify-center gap-2"
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
                              <span>Sign In</span>
                              <ArrowRight className="w-4 h-4" />
                            </>
                          )}
                        </motion.button>

                      </form>

                      {/* Footer Security Badge */}
                      <div className="pt-3 border-t border-white/10 flex items-center justify-center gap-1.5 text-[11px] font-mono text-slate-500">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        <span>256-Bit Encrypted ZKP Hacker Auth</span>
                      </div>

                    </div>
                  )}

                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>
      )}
    </AnimatePresence>
  );
};
