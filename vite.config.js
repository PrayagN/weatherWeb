import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/weatherWeb/',
  assetsDir: 'assets',
  preview :{
    host :true,
    port:1000
  },
 
})
