import { createStore } from 'vuex';
import cryptoService from '../services/cryptoService';

export default createStore({
  state: {
    loginCorrecto: 'GonzaloOrtiz',
    accesoTotal: null,
    bitcoinStore: [],
    ethereumStore: [],
    usdcStore: [],
    dolarStore: [],
  },
  mutations: {
    LOGIN_MODIFICAR: (state, value) => {
      state.accesoTotal = value;
    },
    pullCriptoBitcoin(state) {
      cryptoService.getApiBtc().then((result) => {
        console.log(result.data);
        state.bitcoinStore = result.data;
      });
    },
    pullCriptoEthereum(state) {
      cryptoService.getApiEth().then((result) => {
        console.log(result.data);
        state.ethereumStore = result.data;
      });
    },
    pullCriptoUsdc(state) {
      cryptoService.getApiUsdc().then((result) => {
        console.log(result.data);
        state.usdcStore = result.data;
      });
    },
    pullDolar(state) {
      cryptoService.getApiDolar().then((result) => {
        console.log(result.data);
        state.dolarStore = result.data;
      });
    },
  },
  actions: {
  },
  modules: {
  },
});
