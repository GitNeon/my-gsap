<template>
  <div id="demo">
    <div ref="box" class="box green"></div>
  </div>
</template>

<script setup lang="ts">
import { ref }         from "vue";
import gsap            from "gsap";

const box = ref<HTMLElement | null>(null);

const myTicker = (time: number, deltaTime: number, frame: number) => {
  console.log("time", time);
  console.log("deltaTime", deltaTime);
  console.log("frame", frame);
};

onMounted(() => {
  gsap.to(box.value, {
    rotation: 360,
    x: 300,
    duration: 2,
    // repeat: -1,
    yoyo: true,
    ease: "linear",
  });

  gsap.ticker.add(myTicker);

});

onUnmounted(() => {
  gsap.ticker.remove(myTicker);
})
</script>

<style scoped>
#demo {
  height: 100px;
  position: relative;
  display: inline-block;
}

.box {
  width: 100px;
  height: 100px;
  position: relative;
  border-radius: 3px;
  margin: 4px;
  display: inline-block;
}

.green {
  background-color: greenyellow;
}
</style>
