/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        button: ['Arial', 'sans-serif']
      },
      colors: {
        primary: '#FF2C51',
        primaryLight: '#FF4769',
        onPrimary: '#FFFFFF',
        surface: '#F8F5FF',
        onSurface: '#574141',
        background: '#F3EED9',
        onBackground: '#000000'
      }
    }
  },
  plugins: []
};
