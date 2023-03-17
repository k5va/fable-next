/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      medium: { max: "1080px" },
      // => @media (max-width: 1080px) { ... }
      small: { max: "680px" },
      // => @media (max-width: 680px) { ... }
    },
  },
  plugins: [],
};
