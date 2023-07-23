<template>
  <div class="search-box">
    <el-input
      v-model="searchValue"
      size="large"
      placeholder="请输入"
      @input="onInput"
      :suffix-icon="Search"
      clearable
    />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { Search } from '@element-plus/icons-vue'

  const emits = defineEmits<(e: 'onChange', value: string) => void>()
  const searchValue = ref('')

  const onInput = (value: string): void => {
    emits('onChange', value)
  }
</script>

<style scoped lang="less">
  .search-box {
    height: 100%;
    width: 62.4%;
    margin: 0 auto;
    box-sizing: border-box;
    min-width: 580px;
    max-width: 596px;
    white-space: nowrap;
  }
</style>
