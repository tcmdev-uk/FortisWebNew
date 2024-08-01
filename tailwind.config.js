/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./Pages/**/*.{html,js}",
    "./Pages/**/**/*.{html,js}",
    "./components/*.js",
    "./app.js",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    colors: { 
      mainBlue: "#28ddc3",
      lightOrange: "#F04B26",
      background: "#edf5ff",
      dark: "#191919",
      darkAlt: "#111111",
      white: "#FFFFFF",
      darkBlue: "#22aa93",
      grey:"#2c2c2c",
      nextGen:"#4b7d3e"
    },
    screens: {
      "sm" : "400px",
      "md" : "660px",
      "lg" : "1000px",
    },
    fontFamily: { 
      Custom: ["moderniz", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"], 
      Peanut: ["peanut", "sans-serif"],
      Super: ["super", "sans-serif"],
      Night: ["night", "sans-serif"]
    },
    "300": '3'
  },
  plugins: [
    require("flowbite/plugin")
  ]
};

