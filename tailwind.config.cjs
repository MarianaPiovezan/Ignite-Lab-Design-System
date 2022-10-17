/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize: {

     xs : 14,
     sl : 16,
     md : 18,
     lg : 20,
     xl : 24,
     "2xl" : 32,

    },

    colors: {

      transparent: 'transparent',

      black : '#000',
      white : '#FFF',

      gray : {

        900: '#121214',
        800: '#202024',
        400: '#7C7C8A',
        300: '#CACACC',
        200: '#E1E1E1',
      },

      cyan :{
        300: '#81D8F7',
        200: '#B4E1F1',
      }
    },

    extend: {
      fontFamily: {
        sans: ' Inter, sans-serif'
      },
    },
  },
  plugins: [],
}
