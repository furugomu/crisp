// vite.config.ts

import { defineConfig } from "vite";

export default defineConfig({
  base: process.env.CI ? "/crisp" : "/",
  root: "./",
});
