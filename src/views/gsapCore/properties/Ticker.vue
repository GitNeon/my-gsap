<template>
  <div>
    <p>
      gsap.ticker就像GSAP引擎的心跳--它在每个requestAnimationFrame事件上更新globalTimeline，所以它与浏览器的渲染周期完美同步。
      你可以添加你自己的监听器，在每次更新后运行自定义逻辑（对游戏开发者来说很好）。你可以随心所欲地添加监听器。
    </p>
    <p>示例：</p>
    <n-card hoverable title="">
      <n-code language="javascript" :code="code_1" />
    </n-card>
    <p>该方法接收三个参数：</p>
    <ul>
      <li>time: Number类型，从ticker开始的总时间（以秒为单位），Ticker的开始时间可能被lagSmoothing推前</li>
      <li>deltaTime: 从上一个tick开始经过的毫秒量。注意：你可以使用gsap.ticker.deltaRatio()来获得一个基于某个目标FPS的比率</li>
      <li>frame: Number - 帧（tick）的编号，在每个tick上都会被递增</li>
    </ul>
    <p>gsap.ticker.add()还有两个额外的参数</p>
    <ul>
      <li>onece: 布尔值 - 该回调将执行一次，然后自动删除</li>
      <li>prioritize: 布尔值- 回调将被添加到队列的顶部而不是底部，这意味着它将在当前队列中的任何监听器之前启动。
        如果你想让你的回调在GSAP的全局时间线之前启动，这很完美 </li>
    </ul>
    <n-card hoverable title="">
      <RotateTicker></RotateTicker>
    </n-card>
  </div>
</template>

<script setup lang="ts">
import RotateTicker from "../../demo/RotateTicker.vue";

const code_1 = `
function myFunction(time, deltaTime, frame) {
  // 你的自定义逻辑
}
gsap.ticker.add(myFunction);

// 在组件销毁时移除你的监听
gsap.ticker.remove(myFunction);
`
</script>

<style scoped>
p,li {
  line-height: 40px;
}
</style>
