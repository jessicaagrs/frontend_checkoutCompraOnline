/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "custom-200": "#F5F3FF",
                "custom-300": "#CCCCCC",
                "custom-400": "#878787",
                "custom-500": "#F5F5F5",
                "custom-600": "#9B9B9B",
                "custom-700": "#9222DC",
                "custom-800": "#DE1616",
            },
        },
    },
    plugins: [],
};
