// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

// 导入axios
import axios from 'axios';
window.axios = axios;

// 导入Config
if (process.env.NODE_ENV !== 'production') {
  require('./config/config.dev.js');
} else {
  require('./config/config.prod.js');
}

// 导入路由和vuex
import router from './router.config';
import store from './store';

/* eslint-disable no-unused-vars */
const app = new Vue({
  router,
  store
}).$mount('#app');
