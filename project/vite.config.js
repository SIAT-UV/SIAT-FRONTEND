import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import svgr from "vite-plugin-svgr"

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8000", // Cambiar cuando se despliegue
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [react(), svgr()],
})
