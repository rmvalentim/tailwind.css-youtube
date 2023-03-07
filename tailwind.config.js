/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: '#0F0F0F',
        finalbase: '#121212',
        ytgray: '#3F4040'
      }
    },
  },
  plugins: [],
}
