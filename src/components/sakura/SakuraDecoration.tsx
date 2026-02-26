import { useEffect, useRef } from 'react';

export function SakuraBranch({ className = '', position = 'left' }: { className?: string; position?: 'left' | 'right' | 'top' }) {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full"
        style={{ 
          transform: position === 'right' ? 'scaleX(-1)' : undefined,
          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
        }}
      >
        <defs>
          <linearGradient id={`branchGradient-${position}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B4513" />
            <stop offset="100%" stopColor="#654321" />
          </linearGradient>
          <radialGradient id={`flowerGradient-${position}`} cx="30%" cy="30%">
            <stop offset="0%" stopColor="#FFF0F5" />
            <stop offset="50%" stopColor="#FFB7C5" />
            <stop offset="100%" stopColor="#FF69B4" />
          </radialGradient>
        </defs>
        
        {/* Branch */}
        <path
          d="M10,100 Q50,80 80,90 T140,70 T180,40"
          fill="none"
          stroke={`url(#branchGradient-${position})`}
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M80,90 Q90,110 85,130"
          fill="none"
          stroke={`url(#branchGradient-${position})`}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M140,70 Q150,90 145,110"
          fill="none"
          stroke={`url(#branchGradient-${position})`}
          strokeWidth="2"
          strokeLinecap="round"
        />
        
        {/* Cherry Blossoms */}
        <g className="sakura-flower">
          <circle cx="80" cy="90" r="12" fill={`url(#flowerGradient-${position})`} opacity="0.9" />
          <circle cx="75" cy="85" r="8" fill={`url(#flowerGradient-${position})`} opacity="0.7" />
          <circle cx="85" cy="88" r="7" fill={`url(#flowerGradient-${position})`} opacity="0.6" />
        </g>
        
        <g className="sakura-flower" style={{ animationDelay: '0.5s' }}>
          <circle cx="140" cy="70" r="14" fill={`url(#flowerGradient-${position})`} opacity="0.9" />
          <circle cx="135" cy="65" r="9" fill={`url(#flowerGradient-${position})`} opacity="0.7" />
          <circle cx="145" cy="68" r="8" fill={`url(#flowerGradient-${position})`} opacity="0.6" />
        </g>
        
        <g className="sakura-flower" style={{ animationDelay: '1s' }}>
          <circle cx="180" cy="40" r="10" fill={`url(#flowerGradient-${position})`} opacity="0.9" />
          <circle cx="176" cy="36" r="6" fill={`url(#flowerGradient-${position})`} opacity="0.7" />
        </g>
        
        <g className="sakura-flower" style={{ animationDelay: '1.5s' }}>
          <circle cx="85" cy="130" r="11" fill={`url(#flowerGradient-${position})`} opacity="0.9" />
          <circle cx="80" cy="126" r="7" fill={`url(#flowerGradient-${position})`} opacity="0.7" />
        </g>
        
        <g className="sakura-flower" style={{ animationDelay: '2s' }}>
          <circle cx="145" cy="110" r="9" fill={`url(#flowerGradient-${position})`} opacity="0.9" />
        </g>
        
        {/* Small buds */}
        <circle cx="50" cy="85" r="4" fill="#FFB7C5" opacity="0.8" />
        <circle cx="110" cy="78" r="3" fill="#FFB7C5" opacity="0.7" />
        <circle cx="160" cy="55" r="3.5" fill="#FFB7C5" opacity="0.75" />
      </svg>
    </div>
  );
}

export function FloatingSakura({ count = 5 }: { count?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const petals = container.querySelectorAll('.floating-petal');
    petals.forEach((petal, index) => {
      const el = petal as HTMLElement;
      el.style.animationDelay = `${index * 0.8}s`;
      el.style.left = `${Math.random() * 100}%`;
    });
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="floating-petal absolute"
          style={{
            top: '-20px',
            animation: `floatDown ${8 + i * 2}s linear infinite`,
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            className="sakura-petal-svg"
            style={{
              animation: `sway ${3 + i * 0.5}s ease-in-out infinite alternate`,
            }}
          >
            <path
              d="M8,0 C10,3 12,6 8,16 C4,6 6,3 8,0"
              fill={`rgba(255, ${183 + i * 5}, ${197 + i * 3}, ${0.6 + i * 0.08})`}
            />
          </svg>
        </div>
      ))}
    </div>
  );
}

export function SakuraDivider() {
  return (
    <div className="relative h-8 my-6 overflow-hidden">
      <div className="absolute inset-0 flex items-center">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex gap-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              width="12"
              height="12"
              viewBox="0 0 16 16"
              className="sakura-divider-flower"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <path
                d="M8,0 C10,3 12,6 8,16 C4,6 6,3 8,0"
                fill={`rgba(255, ${183 - i * 10}, ${197 - i * 5}, 0.7)`}
              />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
}
