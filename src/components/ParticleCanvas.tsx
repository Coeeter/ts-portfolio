import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  radius: number;
  color: string;
  vx: number;
  vy: number;
}

type ParticleCanvasProps = {
  className?: string;
};

export default function ParticleCanvas({ className }: ParticleCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  if (typeof window != 'undefined')
    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      const width = (canvas.width = window.innerWidth);
      const height = (canvas.height = window.innerHeight);
      const maxParticles = width / 5;
      const minRadius = 1;
      const maxRadius = 5;
      const minSpeed = -2;
      const maxSpeed = 2;
      const colors = ['#4c1d95', '#7f1d1d'];
      const mouseRadius = 100;
      const particles: Particle[] = [];
      const mouse: { x?: number; y?: number } = {};

      const createParticles = () => {
        for (let i = 0; i < maxParticles; i++) {
          particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * (maxRadius - minRadius) + minRadius,
            color: colors[Math.floor(Math.random() * colors.length)],
            vx: Math.random() * (maxSpeed - minSpeed) + minSpeed,
            vy: Math.random() * (maxSpeed - minSpeed) + minSpeed,
          });
        }
      };

      const drawParticles = (ctx: CanvasRenderingContext2D) => {
        particles.forEach(particle => {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.fill();
        });
      };

      const connectParticles = (ctx: CanvasRenderingContext2D) => {
        for (let i = 0; i < particles.length; i++) {
          for (let j = i; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 100) {
              ctx.beginPath();
              ctx.strokeStyle = particles[i].color;
              ctx.lineWidth = 0.5;
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }
      };

      const updateParticles = () => {
        particles.forEach(particle => {
          particle.x += particle.vx;
          particle.y += particle.vy;
          if (mouse.x && mouse.y) {
            const dx = particle.x - mouse.x;
            const dy = particle.y - mouse.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < mouseRadius) {
              particle.vx = (dx / distance) * maxSpeed;
              particle.vy = (dy / distance) * maxSpeed;
            }
          }
          if (particle.x <= 0 || particle.x >= width) {
            particle.vx *= -1;
          }
          if (particle.y <= 0 || particle.y >= height) {
            particle.vy *= -1;
          }
        });
      };

      let animationFrameId: number;

      const draw = (ctx: CanvasRenderingContext2D) => {
        ctx.clearRect(0, 0, width, height);
        updateParticles();
        drawParticles(ctx);
        connectParticles(ctx);
        animationFrameId = requestAnimationFrame(() => draw(ctx));
      };

      const onMouseMove = (e: MouseEvent) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      };

      createParticles();
      draw(ctx);
      window.addEventListener('mousemove', onMouseMove);
      return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener('mousemove', onMouseMove);
      };
    }, [window.innerWidth, window.innerHeight]);

  return <canvas ref={canvasRef} className={className} />;
}
