<template>
  <main>
    <Header></Header>
    <n-divider />
    <n-layout has-sider style="height: calc(100% - 180px)">
      <n-layout-sider
        collapse-mode="transform"
        :collapsed-width="20"
        :width="240"
        show-trigger="arrow-circle"
        content-style="padding: 0 12px;"
        :on-after-enter="onExpand"
        :on-after-leave="onCollapse"
        bordered
      >
        <Menu :menu-options="menuOptions" :selected-key="selectedKeyRef" :default-expand-all="true"></Menu>
      </n-layout-sider>
      <n-layout-content content-style="padding: 24px;" :native-scrollbar="false">
        <router-view v-slot="{ Component }">
          <SlideTransition>
            <component :is="Component"></component>
          </SlideTransition>
        </router-view>
      </n-layout-content>
    </n-layout>
  </main>
</template>

<script setup lang="ts">
import { ref, reactive, h } from "vue";
import Header from "./components/Header.vue";
import Menu from "./components/Menu.vue";
import type { MenuOption } from "naive-ui";
import SlideTransition from "../../components/transition/SlideTransition.vue";
import { RouterLink } from "vue-router";

const selectedKeyRef = ref("introduction");

const onExpand = () => {
  console.log("已展开");
};

const onCollapse = () => {
  console.log("已折叠");
};

const go = (name: string, path: string) => {
  const _cfg = {
    to: {
      path: path,
    },
  };

  return () => h(RouterLink, _cfg, { default: () => name });
};

const menuOptions: MenuOption[] = reactive([
  {
    label: go('GSAP入门','/introduction'),
    key: "introduction",
  },
  {
    label: "GSAP核心",
    key: "gsap",
    children: [
      {
        type: "group",
        label: "属性",
        key: "properties",
        children: [
          {
            label: go('gsap.effects','/gsapcore/properties/effects'),
            key: "gsap.effects",
          },
          {
            label: go("gsap.globalTimeline","/gsapcore/properties/globaltimeline"),
            key: "gsap.globalTimeline",
          },
          {
            label: go("gsap.ticker","/gsapcore/properties/ticker"),
            key: "gsap.ticker",
          },
          {
            label: go("gsap.utils", "/gsapcore/properties/utils"),
            key: "gsap.utils",
          },
        ],
      },
    ],
  },
]);
</script>

<style>
main {
  position: relative;
  width: 1200px;
  height: 100%;
  margin: 0 auto;
}

.n-menu .n-menu-item-content .n-menu-item-content-header a {
  display: inline-block;
  width: 100%;
  height: 100%;
}
</style>
