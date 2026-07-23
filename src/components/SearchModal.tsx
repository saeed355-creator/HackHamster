import React, { useState, useEffect } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { initialHackathons } from './AggregatorSection';
import type { Hackathon } from './AggregatorSection';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (hackathon: Hackathon) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onSelect }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const results = initialHackathons.filter(
    (h) =>
      h.title.toLowerCase().includes(query.toLowerCase()) ||
      h.tags.some((t) => t.toLowerCase().includes(query.toLowerCase())) ||
      h.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-xl rounded-2xl bg-[#121218] border border-white/15 p-4 shadow-2xl overflow-hidden">
        
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-[#09090B] border border-white/10">
          <Search className="w-5 h-5 text-[#FF3B30]" />
          <input
            type="text"
            autoFocus
            placeholder="Search hackathons, bounties, stacks (e.g. Cybersecurity, Rust)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-white font-sans text-sm placeholder-slate-500 focus:outline-none"
          />
          <button onClick={onClose} className="text-slate-400 hover:text-white p-1">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results Stream */}
        <div className="mt-4 max-h-80 overflow-y-auto space-y-2 pr-1">
          {results.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                onSelect(item);
                onClose();
              }}
              className="p-3 rounded-xl bg-white/5 hover:bg-[#FF3B30]/15 border border-white/5 hover:border-[#FF3B30]/30 transition-all cursor-pointer flex items-center justify-between group"
            >
              <div>
                <span className="text-[10px] font-mono text-[#FF5247] uppercase block">{item.category}</span>
                <h4 className="font-heading font-bold text-white text-sm group-hover:text-[#FF5247] transition-colors">
                  {item.title}
                </h4>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-[#F59E0B] font-bold">+{item.xp} XP</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}

          {results.length === 0 && (
            <div className="p-8 text-center text-xs font-mono text-slate-400">
              No hackathons found matching "{query}"
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
