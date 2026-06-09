/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.css"
  ],
  theme: {
    extend: {
      colors: {
        spa: {
          dark: '#0B0A1F',
          darker: '#07061A',
          accent: '#7C3AED',
          'accent-light': '#C4B5FD',
          cream: '#F0EEFF',
          muted: '#B5A8D5',
          deep: '#1E1048'
        }
      },
      fontFamily: {
        sans: ['League Spartan', 'sans-serif'],
        serif: ['Playfair Display', 'serif']
      }
    },
  },
  plugins: [],
}
