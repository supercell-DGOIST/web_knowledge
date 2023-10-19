<template>
  <div class="home">
    <div class="dimmer"></div>
    <h2 class="mt-24 mb-14">Client Integrations</h2>
    <home-search @onChange="searchChange" />
    <div class="client-types" @click="onClientTypeClick">
      <el-space :size="18">
        <el-link>
          <span data-type="all">All clients({{ clients.length }})</span>
        </el-link>
        <el-link v-for="item in clientOptions.clientTypes" :key="item.type">
          <span :data-type="item.type">{{ item.type }}({{ item.count }})</span>
        </el-link>
      </el-space>
    </div>
    <div class="mt-5">
      <el-row :gutter="20" v-for="(clients, index) in clientOptions.clientList" :key="index + ''">
        <el-col class="mb-5" :span="8" v-for="item in clients" :key="item.key">
          <el-card
            class="cursor-pointer"
            :body-style="{ padding: 0 }"
            shadow="hover"
            @click="onClientClick(item.key)"
          >
            <div class="card-body">
              <span :class="item.icon"></span>
              <h3 class="font-bold">{{ item.name }}</h3>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
  import HomeSearch from './HomeSearch.vue'
  import { reactive } from 'vue'
  import { useRouter } from 'vue-router'
  import { useDebounceFn } from '@vueuse/core'
  import { clients } from '@/metas'
  import { getClientTypes } from '@/utils/common'
  import { getClientList } from './util'

  const copyClients = clients.slice()
  const clientOptions = reactive({
    clientTypes: getClientTypes(clients),
    clientList: getClientList(clients)
  })
  const router = useRouter()

  const debouncedFn = useDebounceFn((value: string) => {
    const _v = value.toLocaleLowerCase()
    const clientList = copyClients.filter((item: clientItem) =>
      item.name.toLocaleLowerCase().includes(_v)
    )
    clientOptions.clientList = getClientList(clientList)
  }, 800)

  const searchChange = (value: string): void => {
    debouncedFn(value)
  }

  const onClientTypeClick = (e: any): void => {
    const type: string | undefined = e.target.dataset.type
    if (type !== undefined) {
      let clientList: clientItems = copyClients
      if (type !== 'all') {
        clientList = copyClients.filter((item: clientItem) => item.type === type)
      }
      clientOptions.clientList = getClientList(clientList)
    }
    e.preventDefault()
  }

  const onClientClick = (key: string): void => {
    router.push({ name: 'Client', params: { clientName: key } })
  }
</script>

<style scoped lang="less">
  .home {
    width: 80%;
    margin: 0 auto;
    position: relative;
  }

  h2 {
    font-size: 76px;
    line-height: 1.25;
    font-weight: 900;
    letter-spacing: -1.5px;
    background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .dimmer {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    pointer-events: none;
    transition: background-color 0.2s;
    background-color: transparent;
    z-index: 2;
  }

  .client-types {
    width: 62.4%;
    margin: 20px auto;
    min-width: 580px;
    max-width: 596px;
  }

  .card-body {
    text-align: left;
    padding: var(--el-card-padding);

    h3 {
      display: inline-block;
      line-height: 40px;
      vertical-align: middle;
    }
  }
</style>
