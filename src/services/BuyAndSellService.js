import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://laboratorio3-f36a.restdb.io/rest',
  headers: { 'x-apikey': '60eb09146661365596af552f' },
});

export default {
  getApiBuyAndSell() {
    return apiClient.get('transactions?q={"user_id": "GonzaloOrtiz"}');
  },
};
