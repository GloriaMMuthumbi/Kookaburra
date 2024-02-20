/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js, jsx, ts, tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        charcoal: {
          500: '#333333',
        },
        darkblue:{
          500: '#0F4865'
        },
        greenblue: {
          500: '#219BAF'
        },
        orange: {
          500: '#FF9900'
        }
      }
    },
  },
  plugins: [
  ],
}

