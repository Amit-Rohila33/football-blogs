/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        primary: "#1fcecb",
        "primarry-dark":"#40E0D0",
        "footer":"#2D3748"
      }
    },
  },
  plugins: [],
};
