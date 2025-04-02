import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/GIF-EXPERT-APP/', // 👈 Agrega esto para que los recursos se carguen correctamente en GitHub Pages
})
