import React, { useState } from 'react';
import { Newspaper, ArrowRight } from 'lucide-react';

export interface BulletinItem {
  id: string;
  category: 'WORKSHOPS' | 'CLUBS' | 'EVENTS' | 'BOUNTIES';
  time: string;
  title: string;
  description: string;
  author: string;
  college: string;
  link: string;
}

export const bulletinData: BulletinItem[] = [
  {
    id: 'b-1',
    category: 'WORKSHOPS',
    time: '3h ago',
    title: 'Docker & K8s Bootcamp Announced',
    description: 'Register for the 3-day immersive containerization workshop organized by the cloud computing club. Hands-on cluster deployments and devops pipeline creation.',
    author: 'Cloud Computing Cell',
    college: 'IIT Bombay',
    link: '#'
  },
  {
    id: 'b-2',
    category: 'CLUBS',
    time: '1h ago',
    title: 'AI/ML Club Recruitment Open',
    description: 'We are looking for core members specializing in PyTorch, transformers, and NLP for the upcoming national autonomous AI hackathon series.',
    author: 'AI/ML Society',
    college: 'BITS Pilani',
    link: '#'
  },
  {
    id: 'b-3',
    category: 'EVENTS',
    time: '1d ago',
    title: 'SSIP 2.0 Project Submissions Deadline',
    description: 'Submit your startup ideation decks and working prototypes before the Friday midnight deadline to unlock up to ₹1,000,000 in state incubation grants.',
    author: 'SSIP Cell',
    college: 'Gujarat Technological University',
    link: '#'
  },
  {
    id: 'b-4',
    category: 'BOUNTIES',
    time: '5h ago',
    title: 'Solana Web3 Security Audit Sprint',
    description: 'Find re-entrancy bugs in our vault smart contract and claim up to 5,000 XP + $800 in instant bounty rewards.',
    author: 'Web3 Guild',
    college: 'IIT Delhi',
    link: '#'
  }
];

export const TechBulletin: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('ALL');

  const filteredBulletins = bulletinData.filter(
    (b) => selectedFilter === 'ALL' || b.category === selectedFilter
  );

  return (
    <section id="bulletin" className="py-24 bg-[#09090B] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#FF3B30]/10 border border-[#FF3B30]/30 text-[#FF5247] font-mono text-xs font-semibold">
              <Newspaper className="w-3.5 h-3.5 text-[#FF3B30]" />
              <span>LIVE CAMPUS DISPATCHES</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2">
              College Tech <span className="text-gradient-red">Bulletin</span> 💫
            </h2>
            <p className="text-slate-300 text-base mt-1">
              Live news, workshop announcements, and club recruitment feeds direct from top campus hubs.
            </p>
          </div>

          {/* Filter Categories */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {['ALL', 'WORKSHOPS', 'CLUBS', 'EVENTS', 'BOUNTIES'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                  selectedFilter === cat
                    ? 'bg-[#FF3B30] text-white shadow-md shadow-[#FF3B30]/30'
                    : 'bg-[#141419] text-slate-400 hover:text-white border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bulletins Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {filteredBulletins.map((item) => (
            <div
              key={item.id}
              className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/10 hover:border-[#FF3B30]/40 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Category & Time */}
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded ${
                      item.category === 'WORKSHOPS'
                        ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                        : item.category === 'CLUBS'
                        ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                        : item.category === 'EVENTS'
                        ? 'bg-[#FF3B30]/20 text-[#FF5247] border border-[#FF3B30]/30'
                        : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    }`}
                  >
                    {item.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{item.time}</span>
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl font-bold text-white group-hover:text-[#FF5247] transition-colors mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Footer */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-sans">
                  By <span className="text-slate-200 font-medium">{item.author}</span> ({item.college})
                </span>
                <a
                  href="#"
                  className="text-xs font-mono font-bold text-[#FF5247] hover:text-white flex items-center gap-1 group-hover:translate-x-1 transition-all"
                >
                  Read Dispatch &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* See All Announcements Button */}
        <div className="text-center">
          <button className="px-8 py-4 rounded-xl bg-[#141419] hover:bg-[#1a1a22] border border-white/15 text-white font-heading font-bold text-sm tracking-wider uppercase transition-all shadow-xl hover:border-[#FF3B30]/50 inline-flex items-center gap-2">
            <span>SEE ALL ANNOUNCEMENTS</span>
            <ArrowRight className="w-4 h-4 text-[#FF3B30]" />
          </button>
        </div>

      </div>
    </section>
  );
};
