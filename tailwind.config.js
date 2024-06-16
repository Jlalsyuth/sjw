/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "cust-yellow": "#f9d816",
        "cust-orange": "#ff6611",
        "cust-blue": "#19397f",
        "cust-purple": "#be0575",
        "cust-beige": "#FDFAE2",
        "cust-artikel": "#FB9C67",
        "cust-budaya": "#FFB803",
      },
    },
  },
  plugins: [],
});
