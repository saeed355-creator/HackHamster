import React, { useEffect, useRef } from 'react';

interface Spark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  decay: number;
  length: number;
}

export const SteelCuttingCursor: React.FC = () => {
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

    // Steel cutting molten spark color palette (White hot core to fiery orange/red)
    const sparkColors = [
      '#FFFFFF', // White hot core
      '#FFF3A0', // Electric yellow
      '#FF9F1C', // Molten gold
      '#FF3B30', // Plasma neon red
      '#E11D48'  // Deep fiery red
    ];

    const sparks: Spark[] = [];
    const trailPoints: { x: number; y: number; alpha: number }[] = [];

    // Helper to spawn steel cutting sparks
    const spawnSteelSparks = (x: number, y: number, count: number = 6, isClick: boolean = false) => {
      const num = isClick ? 40 : count;

      for (let i = 0; i < num; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = isClick ? Math.random() * 9 + 3 : Math.random() * 4.5 + 1.2;
        const color = sparkColors[Math.floor(Math.random() * sparkColors.length)];

        sparks.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - (isClick ? 1.5 : 0.5),
          size: Math.random() * 2.5 + 1,
          color,
          alpha: 1,
          decay: Math.random() * 0.04 + 0.02,
          length: Math.random() * 12 + 4,
        });
      }
    };

    let lastX = 0;
    let lastY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Add fiery cursor trail point
      trailPoints.push({ x: e.clientX, y: e.clientY, alpha: 1 });
      if (trailPoints.length > 20) {
        trailPoints.shift();
      }

      if (dist > 4) {
        spawnSteelSparks(e.clientX, e.clientY, 4, false);
        lastX = e.clientX;
        lastY = e.clientY;
      }
    };

    const handleClick = (e: MouseEvent) => {
      spawnSteelSparks(e.clientX, e.clientY, 45, true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    // Render 60FPS Frame
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw Fiery Laser Fire Trail Line along cursor path
      if (trailPoints.length > 1) {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(trailPoints[0].x, trailPoints[0].y);

        for (let i = 1; i < trailPoints.length; i++) {
          const p = trailPoints[i];
          ctx.lineTo(p.x, p.y);
          p.alpha -= 0.04;
        }

        ctx.strokeStyle = 'rgba(255, 59, 48, 0.7)';
        ctx.lineWidth = 3;
        ctx.shadowColor = '#FF3B30';
        ctx.shadowBlur = 15;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.stroke();

        // Inner White Hot Fire Core Line
        ctx.beginPath();
        ctx.moveTo(trailPoints[0].x, trailPoints[0].y);
        for (let i = 1; i < trailPoints.length; i++) {
          ctx.lineTo(trailPoints[i].x, trailPoints[i].y);
        }
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.lineWidth = 1.2;
        ctx.shadowColor = '#FFFFFF';
        ctx.shadowBlur = 8;
        ctx.stroke();
        ctx.restore();

        // Remove faded trail points
        while (trailPoints.length > 0 && trailPoints[0].alpha <= 0) {
          trailPoints.shift();
        }
      }

      // 2. Render Steel Cutting Molten Sparks
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];

        s.x += s.vx;
        s.y += s.vy;
        s.vy += 0.12; // Gravity effect on sparks
        s.alpha -= s.decay;

        if (s.alpha <= 0) {
          sparks.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0, s.alpha);

        // Draw elongated spark line along motion vector
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - s.vx * (s.length / 5), s.y - s.vy * (s.length / 5));
        ctx.strokeStyle = s.color;
        ctx.lineWidth = s.size;
        ctx.shadowColor = s.color;
        ctx.shadowBlur = 10;
        ctx.stroke();

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
