/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      opensans: ['Open Sans', 'sans-serif'],
    },

    extend: {
      colors: {
        primary: "#F89B27",
      }
    },
  },
  plugins: [],
};
