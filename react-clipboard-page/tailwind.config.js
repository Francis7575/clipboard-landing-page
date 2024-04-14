/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'grayish-blue': '#4C545C',
        'light-grayish-blue': '#9EABB2',
        'turquoise-color': '#26BBA4',
        'royal-blue': '#6174FF',
        'hover-buttons': 'rgba(255, 255, 255, 0.95)'
      },
      boxShadow: {
        'ios-button': '0px -3px 0px 0px rgba(0, 0, 0, 0.15) inset, 0px 10px 20px 0px rgba(137, 229, 199, 0.50)',
        'mac-button': '0px -3px 0px 0px rgba(0, 0, 0, 0.15) inset, 0px 10px 20px 0px rgba(0, 0, 0, 0.10)',
        
      },
    },
  },
  plugins: [],
}