/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "425px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-libreFranklin)"],
      },
      colors: {
        blue: "hsl(223, 87%, 63%)",
        "blue-pale": "hsl(223, 100%, 88%)",
        "blue-very-dark": "hsl(209, 33%, 12%)",
        "red-light": "hsl(354, 100%, 66%)",
        grey: "hsl(0, 0%, 59%)",
      },
    },
  },
  plugins: [],
};
