// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import router from './router.config';
import store from './store';

// 导入Config
if (process.env.NODE_ENV !== 'production') {
  require('./config/config.dev.js');
} else {
  require('./config/config.prod.js');
}

/* eslint-disable no-unused-vars */
const app = new Vue({
  router,
  store
}).$mount('#app');
