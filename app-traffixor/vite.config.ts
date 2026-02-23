import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // Liberando domínios do ngrok para acessar o seu localhost
    allowedHosts: ['.ngrok-free.dev'] 
  }
})