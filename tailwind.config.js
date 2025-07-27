/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f9ff',
          100: '#b3f0ff',
          200: '#80e7ff',
          300: '#4ddeff',
          400: '#1ad5ff',
          500: '#00D4FF',
          600: '#00a8cc',
          700: '#007a99',
          800: '#004d66',
          900: '#002033',
        },
        secondary: {
          50: '#f3efff',
          100: '#e1d4ff',
          200: '#cfb9ff',
          300: '#bd9eff',
          400: '#ab83ff',
          500: '#8B5FBF',
          600: '#7049a6',
          700: '#55348c',
          800: '#3a1f73',
          900: '#1f0a59',
        },
        accent: {
          50: '#ffe6f0',
          100: '#ffb3d4',
          200: '#ff80b8',
          300: '#ff4d9c',
          400: '#ff1a80',
          500: '#FF006E',
          600: '#cc0058',
          700: '#990042',
          800: '#66002c',
          900: '#330016',
        },
      },
      fontFamily: {
        'sans': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'mono': ['SF Mono', 'Monaco', 'Consolas', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 4s ease infinite',
        'slide-in-up': 'slideInUp 0.6s ease-out',
        'particle': 'particle-float 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-10px) rotate(1deg)' },
          '66%': { transform: 'translateY(-5px) rotate(-1deg)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        slideInUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'particle-float': {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '25%': { transform: 'translateY(-20px) translateX(10px)' },
          '50%': { transform: 'translateY(-10px) translateX(-5px)' },
          '75%': { transform: 'translateY(-30px) translateX(15px)' },
        },
      },
      backdropBlur: {
        'strong': '20px',
      },
      boxShadow: {
        'neon-blue': '0 0 5px #00D4FF, 0 0 10px #00D4FF, 0 0 15px #00D4FF',
        'neon-purple': '0 0 5px #8B5FBF, 0 0 10px #8B5FBF, 0 0 15px #8B5FBF',
        'neon-pink': '0 0 5px #FF006E, 0 0 10px #FF006E, 0 0 15px #FF006E',
      },
    },
  },
  plugins: [],
}