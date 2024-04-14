import { colorTokens } from "./src/tokens/colors.ts";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
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
