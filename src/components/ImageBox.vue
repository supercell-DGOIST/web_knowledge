<template>
  <div class="overflow-hidden">
    <div class="image-box image-box-animation text-center">
      <img src="/picture.svg" class="empty" :data-src="dataSrc" v-lazy />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { lazyLoad } from '@/directives'

  defineProps({
    width: Number,
    height: Number,
    dataSrc: String
  })

  const vLazy = lazyLoad
</script>

<style lang="less" scoped>
  @keyframes ant-skeleton-loading {
    0% {
      transform: translateX(-37.5%);
    }

    to {
      transform: translateX(37.5%);
    }
  }

  .image-box {
    position: relative;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    vertical-align: top;
    min-height: 330px;
    width: 100%;

    .empty {
      max-width: 49px;
    }
  }

  .image-box-animation::after {
    position: absolute;
    top: 0;
    right: -150%;
    bottom: 0;
    left: -150%;
    background: linear-gradient(
      90deg,
      hsla(0, 0%, 75%, 0.2) 25%,
      hsla(0, 0%, 51%, 0.24) 37%,
      hsla(0, 0%, 75%, 0.2) 63%
    );
    animation: ant-skeleton-loading 1.4s ease infinite;
    content: '';
  }
</style>
