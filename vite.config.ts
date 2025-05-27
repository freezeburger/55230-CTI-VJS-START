import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from 'path'; // npm i @types/node -D

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
      '@': path.resolve(__dirname, './src'),
      '@ui': path.resolve(__dirname, './src/components/ui'),
    }}
})


