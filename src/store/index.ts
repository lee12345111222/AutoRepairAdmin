// store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    userInfo: {},
    userName: '',
    userRole: 'admin'
  },
  mutations: {
    setRole(state, role) {
      state.userRole = role;
    }
  },
  actions: {}
});
