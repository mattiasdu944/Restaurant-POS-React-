const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui({
    layout: {

      radius: {
        small: '5px',
        medium: '10px',
        large: '15px',
      }

    },

    themes: {
      light: {
        colors: {
          background: '#fbfbfa',
          primary: {
            DEFAULT: '#ed7904',
            '50': '#fff8eb',
            '100': '#ffedc6',
            '200': '#ffd987',
            '300': '#ffbe49',
            '400': '#ffa51f',
            '500': '#ed7904',
            '600': '#de5b01',
            '700': '#b83b05',
            '800': '#952e0b',
            '900': '#7b260c',
            '950': '#471101',
          },
        }
      },
      dark: {
        colors: {
          background: '#000',
          primary: {
            DEFAULT: '#ed7904',
            '50': '#fff8eb',
            '100': '#ffedc6',
            '200': '#ffd987',
            '300': '#ffbe49',
            '400': '#ffa51f',
            '500': '#ed7904',
            '600': '#de5b01',
            '700': '#b83b05',
            '800': '#952e0b',
            '900': '#7b260c',
            '950': '#471101',
          },
        }
      }
    }
  })]

}