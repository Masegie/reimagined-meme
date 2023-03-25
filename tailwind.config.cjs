/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
     colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#F6F6F6',
      'darkGrey' : '#101010',
      'purple': '#3f3cbb',
      'midnight': '#112334',
      'neonGreen':"#0CF60E",
      'agumon':"#FFD339",
      'neonGreen2':"#0F6F26",
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'yellow0' :'#FFD762',
      'yellow1' :'#FAC62F',
      'yellow2' :'#B18506',
      'yellow2b' :'#B29426',
      'yellow3' :'#856508',
      'manggo':'#FA542F',
      'manggo2':'#D03C0D',
      'manggo3':'#B12F06',
    },
    fontFamily: {
      'cursive': ['"Press Start 2P"',],
      'rubik': ['"Rubik Mono One"'],
    },
    extend: {},
  },
  plugins: [],
}