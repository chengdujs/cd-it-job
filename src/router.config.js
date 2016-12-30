import Vue from 'vue';
import VueRouter from 'vue-router';

import NotFound from './pages/NotFound';

import { InviteApp, InviteHotList, InviteStaleList } from './pages/invite';

// 注册路由
Vue.use(VueRouter);

/* 路由配置 */
const routes = [
  {
    path: '',
    component: InviteApp,
    redirect: '/hot',
    children: [
      { path: 'hot', component: InviteHotList },
      { path: 'stale', component: InviteStaleList }
    ]
  },
  { path: '*', component: NotFound }
];

/* 注册路由 */
const router = new VueRouter({
  mode: 'history',
  routes
});

/* 路由 filter: todo 先开发功能 */
// router.beforeEach((to, from, next) => {
// 如果有路由匹配到了auth属性
//   if (to.matched.some(record => record.meta.auth)) {
//     next();
//   } else {
//     next();
//   }
// });

export default router;
