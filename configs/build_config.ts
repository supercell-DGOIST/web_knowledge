import { type UserConfig } from 'vite'
import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'
import cssnano from 'cssnano'
import gzipPlugin from 'rollup-plugin-gzip'
import Inspect from 'vite-plugin-inspect'

export default (): UserConfig => {
  return {
    css: {
      postcss: {
        plugins: [autoprefixer, tailwindcss, cssnano({ preset: 'default' })]
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

    plugins: [
      gzipPlugin(),
      Inspect({
        build: true,
        outputDir: '.vite-inspect'
      })
    ]
  }
}
