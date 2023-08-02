<template>
  <el-drawer
    v-model="drawerOpen"
    title="请选择"
    direction="ltr"
    :before-close="onClose"
    :open-delay="400"
    append-to-body
  >
    <template #default>
      <el-input
        v-model="searchValue"
        size="large"
        placeholder="请输入"
        @input="onInput"
        :suffix-icon="Search"
        clearable
      />
      <div class="mt-2" @click="onClientTypeClick">
        <el-link class="inline-block mr-2">
          <span data-type="all">API clients({{ clients.length }})</span>
        </el-link>
        <el-link
          class="inline-block mr-2"
          v-for="item in clientOptions.clientTypes"
          :key="item.type"
        >
          <span :data-type="item.type">{{ item.type }}({{ item.count }})</span>
        </el-link>
      </div>
      <div class="content mt-6">
        <el-card
          class="cursor-pointer mb-3"
          :body-style="{ padding: '10px' }"
          shadow="hover"
          v-for="item in clientOptions.clientList"
          :key="item.key"
          @click="onClientClick(item)"
        >
          <span :class="item.icon"></span>
          <h3 class="font-bold">{{ item.name }}</h3>
        </el-card>
      </div>
    </template>
  </el-drawer>
</template>

<script setup lang="ts">
  import { Search } from '@element-plus/icons-vue'
  import { ref, reactive } from 'vue'
  import { useDebounceFn } from '@vueuse/core'
  import { useRouter } from 'vue-router'
  import { clients } from '@/metas'
  import { getClientTypes } from '@/utils/common'

  const copyClients = clients.slice()
  const drawerOpen = ref(false)
  const searchValue = ref('')
  const clientOptions = reactive({
    clientTypes: getClientTypes(clients),
    clientList: clients.slice()
  })
  const router = useRouter()

  const onOpen = (): void => {
    drawerOpen.value = true
  }

  const onClose = (): void => {
    drawerOpen.value = false
  }

  const debouncedFn = useDebounceFn((value: string) => {
    const _v = value.toLocaleLowerCase()
    const clientList = copyClients.filter((item: clientItem) =>
      item.name.toLocaleLowerCase().includes(_v)
    )
    clientOptions.clientList = clientList
  }, 800)

  const onInput = (value: string): void => {
    debouncedFn(value)
  }

  const onClientTypeClick = (e: any): void => {
    const type: string | undefined = e.target.dataset.type
    if (type !== undefined) {
      let clientList: clientItems = copyClients
      if (type !== 'all') {
        clientList = copyClients.filter((item: clientItem) => item.type === type)
      }
      clientOptions.clientList = clientList
    }
    e.preventDefault()
  }

  const onClientClick = (item: clientItem): void => {
    router.push({ name: 'Client', params: { clientName: item.key } })
    onClose()
  }

  defineExpose({
    onOpen
  })
</script>

<style scoped lang="less">
  .content {
    overflow-x: hidden;
    overflow-y: auto;
    height: 73%;
  }

  .content {
    text-align: left;

    h3 {
      display: inline-block;
      line-height: 40px;
      vertical-align: middle;
    }
  }
</style>
