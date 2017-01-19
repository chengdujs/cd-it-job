import { JOB } from '../constants';
import { ajax } from 'common';

/**
 * 存放数据
 */
const state = {
  jobs: []
};

/**
 * 提交同步状态
 */
const mutations = {
  [JOB.GET_JOBS](state, data) {
    state.jobs = data;
  }
};

/**
 * 提交异步请求
 */
const actions = {
  [JOB.GET_JOBS]({ commit }) {
    return ajax.get('http://chat.hstar.org:8601/e2607fcaf7fe/employmentList')
    .then(data => {
      if (data.state === 1) {
        commit(JOB.GET_JOBS, data.data);
      }
    });
  }
};

export default {
  state,
  mutations,
  actions
}
