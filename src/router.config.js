import Vue from 'vue';
import VueRouter from 'vue-router';
// 注册路由
Vue.use(VueRouter);

import Home from './pages/Home.vue';
const routes = [
  { path: '', component: Home }
];

const router = new VueRouter({
  mode: 'history',
  routes // （缩写）相当于 routes: routes
});

router.beforeEach((to, from, next) => {
  // 如果有路由匹配到了auth属性
  if (to.matched.some(record => record.meta.auth)) {
    // authService.requireAuth(to, from, next);
    next();
  } else {
    next();
  }
});

export default router;
