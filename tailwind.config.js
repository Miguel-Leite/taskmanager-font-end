/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      colors: {
        'dark-600': '#2E2938',
        'dark-400': '#363041',
        'secundary-ws': '#B4ACF9',
        'secondary-100': 'rgba(255, 255, 255, 0.6)',
      },
      fontFamily: {
        // sans: ['Asap, sans-sarif','Roboto, sans-sarif'],
        'Asap': ['Asap, sans-sarif'],
      }
    },
  },
  plugins: [],
}
