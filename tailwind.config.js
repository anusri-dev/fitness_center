/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        forest: {
          50: '#f3f8f4',
          100: '#e3eee6',
          200: '#c7ddcd',
          300: '#9bc0a7',
          400: '#6a9b7b',
          500: '#487d5c',
          600: '#356349',
          700: '#2a4f3a',
          800: '#213f2f',
          900: '#1b3527',
          950: '#0e1d15',
        },
        accent: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Sora', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-radial':
          'radial-gradient(ellipse at top right, rgba(34,197,94,0.15), transparent 60%)',
        'mesh-1':
          'radial-gradient(at 20% 20%, rgba(34,197,94,0.08) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(22,163,74,0.06) 0px, transparent 50%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-left': {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-right': {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.92)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22,1,0.36,1) forwards',
        'fade-in': 'fade-in 0.8s ease forwards',
        'slide-left': 'slide-left 0.7s cubic-bezier(0.22,1,0.36,1) forwards',
        'slide-right': 'slide-right 0.7s cubic-bezier(0.22,1,0.36,1) forwards',
        'scale-in': 'scale-in 0.6s cubic-bezier(0.22,1,0.36,1) forwards',
        float: 'float 6s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 6s ease infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
