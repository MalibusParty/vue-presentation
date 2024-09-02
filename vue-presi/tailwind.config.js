/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        dark: '0px 0px 6px 6px rgba(0, 0, 0, 0.1)'
      }
    },
  },
  plugins: [],
}

