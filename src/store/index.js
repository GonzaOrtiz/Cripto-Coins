import { createStore } from 'vuex';
import cryptoService from '../services/cryptoService';

export default createStore({
  state: {
    loginCorrecto: 'GonzaloOrtiz',
    accesoTotal: '',
    GlobalDolar: [],
    GlobalBtc: [],
    GlobalUsdc: [],
    GlobalEth: [],
  },
  mutations: {
    VALIDAR_LOGIN(state, n) {
      state.accesoTotal = n;
    },
    // pullDolar(state) {
    //   cryptoService.getApiDolar()
    //     .then((response) => (state.GlobalDolar = response.data))
    //     .catch((error) => console.error(error));
    // },
    //ver
  },
  actions: {
  },
  modules: {
  },
});
