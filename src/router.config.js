import Vue from 'vue';
import VueRouter from 'vue-router';

/* 加载模块 */
import NotFound from './pages/NotFound';

import App from './pages/App';
import { InviteHotList, InviteStaleList } from './pages/invite';

// 注册路由
Vue.use(VueRouter);

/* 路由配置 */
const routes = [{
  path: '',
  component: App,
  children: [{
    path: 'hot',
    component: InviteHotList
  }, {
    path: 'stale',
    component: InviteStaleList
  }]
}, {
  // 404
  path: '*',
  component: NotFound
}];

/* 注册路由 */
const router = new VueRouter({
  mode: 'history',
  routes // （缩写）相当于 routes: routes
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
