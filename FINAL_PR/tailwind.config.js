/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forestGreen: '#334b35',
        oliveGreen: '#6d8c54',
        goldenYellow: '#f1cf69', // Custom name for the color
      },
    },
  },
  plugins: [],
};
