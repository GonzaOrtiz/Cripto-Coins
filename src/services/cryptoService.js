import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://criptoya.com/api/',
});

export default {
  getApiDolar() {
    return apiClient.get('/dolar');
  },
  getApiBtc() {
    return apiClient.get('/satoshitango/btc/ars');
  },
  getApiUsdc() {
    return apiClient.get('/satoshitango/usdc/ars');
  },
  getApiEth() {
    return apiClient.get('/satoshitango/eth/ars');
  },
  // postRate(rate) {
  //   return apiClient.post('/rates', rate);
  // },
};
