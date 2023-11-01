/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        1440: '1440px',
        max: '100%',
      },
      fontFamily: {
        Alata: ['Alata', 'sans-serif'],
        QuickSand: ['Quicksand', 'sans-serif'],
        OpenSans: ['Open Sans', 'sans-serif'],
      },
      colors: {
        Red: '#f23115',
        Orange: '#FA9200',
        Yellow: '#FFCD41',
        LighYellow: '#FEF5DA',
        Green: '#1EB648',
        DarkGreen: '#198736',
        Black: '#191919',
        DarkGrey: '#333333',
        MediumGrey: '#7F7F7F',
        LightGrey: '#F3F3F2',
        White: '#FFFFFF',
      },
    },
  },
  plugins: [],
};
