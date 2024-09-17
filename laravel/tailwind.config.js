/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/views/**/*.blade.php",
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#264F86',
                'secondary': '#5C7596',
                'surface': '#BFDBFF',
            }
        },
    },
    plugins: [
    ],
}

