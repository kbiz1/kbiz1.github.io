/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        rotateColors: {
          '0%': { color: '#6666ff' },
          '10%': { color: '#0099ff' },
          '50%': { color: '#00ff00' },
          '75%': { color: '#ff3399' },
          '100%': { color: '#6666ff' },
        },
      },
      animation: {
        rotateColors: 'rotateColors 6s linear infinite'
      },
      backgroundColor: {
        offwhite: '#f5f5f5'
      }
    },
  },
  plugins: [],
}