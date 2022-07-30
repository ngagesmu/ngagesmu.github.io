/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./docs/**/*.{html,js}"],
  theme: {
    colors: {
      blue: "#64b5f6",
      white: "#ffffff",
      black: "#121212",
    },
    fontSize: {
      sm: ["20px", "24px"],
      md: ["20px", "28px"],
    },
    fontFamily: {
      sans: ["Arimo", "Arial", "sans-serif", "ui-sans-serif", "system-ui"],
    },
    extend: {
      blur: {
        sm: "0.8px",
      },
    },
  },
  plugins: [],
};
