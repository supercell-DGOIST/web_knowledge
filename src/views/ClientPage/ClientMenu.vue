<template>
  <nav class="menu">
    <div class="group">
      <section class="VPSidebarGroup">
        <div class="title">
          <h2 class="title-text">全局 API</h2>
        </div>
        <el-link>应用实例</el-link>
      </section>
    </div>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
  .menu {
    padding-top: 24px;
    outline: 0;
    width: var(--vp-open-nav-width);
    text-align: left;
    margin: 0 auto;
  }

  .title {
    padding: 6px 0;

    .title-text {
      line-height: 20px;
      font-size: 13px;
      font-weight: 600;
      color: var(--el-text-color-primary);
      transition: color 0.5s;
    }
  }
</style>
