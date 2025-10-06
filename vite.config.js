import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/sagana-app/", // exact repo name sa GitHub
  plugins: [react()],
});
