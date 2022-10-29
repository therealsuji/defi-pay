import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "path";
// https://vitejs.dev/config/
/** @type {import('vite').UserConfig} */

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      "/assets": resolve(__dirname, "src/assets/"),
    },
  },
  server: {
    port: 3000,
  },
})
