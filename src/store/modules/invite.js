import axios from 'axios';
import { INVITE } from '../constants'

/**
 * 初始化的状态数据
*/
const state = {
  list: []
}

/**
 * 用于更新 view 的 getters
*/
const getters = {
  getList: state => state.list
}

/**
 * commit 同步突变
*/
const mutations = {
  [INVITE.GET_LIST](state, list) {
    state.msg = 'xxxx';
    state.list = list;
  }
}

/**
 * dispatch 异步改变
*/
const actions = {
  [INVITE.GET_LIST](store) {
    axios('/static/mock/job.json').then(res => {
      if (res.status === 200) {
        store.commit(INVITE.GET_LIST, res.data);
      }
    });
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
