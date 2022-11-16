<template>
  <div>
    <p>gsap.globalTimeline是所有时间轴动画的根实例，它能一次影响所有的动画，需要的注意的是，这个根实例上的一些方法会影响到
     (例如pause()方法)， gsap.delayedCalls()上，因为这个方法本质上也是补间动画，关于delayedCalls的用法，在方法小节中会看到
      具体用法。
    </p>
    <p>一些有用的方法</p>
    <ul>
      <li>gsap.globalTimeline.pause(): 暂停全局时间线上的所有动画。返回值是自身。</li>
      <li>gsap.globalTimeline.play(): 恢复播放</li>
      <li>gsap.globalTimeline.paused(): 这个方法返回暂停的状态，如果全局时间线被暂停了，返回true。如果全局时间线正在播放，
        则返回false
      </li>
      <li>gsap.globalTimeline.timeScale(): 全局时间线的一个动画运行速度值，他可以全局影响所有动画的快慢</li>
    </ul>
    <p>关于timeScale()，你可以这么使用</p>
    <n-card hoverable title="">
      <n-code language="javascript" :code="code_1" />
    </n-card>
  </div>
</template>

<script setup lang="ts">
const code_1 = `
gsap.globalTimeline.timeScale(0.5); // 运行速度变慢一半
gsap.globalTimeline.timeScale(2); // 运行速度翻倍
let currentTimeScale = gsap.globalTimeline.timeScale(); // 获取运行速度值
`
</script>

<style scoped>
p,li {
  line-height: 40px;
}
</style>
