/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        freeboot: ["FREEBOOT", "sans-serif"],
        verdanaBold: ["Verdana Bold", "sans-serif"],
        verdanaItalic: ["Verdana Italic", "sans-serif"],
        Verdana: ["Verdana", "sans-serif"],
      },
    },
  },
  plugins: [],
}
