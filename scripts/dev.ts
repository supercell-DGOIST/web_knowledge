import { defineConfig, mergeConfig, type UserConfig } from 'vite'
import baseConfig from '../configs/base_config'
import devConfig from '../configs/dev_config'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const baseConf: UserConfig = baseConfig(mode)
  const devConf: UserConfig = devConfig(mode)
  return mergeConfig(baseConf, devConf)
})
