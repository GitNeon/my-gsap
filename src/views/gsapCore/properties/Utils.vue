<template>
  <div>
    <p>
      gsap.utils这个对象上提供了很多实用工具方法：请注意，许多函数可以选择返回FUNCTIONS，这样它们就可以直接插入到tweens中，
      利用GSAP的基于函数的能力。在这种情况下，它们将为每个目标调用一次，而不是对它们都使用相同的最终值。
    </p>
    <n-divider></n-divider>
    <p>1、checkPrefix(): 给checkPrefix()提供任何CSS属性名称，它将返回该属性的适当的、有浏览器前缀的版本（如果需要）。
      如果不需要前缀，它将返回原来的属性名称。如果该属性不存在，它将返回未定义</p>
    <n-card hoverable title="">
      <n-button @click="info(filterProperty)">查看filter属性</n-button>
      <n-code language="javascript" :code="code_1" />
    </n-card>
    <p>
      2、clamp(): 该方法接收三个参数： min,max,value，在给定值与范围区间内返回一个值，具体规则为: 若value在[min,max]范围内，
      则返回它自身值；若value小于min，则返回min；若value大于max,则返回max
    </p>
    <n-card hoverable title="">
      <n-code language="javascript" :code="code_2" />
    </n-card>
    <p>你也可以不传第三个参数，返回值将会是一个函数，方便复用，例如：</p>
    <n-card hoverable title="">
      <n-code language="javascript" :code="code_3" />
    </n-card>
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap";
import { useMessage } from 'naive-ui'

const code_1 = `
// 返回带有前缀的属性, "WebkitFilter", or "MozFilter" 具体取决于你的浏览器
let filterProperty = gsap.utils.checkPrefix("filter");
`;

const code_2 = `
gsap.utils.clamp(0, 100, 105); // 给定value大于100，则返回100
gsap.utils.clamp(0, 100, -50); // 给定value小于0，则返回0
gsap.utils.clamp(0, 100, 20); // 给定的value处于0-100之间，返回它自身，20
`;

const code_3 = `
let clamper = gsap.utils.clamp(0, 100);
console.log( clamper(105) ); // 100
console.log( clamper(-50) ); // 0
console.log( clamper(20) );  // 20
`;

let filterProperty = gsap.utils.checkPrefix("filter");

const message = useMessage();

const info = (payload: string) => {
  message.info(payload)
}
</script>

<style scoped>
p,li {
  line-height: 40px;
}
</style>
