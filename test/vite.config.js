import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

// add to package.json for vite deployment

// "scripts": {
  //   "dev": "vite",
  //   "build": "vite build",
  //   "lint": "eslint src --ext js,jsx --report-unused-disable-directives --max-warnings 0",
  //   "preview": "vite preview"
  // },