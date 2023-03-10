/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        blink: 'blink 0.4s alternate infinite',
      }
    },
  },
  plugins: [],
};
