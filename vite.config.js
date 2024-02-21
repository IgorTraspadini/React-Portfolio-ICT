import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // added to create a deply app
  base: './React-portifolio-ICT',
  build: {
    outDir: 'build'
  },
  plugins: [react()],
})
