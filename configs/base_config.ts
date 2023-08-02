import vue from '@vitejs/plugin-vue'
import { type UserConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { toPath } from './util'

export default (mode: string): UserConfig => {
  return {
    mode,
    envDir: toPath('env'),
    resolve: {
      alias: {
        '~': toPath('.'),
        '@': toPath('src'),
        assets: toPath('src/assets')
      }
    },
    json: {
      stringify: true
    },
    plugins: [
      vue(),
      AutoImport({
        resolvers: [
          ElementPlusResolver(),
          // 自动导入图标组件
          IconsResolver({
            prefix: 'Icon'
          })
        ],
        dts: toPath('types/auto-imports.d.ts')
      }),
      Components({
        resolvers: [
          // 自动导入 Element Plus 组件
          ElementPlusResolver(),
          // 自动注册图标组件
          IconsResolver({
            enabledCollections: ['ep']
          })
        ],
        dts: toPath('types/components.d.ts')
      }),
      Icons({
        autoInstall: true
      })
    ]
  }
}
