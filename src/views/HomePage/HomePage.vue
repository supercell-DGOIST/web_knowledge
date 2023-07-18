<template>
  <div class="content">
    <page-search />
    <el-row :gutter="12">
      <el-col :span="8">
        <el-card shadow="always"><span class="logo"></span>name</el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover"><span class="logo"></span>name</el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="never"><span class="logo"></span>name</el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts" setup>
  import { PageSearch } from '@/components'
</script>
<style scoped>
  .content {
    width: 80%;
    margin: auto;
    position: relative;
  }
</style>
