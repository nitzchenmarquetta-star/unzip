import { useEffect, useRef } from 'react';

interface Petal {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  swayOffset: number;
  swaySpeed: number;
}

export function SakuraBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const petalsRef = useRef<Petal[]>([]);
  const animationRef = useRef<number>(0);
  const canvasSizeRef = useRef({ width: 0, height: 0 });

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

    // Initialize petals
    const petalCount = 25;
    petalsRef.current = Array.from({ length: petalCount }, () => createPetal(canvas.width, canvas.height));

    function createPetal(width: number, height: number): Petal {
      return {
        x: Math.random() * width,
        y: Math.random() * height - height,
        size: Math.random() * 6 + 3,
        speedY: Math.random() * 0.8 + 0.3,
        speedX: Math.random() * 0.4 - 0.2,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.015,
        opacity: Math.random() * 0.4 + 0.2,
        swayOffset: Math.random() * Math.PI * 2,
        swaySpeed: Math.random() * 0.015 + 0.008
      };
    }

    function drawPetal(context: CanvasRenderingContext2D, petal: Petal) {
      context.save();
      context.translate(petal.x, petal.y);
      context.rotate(petal.rotation);
      context.globalAlpha = petal.opacity;

      // Draw cherry blossom petal shape
      const gradient = context.createRadialGradient(0, 0, 0, 0, 0, petal.size);
      gradient.addColorStop(0, '#ffb7c5');
      gradient.addColorStop(0.5, '#ffc0cb');
      gradient.addColorStop(1, 'rgba(255, 183, 197, 0.2)');

      context.fillStyle = gradient;
      context.beginPath();
      
      // Petal shape - heart-like curve
      const s = petal.size;
      context.moveTo(0, -s);
      context.bezierCurveTo(s * 0.5, -s * 0.8, s, -s * 0.3, 0, s);
      context.bezierCurveTo(-s, -s * 0.3, -s * 0.5, -s * 0.8, 0, -s);
      
      context.closePath();
      context.fill();

      // Add subtle center detail
      context.fillStyle = 'rgba(255, 255, 255, 0.3)';
      context.beginPath();
      context.ellipse(0, 0, s * 0.12, s * 0.25, 0, 0, Math.PI * 2);
      context.fill();

      context.restore();
    }

    let frameCount = 0;
    function animate() {
      frameCount++;
      const currentCtx = ctxRef.current;
      const { width, height } = canvasSizeRef.current;
      
      if (!currentCtx || width === 0 || height === 0) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      // Render every 3rd frame for performance (20fps)
      if (frameCount % 3 === 0) {
        currentCtx.clearRect(0, 0, width, height);

        petalsRef.current.forEach((petal, index) => {
          // Update position with swaying motion
          const time = Date.now() * 0.001;
          const sway = Math.sin(time * petal.swaySpeed + petal.swayOffset) * 0.4;
          
          petal.y += petal.speedY;
          petal.x += petal.speedX + sway * 0.2;
          petal.rotation += petal.rotationSpeed;

          // Reset petal when it goes off screen
          if (petal.y > height + petal.size) {
            petal.y = -petal.size;
            petal.x = Math.random() * width;
          }
          if (petal.x > width + petal.size) {
            petal.x = -petal.size;
          } else if (petal.x < -petal.size) {
            petal.x = width + petal.size;
          }

          // Stagger petal rendering for performance
          if (frameCount % (4 + index % 4) === 0) {
            drawPetal(currentCtx, petal);
          }
        });
      }

      animationRef.current = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{ opacity: 0.7 }}
    />
  );
}
