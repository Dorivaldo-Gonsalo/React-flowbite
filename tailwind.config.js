/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Ativa o modo dark por classe
  theme: {
    extend: {
      screens: {
        'xxl': '1600px'
      }
    },
  },
  plugins: [],
}