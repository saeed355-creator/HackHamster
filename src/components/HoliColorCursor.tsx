import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  decay: number;
  rotation: number;
  vRot: number;
}

export const HoliColorCursor: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Vibrant Holi Color Palette
    const holiColors = [
      '#FF3B30', // Neon Red
      '#FF007F', // Holi Pink / Magenta
      '#00F0FF', // Holi Electric Cyan
      '#FFD700', // Holi Yellow / Gulal Gold
      '#9D00FF', // Deep Holi Purple
      '#00FF66', // Holi Spring Green
      '#FF6B00'  // Holi Orange
    ];

    const particles: Particle[] = [];

    // Helper to spawn a burst of Holi Gulal color powder balls
    const spawnHoliColorBurst = (x: number, y: number, count: number = 8, isClick: boolean = false) => {
      const num = isClick ? 35 : count;

      for (let i = 0; i < num; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = isClick ? Math.random() * 8 + 2 : Math.random() * 3.5 + 0.8;
        const color = holiColors[Math.floor(Math.random() * holiColors.length)];

        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - (isClick ? 1.5 : 0),
          size: isClick ? Math.random() * 7 + 3 : Math.random() * 4.5 + 1.5,
          color,
          alpha: 1,
          decay: isClick ? Math.random() * 0.02 + 0.015 : Math.random() * 0.035 + 0.02,
          rotation: Math.random() * Math.PI * 2,
          vRot: (Math.random() - 0.5) * 0.2,
        });
      }
    };

    // Track Cursor Motion
    let lastX = 0;
    let lastY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > 6) {
        spawnHoliColorBurst(e.clientX, e.clientY, 5, false);
        lastX = e.clientX;
        lastY = e.clientY;
      }
    };

    // Click to Throw Holi Color Ball Burst
    const handleClick = (e: MouseEvent) => {
      spawnHoliColorBurst(e.clientX, e.clientY, 35, true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.08; // Gravity simulation
        p.alpha -= p.decay;
        p.rotation += p.vRot;

        if (p.alpha <= 0 || p.size <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = Math.max(0, p.alpha);

        // Draw glowing Holi color particle dot
        ctx.beginPath();
        ctx.arc(0, 0, Math.max(0.5, p.size), 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = p.size * 3;
        ctx.fill();

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50 w-full h-full"
    />
  );
};
