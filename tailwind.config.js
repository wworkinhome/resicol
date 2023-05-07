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
        'my-custom-color': ''
      },
      screens: {
        xss: '320px',
        xs: '375px',
        ml: '425px',
        sm: '600px',
        md: '900px',
        lg: '1200px',
        xl: '1536px',
      },
      fontFamily: {
        Mulish: ['Mulish', 'sans-serif'],
        Nunito: ['Nunito', 'sans-serif']

      }
    },
  },
  plugins: [],
};
