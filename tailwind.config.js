/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['"Outfit"', 'sans-serif'],
        heading: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        cyber: {
          base: '#06080F',
          surface: '#0B0F19',
          card: 'rgba(16, 22, 36, 0.72)',
          glass: 'rgba(255, 255, 255, 0.05)',
          border: 'rgba(255, 255, 255, 0.12)',
          primary: '#6366F1',
          primaryGlow: '#818CF8',
          cyan: '#06B6D4',
          emerald: '#10B981',
          amber: '#F59E0B',
          fuchsia: '#D946EF',
          rose: '#F43F5E'
        }
      },
      boxShadow: {
        'glass-sm': '0 4px 20px -2px rgba(0, 0, 0, 0.4), inset 0 1px 1px 0 rgba(255, 255, 255, 0.15)',
        'glass-md': '0 12px 36px -4px rgba(0, 0, 0, 0.55), inset 0 1px 2px 0 rgba(255, 255, 255, 0.2)',
        'glass-lg': '0 24px 60px -8px rgba(0, 0, 0, 0.7), inset 0 1px 2px 0 rgba(255, 255, 255, 0.25)',
        'skeuo-btn': '0 8px 16px -2px rgba(99, 102, 241, 0.4), inset 0 1px 1px 0 rgba(255, 255, 255, 0.4), inset 0 -2px 4px 0 rgba(0, 0, 0, 0.3)',
        'skeuo-card': '0 20px 50px -10px rgba(0, 0, 0, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.15), inset 0 -1px 2px rgba(0,0,0,0.5)',
        'skeuo-pressed': 'inset 0 4px 8px 0 rgba(0, 0, 0, 0.6), 0 1px 2px rgba(255, 255, 255, 0.05)',
        'neon-cyan': '0 0 30px rgba(6, 182, 212, 0.35)',
        'neon-purple': '0 0 35px rgba(99, 102, 241, 0.45)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'floating 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
        'scanline': 'scan 3s linear infinite',
      },
      keyframes: {
        floating: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        }
      }
    }
  },
  plugins: [],
}
