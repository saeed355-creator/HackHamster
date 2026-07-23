import React, { useState } from 'react';
import { Check, Flame, Crown, ArrowRight } from 'lucide-react';

export const HackerTierPricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const tiers = [
    {
      name: 'Free Hacker Pass',
      price: '₹0',
      period: 'forever free',
      description: 'Essential command center tools for every aspiring college developer.',
      features: [
        'Scraped Hackathon Aggregator Access',
        'Public College Leaderboard Entry',
        'Basic Proof-of-Work Credentials',
        'Standard Email Digests',
        'Campus Tech Bulletin Browsing'
      ],
      popular: false,
      cta: 'Get Started Free',
      color: 'border-white/10'
    },
    {
      name: 'Pro Sprint Pass',
      price: isAnnual ? '₹399' : '₹499',
      period: 'per month',
      description: 'For competitive hackers who want 2x XP, instant bounty alerts & team matchmaking.',
      features: [
        'Everything in Free Pass',
        'Real-time Telegram & Discord Bounty Alerts',
        '2x XP Boost on all Sprint Submissions',
        'On-Chain ZKP Verifiable Credentials',
        'Automated 8H Team Matchmaker',
        'Direct Tech Recruiter Export'
      ],
      popular: true,
      cta: 'Upgrade to Pro Pass',
      color: 'border-[#FF3B30]'
    },
    {
      name: 'Campus Chapter Lead',
      price: 'Free',
      period: 'for approved club leads',
      description: 'Sponsor your college chapter and lead your university to #1 King rank.',
      features: [
        'All Pro Sprint Features Included',
        'Custom Campus Tech Bulletin Channel',
        'Official Hack Hamster Event Sponsorship',
        'Dedicated Mentor & Judge Network',
        'Institutional XP Analytics Dashboard'
      ],
      popular: false,
      cta: 'Apply for Campus Lead',
      color: 'border-white/10'
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-[#09090B] relative overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#FF3B30]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#FF3B30]/10 border border-[#FF3B30]/30 text-[#FF5247] font-mono text-xs font-semibold">
            <Flame className="w-3.5 h-3.5 text-[#FF3B30]" />
            <span>HACKER PASS TIERS</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Choose Your <span className="text-gradient-red">Sprint Pass</span>
          </h2>
          <p className="text-slate-300 text-base">
            Start for free or supercharge your developer rank with Pro Pass features and instant bounty alerts.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-3 pt-4">
            <span className={`text-xs font-mono ${!isAnnual ? 'text-white font-bold' : 'text-slate-400'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-12 h-6 rounded-full bg-[#141419] border border-white/20 p-1 relative transition-colors focus:outline-none"
            >
              <div
                className={`w-4 h-4 rounded-full bg-[#FF3B30] transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-xs font-mono ${isAnnual ? 'text-white font-bold' : 'text-slate-400'} flex items-center gap-1`}>
              Annual <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#FF3B30]/20 text-[#FF5247]">20% OFF</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`glass-panel rounded-2xl p-8 flex flex-col justify-between relative border ${tier.color} ${
                tier.popular ? 'bg-[#161622]/90 shadow-2xl shadow-[#FF3B30]/20 scale-105 z-10' : 'bg-[#121218]'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-[#FF3B30] to-[#E11D48] text-white text-[10px] font-mono font-extrabold uppercase tracking-wider shadow-lg shadow-[#FF3B30]/40 flex items-center gap-1">
                  <Crown className="w-3 h-3" /> MOST POPULAR
                </div>
              )}

              <div>
                <h3 className="font-heading text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-xs text-slate-400 mb-6 leading-relaxed">{tier.description}</p>

                <div className="flex items-baseline gap-1 mb-6">
                  <span className="font-heading text-4xl font-extrabold text-white">{tier.price}</span>
                  <span className="text-xs font-mono text-slate-400">/{tier.period}</span>
                </div>

                <div className="space-y-3 mb-8 pt-4 border-t border-white/10">
                  {tier.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-[#FF3B30] mt-0.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                className={`w-full py-3.5 rounded-xl font-heading font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                  tier.popular
                    ? 'bg-gradient-to-r from-[#FF3B30] to-[#E11D48] text-white shadow-lg shadow-[#FF3B30]/30 hover:scale-105'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
                }`}
              >
                <span>{tier.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
