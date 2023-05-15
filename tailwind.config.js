/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./src/**/*.{html,ts}",
    "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    colors: {
      cyan_blue: '#dde3eb',
      light_color: '#eeeeee',
      blue1: '#3F72B0',
      white: '#fff',
      text1: '#E0E0E0',
      text2: '#6a6a6a',
      header: '#f9f9f9',
      spinbg: ' rgb(255 255 255 0.2)',
      spintext: "#575757",


      C1: '#FF6584',
      C1a: '#EFB7B9',
      C2: '#00b8a9',
      C2a: '#d5f3f1',
      C3: '#9e4a83',
      C3a: '#ecd8e6',
      C4: '#c58cd0',
      C4a: '#f3daf6',
      C5: '#41b5f6',
      C5a: '##c4ebfc',
      C6: '#ed8fc7',
      C6a: '#f8d1ea',
      C7: '#f29d7c',
      C7a: '#fbe1d6',
      C8: '#e6ca5d',
      C8a: '#f9efc1',

    },
    extend: {
      fontFamily: {
        'Baloofont': 'Baloo Bhaina',
        'Cutefont': 'Cute Font'
      }
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs"),

  plugin(function ({ addUtilities }) {
    addUtilities({
      '.scrollbar-hide': {

        '-ms-overflow-style': 'none',

        'scrollbar-width': 'none',

        '&::-webkit-scrollbar': {
          display: 'none'
        }
      }
    }
    )
  })
  ],
}

