import React from 'react';
import { Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Aarav Sharma',
      role: 'Full Stack Hacker',
      college: 'IIT Bombay',
      avatar: 'AS',
      text: 'Hack Hamster scraped a hidden $500 bounty sprint I would have completely missed. We built an AI agent in 14 hours and secured #1 rank!',
      rank: 'Global Rank #1',
      xp: '32,840 XP'
    },
    {
      name: 'Riya Patel',
      role: 'Cybersecurity Researcher',
      college: 'BITS Pilani',
      avatar: 'RP',
      text: 'The ZKP-secured credentials vault is unbelievable. I attached my verified Hack Hamster credentials to my resume and got hired at a top Web3 security firm.',
      rank: 'Rank #2 Silver',
      xp: '24,500 XP'
    },
    {
      name: 'Karan Verma',
      role: 'Systems Engineer',
      college: 'IIT Delhi',
      avatar: 'KV',
      text: 'No more searching through 10 different hackathon websites manually. The command center aggregates everything with live status updates.',
      rank: 'Rank #3 Bronze',
      xp: '21,100 XP'
    }
  ];

  return (
    <section className="py-24 bg-[#09090B] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#FF3B30]/10 border border-[#FF3B30]/30 text-[#FF5247] font-mono text-xs font-semibold">
            <Quote className="w-3.5 h-3.5 text-[#FF3B30]" />
            <span>COMMUNITY TESTIMONIALS</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Loved by Top <span className="text-gradient-red">Hackers</span>
          </h2>
          <p className="text-slate-300 text-base">
            Hear from engineering students who dominated national hackathons using our aggregator and ZKP vault.
          </p>
        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover rounded-2xl p-8 flex flex-col justify-between border border-white/10 relative group"
            >
              <div>
                <div className="flex items-center gap-1 text-[#F59E0B] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F59E0B]" />
                  ))}
                </div>

                <p className="text-slate-200 text-sm leading-relaxed mb-6 italic">
                  "{item.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF3B30] to-[#E11D48] p-0.5 font-mono text-xs font-bold text-white flex items-center justify-center">
                    <div className="w-full h-full bg-[#09090B] rounded-[10px] flex items-center justify-center text-white">
                      {item.avatar}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-white text-sm">{item.name}</h4>
                    <span className="text-xs text-slate-400 font-sans">{item.college}</span>
                  </div>
                </div>

                <span className="text-[10px] font-mono font-bold px-2 py-1 rounded bg-[#FF3B30]/20 text-[#FF5247] border border-[#FF3B30]/30">
                  {item.xp}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
