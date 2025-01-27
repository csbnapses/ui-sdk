/** @type {import('tailwindcss').Config} */
module.exports = {
    prefix: 'avantos-',
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    corePlugins: {
        preflight: false,
    },
    important: true,
    theme: {
        extend: {},
    },
    plugins: [],
} 