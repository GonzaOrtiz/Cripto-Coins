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
    pullApiBtc(state) {
      cryptoService.getApiBtc()
        .then((result) => {
          console.log(result.data);
          state.GlobalBtc = result.data;
        });
    },
  },
  actions: {
  },
  modules: {
  },
});
// cryptoService.getApiBtc().then((result) => {
//   console.log(result.data);
//   this.Btc = result.data;
// });
// cryptoService.getApiUsdc().then((result) => {
//   console.log(result.data);
//   this.Usdc = result.data;
// });
// cryptoService.getApiEth().then((result) => {
//   console.log(result.data);
//   this.Eth = result.data;
// });
