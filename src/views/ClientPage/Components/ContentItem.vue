<template>
  <p v-for="_child_item in contents" :class="_child_item.link ? 'm-0' : ''" :key="_child_item.text">
    <strong v-if="_child_item.label">{{ _child_item.label }}</strong>
    <a v-if="_child_item.link" :href="_child_item.link">
      {{ _child_item.text }}
    </a>
    <span v-if="!_child_item.link">
      {{ _child_item.text }}
    </span>
    <slot :item="_child_item" />
  </p>
</template>

<script setup lang="ts">
  defineProps(['contents'])
</script>

<style scoped lang="less"></style>
