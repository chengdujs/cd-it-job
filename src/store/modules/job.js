import { JOB } from '../constants';
import { ajax } from 'common';

/**
 * 存放数据
 */
const state = {
  jobs: [],
  cities: [],
  searchedJobs: [],
  jobTags: []
};

/**
 * 过滤数据
 */
const getters = {
  hotCities: state => state.cities.filter(city => city.hot),
  hotJobTags: state => state.jobTags.filter(tag => tag.hot)
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
  },
  [JOB.GET_SEARCHED_JOBS](state, data) {
    state.searchedJobs = data;
  },
  [JOB.GET_JOB_TAGS](state, data) {
    state.jobTags = data;
  }
};

/**
 * 提交异步请求
 */
const actions = {
  [JOB.GET_JOBS]({ commit }) {
    return ajax.get(`${window.AppConf.apiHost}/recommendation_list`)
      .then(res => {
        if (res.state === 1) {
          commit(JOB.GET_JOBS, res.data);
        }
        return res;
      });
  },
  [JOB.GET_CITIES]({ commit }) {
    return ajax.get(`${window.AppConf.apiHost}/city_list`)
      .then(res => {
        if (res.state === 1) {
          commit(JOB.GET_CITIES, res.data);
        }
        return res;
      })
  },
  [JOB.GET_JOB_TAGS]({ commit }) {
    return ajax.get(`${window.AppConf.apiHost}/jobTags`)
      .then(res => {
        if (res.state === 1) {
          commit(JOB.GET_JOB_TAGS, res.data)
        }
        return res;
      })
  }
};

export default {
  state,
  getters,
  mutations,
  actions
}
