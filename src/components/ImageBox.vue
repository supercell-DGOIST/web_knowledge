<template>
  <div class="overflow-hidden">
    <div class="image-box text-center" :style="{ height: `${height}px` }">
      <img
        :src="getImageUrl('assets/picture.svg')"
        :data-src="dataSrc"
        :width="width"
        :height="height"
        v-lazy
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { lazyLoad } from '@/directives'
  import { getImageUrl } from '@/utils/common'

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
    height: 199px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    vertical-align: top;

    img {
      width: 48px;
      height: 48px;
      line-height: 48px;
      max-width: 192px;
      max-height: 192px;
    }
  }

  .image-box::after {
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
