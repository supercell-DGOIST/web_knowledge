import { type UserConfig } from 'vite'
import autoprefixer from 'autoprefixer'
import gzipPlugin from 'rollup-plugin-gzip'

export default (): UserConfig => {
  return {
    css: {
      postcss: {
        plugins: [autoprefixer]
      }
    },
    build: {
      reportCompressedSize: false,
      minify: 'terser',
      terserOptions: {
        compress: { drop_console: true, drop_debugger: true }
      },
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name]-[hash:8][extname]',
          chunkFileNames: '[name]-[hash:8].js',
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor'
            }
          }
        },
        external: []
      }
    },
    plugins: [gzipPlugin()]
  }
}
