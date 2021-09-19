import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  base: './',
  // base: '/',
  server: {
    port: 8159,
    open: '/#/Home',
  },
  publicDir: './public',
  assetsInclude: ['png', 'svg', 'jpeg'],
})
