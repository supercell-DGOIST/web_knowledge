import { type UserConfig } from 'vite'
import tailwindcss from 'tailwindcss'
import { getEnvConfig, getLocalHost } from './util'

export default (mode: string): UserConfig => {
  const envConfig = getEnvConfig(mode)
  return {
    css: {
      postcss: {
        plugins: [tailwindcss]
      }
    },
    build: { sourcemap: true, cssMinify: false, minify: false, reportCompressedSize: false },
    server: {
      host: getLocalHost(),
      port: Number(envConfig.VITE_PORT),
      strictPort: true,
      open: true,
      proxy: {},
      hmr: true
    }
  }
}
