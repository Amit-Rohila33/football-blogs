/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        primary: "#BF40BF",
        "primarry-dark":"#8A2BE2"
      }
    },
  },
  plugins: [],
};
