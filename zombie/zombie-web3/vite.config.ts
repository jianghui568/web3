import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    assetsDir: 'assets', // 指定静态资源输出的目录（默认是 `assets`）
  },
  resolve: {
    alias: {
      '@': '/src',  // 这里指向了 src 文件夹
    }
  }
})
