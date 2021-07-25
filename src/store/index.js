import { createStore } from 'vuex';

export default createStore({
  state: {
    loginCorrecto: 'GonzaloOrtiz',
    accesoTotal: null,
  },
  mutations: {
    LOGIN_MODIFICAR: (state, value) => {
      state.accesoTotal = value;
    },
  },
  actions: {
  },
  modules: {
  },
});
