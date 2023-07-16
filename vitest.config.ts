import { defineConfig, mergeConfig, configDefaults } from 'vitest/config'
import baseConfig from './configs/base_config'
import { toPath } from './configs/util'

export default defineConfig(({ mode }) => {
  const baseConf = baseConfig(mode)

  return mergeConfig(baseConf, {
    test: {
      include: ['src/tests/*.{test}.ts'],
      exclude: [...configDefaults.exclude, 'cypress/*'],
      environment: 'jsdom',
      root: toPath('./'),
      transformMode: {
        web: [/\.[jt]sx$/]
      }
    }
  })
})
