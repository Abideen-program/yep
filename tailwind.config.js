/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  important: true,
  theme: {
    screens: {
      sm: "480px",
      // => @media (min-width: 480px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "976px",
      // => @media (min-width: 976px) { ... }

      xl: "1280px",
      // => @media (min-width: 1440px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      colors: {
        backDrop: "rgba(0, 0, 0, 0.45)",
        heroDrop: "rgba(51, 146, 218, 0.7)",
      },
      boxShadow: {
        "3xl": "5px 5px 0px 0px",
      },
      backgroundImage: {
        hero: "url('./images/executive.jpg')",
      },
    },
  },
  // plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
