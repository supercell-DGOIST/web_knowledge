<script setup lang="ts">
import { readonly, ref } from 'vue'
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// import en from 'element-plus/dist/locale/en.mjs';

const locale = readonly(zhCn)
const isDark = ref(false)
</script>

<template>
  <el-config-provider :locale="locale">
    <header class="nav-bar">
      <div class="nav">
        <div class="container">
          <router-link class="nav-title" to="/">
            <span class="text">Web Knowledge</span>
          </router-link>
          <div class="content">
            <el-switch class="switch-light" v-model="isDark" />
          </div>
        </div>
      </div>
    </header>
    <div class="">
      <div></div>
      <div>
        <router-view />
      </div>
    </div>
  </el-config-provider>
</template>

<style scoped lang="less">
.nav-bar {
  position: relative;
  top: 0;
  left: 0;
}

.nav {
  position: relative;
  border-bottom: 1px solid var(--vt-c-divider-light);
  padding: 0 32px;
  height: var(--vt-nav-height);
  background-color: var(--vt-c-bg);
  white-space: nowrap;
  transition:
    border-color 0.5s,
    background-color 0.5s;
}
.container {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: var(--vp-screen-max-width);
}

.nav-title {
  display: flex;
  align-items: center;
  padding-top: 1px;
  height: var(--vt-nav-height);
  transition: opacity 0.25s;

  .text {
    font-size: 16px;
    font-weight: 500;
  }

  :hover {
    opacity: 0.6;
  }
}

.content {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 1;

  .switch-light {
    margin-left: 8px;
    --el-switch-on-color: var(--vt-c-black-mute);
  }
}
</style>
