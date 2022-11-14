<template>
  <div id="demo" ref="demo">
    <div class="box green"></div>
    <div class="box grey"></div>
    <div class="box orange"></div>
    <div class="box green"></div>
    <div class="box grey"></div>
    <div class="box orange"></div>
    <div class="box green"></div>
    <div class="box grey"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import gsap from 'gsap';

gsap.registerEffect({
  name: "fade",
  effect: (targets: any, config: any) => {
    return gsap.to(targets, {
      duration: config.duration,
      opacity: 0
    })
  },
  defaults: {
    duration: 2
  },
  extendTimeline: true
})



const demo = ref<HTMLElement | null>(null);

const eachHtmlEl = (el: HTMLElement | null) => {
  Array.from(el?.children || []).forEach((item) => {
    item.addEventListener("mouseenter",() => {
      gsap.effects.fade(item)
    })
  })
}

onMounted(() => {
  eachHtmlEl(demo.value)
})
</script>

<style scoped>
#demo {
  height: 100px;
  position: relative;
  display: inline-block;
}

.box {
  width: 50px;
  height: 50px;
  position: relative;
  border-radius: 3px;
  margin: 4px;
  display: inline-block;
}

.green {
  background-color: greenyellow;
}

.orange {
  background-color: orange;
}

.grey {
  background-color: #989898;
}
</style>
