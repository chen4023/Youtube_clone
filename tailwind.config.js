/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        trade: ["Trade"],
        robote: ["Robote"],
      },
      colors: {
        brand: "#FF0000",
      },
    },
  },
  plugins: [],
};
