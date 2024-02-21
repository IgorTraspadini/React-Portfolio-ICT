import { defineConfig } from 'vite'
//import react from '@vitejs/plugin-react'
import react from '@vitejs/plugin-react-swc'


// https://vitejs.dev/config/
export default defineConfig({
  // added to create a deply app
  //base: './React-Portifolio-ICT',
//  build: {
//    outDir: 'build'
//  },
  base: "https://igortraspadini.github.io/React-Portfolio-ICT",
  plugins: [react()],
})
