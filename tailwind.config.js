/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#ECEFF4',
      black: '#131313',
      'dark-gray': '#292929',
      gray: '#949494',
      green: '#33D69F',
      orange: '#FF8F00',
      red: '#EC5757'
    },
    extend: {
      maxWidth: {
        container: '730px'
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
}
