<template>
  <div class="page-container">
    <div class="aside-bar open">
      <client-menu />
    </div>
    <div class="main">
      <div class="main-container">
        <main class="content">
          <client-content />
        </main>
        <div class="aside">
          <client-directory />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import ClientMenu from './ClientMenu.vue'
  import ClientContent from './ClientContent.vue'
  import ClientDirectory from './ClientDirectory.vue'
</script>

<style scoped lang="less">
  .page-container {
    width: 100%;
  }
  .aside-bar {
    position: fixed;
    top: var(--header-height);
    bottom: 0;
    left: 0;
    z-index: var(--vp-z-index-sidebar);
    padding: 0 32px 96px;
    width: var(--vp-sidebar-width-small);
    max-width: var(--vp-sidebar-width-mobile);
    border-right: 1px solid var(--el-border-color);
    opacity: 0;
    background-color: var(--el-bg-color);
    overflow-x: hidden;
    overflow-y: auto;
    transform: translate(-100%);
    transition:
      background-color 0.5s,
      opacity 0.5s,
      transform 0.3s ease;
  }

  .aside-bar.open {
    opacity: 1;
    visibility: visible;
    transform: translate(0);
    transition:
      background-color 0.5s,
      opacity 0.25s,
      transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  }

  .main {
    padding-left: var(--vp-sidebar-width-small);
    text-align: left;

    .main-container {
      padding: 64px 0 96px 64px;
      display: flex;
      width: 100%;
    }

    .content {
      min-width: 620px;
      margin: 0;
      position: relative;
      flex: 1;
    }

    .aside {
      position: relative;
      display: block;
      flex-shrink: 0;
      padding-left: 64px;
      width: 320px;
    }
  }
</style>
