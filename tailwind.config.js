/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'whitesmoke': '#E6ECF5',
        'darkblue': '#07469C',
        'lightblue': '#0099E1',
        'white01': '#FFFFFF',
        'lightred': '#EF3061',
        'lightblack': '#333333',
        'lightgray': '#757575',
        'white02': '#F2F2F2'
      },
      screens: {
        xs: '375px',
        sm: '600px',
        md: '900px',
        lg: '1200px',
        xl: '1536px',
      },
    },
  },
  plugins: [],
};
