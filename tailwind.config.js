/* eslint-disable quotes */
//const plugin = require('tailwindcss/plugin');

module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
    options: {
      safelist: ['dark'], //specific classes
    },

  },
  //darkMode: false, // or 'media' or 'class'
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        blue: {
          'header': 'var(--header)',
          'footer': 'var(--footer)',
          'bg': 'var(--bg-blue)',
          'icon': '#3772F6',
          'text': 'var(--secondText)',
          'cowndown': 'var(--countdown)',
        },
        gray: {
          'border': 'var(--descriptionText)',
        }
      },
      height: {
        '120': '120px',
      },
      backgroundImage: {
        bgContent: "url(/bgFooter.jpg)",
        bgMeaningPc: "url(/utilities.jpg)",
        bgFooter: "url(/bgFooter.jpg)",
      },
    },
  },

  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
