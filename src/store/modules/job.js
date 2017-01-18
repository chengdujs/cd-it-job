import { JOB } from '../constants';
import { ajax } from 'common';

/**
 * state 用于存放job数据
 */
const state = {
  jobs: []
};

const mutations = {
  [JOB.GET_JOBS](state, data) {
    state.jobs = data;
  }
};

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
