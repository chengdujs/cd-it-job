import Vue from 'vue';
import Vuex from 'vuex';
// 注册Resource
Vue.use(Vuex);

import { actions } from './actions';
import { state, mutations } from './mutations';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  state,
  actions,
  mutations,
  strict: debug,
  plugins: debug ? [] : []
});
