/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Asegúrate de que Tailwind pueda purgar el CSS no utilizado
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
