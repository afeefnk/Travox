/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        switzerM: ['"Switzer Medium"', 'sans-serif'],
        switzerR: ['"Switzer Regular"', 'sans-serif'],
        switzerSM: ['"Switzer SemiBold"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
