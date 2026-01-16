import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/Gamma_Stream_V1.1/', // Asegúrate de que este sea el nombre de tu repo
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        apoyoescolar: resolve(__dirname, 'apoyoescolar.html'),
        cursos: resolve(__dirname, 'cursos.html'),
        contacto: resolve(__dirname,'contacto.html')
      },
    },
  },
})
