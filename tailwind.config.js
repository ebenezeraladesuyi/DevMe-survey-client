/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        mont : ['Montserrat', 'sans-serif'],
        pop : ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'hero-bg1' : "url('/src/assets/images/hero1.jpg')",
        'hero-bg2' : "url('/src/assets/images/hero2.jpg')",
        'hero-bg3' : "url('/src/assets/images/hero3.jpg')",
      }
    },
  },
  plugins: [],
}