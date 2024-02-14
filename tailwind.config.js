/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1440px',
    },
    extend: {
      maxWidth: {
        max: '1440px',
      },
      colors: {
        Red: '#f23115',
        DarkRed: '#AD220F',
        Orange: '#FA9200',
        Yellow: '#FFCD41',
        LightYellow: '#FEF5DA',
        Green: '#1EB648',
        DarkGreen: '#198736',
        Black: '#191919',
        DarkGrey: '#333333',
        MediumGrey: '#808080',
        Grey: '#B3B3B3',
        LightGrey: '#F3F3F2',
        White: '#FFFFFF',
      },
    },
  },
  plugins: [],
};
