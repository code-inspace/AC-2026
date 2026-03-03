/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0E0F11',
        primary: {
          DEFAULT: '#2708a0',
          light: '#653ad2',
          glow: '#8B5CF6',
          muted: 'rgba(101, 58, 210, 0.15)',
        },
        surface: {
          DEFAULT: '#16171a',
          hover: '#1e1f24',
        },
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(135deg, #2708a0, #653ad2)',
        'primary-gradient-x': 'linear-gradient(90deg, #2708a0, #653ad2)',
        'primary-gradient-subtle': 'linear-gradient(135deg, rgba(39,8,160,0.2), rgba(101,58,210,0.2))',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out 2s infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'spin-slow': 'spin 12s linear infinite',
        'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'border-spin': 'border-spin 3s linear infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'border-spin': {
          '0%': { '--border-angle': '0deg' },
          '100%': { '--border-angle': '360deg' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
      },
      boxShadow: {
        'primary': '0 0 30px rgba(101, 58, 210, 0.4)',
        'primary-sm': '0 0 15px rgba(101, 58, 210, 0.3)',
        'glow': '0 0 60px rgba(101, 58, 210, 0.2)',
      },
    },
  },
  plugins: [],
}
