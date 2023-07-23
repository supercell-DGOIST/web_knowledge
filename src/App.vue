<script setup lang="ts">
  import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
  import { readonly } from 'vue'
  import { PageNav } from '@/components'

  const locale = readonly(zhCn)
</script>

<template>
  <el-config-provider :locale="locale">
    <page-nav />
    <div class="content">
      <router-view />
    </div>
  </el-config-provider>
</template>

<style scoped lang="less">
  .content {
    padding-top: var(--header-height);
  }
</style>
