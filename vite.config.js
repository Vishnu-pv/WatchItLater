import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import express from './express-plugin'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps:{
    swc:{
      enable: true
    }
  },
  plugins: [react(), express('src/server')],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
 
})
