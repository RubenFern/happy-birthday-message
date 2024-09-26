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
                'yellow': '#FFC300',
            },
        },
    },
    safelist: [
        {
            pattern: /bg-(defect|blue|red|green|yellow|any-other-colors)/
        }
    ],
    plugins: [],
}

