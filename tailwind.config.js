/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        enqutatash:'#F39104',
        primary:'#FF6363',
        colorbackground:'#2E5895',
        secondary:{
          100:'#E2E2D5',
          200:'#888883'
        }
      },
      fontFamily:{
        body:['Nunito']
      }
    },
  },
  plugins: [],
}

