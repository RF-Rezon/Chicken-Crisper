/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customBlack: '#090909',
        customRed: "#fe5443",
        customGray: "#e1dfdf",
      },
    },
  },
  plugins: [require("daisyui")],
}

