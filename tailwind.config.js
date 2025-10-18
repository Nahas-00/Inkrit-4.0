// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Custom colors for your theme
      colors: {
        'theme-red': '#ff003c',
        'theme-black': '#0a0a0a',
        'theme-card': '#1a1a1a',
        'theme-glow': 'rgba(255, 0, 60, 0.6)',
        'theme-border': 'rgba(255, 0, 60, 0.2)',
      },
      // Custom font families
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      // Custom animation for the glowing text
      animation: {
        'text-flicker': 'text-flicker 3s linear infinite',
      },
      keyframes: {
        'text-flicker': {
          '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': {
            textShadow: '0 0 5px #ff003c, 0 0 10px #ff003c, 0 0 20px #ff003c, 0 0 40px rgba(255,0,60,0.6), 0 0 80px rgba(255,0,60,0.6)',
          },
          '20%, 24%, 55%': {
            textShadow: 'none',
          },
        },
      },
    },
  },
  plugins: [],
}