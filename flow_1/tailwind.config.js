/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        orange: 'var(--color-orange)'
      },
      fontWeight: {
        bitbold: 470
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        bsm: "0.875rem"
      },
      boxShadow: {
        'custom': '2px 2px 16px #f3f3f3,  2px 2px  16px #f3f3f3',
      },
    },
  },
  plugins: [],
}
