<template>
  <n-config-provider :hljs="hljs">
    <n-message-provider>
      <Home></Home>
    </n-message-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import Home         from './views/home/index.vue';
import hljs         from 'highlight.js/lib/core';
import javascript   from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);
</script>

<style scoped>
</style>
