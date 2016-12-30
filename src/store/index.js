import Vue from 'vue';
import Vuex from 'vuex';

import { invite } from './modules';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    invite
  },
  strict: debug,
  plugins: debug ? [] : []
});
