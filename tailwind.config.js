/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#121a29',
        light: '#ffffff',
        'light-300': '#f7f7f7',
        'light-500': '#ebebeb',
        'light-700': '#6b7280',
        primary: '#ee0000',
        'primary-500': '#aa0000',
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
};
