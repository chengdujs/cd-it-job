import Vue from 'vue';
import VueRouter from 'vue-router';

import LayoutPage from './pages/LayoutPage';
// System
import { NotFound } from './pages/system';
// Home
import { HomePage } from './pages/home';
// Search
import { SearchPage, SearchDetail } from './pages/search';
// Message
import { MessagePage } from './pages/message';
// My
import { MyPage } from './pages/my';
// Job
import { Job, JobPreview } from './pages/hr';
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
      { path: 'searchdetail', component: SearchDetail },
      { path: 'message', component: MessagePage },
      { path: 'my', component: MyPage },
      { path: 'hr/job', component: Job },
      { path: 'hr/job/preview', component: JobPreview }
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
