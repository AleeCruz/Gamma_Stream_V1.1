import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/Gamma_Stream_V1.1/', // Asegúrate de que este sea el nombre de tu repo
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        productos: resolve(__dirname, 'productos.html'),
      },
    },
  },
})
