/** @type {import('tailwindcss').Config} */
const { violet, blackA, mauve, green } = require("@radix-ui/colors");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...mauve,
        ...violet,
        ...green,
        ...blackA,
      },
    },
    fontFamily: {
      k2d: ["K2D", "sans-serif"],
    },
  },
  plugins: [],
};
