/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        primary: "#34d399",
        "primarry-dark":"#047857",
        "footer":"#2D3748"
      }
    },
  },
  plugins: [],
};
