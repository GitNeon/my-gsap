<template>
  <header>
    <div class="gsap-logo"></div>
    <div class="description">
      <span>{{ title1 }}</span>
      <span>
          <img src="../../../assets/logo.svg" alt="vue-logo" style="width:16px; vertical-align: middle">
          {{ title2 }}
      </span>
    </div>
  </header>
</template>

<script setup>
defineProps({
  title1: {
    type: String,
    default: "使用教程"
  },
  title2: {
    type: String,
    default: "Based on vue3"
  }
})
</script>

<style scoped>

header {
  display: flex;
  justify-content: space-between;
}

header .gsap-logo {
  width: 300px;
  height: 110px;
  background-image: url('src/assets/greensock-logo.svg');
  background-size: cover;
}

header .description {
  position: relative;
  width: 300px;
  height: 110px;
}

header .description span:nth-of-type(1) {
  position: absolute;
  display: block;
  bottom: 30px;
  right: 5px;
  font-size: 20px;
  font-weight: bold;
  color: #88CE02;
  letter-spacing: 12px;
  font-style: italic;
}

header .description span:nth-of-type(2){
  position: absolute;
  display: block;
  right: 14px;
  bottom: 10px;
  color: #33A06F;
}
</style>
