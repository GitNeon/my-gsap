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
    <p>3、distribute()：这个方法就是对多个DOM元素进行处理，根据配置的对象的内容gsap.utils.distribute将会随机返回一个值以应用
      动画效果</p>
    <p>看下面的例子，每个方块旋转的角度是不一致的</p>
    <DistributeBox></DistributeBox>
    <p>上面仅仅是一个简单的例子，利用这个方法，你可以批量对DOM元素设定一组值。</p>
    <p>gsap.utils.distribute这个方法接收一个config配置对象参数：</p>
    <p>示例：</p>
    <n-card hoverable title="">
      <n-code language="javascript" :code="code_4" />
    </n-card>
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap";
import { useMessage } from 'naive-ui';
import DistributeBox from "../../demo/DistributeBox.vue";

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

const code_4 = `
let distributor = gsap.utils.distribute({

    // base: 基数，默认从基数开始，默认值为0，当然你可以自己设定
    base: 50,

    // 分配给各目标的总数之和，如果amount为100，有100个目标，每个返回值之间会有1的差异
    // 如果你想在每个目标之间指定一个特定的数值，请使用each属性来代替。
    amount: 100,

    // Number - 每个目标之间要增加的数量（这个数量在返回时被添加到 "基数 "中）。因此，如果每个是1，有4个目标，
    // 它将返回0、1、2和3。
    // each: 4

    // from : [数字 | 字符串 | 数组] - 从目标数组中的位置开始（可以是一个索引数字，一个关键字，如 "开始"、"中心"、"边缘"、"随机
    // "或 "结束"，或者一个沿x轴和y轴的比率数组，如[0.25, 0.75]）。默认为0。
    // position in the targets array to begin from (can be an index number, a keyword like "start", "center",
    // "edges", "random", or "end", or an array of ratios along the x-axis and y-axis like [0.25, 0.75]) (default: 0)
    from: "center",

    // grid : [String | Array] - 以元素在网格[行，列]中的位置为基础进行分配，
    // 比如[5，10]，而不是一个平面阵列。你可以使用 "auto "来让GSAP尝试自动检测DOM元素的列数和行数。
    grid: "auto",

    // 对于基于网格的分布，你可以将测量限制在一个轴上（"x "或 "y"）
    axis: "y",

    // 动画效果
    ease: "power1.inOut"
 });
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
