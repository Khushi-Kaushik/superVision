/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/**/*.{html,js,jsx,ts,tsx}', 
      './public/index.html',             
    ],
    theme: {
      extend: {
        colors: {
          accent: 'var(--accent-color)', 
        },
      },
    },
    plugins: [],
  };
  