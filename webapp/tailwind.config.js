/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
        backgroundColor: {
            'defect': '#FA8072',
            'yellow': '#FFC300',
        },
    },
  },
  plugins: [],
}

