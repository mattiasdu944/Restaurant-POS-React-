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
          background: '#f1f4fb',
          primary: {
            DEFAULT: '#6b7de9',
            '50': '#dbecfe',
            '100': '#c0dffd',
            '200': '#94ccfc',
            '300': '#62b0f8',
            '400': '#3d90f4',
            '500': '#2872e8',
            '600': '#1f5cd6',
            '700': '#204bad',
            '800': '#1f4289',
            '900': '#0c152a',
          },
        }
      },
      dark: {
        colors: {
          background: '#f1f4fb',
          primary: {
            DEFAULT: '#6b7de9',
            '50': '#dbecfe',
            '100': '#c0dffd',
            '200': '#94ccfc',
            '300': '#62b0f8',
            '400': '#3d90f4',
            '500': '#2872e8',
            '600': '#1f5cd6',
            '700': '#204bad',
            '800': '#1f4289',
            '900': '#0c152a',
          },
        }
      }
    }
  })]

}