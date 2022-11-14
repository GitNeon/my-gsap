<template>
  <div>
    <p>通过effects，你可以全局注册自定义的动画效果,一旦一个效果被注册，你可以像这样直接访问它在gsap.effects对象上。</p>
    <n-card hoverable title="">
      <n-code language="javascript" :code="code_1" />
    </n-card>
    <p>下面通过一个自定义淡入淡出effect效果的例子，体会它的应用</p>
    <n-card hoverable title="">
      <n-code language="javascript" :code="code_2" />
    </n-card>
    <p>鼠标放到方块上，div方块消失</p>
    <n-card hoverable title="">
      <FadeEffect></FadeEffect>
    </n-card>
  </div>
</template>

<script setup lang="ts">
import FadeEffect from '@/views/demo/FadeEffect.vue';

const code_1 = `
  gsap.effects.explode(".box", {
    direction: "up", // 这里可以引用任何属性，这个例子中引用了“方向”这个属性
    duration: 3
  });
`;

const code_2 = `
  gsap.registerEffect({
    name: "fade",
    effect: (targets, config) => {
        return gsap.to(targets, { duration: config.duration, opacity: 0 });
    },
    defaults: { duration: 2 },
    extendTimeline: true, // 配置了这个属性，可以在timeline上使用
});
`;
</script>

<style scoped>
p {
  line-height: 40px;
}
</style>
