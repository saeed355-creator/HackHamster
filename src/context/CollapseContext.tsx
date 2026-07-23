import React, { createContext, useContext, useState } from 'react';
import confetti from 'canvas-confetti';

interface CollapseContextType {
  isCollapsed: boolean;
  collapseCountdown: number;
  triggerCollapse: () => void;
}

const CollapseContext = createContext<CollapseContextType>({
  isCollapsed: false,
  collapseCountdown: 0,
  triggerCollapse: () => {},
});

export const CollapseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [collapseCountdown, setCollapseCountdown] = useState(0);

  const triggerCollapse = () => {
    if (isCollapsed) return;

    setIsCollapsed(true);
    setCollapseCountdown(3.5);

    // Initial implosion confetti blast
    confetti({
      particleCount: 120,
      spread: 100,
      origin: { y: 0.5 },
      colors: ['#FF3B30', '#E11D48', '#F59E0B', '#00F0FF', '#FFFFFF'],
    });

    // Countdown interval
    const interval = setInterval(() => {
      setCollapseCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Reassemble UI after 3.5 seconds
    setTimeout(() => {
      setIsCollapsed(false);
      clearInterval(interval);
      // Reassembly explosion confetti
      confetti({
        particleCount: 150,
        spread: 120,
        origin: { y: 0.4 },
        colors: ['#FF3B30', '#22C55E', '#F59E0B', '#FFFFFF'],
      });
    }, 3500);
  };

  return (
    <CollapseContext.Provider value={{ isCollapsed, collapseCountdown, triggerCollapse }}>
      {children}
    </CollapseContext.Provider>
  );
};

export const useCollapse = () => useContext(CollapseContext);
