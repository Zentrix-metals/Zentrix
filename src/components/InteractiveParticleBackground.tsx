import React, { useEffect, useRef } from 'react';

export const InteractiveParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    let width =
      (canvas.width =
        canvas.parentElement?.clientWidth || window.innerWidth);

    let height =
      (canvas.height =
        canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;

      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particles representing subatomic particles / sensor nodes
    const particleCount = Math.min(Math.floor(width / 22), 55);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
      color: string;
    }> = [];

    const colors = ['#06b6d4', '#38bdf8', '#10b981', '#f59e0b'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.8 + 0.6,
        alpha: Math.random() * 0.5 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    let angle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Subtle radar rotation
      angle += 0.008;

      // One common origin for all four beams
      const centerX = width * 0.75;
      const centerY = height * 0.45;
      const radarRadius = Math.min(width, height) * 0.8;

      // Ambient radar glow — rendered once
      const gradient = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        radarRadius
      );

      gradient.addColorStop(0, 'rgba(6, 182, 212, 0.04)');
      gradient.addColorStop(0.7, 'rgba(6, 182, 212, 0.015)');
      gradient.addColorStop(1, 'rgba(6, 182, 212, 0)');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(
        centerX,
        centerY,
        radarRadius,
        0,
        Math.PI * 2
      );
      ctx.fill();

      // Four rotating beams sharing the same origin
      const beamAngles = [
        angle,
        angle + Math.PI / 2,
        angle + Math.PI,
        angle + (Math.PI * 3) / 2
      ];

      beamAngles.forEach((beamAngle) => {
        ctx.save();

        ctx.beginPath();
        ctx.moveTo(centerX, centerY);

        ctx.arc(
          centerX,
          centerY,
          radarRadius,
          beamAngle,
          beamAngle + 0.3
        );

        ctx.closePath();

        const sweepGrad = ctx.createRadialGradient(
          centerX,
          centerY,
          0,
          centerX,
          centerY,
          radarRadius
        );

        sweepGrad.addColorStop(
          0,
          'rgba(6, 182, 212, 0.15)'
        );

        sweepGrad.addColorStop(
          1,
          'rgba(6, 182, 212, 0)'
        );

        ctx.fillStyle = sweepGrad;
        ctx.fill();

        ctx.restore();
      });

      // Draw and connect particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(
          p.x,
          p.y,
          p.radius,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];

          const dx = p.x - p2.x;
          const dy = p.y - p2.y;

          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);

            ctx.strokeStyle = '#38bdf8';
            ctx.globalAlpha =
              (1 - dist / 110) * 0.12;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1.0;

      animationFrameId =
        requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener(
        'resize',
        handleResize
      );

      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none w-full h-full opacity-70"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};
