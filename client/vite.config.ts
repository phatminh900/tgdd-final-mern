import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import viteTsconfigPaths from "vite-tsconfig-paths";
import { reactRouterPlugin } from "vite-plugin-next-react-router";
import "whatwg-fetch";
export default defineConfig({
  plugins: [react(), tsconfigPaths(), viteTsconfigPaths(), reactRouterPlugin()],
  test: {
    include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    globals: true,
    environment: "jsdom",
    setupFiles: ['./src/test/setup.ts',"whatwg-fetch"],
    clearMocks: true,
    css:true,

    
    passWithNoTests:true
  },
  build: {
    // generate manifest.json in outDir
    manifest: true,
    outDir: "./build",
    rollupOptions: {
      // overwrite default .html entry
      input: "./src/index.tsx",
    },
  },
  base: "/",

  server: {
    cors: true,
    // host: "http://localhost:4000",
    // origin: "http://localhost:4000",
    proxy: {
      "/api/v1/booking/": "http://localhost:4000",
      "/img": "http://localhost:4000",
      "/api/v1/": {
        target: "http://localhost:4000",
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
  },
});
