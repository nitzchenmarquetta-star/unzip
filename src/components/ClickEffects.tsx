import { useEffect, useRef, useCallback } from 'react';

interface Ripple {
  x: number;
  y: number;
  size: number;
  opacity: number;
  color: string;
  id: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  rotation: number;
  rotationSpeed: number;
  id: number;
}

export function ClickEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const ripplesRef = useRef<Ripple[]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);
  const nextIdRef = useRef(0);
  const canvasSizeRef = useRef({ width: 0, height: 0 });

  const createRipple = useCallback((x: number, y: number) => {
    const colors = ['#ec4899', '#a855f7', '#f472b6', '#c084fc', '#fb7185'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    ripplesRef.current.push({
      x,
      y,
      size: 0,
      opacity: 0.6,
      color,
      id: nextIdRef.current++
    });
  }, []);

  const createParticles = useCallback((x: number, y: number) => {
    const colors = ['#ec4899', '#a855f7', '#f472b6', '#ffb7c5', '#ddd6fe'];
    const particleCount = 8 + Math.floor(Math.random() * 6);
    
    for (let i = 0; i < particleCount; i++) {
      const angle = (Math.PI * 2 * i) / particleCount + Math.random() * 0.5;
      const speed = 2 + Math.random() * 3;
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      particlesRef.current.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: 3 + Math.random() * 5,
        opacity: 0.8 + Math.random() * 0.2,
        color,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.3,
        id: nextIdRef.current++
      });
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctxRef.current = ctx;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      canvasSizeRef.current = { width: canvas.width, height: canvas.height };
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Handle click events
    const handleClick = (e: MouseEvent) => {
      // Don't create effects if clicking on interactive elements
      const target = e.target as HTMLElement;
      if (target.closest('button') || target.closest('a') || target.closest('input')) {
        createRipple(e.clientX, e.clientY);
        return;
      }
      
      createRipple(e.clientX, e.clientY);
      createParticles(e.clientX, e.clientY);
    };

    document.addEventListener('click', handleClick);

    function drawPetal(context: CanvasRenderingContext2D, particle: Particle) {
      context.save();
      context.translate(particle.x, particle.y);
      context.rotate(particle.rotation);
      context.globalAlpha = particle.opacity;
      
      context.fillStyle = particle.color;
      context.beginPath();
      
      // Draw small petal shape
      const s = particle.size;
      context.moveTo(0, -s);
      context.bezierCurveTo(s * 0.5, -s * 0.8, s, -s * 0.3, 0, s);
      context.bezierCurveTo(-s, -s * 0.3, -s * 0.5, -s * 0.8, 0, -s);
      context.closePath();
      context.fill();
      
      context.restore();
    }

    function animate() {
      const currentCtx = ctxRef.current;
      const { width, height } = canvasSizeRef.current;
      
      if (!currentCtx || width === 0 || height === 0) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      currentCtx.clearRect(0, 0, width, height);

      // Update and draw ripples
      ripplesRef.current = ripplesRef.current.filter(ripple => {
        ripple.size += 3;
        ripple.opacity -= 0.015;

        if (ripple.opacity <= 0) {
          return false;
        }

        currentCtx.save();
        currentCtx.beginPath();
        currentCtx.arc(ripple.x, ripple.y, ripple.size, 0, Math.PI * 2);
        currentCtx.strokeStyle = ripple.color;
        currentCtx.globalAlpha = ripple.opacity;
        currentCtx.lineWidth = 2;
        currentCtx.stroke();
        currentCtx.restore();

        return true;
      });

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vy += 0.15; // Gravity
        particle.vx *= 0.98; // Air resistance
        particle.vy *= 0.98;
        particle.rotation += particle.rotationSpeed;
        particle.opacity -= 0.012;
        particle.size *= 0.985;

        if (particle.opacity <= 0 || particle.size < 0.5) {
          return false;
        }

        drawPetal(currentCtx, particle);
        return true;
      });

      animationRef.current = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationRef.current);
    };
  }, [createRipple, createParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[100]"
      style={{ opacity: 1 }}
    />
  );
}
