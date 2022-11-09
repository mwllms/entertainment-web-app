/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [],
  theme: {
    fontFamily: {
      sans: ['Outfit', ...defaultTheme.fontFamily.sans],
    },
    colors: {
      white: 'hsl(0, 0%, 100%)',
      red: 'hsl(0, 97%, 63%)',
      blue: {
        dark: 'hsl(223, 30%, 9%)',
        'semi-dark': 'hsl(223, 26%, 14%)',
        grey: 'hsl(223, 23%, 46%)',
      },
    },
    extend: {},
  },
  plugins: [],
}
