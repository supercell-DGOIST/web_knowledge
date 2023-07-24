<template>
  <header class="nav-bar">
    <div class="nav">
      <div class="container">
        <router-link class="nav-title" to="/">
          <span class="logo"></span>
          <span class="font-bold pl-2">{{ title }}</span>
        </router-link>
        <div class="content">
          <el-space :size="20">
            <div class="client cursor-pointer" v-if="isClient" @click="handleSelect">
              <span :class="client.icon"></span>
              <h3 class="pl-2 pr-1">
                <el-link>{{ client.name }}</el-link>
              </h3>
              <el-icon><CaretBottom /></el-icon>
            </div>
            <el-switch
              class="switch-light"
              v-model="isDark"
              inline-prompt
              size="large"
              :active-icon="Moon"
              :inactive-icon="Sunny"
              @change="onToggle"
            />
          </el-space>
        </div>
      </div>
    </div>
  </header>
  <page-drawer ref="drawerRef" />
</template>

<script setup lang="ts">
  import PageDrawer from './PageDrawer.vue'
  import { Moon, Sunny, CaretBottom } from '@element-plus/icons-vue'
  import { useDark, useToggle, useColorMode } from '@vueuse/core'
  import { useRoute } from 'vue-router'
  import { clients } from '@/metas'

  const title = import.meta.env.VITE_APP_TITLE
  const route = useRoute()
  const mode = useColorMode()
  const isDark = useDark()
  const toggleDark = useToggle(isDark)
  const drawerRef = ref()
  const client = ref({
    name: '',
    icon: ''
  })

  const isClient = computed(() => route.name === 'Client')

  watchEffect(() => {
    if (route.name === 'Client') {
      client.value = clients.find((item: clientItem) => item.key === route.params.clientName)
    }
  })

  const handleSelect = (): void => {
    drawerRef.value.onOpen()
  }

  const onToggle = (isDark: any): void => {
    mode.value = isDark === true ? 'dark' : 'light'
    toggleDark(isDark)
  }
</script>

<style scoped lang="less">
  .nav-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: var(--el-bg-color);
    z-index: var(--vp-z-index-sidebar);
  }

  .nav {
    position: relative;
    border-bottom: 1px solid var(--el-border-color);
    height: var(--header-height);
    padding: 0 32px;
    white-space: nowrap;
    transition:
      border-color 0.5s,
      background-color 0.5s;
    background-image: radial-gradient(transparent 1px, var(--el-bg-color) 1px);
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
    height: var(--header-height);
    transition: opacity 0.25s;

    :hover {
      opacity: 0.6;
    }

    .logo {
      background: url('@/assets/knowledge.svg') center/100% 100%;
      display: inline-block;
      width: 24px;
      height: 24px;
    }
  }

  .content {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-grow: 1;

    .client {
      display: flex;
      flex-direction: center;
      align-items: center;

      .icon {
        display: inline-block;
        width: 24px;
        height: 24px;
        margin: 0;
      }
    }

    .switch-light {
      margin-left: 8px;
      --el-switch-on-color: var(--dark-switch-on-color);
    }
  }
</style>
