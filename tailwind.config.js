/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#050816',
          secondary: '#0F172A',
        },
        card: '#111827',
        primary: {
          DEFAULT: '#3B82F6',
          glow: 'rgba(59, 130, 246, 0.35)',
        },
        secondary: {
          DEFAULT: '#8B5CF6',
          glow: 'rgba(139, 92, 246, 0.35)',
        },
        success: '#10B981',
        text: {
          DEFAULT: '#F8FAFC',
          muted: '#94A3B8',
        },
      },
      fontFamily: {
        sans: ['Sora', 'Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'glow-gradient': 'radial-gradient(circle at center, rgba(59, 130, 246, 0.15) 0%, rgba(139, 92, 246, 0.15) 50%, transparent 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
      },
      boxShadow: {
        'neon-blue': '0 0 25px -5px rgba(59, 130, 246, 0.5)',
        'neon-purple': '0 0 25px -5px rgba(139, 92, 246, 0.5)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
};