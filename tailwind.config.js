/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      transitionDuration: {
        800: '800ms',
        900: '900ms',
      },
      borderWidth: {
        3: '3px',
      },
    },
  },
  plugins: [],
}
