/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent1 : '#b3e59f',
        accent2 : '#95d6a4'
      }
    },
  },
  plugins: [],
}

