/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{html,js,jsx,css}",
    "./node_modules/preline/preline.js",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: "#4F9451",
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("preline/plugin")],
};
