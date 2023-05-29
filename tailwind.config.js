/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  variants: {
    extend: {
      textDecoration: ['focus-visible'],
    }
  },
  theme: {
    extend: {
      colors: {
        'gunmetal': '#292E35',
        'dark-gunmetal': '#1E232A',
        'eerie-black': '#15191E'
      }
    },
  },
  plugins: [],
}

