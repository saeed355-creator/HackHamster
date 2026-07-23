import React, { useEffect, useRef } from 'react';

export const HeroCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle node system
    const numParticles = Math.min(width > 768 ? 85 : 40, 95);
    interface Particle {
      x: number;
      y: number;
      z: number;
      size: number;
      color: string;
      alpha: number;
      pulse: number;
    }

    const particles: Particle[] = [];
    const radius = Math.min(width, height) * 0.35;
    const centerX = width / 2;
    const centerY = height / 2;

    for (let i = 0; i < numParticles; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = radius * (0.8 + Math.random() * 0.4);

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      const isRed = Math.random() > 0.35;

      particles.push({
        x,
        y,
        z,
        size: Math.random() * 2.2 + 1,
        color: isRed ? '#FF3B30' : '#FFFFFF',
        alpha: Math.random() * 0.6 + 0.4,
        pulse: Math.random() * Math.PI * 2,
      });
    }

    let targetRotationY = 0;
    let targetRotationX = 0;
    let currentRotationY = 0;
    let currentRotationX = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = (e.clientX - rect.left - width / 2) / width;
      const mouseY = (e.clientY - rect.top - height / 2) / height;
      targetRotationY = mouseX * 0.9;
      targetRotationX = -mouseY * 0.9;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let angleY = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth rotation dampening
      currentRotationY += (targetRotationY - currentRotationY) * 0.04;
      currentRotationX += (targetRotationX - currentRotationX) * 0.04;
      angleY += 0.0025;

      const rotY = angleY + currentRotationY;
      const rotX = currentRotationX;

      const sinY = Math.sin(rotY);
      const cosY = Math.cos(rotY);
      const sinX = Math.sin(rotX);
      const cosX = Math.cos(rotX);

      // Render outer glowing HUD rings
      ctx.save();
      ctx.translate(centerX, centerY);

      // Ring 1 (Horizontal Cyber Ring)
      ctx.beginPath();
      ctx.ellipse(0, 0, Math.max(1, radius * 1.18), Math.max(1, radius * 0.36), rotX * 0.5, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 59, 48, 0.18)';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([8, 12]);
      ctx.stroke();
      ctx.setLineDash([]);

      // Ring 2 (Vertical Orbit Ring)
      ctx.beginPath();
      ctx.ellipse(0, 0, Math.max(1, radius * 0.42), Math.max(1, radius * 1.22), rotY * 0.3, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.09)';
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.restore();

      // Transform and sort 3D particles by Z depth
      const projectedParticles = particles.map((p) => {
        p.pulse += 0.03;
        const currentAlpha = p.alpha + Math.sin(p.pulse) * 0.2;

        // Rotate around Y
        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.x * sinY + p.z * cosY;

        // Rotate around X
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = p.y * sinX + z1 * cosX;

        // Perspective projection
        const scale = 400 / Math.max(10, 400 + z2);
        const px = centerX + x1 * scale;
        const py = centerY + y2 * scale;

        return {
          px,
          py,
          scale,
          z: z2,
          size: Math.max(0.2, p.size * scale),
          color: p.color,
          alpha: Math.max(0.1, Math.min(1, currentAlpha * (scale > 0.8 ? 1 : scale))),
        };
      });

      projectedParticles.sort((a, b) => a.z - b.z);

      // Draw connecting lines between nearby points
      for (let i = 0; i < projectedParticles.length; i++) {
        for (let j = i + 1; j < projectedParticles.length; j++) {
          const p1 = projectedParticles[i];
          const p2 = projectedParticles[j];
          const dx = p1.px - p2.px;
          const dy = p1.py - p2.py;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 85) {
            const lineAlpha = (1 - dist / 85) * 0.22 * Math.min(p1.alpha, p2.alpha);
            ctx.beginPath();
            ctx.moveTo(p1.px, p1.py);
            ctx.lineTo(p2.px, p2.py);
            ctx.strokeStyle = `rgba(255, 59, 48, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Render individual 3D glowing nodes
      projectedParticles.forEach((p) => {
        if (p.size <= 0) return;
        ctx.beginPath();
        ctx.arc(p.px, p.py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color === '#FF3B30' ? `rgba(255, 59, 48, ${p.alpha})` : `rgba(255, 255, 255, ${p.alpha})`;
        ctx.fill();

        // Add soft glowing aura for bright red nodes
        if (p.color === '#FF3B30' && p.scale > 0.9) {
          ctx.beginPath();
          ctx.arc(p.px, p.py, p.size * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 59, 48, ${p.alpha * 0.3})`;
          ctx.fill();
        }
      });

      // Render Central Glowing Core HUD (Cyber Hamster Hologram Pulse)
      const corePulse = Math.sin(Date.now() * 0.002) * 10;
      const coreRadius = Math.max(1, radius * 0.6 + corePulse);
      const coreGradient = ctx.createRadialGradient(
        centerX, centerY, 5,
        centerX, centerY, coreRadius
      );
      coreGradient.addColorStop(0, 'rgba(255, 59, 48, 0.28)');
      coreGradient.addColorStop(0.5, 'rgba(255, 59, 48, 0.06)');
      coreGradient.addColorStop(1, 'transparent');

      ctx.beginPath();
      ctx.arc(centerX, centerY, coreRadius, 0, Math.PI * 2);
      ctx.fillStyle = coreGradient;
      ctx.fill();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none w-full h-full z-0 opacity-80"
    />
  );
};
