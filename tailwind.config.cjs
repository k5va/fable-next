/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#080b13",
        secondary: "#ffffff",
        alert: "#ab0000",
        disabled: "#9ca3af",
      },
    },
    screens: {
      medium: { max: "1080px" },
      // => @media (max-width: 1080px) { ... }
      small: { max: "680px" },
      // => @media (max-width: 680px) { ... }
    },
  },
  plugins: [],
};
