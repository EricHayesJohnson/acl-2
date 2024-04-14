import { colorTokens } from "./src/tokens/colors.ts";

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: ["./dist/**/*.{js,ts,jsx,tsx}"],
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
