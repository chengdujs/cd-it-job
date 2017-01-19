import { JOB } from '../constants';
import { ajax } from 'common';

/**
 * 存放数据
 */
const state = {
  jobs: [],
  cities: []
};

/**
 * 过滤数据
 */
const getters = {
  hotCities(state) {
    return state.cities.map(city => {
      if (city.hot) {
        return city;
      }
    });
  }
};

/**
 * 提交同步状态
 */
const mutations = {
  [JOB.GET_JOBS](state, data) {
    state.jobs = data;
  },
  [JOB.GET_CITIES](state, data) {
    state.cities = data;
    console.log(data)
  }
};

/**
 * 提交异步请求
 */
const actions = {
  [JOB.GET_JOBS]({ commit }) {
    return ajax.get('http://chat.hstar.org:8601/HkGhqLCUg/recommendation_list')
      .then(res => {
        if (res.state === 1) {
          commit(JOB.GET_JOBS, res.data);
        }
        return res
      });
  },
  [JOB.GET_CITIES]({ commit }) {
    return ajax.get('http://chat.hstar.org:8601/HkGhqLCUg/city_list')
      .then(res => {
        if (res.state === 1) {
          commit(JOB.GET_CITIES, res.data);
        }
        return res
      })
  }
};

export default {
  state,
  getters,
  mutations,
  actions
}
