import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Устанавливаем хост
    port: 3000, // Устанавливаем порт
  },
  preview: {
    host: "0.0.0.0", // Устанавливаем хост для предпросмотра
    port: 3000, // Устанавливаем порт для предпросмотра
  },
})
