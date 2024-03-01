/** @type {import('tailwindcss').Config} */

  const colors = require("tailwindcss/colors")
module.exports = {



  content: [
    "./*.html",
   "./*.js",
   "./Components/*.js",
   "./Pages/Portfolio/*.html",
   "./Pages/contactus/*.html",
   
    //FLOWBITE
    "./node_modules/flowbite/**/*.js"
 
  ],

  darkMode: "media",
  
  theme: {
    colors: { 
      mainOrange: "#F04B26",
      lightOrange: "#F04B26",
      dark: "#191919",
      darkAlt: "#111111",
      white: "#FFFFFF",
      darkOrange: "#C1311F",
      grey:"#2c2c2c",
      nextGen:"#4b7d3e"
    
    },

  screens: {
    "sm" : "660px",
    "md" : "660px",
    "lg" : "1000px",


  },
  
    fontFamily: { 
  poppins: ["Poppins", "sans-serif"],
    },

    extend: { 
scale: { 

"102": '1.02',
"300": '3'
}
    },
  },
  plugins: [
require("flowbite/plugin")

  ],
}

