module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        brand: {
          DEFAULT: "#6B21A8", // purple-700
          light: "#A855F7",   // purple-400
          dark: "#4C1D95",    // purple-900
        },
      },
    },
  },
  plugins: [],
}
