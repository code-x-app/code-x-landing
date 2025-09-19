'use client';

import { motion } from 'framer-motion';

interface CyberSpiderProps {
  className?: string;
  animate?: boolean;
}

export const CyberSpider = ({ className = "w-16 h-16", animate = true }: CyberSpiderProps) => (
  <motion.div
    className={className}
    animate={animate ? {
      rotate: [0, 360],
      scale: [1, 1.1, 1]
    } : {}}
    transition={{
      rotate: { duration: 20, repeat: Infinity, ease: "linear" },
      scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
    }}
  >
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <defs>
        <radialGradient id="spiderGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00ffff" />
          <stop offset="100%" stopColor="#ff00ff" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Spider Web */}
      <g stroke="url(#spiderGradient)" strokeWidth="0.5" fill="none" filter="url(#glow)">
        {/* Radial web lines */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <line
            key={i}
            x1="50"
            y1="50"
            x2={50 + 40 * Math.cos((angle * Math.PI) / 180)}
            y2={50 + 40 * Math.sin((angle * Math.PI) / 180)}
            opacity="0.6"
          />
        ))}
        
        {/* Concentric web circles */}
        {[15, 25, 35].map((r, i) => (
          <circle
            key={i}
            cx="50"
            cy="50"
            r={r}
            opacity="0.4"
          />
        ))}
      </g>
      
      {/* Spider Body */}
      <g fill="url(#spiderGradient)" filter="url(#glow)">
        <ellipse cx="50" cy="45" rx="8" ry="12" />
        <ellipse cx="50" cy="55" rx="6" ry="8" />
        
        {/* Spider legs */}
        {[-1, 1].map((side) =>
          [0, 1, 2, 3].map((i) => (
            <g key={`${side}-${i}`}>
              <line
                x1="50"
                y1="48"
                x2={50 + side * (12 + i * 3)}
                y2={35 + i * 8}
                stroke="url(#spiderGradient)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <line
                x1={50 + side * (12 + i * 3)}
                y1={35 + i * 8}
                x2={50 + side * (18 + i * 4)}
                y2={30 + i * 10}
                stroke="url(#spiderGradient)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </g>
          ))
        )}
        
        {/* Eyes */}
        <circle cx="47" cy="42" r="1.5" fill="#00ffff" />
        <circle cx="53" cy="42" r="1.5" fill="#00ffff" />
      </g>
    </svg>
  </motion.div>
);
