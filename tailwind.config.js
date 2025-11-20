/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#d4af37", // Metallic Gold
        secondary: "#0a0a0a", // Pitch Black
        accent: "#262626", // Dark Charcoal
        "night-gold": "#c5a028", // Deep Gold
        "night-black": "#121212", // Soft Black
        "night-text": "#e5e5e5", // Off-white text
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        display: ['Cinzel', 'serif'],
      },
      backgroundImage: {
        'pattern-luxury': "url('https://www.transparenttextures.com/patterns/stardust.png')",
      }
    },
  },
  plugins: [],
}
