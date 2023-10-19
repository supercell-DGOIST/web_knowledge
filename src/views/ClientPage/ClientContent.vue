<template>
  <h1 class="title">
    {{ title }}
  </h1>
  <section v-for="item in contentData" :key="item.key">
    <h2>
      {{ item.title }}
      <a class="header-anchor" href="javascript:;"> &ZeroWidthSpace; </a>
    </h2>
    <p>{{ item.description }}</p>
    <p v-if="item.imgUrl">
      <image-box :data-src="item.imgUrl" />
    </p>
    <ul>
      <li v-for="child_item in item.contents" :key="child_item.label">
        <p>
          <strong>{{ child_item.label }}</strong>
        </p>
        <p v-if="child_item.text">{{ child_item.text }}</p>
        <content-item :contents="child_item.contents">
          <template #default="scope">
            <content-item :contents="scope.item.contents" />
          </template>
        </content-item>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
  import { ImageBox } from '@/components'
  import { ref, watchEffect, onUnmounted } from 'vue'
  import { useRoute } from 'vue-router'
  import { isDefined } from '@vueuse/core'
  import { findClient } from '@/utils/common'
  import { contentMap } from '@/metas'
  import { ContentItem } from './Components'

  const route = useRoute()
  const title = ref('')
  const contentData: any = ref([])

  const stopWatch = watchEffect(() => {
    const clientName: any = route.params.clientName
    if (isDefined(clientName)) {
      const { name } = findClient(clientName)
      title.value = name
      contentData.value = contentMap[clientName]
    }
  })

  onUnmounted(() => {
    stopWatch()
  })
</script>

<style scoped lang="less">
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    position: relative;
    font-weight: 600;
    line-height: 1.5;
    outline: none;
  }

  .title {
    margin: 0 0 3rem;
    font-size: 38px;
    line-height: 1.4;
    letter-spacing: -0.02em;
  }

  h2 {
    margin: 4rem 0 1.8rem;
    border-top: 1px solid var(--el-border-color);
    padding-top: 1.8rem;
    font-size: 24px;
    letter-spacing: -0.02em;
  }

  .header-anchor {
    float: left;
    margin-left: -0.87em;
    padding-right: 0.23em;
    font-weight: 500;
    color: var(--el-color-primary);
  }

  .header-anchor:before {
    content: '#';
  }

  p,
  ul,
  ol,
  summary {
    margin-bottom: 1.2em;
  }

  p.m-0 {
    margin: 0;
  }

  ul {
    padding-left: 1.25rem;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.7;

    li {
      position: relative;

      a {
        color: var(--el-border-color-hover);
        transition: color 0.25s;
        text-decoration-style: dotted;
      }

      a:hover {
        color: var(--link-hover-color);
      }
    }
  }

  ul > li:before {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: var(--vt-c-text-3);
    transition: background-color 0.5s;
    left: -1.25rem;
    top: 0.75rem;
  }

  strong {
    font-weight: 600;
  }
</style>
