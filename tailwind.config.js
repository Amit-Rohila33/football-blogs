/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        primary: "#ea580c",
        "primarry-dark":"#7c2d12",
        "footer":"#2D3748"
      }
    },
  },
  plugins: [],
};
