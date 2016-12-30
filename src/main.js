import Vue from 'vue';
import router from './router.config';
import store from './store';

import App from './App';

// 导入Config
if (process.env.NODE_ENV !== 'production') {
  require('./config/config.dev.js');
} else {
  require('./config/config.prod.js');
}

/* eslint-disable no-unused-vars */
const app = new Vue({
  el: '#app',
  router,
  store,
  ...App
});
