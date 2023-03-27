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
      keyframes: {
        scale: {
          "100%": { transform: "scale(1.1) translateY(-2px)" },
        },
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        fadeOut: {
          "0%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
      },
      animation: {
        scale: "scale 0.2s linear forwards",
        fadeIn: "fadeIn 0.3s ease-out",
        fadeOut: "fadeOut 0.3s ease-in",
      },
    },
    screens: {
      // => @media (max-width: 1080px) { ... }
      medium: { max: "1080px" },
      // => @media (max-width: 680px) { ... }
      small: { max: "680px" },
    },
  },
  plugins: [],
};
