<template>
  <n-menu
    :collapsed="collapsed"
    :collapsed-width="64"
    :collapsed-icon-size="22"
    :options="menuOptions"
    :default-expand-all="defaultExpandAll"
    v-model:value="selectedKey"
  />
</template>

<script setup lang="ts">
import type { MenuOption } from 'naive-ui'

defineProps({
  collapsed: {
    type: Boolean,
    default: false
  },
  menuOptions: {
    type: Array,
    default: [] as Array<MenuOption>
  },
  selectedKey: {
    type: String,
    default: ""
  },
  defaultExpandAll: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>

</style>
