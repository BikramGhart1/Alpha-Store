/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        navbar:'#004581',
        background:'#DDE8F0',
        button:'#018ABD',
        hover:'#018ABD',
        cardBackground:'#DDE8F0',
        hover2:'#018ABD',
        cardBorderShadow:'#97CBDC',
        priceDiscountLabel:'#018ABD',
      }
    },
  },
  plugins: [],
}

