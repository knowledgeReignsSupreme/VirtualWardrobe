/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', 
  ],
  theme: {
    extend: {
      keyframes: {
        slideInFromTop: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        slideInFromTop: 'slideInFromTop 2s ease-out forwards',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'], // Another example font
        edu: ['"Edu AU VIC WA NT Hand"', 'cursive'], // Handwritten style
      },
    },
  },
  plugins: [],
}

