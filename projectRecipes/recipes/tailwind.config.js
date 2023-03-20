/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#4A5568',
        secondary: '#A0AEC0',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      darkMode: 'media',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
