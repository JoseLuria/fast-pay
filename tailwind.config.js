/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#ECEFF4',
      black: '#131313',
      'dark-gray': '#292929',
      gray: '#949494',
      green: '#33D69F',
      orange: '#FF8F00',
      red: '#E74C3C'
    },
    extend: {
      maxWidth: {
        container: '730px',
        auth: '450px'
      },
      minHeight: {
        invoice: '134px',
        'invoice-md': '72px'
      },
      fontFamily: {
        poppins: '"Poppins", sans-serif'
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
}
