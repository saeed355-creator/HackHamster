import React, { useState } from 'react';
import { Shield, CheckCircle2, Lock, QrCode, ArrowRight, Key, Award, Share2 } from 'lucide-react';

export const CredentialsVault: React.FC = () => {
  const [activeCert, setActiveCert] = useState(0);
  const [isZkpActive, setIsZkpActive] = useState(true);

  const certs = [
    {
      title: 'Master Cybersecurity Specialist',
      issuedBy: 'Hack Hamster Security Guild',
      hash: '0x8f3a...91b2',
      date: 'July 2026',
      xp: '5,000 XP',
      verified: true,
      skills: ['Penetration Testing', 'Smart Contract Audit', 'ZKP Security']
    },
    {
      title: 'Full-Stack Bounty Winner',
      issuedBy: 'Vercel & Hack Hamster',
      hash: '0x3c91...f412',
      date: 'June 2026',
      xp: '3,500 XP',
      verified: true,
      skills: ['Next.js 15', 'Tailwind v4', 'UI Micro-interactions']
    },
    {
      title: 'National SSIP Innovator',
      issuedBy: 'Govt. Innovation Cell & Hack Hamster',
      hash: '0x12a9...d883',
      date: 'May 2026',
      xp: '10,000 XP',
      verified: true,
      skills: ['Startup Pitch', 'Govt Grant Compliance', 'System Design']
    }
  ];

  return (
    <section id="credentials" className="py-24 bg-[#09090B] relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#FF3B30]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Description & Key Features */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#FF3B30]/10 border border-[#FF3B30]/30 text-[#FF5247] font-mono text-xs font-semibold">
              <Shield className="w-3.5 h-3.5 text-[#FF3B30]" />
              <span>CRYPTOGRAPHICALLY SIGNED & VERIFIABLE</span>
            </div>

            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Digital Credentials <span className="text-gradient-red">Vault</span>
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              Access your cryptographically signed, tamper-proof certificates. All achievements and XP milestones are verified on-chain using zero-knowledge proofs for instant verification by employers and universities.
            </p>

            {/* Feature Checklist */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#141419] border border-white/5 hover:border-[#FF3B30]/30 transition-all">
                <div className="p-2 rounded-lg bg-[#FF3B30]/10 text-[#FF3B30] mt-0.5">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-base">ZKP-Secured Identity</h4>
                  <p className="text-xs text-slate-400">Prove your skill mastery and rank without leaking raw personal data or transcripts.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#141419] border border-white/5 hover:border-[#FF3B30]/30 transition-all">
                <div className="p-2 rounded-lg bg-[#FF3B30]/10 text-[#FF3B30] mt-0.5">
                  <QrCode className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-base">QR-Code Instant Verification</h4>
                  <p className="text-xs text-slate-400">Scannable cryptographic proof for university admissions and tech recruiters worldwide.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#141419] border border-white/5 hover:border-[#FF3B30]/30 transition-all">
                <div className="p-2 rounded-lg bg-[#FF3B30]/10 text-[#FF3B30] mt-0.5">
                  <Share2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-base">Direct LinkedIn Integration</h4>
                  <p className="text-xs text-slate-400">One-click push to LinkedIn Certifications with official credential hash verification.</p>
                </div>
              </div>
            </div>

            {/* Vault CTA Button */}
            <div className="pt-4">
              <button className="px-8 py-4 rounded-xl bg-[#141419] hover:bg-[#1c1c24] border border-white/15 hover:border-[#FF3B30]/50 text-white font-heading font-bold text-base transition-all shadow-xl flex items-center gap-3 group">
                <Key className="w-5 h-5 text-[#FF3B30]" />
                <span>Access My Vault</span>
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </button>
            </div>

          </div>

          {/* Right Column: Holographic Certificate Showcase Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Glowing Background Ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#FF3B30] to-[#E11D48] opacity-25 blur-xl animate-pulse-slow" />

              {/* Certificate Card Container */}
              <div className="relative rounded-2xl bg-[#121218]/95 border border-white/15 p-6 backdrop-blur-2xl shadow-2xl">
                
                {/* Cert Card Top Info */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#FF3B30]" />
                    <span className="font-mono text-xs font-bold text-white">HACK_HAMSTER_CREDENTIAL_VAULT</span>
                  </div>

                  {/* ZKP Toggle Switch */}
                  <button
                    onClick={() => setIsZkpActive(!isZkpActive)}
                    className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold flex items-center gap-1.5 transition-all ${
                      isZkpActive
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${isZkpActive ? 'bg-emerald-400 animate-pulse' : 'bg-slate-500'}`} />
                    {isZkpActive ? 'ZKP Active' : 'ZKP Disabled'}
                  </button>
                </div>

                {/* Main Holographic Certificate View */}
                <div className="my-6 p-6 rounded-xl bg-gradient-to-br from-[#161622] to-[#0d0d14] border border-white/10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10 font-mono text-8xl font-black text-white select-none pointer-events-none">
                    ZKP
                  </div>

                  <div className="relative z-10 space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-[10px] font-mono text-[#FF5247] uppercase tracking-wider block">OFFICIAL CERTIFICATE</span>
                        <h3 className="font-heading text-xl font-bold text-white mt-1">
                          {certs[activeCert].title}
                        </h3>
                      </div>
                      <div className="w-12 h-12 rounded-xl bg-[#FF3B30]/10 border border-[#FF3B30]/30 flex items-center justify-center text-[#FF3B30]">
                        <QrCode className="w-7 h-7" />
                      </div>
                    </div>

                    <p className="text-xs text-slate-400">
                      Issued by <span className="text-slate-200 font-semibold">{certs[activeCert].issuedBy}</span>
                    </p>

                    {/* Cryptographic Hash */}
                    <div className="p-3 rounded-lg bg-black/40 border border-white/5 font-mono text-[11px] flex items-center justify-between text-slate-300">
                      <span>Hash: <span className="text-emerald-400">{certs[activeCert].hash}</span></span>
                      <span className="text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> VERIFIED
                      </span>
                    </div>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {certs[activeCert].skills.map((skill, idx) => (
                        <span key={idx} className="text-[10px] font-mono px-2.5 py-1 rounded bg-[#FF3B30]/10 text-[#FF5247] border border-[#FF3B30]/20">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Certificate Selector Tabs */}
                <div className="grid grid-cols-3 gap-2">
                  {certs.map((c, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveCert(i)}
                      className={`p-2 rounded-xl text-left text-xs font-mono transition-all ${
                        activeCert === i
                          ? 'bg-[#FF3B30]/20 text-[#FF5247] border border-[#FF3B30]/40 font-bold'
                          : 'bg-white/5 text-slate-400 hover:text-white border border-white/5'
                      }`}
                    >
                      <span className="block truncate">{c.title}</span>
                      <span className="text-[10px] opacity-75">{c.xp}</span>
                    </button>
                  ))}
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
