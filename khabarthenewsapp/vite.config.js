import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig( {plugins: [react()]}, (comm, mod) => {
  // Loading env file based on `mode` in the current working directory.
  // Set the third param to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mod, process.cwd(), '')
  return {
    // vite configuration
    define: {
      __APP_ENV__: JSON.stringify(env.VITE_KHABAR_API_KEY),
    },
  }
})
