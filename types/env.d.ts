/// <reference types="vite/client" />

declare module 'element-plus/dist/locale/zh-cn.mjs'

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_BASE_URL: string
  readonly VITE_PORT: string
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
