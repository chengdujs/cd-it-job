import Vue from 'vue';
import VueRouter from 'vue-router';

import Layout from './pages/Layout';

// System
import { NotFound } from './pages/system';

// Home
import { Home } from './pages/home';

// Search
import { Search } from './pages/search';

// Message
import { Message } from './pages/message';

// My
import { My } from './pages/my';

// Test Page
import Test from './pages/Test';

// 注册路由
Vue.use(VueRouter);

/* 路由配置 */
const routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: '', component: Home },
      { path: 'search', component: Search },
      { path: 'message', component: Message },
      { path: 'my', component: My }
    ]
  },
  { path: '/test', component: Test },
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
