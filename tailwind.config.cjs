/** @type {import('tailwindcss').Config} */
module.exports = {
    prefix: 'avantos-',
    content: [
        "./src/**/*.{js,jsx,ts,tsx,css}"
    ],
    corePlugins: {
        preflight: false,
    },
    important: '.avantos-sdk-root',
    theme: {
        extend: {},
    },
    plugins: [],
} 