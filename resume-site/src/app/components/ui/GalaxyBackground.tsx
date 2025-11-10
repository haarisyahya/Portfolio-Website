'use client';

import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  baseX: number; // Original x position
  baseY: number; // Original y position
  radius: number;
  opacity: number;
  twinkleSpeed: number;
  twinkleOffset: number;
  waveSpeed: number; // Speed of wave motion
  waveAmplitude: number; // Amplitude of wave motion
  wavePhase: number; // Phase offset for wave
}

export default function GalaxyBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set initial canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create stars with wave motion properties
    const starCount = 300;
    const stars: Star[] = [];

    for (let i = 0; i < starCount; i++) {
      const baseX = Math.random() * canvas.width;
      const baseY = Math.random() * canvas.height;
      stars.push({
        x: baseX,
        y: baseY,
        baseX: baseX,
        baseY: baseY,
        radius: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.01,
        twinkleOffset: Math.random() * Math.PI * 2,
        waveSpeed: Math.random() * 0.0005 + 0.0003, // Varying wave speeds
        waveAmplitude: Math.random() * 30 + 15, // Wave amplitude in pixels
        wavePhase: Math.random() * Math.PI * 2, // Random phase offset
      });
    }

    // Create larger "bright" stars with more pronounced wave motion
    const brightStars: Star[] = [];
    for (let i = 0; i < 20; i++) {
      const baseX = Math.random() * canvas.width;
      const baseY = Math.random() * canvas.height;
      brightStars.push({
        x: baseX,
        y: baseY,
        baseX: baseX,
        baseY: baseY,
        radius: Math.random() * 2 + 1.5,
        opacity: Math.random() * 0.5 + 0.5,
        twinkleSpeed: Math.random() * 0.03 + 0.02,
        twinkleOffset: Math.random() * Math.PI * 2,
        waveSpeed: Math.random() * 0.0006 + 0.0004,
        waveAmplitude: Math.random() * 40 + 20,
        wavePhase: Math.random() * Math.PI * 2,
      });
    }

    // Set up resize handler (after stars are created)
    const resize = () => {
      const oldWidth = canvas.width;
      const oldHeight = canvas.height;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Scale star positions proportionally on resize
      if (oldWidth > 0 && oldHeight > 0) {
        const scaleX = canvas.width / oldWidth;
        const scaleY = canvas.height / oldHeight;
        
        stars.forEach((star) => {
          star.baseX *= scaleX;
          star.baseY *= scaleY;
          star.x = star.baseX;
          star.y = star.baseY;
        });
        
        brightStars.forEach((star) => {
          star.baseX *= scaleX;
          star.baseY *= scaleY;
          star.x = star.baseX;
          star.y = star.baseY;
        });
      } else {
        // Initial setup - reposition stars for new canvas size
        stars.forEach((star) => {
          star.baseX = Math.random() * canvas.width;
          star.baseY = Math.random() * canvas.height;
          star.x = star.baseX;
          star.y = star.baseY;
        });
        
        brightStars.forEach((star) => {
          star.baseX = Math.random() * canvas.width;
          star.baseY = Math.random() * canvas.height;
          star.x = star.baseX;
          star.y = star.baseY;
        });
      }
    };
    window.addEventListener('resize', resize);

    let time = 0;

    // Draw galaxy/milky way gradient with flowing waves
    const drawGalaxy = () => {
      // Create a flowing wave effect for the gradient
      const waveOffsetX = Math.sin(time * 0.0002) * canvas.width * 0.1;
      const waveOffsetY = Math.cos(time * 0.00015) * canvas.height * 0.1;

      const gradient = ctx.createLinearGradient(
        canvas.width * 0.3 + waveOffsetX,
        0 + waveOffsetY,
        canvas.width * 0.7 + waveOffsetX,
        canvas.height + waveOffsetY
      );

      // Create nebula-like colors (blues, purples, whites) with flowing opacity
      const opacityWave = 0.3 + Math.sin(time * 0.0003) * 0.1;
      gradient.addColorStop(0, 'rgba(30, 30, 60, 0)');
      gradient.addColorStop(0.2, `rgba(60, 40, 100, ${opacityWave * 0.8})`);
      gradient.addColorStop(0.4, `rgba(100, 80, 150, ${opacityWave})`);
      gradient.addColorStop(0.5, `rgba(150, 120, 200, ${opacityWave * 1.2})`);
      gradient.addColorStop(0.6, `rgba(200, 180, 220, ${opacityWave})`);
      gradient.addColorStop(0.8, `rgba(100, 80, 150, ${opacityWave * 0.8})`);
      gradient.addColorStop(1, 'rgba(30, 30, 60, 0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add flowing, water-like nebula clouds with wave motion
      const centerX = canvas.width * 0.5;
      const centerY = canvas.height * 0.4;
      const radius = Math.min(canvas.width, canvas.height) * 0.6;

      for (let i = 0; i < 5; i++) {
        // Circular motion with wave-like vertical displacement
        const angle = (time * 0.0001 + i * 1.2) % (Math.PI * 2);
        const verticalWave = Math.sin(time * 0.00025 + i * 2) * 50;
        const horizontalWave = Math.cos(time * 0.0002 + i * 1.5) * 30;
        
        const cloudX = centerX + Math.cos(angle) * radius * 0.3 + horizontalWave;
        const cloudY = centerY + Math.sin(angle) * radius * 0.2 + verticalWave;
        
        // Pulsing radius with wave-like breathing effect
        const radiusWave = Math.sin(time * 0.0002 + i) * 0.15;
        const cloudRadius = radius * (0.3 + radiusWave);

        // Flowing cloud gradient with wave-like opacity
        const cloudOpacity = 0.2 + Math.sin(time * 0.0003 + i) * 0.1 + Math.cos(time * 0.0004 + i * 1.3) * 0.05;
        
        const cloudGradient = ctx.createRadialGradient(
          cloudX,
          cloudY,
          0,
          cloudX,
          cloudY,
          cloudRadius
        );
        cloudGradient.addColorStop(0, `rgba(120, 100, 180, ${cloudOpacity})`);
        cloudGradient.addColorStop(0.5, `rgba(80, 60, 140, ${cloudOpacity * 0.75})`);
        cloudGradient.addColorStop(1, 'rgba(40, 30, 80, 0)');

        ctx.fillStyle = cloudGradient;
        ctx.beginPath();
        ctx.arc(cloudX, cloudY, cloudRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Add additional flowing wave layers for depth
      for (let i = 0; i < 3; i++) {
        const waveY = canvas.height * (0.3 + i * 0.2) + Math.sin(time * 0.0003 + i) * 40;
        const waveGradient = ctx.createLinearGradient(0, waveY - 100, 0, waveY + 100);
        const waveOpacity = 0.05 + Math.sin(time * 0.0004 + i) * 0.03;
        
        waveGradient.addColorStop(0, 'rgba(80, 60, 140, 0)');
        waveGradient.addColorStop(0.5, `rgba(100, 80, 150, ${waveOpacity})`);
        waveGradient.addColorStop(1, 'rgba(80, 60, 140, 0)');
        
        ctx.fillStyle = waveGradient;
        ctx.fillRect(0, waveY - 100, canvas.width, 200);
      }
    };

    // Draw stars with flowing wave motion
    const drawStars = () => {
      // Update star positions with wave-like motion (like floating on water)
      stars.forEach((star) => {
        /* Horizontal wave motion (like water waves)
        const waveX = Math.sin(time * star.waveSpeed + star.baseY * 0.01 + star.wavePhase) * star.waveAmplitude;
        // Vertical wave motion (vertical displacement)
        const waveY = Math.cos(time * star.waveSpeed * 0.8 + star.baseX * 0.01 + star.wavePhase) * star.waveAmplitude * 0.6;
        
        // Apply wave displacement
        star.x = star.baseX + waveX;
        star.y = star.baseY + waveY;*/

        // Twinkling effect
        const twinkle = Math.sin(time * star.twinkleSpeed + star.twinkleOffset) * 0.3 + 0.7;
        const currentOpacity = star.opacity * twinkle;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity})`;
        ctx.fill();

        // Add glow for some stars
        if (star.radius > 1) {
          const glowGradient = ctx.createRadialGradient(
            star.x,
            star.y,
            0,
            star.x,
            star.y,
            star.radius * 3
          );
          glowGradient.addColorStop(0, `rgba(255, 255, 255, ${currentOpacity * 0.3})`);
          glowGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

          ctx.fillStyle = glowGradient;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius * 3, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Draw bright stars with cross patterns and wave motion
      brightStars.forEach((star) => {
        // More pronounced wave motion for bright stars
        const waveX = Math.sin(time * star.waveSpeed + star.baseY * 0.008 + star.wavePhase) * star.waveAmplitude;
        const waveY = Math.cos(time * star.waveSpeed * 0.7 + star.baseX * 0.008 + star.wavePhase) * star.waveAmplitude * 0.7;
        
        star.x = star.baseX + waveX;
        star.y = star.baseY + waveY;

        const twinkle = Math.sin(time * star.twinkleSpeed + star.twinkleOffset) * 0.4 + 0.6;
        const currentOpacity = star.opacity * twinkle;

        // Main star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity})`;
        ctx.fill();

        // Cross pattern (rotated slightly with wave motion)
        const rotation = Math.sin(time * star.waveSpeed * 0.5) * 0.1;
        ctx.save();
        ctx.translate(star.x, star.y);
        ctx.rotate(rotation);
        
        ctx.strokeStyle = `rgba(200, 200, 255, ${currentOpacity * 0.6})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(-star.radius * 2, 0);
        ctx.lineTo(star.radius * 2, 0);
        ctx.moveTo(0, -star.radius * 2);
        ctx.lineTo(0, star.radius * 2);
        ctx.stroke();
        ctx.restore();

        // Glow
        const glowGradient = ctx.createRadialGradient(
          star.x,
          star.y,
          0,
          star.x,
          star.y,
          star.radius * 4
        );
        glowGradient.addColorStop(0, `rgba(200, 200, 255, ${currentOpacity * 0.4})`);
        glowGradient.addColorStop(0.5, `rgba(150, 150, 255, ${currentOpacity * 0.2})`);
        glowGradient.addColorStop(1, 'rgba(100, 100, 200, 0)');

        ctx.fillStyle = glowGradient;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius * 4, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    // Animation loop
    const animate = () => {
      // Clear with dark blue-purple base
      ctx.fillStyle = '#0a0a1a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw galaxy
      drawGalaxy();

      // Draw stars
      drawStars();

      time += 16; // ~60fps

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ background: '#0a0a1a' }}
    />
  );
}

