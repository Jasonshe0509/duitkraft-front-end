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
      'dropdownColor': 'rgb(20,46,62)',
    },
  
    extend: {
    },
  },
  plugins: [],
  
}

