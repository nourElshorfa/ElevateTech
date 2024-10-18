/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brightColor: "#F4511F",
        backgroundColor: "#b7bca9",
        lightText: "#959595"
      },
      backgroundImage: {
        sale: "url('./assets/full-shot-woman-holding-sale-tag.jpg')",  // Correct path to the public folder
      },
    },
  },
  plugins: [],
};
