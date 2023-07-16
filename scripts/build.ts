import { defineConfig, mergeConfig, type UserConfig } from 'vite'
import baseConfig from '../configs/base_config'
import buildConfig from '../configs/build_config'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const baseConf: UserConfig = baseConfig(mode)
  const buildConf: UserConfig = buildConfig()
  return mergeConfig(baseConf, buildConf)
})
