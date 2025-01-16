/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '3px 4px 4px #00000026', // Custom shadow
      },
      backgroundImage: { // Correct way to define gradients
        gridientcolor: 'linear-gradient(to right, #4faca7, #4faca7, #1c77ca)',
      },
    },
  },
  plugins: [],
}