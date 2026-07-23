import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How does the Universal Hackathon Aggregator scrape live events?',
      a: 'Our distributed scraping nodes crawl national platforms (Devfolio, Unstop, GitHub Bounties, and University Innovation Cells) every 5 minutes. Events are normalized, tagged by tech stack, and verified for prize authenticity.'
    },
    {
      q: 'What are ZKP-Secured Credentials and how are they verified on-chain?',
      a: 'Zero-Knowledge Proof (ZKP) credentials allow you to cryptographically prove that you won a hackathon or completed a code sprint without revealing private identity data. Employers and admissions officers can scan your credential QR code to verify on-chain authenticity in 1 second.'
    },
    {
      q: 'How is XP calculated on the College Leaderboard?',
      a: 'XP is calculated based on code sprint difficulty, CTF challenge points, sprint completion speed, and placement placement in hackathons (1st, 2nd, 3rd, or top 10% finishes). Pro Pass users get a 2x XP boost on verified sprints.'
    },
    {
      q: 'Can our college tech club publish announcements on the Tech Bulletin?',
      a: 'Yes! Approved student leaders and campus chapter leads get direct portal access to broadcast workshop announcements, recruitment drives, and local hackathons to over 42k+ active student hackers.'
    },
    {
      q: 'Is Hack Hamster free for college students?',
      a: 'Yes! The Free Hacker Pass is 100% free forever. You can search hackathons, participate in code sprints, earn ZKP credentials, and join the college leaderboard without paying anything.'
    }
  ];

  return (
    <section id="faq" className="py-24 bg-[#09090B] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#FF3B30]/10 border border-[#FF3B30]/30 text-[#FF5247] font-mono text-xs font-semibold">
            <HelpCircle className="w-3.5 h-3.5 text-[#FF3B30]" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Got <span className="text-gradient-red">Questions?</span>
          </h2>
          <p className="text-slate-300 text-base">
            Everything you need to know about our scraper engine, leaderboard ranking, and ZKP credentials.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl overflow-hidden border border-white/10 transition-all"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-heading font-bold text-white text-lg sm:text-xl">
                    {faq.q}
                  </span>
                  <div
                    className={`p-2 rounded-xl transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#FF3B30] text-white' : 'bg-white/5 text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-slate-300 text-sm leading-relaxed border-t border-white/5">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
