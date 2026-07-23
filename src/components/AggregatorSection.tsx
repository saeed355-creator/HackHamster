import React from 'react';
import { motion } from 'framer-motion';
import { Flame } from 'lucide-react';

export interface Hackathon {
  id: string;
  title: string;
  organizer: string;
  category: string;
  prize: string;
  xp: number;
  deadline: string;
  participants: number;
  tags: string[];
  status: string;
  description: string;
}

interface AggregatorSectionProps {
  onSelectHackathon?: (hackathon: Hackathon) => void;
}

export const initialHackathons: Hackathon[] = [
  {
    id: 'cyber-1',
    title: 'Cybersecurity Expert Session',
    organizer: 'Hack Hamster Security Guild',
    category: 'Cybersecurity',
    prize: 'XP + CRED',
    xp: 5000,
    deadline: '2 Days Left',
    participants: 1420,
    tags: ['Penetration Testing', 'Network Security', 'CTF'],
    status: 'Live',
    description: 'Master advanced penetration testing and network security protocols in th...',
  },
  {
    id: 'bounty-1',
    title: 'Live Landing Page Bounty',
    organizer: 'Vercel & Framer Collective',
    category: 'Bounty',
    prize: '$500 VOUCHER',
    xp: 3500,
    deadline: '18 Hours Left',
    participants: 890,
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'UI/UX'],
    status: 'Ending Soon',
    description: 'Rapidly prototype and deploy a high-conversion landing page for a...',
  },
  {
    id: 'ssip-1',
    title: 'SSIP Orientation',
    organizer: 'Govt. Innovation Cell',
    category: 'Government',
    prize: 'GOVT CERT',
    xp: 10000,
    deadline: '5 Days Left',
    participants: 4500,
    tags: ['Startup India', 'National Level', 'Govt Grant'],
    status: 'Live',
    description: 'National level orientation for innovation and startup support. Get...',
  }
];

export const AggregatorSection: React.FC<AggregatorSectionProps> = ({ onSelectHackathon }) => {
  return (
    <section id="aggregator" className="py-20 bg-[#09090B] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-5 rounded-lg bg-[#FF3B30]/20 flex items-center justify-center text-[#FF3B30] shrink-0">
                <Flame className="w-3.5 h-3.5" />
              </div>
              
              {/* COMPACT SMALLER GLITCH EFFECT TITLE ON "Universal Hackathon Aggregator" */}
              <h2
                className="font-syne text-lg sm:text-xl lg:text-2xl font-extrabold tracking-tight uppercase glitch-text text-gradient-red glow-text-red"
                data-text="Universal Hackathon Aggregator"
              >
                Universal Hackathon Aggregator
              </h2>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm font-sans">
              Discover scraped and aggregated national-level developer hackathons.
            </p>
          </div>

          <div>
            <a
              href="#aggregator"
              className="text-xs font-mono font-bold text-[#FF5247] hover:text-white flex items-center gap-1 transition-colors"
            >
              View All &rarr;
            </a>
          </div>
        </div>

        {/* Hackathon Cards Grid (Exact 3 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {initialHackathons.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between border border-white/10 hover:border-[#FF3B30]/50 transition-all bg-[#121218]/90 group"
            >
              <div>
                {/* Badge Header */}
                <div className="mb-4">
                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-[#FF3B30]/20 text-[#FF5247] border border-[#FF3B30]/30 tracking-wider">
                    HACKHAMSTER
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl font-bold text-white group-hover:text-[#FF5247] transition-colors mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed mb-6 font-sans">
                  {item.description}
                </p>
              </div>

              {/* Bottom Card Footer: Prize & Apply Button */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                <div>
                  <span className="text-slate-400 font-medium">PRIZE: <span className="text-[#FF5247] font-bold">{item.prize}</span></span>
                </div>

                <button
                  onClick={() => onSelectHackathon && onSelectHackathon(item)}
                  className="text-xs font-mono font-bold text-[#FF5247] hover:text-white flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  <span>Apply Now</span>
                  <span>&rarr;</span>
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
