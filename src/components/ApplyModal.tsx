import React, { useState } from 'react';
import { X, Flame, Clock, Users, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import type { Hackathon } from './AggregatorSection';
import confetti from 'canvas-confetti';

interface ApplyModalProps {
  hackathon: Hackathon | null;
  onClose: () => void;
}

export const ApplyModal: React.FC<ApplyModalProps> = ({ hackathon, onClose }) => {
  const [applied, setApplied] = useState(false);

  if (!hackathon) return null;

  const handleApply = () => {
    setApplied(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.5 },
      colors: ['#FF3B30', '#E11D48', '#F59E0B'],
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl rounded-3xl bg-[#121218] border border-[#FF3B30]/40 p-6 sm:p-8 shadow-2xl shadow-[#FF3B30]/20 overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Content */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-[#FF3B30]/20 text-[#FF5247] border border-[#FF3B30]/30 uppercase">
              {hackathon.category} SPRINT
            </span>
            <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#FF3B30]" /> {hackathon.deadline}
            </span>
          </div>

          <div>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
              {hackathon.title}
            </h2>
            <p className="text-xs text-slate-400 font-sans mt-1">
              Organized by <span className="text-slate-200 font-semibold">{hackathon.organizer}</span>
            </p>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed">
            {hackathon.description}
          </p>

          {/* Details Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-white/5 border border-white/5 font-mono text-xs">
            <div>
              <span className="text-slate-400 text-[10px] block uppercase">Prize Pool</span>
              <span className="font-bold text-[#FF5247] flex items-center gap-1 mt-0.5">
                <Flame className="w-3.5 h-3.5 text-[#FF3B30]" />
                {hackathon.prize}
              </span>
            </div>
            <div>
              <span className="text-slate-400 text-[10px] block uppercase">XP Reward</span>
              <span className="font-bold text-[#F59E0B] mt-0.5 block">+{hackathon.xp} XP</span>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="text-slate-400 text-[10px] block uppercase">Participants</span>
              <span className="font-bold text-slate-200 mt-0.5 flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-slate-400" />
                {hackathon.participants} registered
              </span>
            </div>
          </div>

          {/* Tech Stack Tags */}
          <div>
            <span className="text-xs font-mono text-slate-400 block mb-2">Required Tech Stack & Skills</span>
            <div className="flex flex-wrap gap-2">
              {hackathon.tags.map((tag, idx) => (
                <span key={idx} className="text-xs font-mono px-3 py-1 rounded-lg bg-[#FF3B30]/10 text-[#FF5247] border border-[#FF3B30]/20">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Application Action */}
          {applied ? (
            <div className="p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-sm font-mono text-center flex items-center justify-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span className="font-bold">Application Registered! Sprint token saved to your profile.</span>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                onClick={handleApply}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#FF3B30] to-[#E11D48] text-white font-heading font-bold text-base shadow-xl shadow-[#FF3B30]/30 hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                <span>Confirm Application (+{hackathon.xp} XP)</span>
                <ArrowUpRight className="w-5 h-5" />
              </button>

              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white/5 text-slate-300 hover:text-white border border-white/10 font-heading text-sm"
              >
                Cancel
              </button>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
