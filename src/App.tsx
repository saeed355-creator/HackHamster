import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedSprintsSection } from './components/FeaturedSprintsSection';
import { AggregatorSection } from './components/AggregatorSection';
import { HowItWorks } from './components/HowItWorks';
import { LeaderboardSection } from './components/LeaderboardSection';
import { VaultAndBulletinSection } from './components/VaultAndBulletinSection';
import { EmailDigest } from './components/EmailDigest';
import { Footer } from './components/Footer';
import { SignInModal } from './components/SignInModal';

export function App() {
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  useEffect(() => {
    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#09090B] text-slate-100 font-sans selection:bg-[#FF3B30] selection:text-white relative overflow-x-hidden">
      
      {/* Header Navigation Bar */}
      <Navbar onOpenSignIn={() => setIsSignInOpen(true)} />

      {/* 1. Hero Section */}
      <Hero onOpenSignIn={() => setIsSignInOpen(true)} />

      {/* 2. Featured Sprints (Curated National Sprints) */}
      <FeaturedSprintsSection />

      {/* 3. Universal Hackathon Aggregator */}
      <AggregatorSection />

      {/* 4. How It Works (4-Step Pipeline) */}
      <HowItWorks />

      {/* 5. College Leaderboard */}
      <LeaderboardSection />

      {/* 6. Digital Credentials Vault & College Tech Bulletin */}
      <VaultAndBulletinSection />

      {/* 7. Direct Email Digest */}
      <EmailDigest />

      {/* 8. Footer */}
      <Footer />

      {/* Interactive Sign In Modal Dialog Page */}
      <SignInModal isOpen={isSignInOpen} onClose={() => setIsSignInOpen(false)} />

    </div>
  );
}

export default App;
