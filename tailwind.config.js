/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#008371',
        customBlue: '#00A98B',
        customLight: '#EFFCF9',
        customBeige: '#F3EADA',
        customPeach: '#FFA17A'
      },
      fontFamily: {
        'agrandir-regular': ['agrandir-regular', 'sans-serif'],
        'agrandir-grandLight': ['agrandir-grandLight', 'sans-serif'],
        'agrandir-grandHeavy': ['agrandir-grandHeavy', 'sans-serif'],
        'marteni': ['marteni','serif']
      },
      backgroundImage: {
        'hero-bg': 'url(/assets/img/foto-prova-hero.jpg)'
      }
    },
  },
  plugins: [],
}
