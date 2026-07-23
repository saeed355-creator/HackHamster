import React from 'react';

interface HamsterLogoProps {
  className?: string;
  size?: number;
}

export const HamsterLogo: React.FC<HamsterLogoProps> = ({ className = '', size = 40 }) => {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden transition-transform duration-300 ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_0_12px_rgba(255,59,48,0.6)]"
      >
        {/* Background White Squircle with Red Glow Stroke */}
        <rect
          x="4"
          y="4"
          width="92"
          height="92"
          rx="26"
          fill="#FFFFFF"
          stroke="#FF3B30"
          strokeWidth="3.5"
        />

        {/* Hamster Ears */}
        <circle cx="28" cy="30" r="8" fill="#262626" />
        <circle cx="72" cy="30" r="8" fill="#262626" />
        <circle cx="28" cy="30" r="5" fill="#FF5247" />
        <circle cx="72" cy="30" r="5" fill="#FF5247" />

        {/* Dark Ribbed Beanie Hat */}
        <path
          d="M24 38 C24 22, 76 22, 76 38 Z"
          fill="#262626"
        />
        {/* Beanie Fold/Band */}
        <rect x="22" y="34" width="56" height="10" rx="4" fill="#1C1C1C" stroke="#333333" strokeWidth="1" />
        {/* Beanie Red Accent Dots */}
        <circle cx="30" cy="39" r="2.5" fill="#FF3B30" />
        <circle cx="70" cy="39" r="2.5" fill="#FF3B30" />

        {/* Hamster Cheeks & Head Outline */}
        <path
          d="M 24 44 C 18 56, 18 72, 32 80 C 42 86, 58 86, 68 80 C 82 72, 82 56, 76 44 Z"
          fill="#FFFFFF"
          stroke="#1C1C1C"
          strokeWidth="3"
        />

        {/* Glasses Frame */}
        {/* Left Lens */}
        <rect x="29" y="49" width="18" height="13" rx="4" fill="none" stroke="#1C1C1C" strokeWidth="3" />
        {/* Right Lens */}
        <rect x="53" y="49" width="18" height="13" rx="4" fill="none" stroke="#1C1C1C" strokeWidth="3" />
        {/* Glasses Bridge */}
        <path d="M 47 54 L 53 54" stroke="#1C1C1C" strokeWidth="3" strokeLinecap="round" />

        {/* CONTINUOUS BLINKING EYES ANIMATION */}
        <g className="animate-eye-blink origin-[50px_55.5px]">
          {/* Left Eye Pupil + Light Glint */}
          <circle cx="38" cy="55.5" r="3" fill="#1C1C1C" />
          <circle cx="39" cy="54.5" r="1" fill="#FFFFFF" />

          {/* Right Eye Pupil + Light Glint */}
          <circle cx="62" cy="55.5" r="3" fill="#1C1C1C" />
          <circle cx="63" cy="54.5" r="1" fill="#FFFFFF" />
        </g>

        {/* Hamster Nose */}
        <ellipse cx="50" cy="65" rx="3.5" ry="2.5" fill="#1C1C1C" />

        {/* Mouth / Smile Lines */}
        <path d="M 43 68 Q 50 73 57 68" fill="none" stroke="#1C1C1C" strokeWidth="2.5" strokeLinecap="round" />
        
        {/* Happy Red Tongue */}
        <path d="M 46 70 Q 50 77 54 70 Z" fill="#FF3B30" />
      </svg>
    </div>
  );
};
