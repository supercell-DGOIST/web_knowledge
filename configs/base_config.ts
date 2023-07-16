import vue from '@vitejs/plugin-vue'
import { type UserConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { toPath } from './util'

export default (mode: string): UserConfig => {
  return {
    mode,
    envDir: toPath('env'),
    resolve: {
      alias: {
        '~/': toPath('./'),
        '@/': toPath('src/')
      }
    },
    json: {
      stringify: true
    },
    logLevel: 'error',
    plugins: [
      vue(),
      AutoImport({
        imports: ['vue'],
        resolvers: [ElementPlusResolver()],
        dts: toPath('types/auto-imports.d.ts')
      }),
      Components({
        dirs: ['src/components'],
        resolvers: [ElementPlusResolver()],
        dts: toPath('types/components.d.ts')
      })
    ]
  }
}
