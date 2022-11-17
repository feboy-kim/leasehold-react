/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}", "./parts/**/*.{js,jsx}"
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@headlessui/tailwindcss')({prefix: 'ui'})
  ],
}
