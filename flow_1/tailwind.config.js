/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)'
      },
      fontWeight: {
        bitbold: 470
      },
      fontSize: {
        bsm: "0.875rem"
      }
    },
  },
  plugins: [],
}
