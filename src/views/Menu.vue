<template>
<h1>Cripto-Valores</h1>
  <div class="spinner-border text-warning" role="status" v-if="Dolar.length === 0">
    <span class="sr-only"></span>
  </div>
  <div id="nav" v-if="Dolar.length !== 0">
    <div class="card mx-auto" style="width: 50rem;">
      <div class="card-body">
        <table class="table table-hover table-responsive">
          <thead>
          <tr>
            <th scope="col">Moneda</th>
            <th scope="col">oficial</th>
            <th scope="col">solidario</th>
            <th scope="col">mep</th>
            <th scope="col">ccl</th>
            <th scope="col">ccb</th>
            <th scope="col">blue</th>
          </tr>
          </thead>
          <tbody>
            <tr>
            <th scope="row">Dolar</th>
            <td>{{ Dolar.oficial }}</td>
            <td>{{Dolar.solidario}}</td>
            <td>{{Dolar.mep}}</td>
            <td>{{Dolar.ccl}}</td>
            <td>{{Dolar.ccb}}</td>
            <td>{{Dolar.blue}}</td>
          </tr>
          </tbody>
        </table>
        <table class="table table-hover">
          <thead>
          <tr  >
            <th scope="col">CriptoMoneda</th>
            <th scope="col">$Compra</th>
            <th scope="col">$Compra Final</th>
            <th scope="col">$Venta</th>
            <th scope="col">$Venta Final</th>
            <th scope="col">Hora</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th scope="row">Bitcoin</th>
            <td>{{ Btc.ask }}</td>
            <td>{{Btc.totalAsk}}</td>
            <td>{{Btc.bid}}</td>
            <td>{{Btc.totalBid}}</td>
            <td>{{fechaHora(Btc.time)}}</td>
          </tr>
          <tr>
            <th scope="row">Usdc</th>
            <td>{{ Usdc.ask }}</td>
            <td>{{Usdc.totalAsk}}</td>
            <td>{{Usdc.bid}}</td>
            <td>{{Usdc.totalBid}}</td>
            <td>{{fechaHora(Usdc.time)}}</td>
          </tr>
          <tr>
            <th scope="row">Etherium</th>
            <td>{{ Eth.ask }}</td>
            <td>{{Eth.totalAsk}}</td>
            <td>{{Eth.bid}}</td>
            <td>{{Eth.totalBid}}</td>
            <td>{{fechaHora(Eth.time)}}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import cryptoService from '../services/cryptoService';

export default {
  name: 'Menu',
  data() {
    return {
      Dolar: [],
      Btc: [],
      Usdc: [],
      Eth: [],
      fecha: null,
    };
  },
  created() {
    cryptoService.getApiDolar().then((result) => {
      console.log(result.data);
      this.Dolar = result.data;
    });
    cryptoService.getApiBtc().then((result) => {
      console.log(result.data);
      this.Btc = result.data;
    });
    cryptoService.getApiUsdc().then((result) => {
      console.log(result.data);
      this.Usdc = result.data;
    });
    cryptoService.getApiEth().then((result) => {
      console.log(result.data);
      this.Eth = result.data;
    });
  },
  methods: {
    fechaHora(date) {
      this.fecha = new Date(date * 1000);
      return this.fecha.toLocaleString();
    },
  },
};
</script>

<style scoped>
h1 {
  font-weight: bold;
  color: white;
}
</style>
