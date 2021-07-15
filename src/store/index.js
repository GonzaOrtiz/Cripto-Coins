import { createStore } from 'vuex';

export default createStore({
  state: {
    loginCorrecto: 'GonzaloOrtiz',
    accesoTotal: '',
  },
  mutations: {
    VALIDAR_LOGIN(state,n) {
      state.accesoTotal = n;
    },
  },
  actions: {
  },
  modules: {
  },
});
