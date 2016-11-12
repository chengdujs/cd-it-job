import { types } from './mutation-types';

export const state = {
  userInfo: {
    username: ''
  }
};

export const mutations = {
  [types.USER_INIT](state, user) {
    state.userInfo = user;
  }
};
