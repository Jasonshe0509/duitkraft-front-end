/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
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
      'progressbar2':'#C7D3EB',
      'progressbarline2':'#47B2FF',

      'continuebutton':'#9FEF00',
      'becolour':'#6C40D9',
      'incolour':'#00A6C2',
      'adcolour':'#E3823C',
      'yellowtext':'#E3B53C',
      'greentrans':'#5DFF6D',
      'redtrans':'#FF0000',      
      'darkYellow': '#E3B53C',
      'darkGray':'rgba(17,17,17,0.5)',
      'red':'#E3463C',
      'moncol':'#C95959',

      'lightBlue':'#C7DDFF',
      'blackOpacity':'rgba(128, 128, 128, 0.1)',
      'grayOpacity':'rgba(50, 42, 42, 0.3)',
      'dropdownColor': '#142e3e',
      'darkOrange': '#b77d3d',
      'grayOrange': '#c38e57',
      'darkYellow1':'#BCA758',
      'grayYellow1':'#bcab6e',
      'darkRed':'#A36766',
      'grayRed':'#a67675',
      'darkGray1':'#5c5c5c',
      'grayGray1':'#939393',
      'darkGreen':'#529257',
      'grayGreen':'#649a68',
      'darkGreen1':'#6E7B46',
      'grayGreen1':'#7f8864',
      'hotTrends':'rgba(210, 210, 210, 0.1)',
    },
  
    extend: {
    },
  },
  plugins: [],
  
}

