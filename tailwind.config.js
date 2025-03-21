/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color:{
        gridTemplateColums:{
          'auto':'repeat(auto-fill,minmax(200px, 1fr))'
        }
      }
    },
  },
  plugins: [],
}