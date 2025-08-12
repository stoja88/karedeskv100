/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './contexts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'karedesk': {
          primary: '#7FBFBF',
          'primary-dark': '#5A9A9A',
          'primary-light': '#A3D4D4',
          dark: '#0A0A0A',
          gray: '#1A1A1A',
          light: '#2A2A2A',
          'light-bg': '#F8FAFC',
          'light-card': '#FFFFFF',
          'light-gray': '#F1F5F9',
          'light-border': '#E2E8F0',
          'text-light': '#1E293B',
          'text-light-secondary': '#64748B',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(127, 191, 191, 0.3)',
        'glow-lg': '0 0 40px rgba(127, 191, 191, 0.2)',
        'inner-glow': 'inset 0 0 20px rgba(127, 191, 191, 0.1)',
      }
    },
  },
  plugins: [],
}