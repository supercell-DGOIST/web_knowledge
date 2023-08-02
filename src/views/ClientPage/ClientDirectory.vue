<template>
  <nav class="directory">
    <div class="directory-content">
      <div class="outline-marker"></div>
      <div class="outline-title">本页目录</div>
      <nav>
        <ul>
          <li v-for="directory in directoryData" :key="directory.contentKey">
            <el-link class="outline-link">
              {{ directory.name }}
            </el-link>
          </li>
        </ul>
      </nav>
    </div>
  </nav>
</template>

<script setup lang="ts">
  import { ref, watchEffect, onUnmounted } from 'vue'
  import { useRoute } from 'vue-router'
  import { isDefined } from '@vueuse/core'
  import { directoryMap } from '@/metas'

  const route = useRoute()
  const directoryData: any = ref([])

  const stopWatch = watchEffect(() => {
    const clientName: any = route.params.clientName
    if (isDefined(clientName)) {
      directoryData.value = directoryMap[clientName]
    }
  })

  onUnmounted(() => {
    stopWatch()
  })
</script>

<style scoped lang="less">
  .directory {
    position: sticky;
    width: 224px;
    top: calc(var(--header-height) + 20px);
    bottom: 0;

    .directory-content {
      font-size: 13px;
      font-weight: 500;
      position: relative;
    }
  }

  .outline-marker {
    opacity: 0;
    position: absolute;
    background-color: var(--el-border-color-hover);
    border-radius: 4px;
    width: 4px;
    height: 20px;
    top: 32px;
    left: -12px;
    z-index: 0;
    transition:
      top 0.25s cubic-bezier(0, 1, 0.5, 1),
      opacity 0.25s,
      background-color 0.5s;
  }

  .outline-title {
    font-weight: 700;
    margin-bottom: 4px;
    text-transform: uppercase;
    letter-spacing: 0.4px;
  }

  .outline-link {
    line-height: 28px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .outline-link:hover:after {
    border: none;
  }
</style>
