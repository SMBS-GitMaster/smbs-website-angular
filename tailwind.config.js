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
        "blue-dark": "#1C243E",
        "gray-light": "#F5F5F5",
      }
    },
  },
  plugins: [],
};
