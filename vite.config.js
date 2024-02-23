import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { splitVendorChunkPlugin } from 'vite';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    splitVendorChunkPlugin()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    // Función personalizada de construcción
    rollupOptions: {
      output: {
        // Nombre del archivo de salida para cada chunk
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString();
          }
        },
      },

    },
    chunkSizeWarningLimit: 500, // Ajusta este valor según sea necesario
  },
})
