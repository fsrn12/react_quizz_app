import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react({ devTarget: "es2022" })],
  // root: "/",
});
