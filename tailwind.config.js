/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        lg: '1280px',
      }
    },
    extend: {

    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  },
}
