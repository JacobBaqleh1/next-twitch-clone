/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens:{
      sm: '640px',
      // => @media (min-width : 640px) { ... }

      md: '768px',
      // => @media (min-width : 640px) { ... }

      lg: '1028px',
      // => @media (min-width : 640px) { ... }

      xl: '1280px',
      // => @media (min-width : 640px) { ... }

      '2xl': '1600px',
      // => @media (min-width : 640px) { ... }

      '3xl': '1800px',
      // => @media (min-width : 640px) { ... }

    }
  },
  plugins: [],
};
