/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'c-yellow': '#FEF08A',
        'c-red': '#b91c1c',
        'c-light-blue': '#A8D5E2',
        'c-ucla-blue': '#467599',
        'c-raisin-black': '#231F20'
      },
    },
  },
  plugins: [],
}
