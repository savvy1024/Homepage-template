/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primaryGreen: "#495E57",
        primaryYellow: "#F4CE14",
        secondaryPink: "#EE9972",
        secondaryKakhi: "#FBDABB",
        secondary3: "#EDEFEE",
        secondary4: "#333333",
      },

      fontFamily: {
        headLines: ["'Markazi'", "sans-serif"],
        parragrap: ["'Karla'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
