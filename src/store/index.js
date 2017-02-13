import Vue from 'vue';
import Vuex from 'vuex';

import { invite, job } from './modules';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    invite,
    job
  },
  strict: debug,
  plugins: debug ? [] : []
});
