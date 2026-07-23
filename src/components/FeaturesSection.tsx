import React from 'react';
import { Shield, Sparkles, Terminal, Award, Zap, Globe, Lock } from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Terminal,
      title: 'Automated Scraping Node Network',
      description: 'Crawls national developer portals 24/7. Never miss a high-value hackathon or bounty deadline again.',
      tag: 'Scraper Engine',
    },
    {
      icon: Shield,
      title: 'Zero-Knowledge Proof Credentials',
      description: 'Mint tamper-proof cryptographic badges. Prove your rank to employers without exposing sensitive personal data.',
      tag: 'ZKP Cryptography',
    },
    {
      icon: Award,
      title: 'College Leaderboard Domination',
      description: 'Represent your university. Fight for the #1 King crown and bring national glory to your engineering campus.',
      tag: 'Rank Engine',
    },
    {
      icon: Zap,
      title: 'Instant XP & Bounty Rewards',
      description: 'Receive verified XP for every code submission, CTF solved, or open-source pull request merged.',
      tag: 'Gamified XP',
    },
    {
      icon: Globe,
      title: 'Campus Tech Bulletin Feed',
      description: 'Live community stream for workshops, hackathon team recruitment, and university club announcements.',
      tag: 'Campus Feed',
    },
    {
      icon: Lock,
      title: 'Recruiter Verified Vault',
      description: 'Direct LinkedIn certification integration with instant QR code authenticity validation for top tech firms.',
      tag: 'On-Chain Vault',
    },
  ];

  return (
    <section className="py-24 bg-[#09090B] relative overflow-hidden">
      
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#FF3B30]/10 border border-[#FF3B30]/30 text-[#FF5247] font-mono text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#FF3B30]" />
            <span>BUILT FOR COLLEGE HACKERS</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Designed for Speed & <span className="text-gradient-red">Dominance</span>
          </h2>
          <p className="text-slate-300 text-base">
            Everything you need to discover national sprints, track your developer growth, and build an unshakeable proof-of-work portfolio.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="glass-panel glass-panel-hover rounded-2xl p-6 relative group overflow-hidden border border-white/10"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-[#FF3B30]/10 text-[#FF3B30] group-hover:bg-[#FF3B30] group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5">
                    {feat.tag}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-[#FF5247] transition-colors">
                  {feat.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {feat.description}
                </p>

                <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-end">
                  <span className="text-xs font-mono text-[#FF5247] group-hover:translate-x-1 transition-transform">
                    Explore feature &rarr;
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
