import Vue from 'vue';
import VueRouter from 'vue-router';

import LayoutPage from './pages/LayoutPage';

// System
import { NotFound } from './pages/system';

// Home
import { HomePage } from './pages/home';

// Search
import { SearchPage } from './pages/search';
// import SearchDetail from './pages/search/SearchDetail.vue'; 调试搜索结果页面调用
// Message
import { MessagePage } from './pages/message';

// My
import { MyPage } from './pages/my';

// Test Page
import TestPage from './pages/TestPage';

// 注册路由
Vue.use(VueRouter);

/* 路由配置 */
const routes = [
  {
    path: '',
    component: LayoutPage,
    children: [
      { path: '', component: HomePage },
      { path: 'search', component: SearchPage },
    //  { path: 'search', component: SearchDetail },
      { path: 'message', component: MessagePage },
      { path: 'my', component: MyPage }
    ]
  },
  { path: '/test', component: TestPage },
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
