<template>
  <nav class="menu">
    <div class="group">
      <section class="contents">
        <div class="title">
          <h2 class="title-text">All Clients({{ clientList.length }})</h2>
        </div>
      </section>
      <section class="contents" v-for="client in clientList" :key="client.name">
        <div class="title">
          <h2 class="title-text title-text-gray">{{ client.name }}({{ client.items.length }})</h2>
        </div>
        <el-card
          class="cursor-pointer mb-3"
          :body-style="{ padding: '10px' }"
          shadow="hover"
          v-for="item in client.items"
          :key="item.key"
          @click="onClientClick(item)"
        >
          <span :class="item.icon"></span>
          <h3 class="font-bold">{{ item.name }}</h3>
        </el-card>
      </section>
    </div>
  </nav>
</template>

<script setup lang="ts">
  import { readonly } from 'vue'
  import { useRouter } from 'vue-router'
  import { getClientMenus } from './util'

  const router = useRouter()
  const clientList = readonly(getClientMenus())

  const onClientClick = (item: clientItem): void => {
    router.push({ name: 'Client', params: { clientName: item.key } })
  }
</script>

<style scoped lang="less">
  .menu {
    padding-top: 24px;
    outline: 0;
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

    .title-text-gray {
      color: rgba(60, 60, 60, 0.7);
    }
  }

  .content {
    overflow-x: hidden;
    overflow-y: auto;
    height: 73%;
    text-align: left;

    h3 {
      display: inline-block;
      line-height: 40px;
      vertical-align: middle;
    }
  }
</style>
