/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        LandingColor: "#0C142B",
        TransColor: "#284391"
      }
    },
  },
  plugins: [],
}

