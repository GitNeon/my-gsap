<template>
  <div>
    <h2>一、GSAP是什么</h2>
    <p style="text-indent: 2em">
      GSAP是greensock的缩写，是一款由国外开发的优秀的JavaScript动画库，官方网址：
      <n-button text tag="a" href="https://greensock.com/" target="_blank" type="primary" style="text-indent: 0">
        https://greensock.com/
      </n-button>
      。
    </p>
    <h2>二、特点：</h2>
    <ul>
      <li>可以控制SVG动画</li>
      <li>结合Three.js、Pixi.js等第三方库的使用</li>
      <li>控制canvas动画</li>
      <li>优秀的性能与兼容性</li>
      <li>提供各种Plugins增强拓展gsap</li>
    </ul>
    <h2>三、GSAP3都包括那些模块</h2>
    <img src="../../../src/assets/gsap.png" alt="gsap概览图" />
    <p>这里借用官网的一张图，GSAP包含结构解析：</p>
    <ul>
      <li>core Tools: GSAP的核心对象，提供通用的方法与属性，包含创建补间动画(Tween)和Timeline(时间轴)</li>
      <li>Plugins: attr属性控制，css控制，endArray(数组值缓动处理)，modifier(修改器)，snap(捕捉近似值)</li>
      <li>Eases: 内置的缓动动画函数</li>
      <li>Utility Methods: 内置的实用方法</li>
      <li>Extra Plugins: 额外的高级组件，gsap并没有内置，可以通过CDN额外获取js代码，再通过gsap进行加载</li>
      <li>Extra Eases: 额外的缓动动画函数，包括自定义</li>
      <li>
        Club GreenSock: 加入GreenSock会员，gsap其实是付费的(针对于商业来说，个人开发不涉及版权
        可以通过CDN获取插件js源码)
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
div {
  line-height: 40px;
}
</style>
