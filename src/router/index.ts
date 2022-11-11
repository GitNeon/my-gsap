import { createRouter, createWebHistory } from "vue-router";
// @ts-ignore
import routes from '~pages';

/**
 * 配置了自动路由，将自动解析views下的文件
 *
 * 参考：https://www.cnblogs.com/dcyd/p/16474036.html
 * 传参数路由配置
 * 直接在views里面建立对应文件夹即可 传参提供了 [ ] 写法，例如在views/home/[id].vue, 这个文件最终会生成的path是：home/:id
 * 对应的生成规则：
 * src/views/index.vue -> /
 * src/views/index/home.vue -> / // 这里的home.vue就是index.vue的子路由（children）
 * src/views/user.vue -> /user
 * src/views/user/son.vue -> /user/son
 * src/views/user/[id].vue -> /user/:id
 * src/views/[user]/son.vue -> /:user/son
 */

// 默认跳转
routes.push({
  path: '/',
  redirect: '/introduction',
});

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

console.log(routes);

export default router;
