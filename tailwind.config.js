/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // <= add this
    "./src/**/*.{js,ts,jsx,tsx}", // <= no spaces
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
