import React from 'react';
import { motion } from 'framer-motion';
import { useCollapse } from '../context/CollapseContext';
import { Zap, RefreshCw, Layers } from 'lucide-react';

export const CollapseTriggerButton: React.FC = () => {
  const { isCollapsed, collapseCountdown, triggerCollapse } = useCollapse();

  return (
    <div className="py-8 bg-[#09090B] flex flex-col items-center justify-center relative z-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="flex flex-col items-center text-center px-4"
      >
        <span className="text-[11px] font-mono text-[#FF5247] font-bold uppercase tracking-widest mb-2 flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5 text-[#FF3B30] animate-bounce" />
          INTERACTIVE MATRIX DISRUPTOR
        </span>

        <motion.button
          whileHover={{ scale: 1.05, boxShadow: '0 0 35px rgba(255, 59, 48, 0.7)' }}
          whileTap={{ scale: 0.95 }}
          onClick={triggerCollapse}
          disabled={isCollapsed}
          className={`px-8 py-4 rounded-2xl font-syne font-extrabold text-sm sm:text-base tracking-wider uppercase transition-all duration-300 shadow-2xl flex items-center gap-3 border ${
            isCollapsed
              ? 'bg-[#1C1C26] border-[#FF3B30] text-[#FF5247] shadow-[#FF3B30]/40'
              : 'bg-gradient-to-r from-[#FF3B30] via-[#E11D48] to-[#FF3B30] text-white border-white/20 shadow-[#FF3B30]/30 hover:shadow-[#FF3B30]/60'
          }`}
        >
          {isCollapsed ? (
            <>
              <RefreshCw className="w-5 h-5 animate-spin text-[#FF5247]" />
              <span>COLLAPSING UI... REASSEMBLING IN {Math.ceil(collapseCountdown)}s</span>
            </>
          ) : (
            <>
              <Zap className="w-5 h-5 text-yellow-300 fill-yellow-300 animate-pulse" />
              <span>TRIGGER UI COLLAPSE & MATRIX REASSEMBLY</span>
            </>
          )}
        </motion.button>

        <span className="text-xs font-mono text-slate-400 mt-2.5">
          Clicking implodes all cards & components for 3.5s before springing back to place!
        </span>
      </motion.div>
    </div>
  );
};
