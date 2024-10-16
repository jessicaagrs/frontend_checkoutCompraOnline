/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "custom-200": "#F5F3FF",
                "custom-300": "#CCCCCC",
                "custom-400": "#878787",
            },
        },
    },
    plugins: [],
};
