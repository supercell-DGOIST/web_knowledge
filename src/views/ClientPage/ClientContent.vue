<template>
  <h1 class="title">
    应用实例 API
    <a
      class="header-anchor"
      href="#application-api"
      aria-label='Permalink to "应用实例 API {#application-api}"'
      >&ZeroWidthSpace;</a
    >
  </h1>
  <h2 id="createapp" tabindex="-1">
    createApp()
    <a class="header-anchor" href="#createapp" aria-label='Permalink to "createApp() {#createapp}"'
      >&ZeroWidthSpace;</a
    >
  </h2>
  <p>创建一个应用实例。</p>
  <ul>
    <li>
      <p><strong>类型</strong></p>
      <div class="language-ts">
        <button title="Copy Code" class="copy"></button><span class="lang">ts</span>
        <pre
          class="shiki material-theme-palenight"
        ><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createApp</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">rootComponent</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Component</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">rootProps</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">object</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">App</span></span></code></pre>
      </div>
    </li>
    <li>
      <p><strong>详细信息</strong></p>
      <p>第一个参数是根组件。第二个参数可选，它是要传递给根组件的 props。</p>
    </li>
    <li>
      <p><strong>示例</strong></p>
      <p>可以直接内联根组件：</p>
    </li>
    <li>
      <p>
        <strong>参考</strong
        ><a href="/guide/essentials/application.html">指南 - 创建一个 Vue 应用实例</a>
      </p>
    </li>
  </ul>
</template>

<script setup lang="ts"></script>

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
  .header-anchor {
    float: left;
    margin-left: -0.87em;
    padding-right: 0.23em;
    font-weight: 500;
    opacity: 0;
    transition:
      color 0.25s,
      opacity 0.25s;
  }
  h2 {
    margin: 4rem 0 1.8rem;
    border-top: 1px solid var(--vt-c-divider-light);
    padding-top: 1.8rem;
    font-size: 24px;
    letter-spacing: -0.02em;
  }

  p,
  ul,
  ol,
  summary {
    margin-bottom: 1.2em;
  }

  ul {
    padding-left: 1.25rem;

    li {
      position: relative;
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
