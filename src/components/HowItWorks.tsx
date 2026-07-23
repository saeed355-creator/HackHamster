import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

export const HowItWorks: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const steps = [
    {
      num: '01',
      title: 'Sync Profile',
      description: 'Connect your GitHub account. Auto-calculate your developer rating points from merged PRs and active repositories.'
    },
    {
      num: '02',
      title: 'Match Partners',
      description: 'Browse candidate directory. Filter by verified specializations and invite them into team rooms.'
    },
    {
      num: '03',
      title: 'Register & Build',
      description: 'Explore consolidated national hackathons. Apply directly using structured registration credentials.'
    },
    {
      num: '04',
      title: 'Claim Credentials',
      description: 'Submit round deliverables. Earn secure digital certificates with unique validation hashes upon completion.'
    }
  ];

  // Character-by-character typewriter effect for each step description
  const [typedTexts, setTypedTexts] = useState<string[]>(['', '', '', '']);
  const [activeTypingStep, setActiveTypingStep] = useState<number>(0);

  useEffect(() => {
    if (!isInView) return;

    let currentStep = 0;
    let charIndex = 0;
    let timer: ReturnType<typeof setTimeout>;

    const typeNextChar = () => {
      if (currentStep >= steps.length) return;

      const fullText = steps[currentStep].description;
      if (charIndex <= fullText.length) {
        setTypedTexts((prev) => {
          const next = [...prev];
          next[currentStep] = fullText.slice(0, charIndex);
          return next;
        });
        setActiveTypingStep(currentStep);
        charIndex++;
        timer = setTimeout(typeNextChar, 18); // Typing speed
      } else {
        // Move to next step typing
        currentStep++;
        charIndex = 0;
        timer = setTimeout(typeNextChar, 250);
      }
    };

    timer = setTimeout(typeNextChar, 300);

    return () => clearTimeout(timer);
  }, [isInView]);

  return (
    <section ref={ref} id="how-it-works" className="py-16 sm:py-24 bg-[#09090B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Title Header with Glitch Typewriter Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-20 space-y-3 sm:space-y-4"
        >
          <h2 className="font-syne fluid-section-title font-extrabold text-[#FF3B30] tracking-tight">
            How it <span className="text-white glitch-text" data-text="Works">Works</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-base font-sans leading-relaxed">
            Four streamlined steps to scale your sprint workflow from idea to credential.
          </p>
        </motion.div>

        {/* Timeline Grid */}
        <div className="relative">
          
          {/* Connecting Red Horizontal Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-[28px] left-[8%] right-[8%] h-[1.5px] bg-[#FF3B30]/40 z-0 overflow-hidden">
            {/* Animated Laser Fill Line */}
            <motion.div
              initial={{ width: '0%' }}
              animate={isInView ? { width: '100%' } : {}}
              transition={{ duration: 3, ease: 'easeInOut' }}
              className="h-full bg-[#FF3B30] shadow-[0_0_10px_#FF3B30]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 relative z-10">
            {steps.map((step, index) => {
              const isCurrentlyTyping = activeTypingStep === index;
              const isDone = typedTexts[index].length >= step.description.length;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex flex-col items-start text-left group glass-panel p-5 sm:p-6 rounded-2xl border border-white/10 lg:border-transparent lg:bg-transparent lg:p-0 lg:backdrop-blur-none lg:shadow-none"
                >
                  {/* Step Number Box with Glowing Pulsing Activation */}
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#09090B] border-2 flex items-center justify-center mb-4 sm:mb-6 shadow-lg transition-all duration-500 ${
                      isCurrentlyTyping || isDone
                        ? 'border-[#FF3B30] shadow-[#FF3B30]/40 scale-105 bg-[#121218]'
                        : 'border-white/20 text-slate-500'
                    }`}
                  >
                    <span
                      className={`font-mono text-xs sm:text-sm font-bold ${
                        isCurrentlyTyping || isDone ? 'text-[#FF5247]' : 'text-slate-500'
                      }`}
                    >
                      {step.num}
                    </span>
                  </div>

                  {/* Step Title */}
                  <h3 className="font-syne text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-[#FF5247] transition-colors flex items-center gap-2">
                    {step.title}
                    {isCurrentlyTyping && (
                      <span className="w-2 h-2 rounded-full bg-[#FF3B30] animate-ping" />
                    )}
                  </h3>

                  {/* Step Description with Luxurious Monospace Code Font Styling & Glowing Red Cursor */}
                  <div className="font-mono text-xs text-slate-300 leading-relaxed tracking-tight min-h-[65px] relative p-3 rounded-xl bg-[#09090D]/80 border border-white/10 w-full group-hover:border-[#FF3B30]/40 transition-colors">
                    <span className="text-[#FF5247] font-bold mr-1">&gt;</span>
                    <span className="text-slate-200">{typedTexts[index]}</span>
                    {isCurrentlyTyping && (
                      <span className="inline-block w-2 h-4 bg-[#FF3B30] ml-1 animate-pulse shadow-[0_0_8px_#FF3B30] align-middle" />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
