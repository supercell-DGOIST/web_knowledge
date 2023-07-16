import { defineConfig, mergeConfig, type UserConfig } from 'vite'
import { visualizer } from 'rollup-plugin-visualizer'
import baseConfig from '../configs/base_config'
import buildConfig from '../configs/build_config'
import { getEnvConfig, getLocalHost } from '../configs/util'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const baseConf: UserConfig = baseConfig(mode)
  const buildConf: UserConfig = buildConfig()
  const envConfig = getEnvConfig(mode)
  return mergeConfig(
    baseConf,
    mergeConfig(buildConf, {
      plugins: [
        visualizer({
          open: true,
          filename: 'stats.html',
          emitFile: true
        })
      ],
      preview: {
        host: getLocalHost(),
        port: Number(envConfig.VITE_PORT),
        open: true,
        proxy: {}
      }
    })
  )
})
