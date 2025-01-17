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
        'static-blue': '#2b5dc2',
        'static-blue-500': '#1c4780',
        primary: '#2b5dc2',
        'primary-500': '#1c4780',
        error: '#db2525',
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
};
