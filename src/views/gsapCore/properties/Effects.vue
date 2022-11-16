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
    <p>鼠标放到方块上，div方块消失。</p>
    <n-card hoverable title="">
      <FadeEffect></FadeEffect>
    </n-card>
    <p>GSAP在这里提供了4个关键服务:</p>
    <ul>
      <li>它将 "targets "解析成一个数组。因此，如果选择器文本被传递进来，它就会变成一个传递给效果函数的元素数组。</li>
      <li>它每次都对配置对象应用默认值。不需要添加一堆if语句或自己应用默认值。</li>
      <li>
        如果你设置extendTimeline: true，效果的名称将被添加为GSAP的时间线原型的一个方法，这意味着你可以直接在任何时间线中插入该效
        果的实例
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import FadeEffect from "@/views/demo/FadeEffect.vue";

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
