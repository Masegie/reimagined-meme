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
      'black0':'#010105',
      'black':'#0D0D0D',
      'white': '#F6F6F6',
      'darkGrey' : '#212225',
      'blueMarine': '#66D5E9',
      'grey5':'#C6C6C6',
      'grey20' : '#3A3A3A',
      'grey50' : '#141414',
      'grey70' : '#1D1E21',
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
      'redCV':'#9C0000',
      'redCVHover':'#EA0000'
      
    },
    fontFamily: {
      'cursive': ['"Press Start 2P"',],
      'rubik': ['"Rubik Mono One"'],
      'poppins': ['"Poppins"'],
    },
    extend: {
      dropShadow: {
        'button': ['9px 9px 9px rgba(0, 0, 0, 0.35)',
                  '-3px -3px 9px rgba(255, 255, 255, 0.05)',
                ],
        'inside':'inset 0 -2px 4px rgba(0, 0, 0, 0.6)',
      
      },
      animation: {
        marquee: 'marquee 10s linear infinite',
        marquee2: 'marquee2 10s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(300%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-300%)' },
        },
      },
    },
  },
  plugins: [],
}