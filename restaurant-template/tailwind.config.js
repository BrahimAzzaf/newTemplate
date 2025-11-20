/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['system-ui', 'ui-rounded', 'ui-sans-serif'],
        body: ['system-ui', 'ui-sans-serif'],
      },
      colors: {
        brand: {
          50: '#fdf5f3',
          100: '#fbe4dd',
          500: '#d97757',
          600: '#c1603e',
          900: '#2a1812',
        },
      },
      boxShadow: {
        soft: '0 18px 45px rgba(15,23,42,0.45)',
      },
    },
  },
  plugins: [],
}

