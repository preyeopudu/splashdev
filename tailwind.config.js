/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "splash-purple": "#42446E",
        "splash-light-purple": "#E70FAA",
        "splash-dark-purple": "#13B0F5",
      },
    },
  },
  plugins: [],
};
