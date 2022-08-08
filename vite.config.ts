import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path' // 配置别名需要的路径模块

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    extensions: ['.vue', '.js', ".ts", ".tsx", ".jsx"],
    // 配置别名
    alias: [
      {
        find: '@', //指向的是src目录
        replacement: resolve(__dirname, 'src')
      }
    ]
  }
})
