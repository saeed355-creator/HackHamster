import React from 'react';
import { HamsterLogo } from './HamsterLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070709] border-t border-white/10 py-10 text-slate-400 font-sans text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Logo + Copyright */}
        <div className="flex items-center gap-3">
          <HamsterLogo size={28} />
          <span className="font-heading font-bold text-white text-sm">Hack Hamster</span>
          <span className="text-slate-500 font-mono text-[11px] ml-2">
            © 2024 Hack Hamster. Cryptographically Secured.
          </span>
        </div>

        {/* Right Links */}
        <div className="flex flex-wrap items-center gap-6 font-mono text-[11px]">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">API Docs</a>
          <a href="#" className="hover:text-white transition-colors">Contact Support</a>
        </div>

      </div>
    </footer>
  );
};
