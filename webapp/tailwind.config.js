/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        extend: {
            backgroundColor: {
                'defect': '#FA8072',
                'blue': '#5dade2',
                'green': '#2ecc71',
                'pink': '#ffb8c6',
                'purple': '#af7ac5',
                'red': '#e74c3c',
                'yellow': '#FFC300',
            },
        },
    },
    safelist: [
        {
            pattern: /bg-(defect|blue|red|green|yellow|pink)/
        }
    ],
    plugins: [],
}

