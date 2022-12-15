/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-color': '#0D60AC',
        'secondary-color': '#E2F1FF',

        background: '#FFFFFF',
        'dark-background': '#0E0E1B',

        'input-border': '#000000',
        'input-fill': '#F5F5F5',
        'input-label': '#000000',

        'btn-fill': '#D9D9D9',
        'dark-btn-fill': '#D9D9D9',
        'btn-text': '#000000',
      },
    },
  },
  plugins: [],
};
