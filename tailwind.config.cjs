/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      lato: ["Lato", "sans-serif"],
      dancingScript: ["Dancing Script", "sans-serif"],
    },
    extend: {
      keyframes: {
        mouse: {
          "0%": { top: "29%" },
          "15%": { top: "50%" },
          "50%": { top: "50%" },
          "100%": { top: "29%" },
        },
      },
    },
  },
  plugins: [],
};
