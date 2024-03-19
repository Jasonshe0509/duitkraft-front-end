/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors:{
      'white':'#808080',
      'fontColor':'#E1ECF4',
      'profilecircle':'#70B7F9',
      'hoverr':'#636262',
      'blueGray':'#808080',
      'black':'#000000',

      'progressbar':'#141326',
      'progressbarline':'#49E33C',
      'continuebutton':'#9FEF00',
      'becolour':'#6C40D9',
      'incolour':'#00A6C2',
      'adcolour':'#E3823C',
      'yellowtext':'#E3B53C',




      
    },
  
    extend: {
    },
  },
  plugins: [],
  
}

