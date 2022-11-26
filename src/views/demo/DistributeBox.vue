<template>
  <div class="container">
    <div :ref="getListDOM" class="box green"></div>
    <div :ref="getListDOM" class="box green"></div>
    <div :ref="getListDOM" class="box green"></div>
    <div :ref="getListDOM" class="box green"></div>
    <div :ref="getListDOM" class="box green"></div>
    <div :ref="getListDOM" class="box green"></div>
    <div :ref="getListDOM" class="box green"></div>
    <div :ref="getListDOM" class="box green"></div>
    <div :ref="getListDOM" class="box green"></div>
    <div :ref="getListDOM" class="box green"></div>
    <div :ref="getListDOM" class="box green"></div>
    <div :ref="getListDOM" class="box green"></div>
    <div :ref="getListDOM" class="box blue"></div>
    <div :ref="getListDOM" class="box blue"></div>
    <div :ref="getListDOM" class="box blue"></div>
    <div :ref="getListDOM" class="box blue"></div>
    <div :ref="getListDOM" class="box blue"></div>
    <div :ref="getListDOM" class="box blue"></div>
    <div :ref="getListDOM" class="box blue"></div>
    <div :ref="getListDOM" class="box blue"></div>
    <div :ref="getListDOM" class="box blue"></div>
    <div :ref="getListDOM" class="box blue"></div>
    <div :ref="getListDOM" class="box blue"></div>
    <div :ref="getListDOM" class="box blue"></div>
    <div :ref="getListDOM" class="box blue"></div>
    <div :ref="getListDOM" class="box blue"></div>
    <div :ref="getListDOM" class="box salmon"></div>
    <div :ref="getListDOM" class="box salmon"></div>
    <div :ref="getListDOM" class="box salmon"></div>
    <div :ref="getListDOM" class="box salmon"></div>
    <div :ref="getListDOM" class="box salmon"></div>
    <div :ref="getListDOM" class="box salmon"></div>
    <div :ref="getListDOM" class="box salmon"></div>
    <div :ref="getListDOM" class="box salmon"></div>
    <div :ref="getListDOM" class="box salmon"></div>
    <div :ref="getListDOM" class="box salmon"></div>
    <div :ref="getListDOM" class="box salmon"></div>
    <div :ref="getListDOM" class="box salmon"></div>
    <div :ref="getListDOM" class="box salmon"></div>
    <div :ref="getListDOM" class="box salmon"></div>
  </div>
</template>

<script setup lang="ts">
import gsap            from "gsap";

let distributor = gsap.utils.distribute({
  base: 0,
  each: 30,
  from: "start",
  ease: "power1.inOut"
});

const listDOM: HTMLElement[] = reactive([]);

const getListDOM = (el: HTMLElement) => {
  listDOM.push(el);
}

onMounted(() => {
  gsap.to(listDOM, {
    rotate: distributor
  })
})
</script>

<style scoped>
.container {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  border: 1px solid black;
  padding: 20px;
  width: 800px;
  height: 400px;
}

.green {
  background-color: green;
}

.blue {
  background-color: skyblue;
}

.salmon {
  background-color: salmon;
}

.box {
  width: 60px;
  height: 60px;
  border-radius: 3px;
  margin: 5px;
}
</style>
