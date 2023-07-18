<script setup lang="ts">
  import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
  import { PageNav } from '@/components'

  const locale = readonly(zhCn)
</script>

<template>
  <el-config-provider :locale="locale">
    <page-nav />
    <div class="">
      <div></div>
      <div>
        <router-view />
      </div>
    </div>
  </el-config-provider>
</template>
