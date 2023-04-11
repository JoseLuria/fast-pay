/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#ECEFF4',
      black: '#131313',
      'dark-gray': '#292929',
      'low-gray': '#535353',
      gray: '#949494',
      green: '#1CDB9B',
      'low-green': '#75E0BC',
      orange: '#FF8F00',
      'low-orange': '#E7AE66',
      red: '#E74C3C',
      'low-red': '#FF9797'
    },
    extend: {
      maxWidth: {
        landing: '1200px',
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
  }
}
