/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
        backgroundColor: {
          'dark-mode': '#FA8072'
        },
    },
  },
  plugins: [],
}

