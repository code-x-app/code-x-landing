import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'deep-space': '#0a0a0f',
        'void-black': '#000000',
        'neon-cyan': '#4dd0e1',
        'neon-magenta': '#ba68c8',
        'electric-blue': '#42a5f5',
        'cyber-purple': '#9575cd',
        'matrix-green': '#66bb6a',
        'warning-amber': '#ffb74d',
      },
      fontFamily: {
        'orbitron': ['var(--font-orbitron)', 'monospace'],
        'inter': ['var(--font-inter)', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { 
            textShadow: '0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff',
            filter: 'brightness(1)'
          },
          '100%': { 
            textShadow: '0 0 20px #00ffff, 0 0 30px #00ffff, 0 0 40px #00ffff',
            filter: 'brightness(1.2)'
          },
        },
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(135deg, #00ffff, #ff00ff)',
        'space-gradient': 'linear-gradient(180deg, #000000, #0a0a0f)',
        'web-gradient': 'radial-gradient(circle, rgba(0,255,255,0.1) 0%, rgba(255,0,255,0.05) 50%, transparent 100%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
