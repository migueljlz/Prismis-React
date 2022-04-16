module.exports = {
  future: {
    removeDeprecatedGapUtilities: true
  },
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#33BBD4"
      },
      borderRadius: {
        large: "5rem"
      }
    }
  },
  variants: {},
  plugins: []
};
