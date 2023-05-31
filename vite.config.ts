/// <reference types="vitest" />
import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { pluginList } from './build/plugins-config'

export default defineConfig({
  base: process.env.VITE_BASE_URL,
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      app: resolve(__dirname, 'src'),
      config: resolve(__dirname, 'config'),
      assets: resolve(__dirname, 'src/assets'),
      components: resolve(__dirname, 'src/components'),
      api: resolve(__dirname, 'src/api'),
      router: resolve(__dirname, 'src/router'),
      roviewsuter: resolve(__dirname, 'src/views'),
      http: resolve(__dirname, 'src/http'),
      store: resolve(__dirname, 'src/store'),
      utils: resolve(__dirname, 'src/utils'),
    }
  },
  server: {
    proxy: {
      // with options: http://localhost:3000/api/bar-> http://127.0.0.1:5555/firstEdition/mock
      '/api': {
        target: 'http://127.0.0.1:5555/firstEdition/mock',
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  define: {
    // 设置环境变量
    'process.env': process.env
  },
  esbuild: {
    pure: process.env.VITE_DROP_CONSOLE ? ['console.log', 'debugger'] : []
  },
  build: {
    sourcemap: true,
    minify: 'terser', //esbuild // esbuild 打包更快，但是不能去除 console.log
    rollupOptions: {
      output: {
        // format: 'es',
        // manualChunks: {
        // 	'element-plus': ['element-plus']
        // },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
      }
    }
  },
  test:{
    environment: 'jsdom',
  },
  plugins: pluginList(process.env),
})
