import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import tailwindcss from "tailwindcss";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import "./src/tailwind.css";

// import { peerDependencies } from "./package.json";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "acl-2", // Sets the name of the generated library.
      fileName: (format) => `index.${format}.js`, // Generates the output file name based on the format.
      formats: ["cjs", "es"], // Specifies the output formats (CommonJS and ES modules).
    },
    rollupOptions: {
      external: ["react", "react-dom", "tailwindcss"], // Defines external dependencies for Rollup bundling.
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          tailwindcss: "tailwindcss",
        },
      },
    },
    sourcemap: true, // Generates source maps for debugging.
    emptyOutDir: true, // Clears the output directory before building.
  },
  plugins: [react(), dts()], // Uses the 'vite-plugin-dts' plugin for generating TypeScript declaration files (d.ts).
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
});
