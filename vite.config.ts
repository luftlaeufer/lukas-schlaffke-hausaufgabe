import relay from "vite-plugin-relay";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [relay, react(), tsconfigPaths()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
