import { colorTokens } from "./src/tokens/colors.ts";

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        ...colorTokens,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
