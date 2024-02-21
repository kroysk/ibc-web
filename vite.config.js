import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import fs from 'fs';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
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
        entryFileNames: 'chunks/[name]-[hash].js',
      },
    },
    // Hook de post construcción
    writeBundle() {
      try {
        // Ruta al archivo de salida principal (main.js)
        const mainOutputFilePath = 'dist/chunks/main-[hash].js';

        // Leer el archivo completo
        const fileContent = fs.readFileSync(mainOutputFilePath);

        // Obtener la longitud del archivo
        const fileSize = fileContent.length;

        // Tamaño máximo por chunk (500 KB)
        const chunkSizeInBytes = 500 * 1024;

        // Calcular el número total de chunks necesarios
        const totalChunks = Math.ceil(fileSize / chunkSizeInBytes);

        // Crear el directorio de salida para chunks si no existe
        const outputDirectory = 'dist/chunks';
        if (!fs.existsSync(outputDirectory)) {
          fs.mkdirSync(outputDirectory);
        }

        // Dividir el archivo principal en chunks
        for (let i = 0; i < totalChunks; i++) {
          const start = i * chunkSizeInBytes;
          const end = (i + 1) * chunkSizeInBytes;

          // Obtener el chunk actual
          const chunk = fileContent.slice(start, end);

          // Escribir el chunk en un nuevo archivo
          const chunkFileName = `${outputDirectory}/chunk${i + 1}-[hash].js`;
          fs.writeFileSync(chunkFileName, chunk);
        }

        console.log('Proceso de división de chunks completado.');
      } catch (error) {
        console.error('Error al dividir el archivo:', error);
      }
    },

    chunkSizeWarningLimit: 5000, // Ajusta este valor según sea necesario
  },
})
