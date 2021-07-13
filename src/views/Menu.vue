<template>
<h1>Cripto-Valores</h1>
  <div id="nav">
    <div class="card mx-auto" style="width: 50rem;">
      <div class="card-body">
        <table class="table table-hover">
          <thead>
          <tr>
            <th scope="col">Moneda</th>
            <th scope="col">oficial</th>
            <th scope="col">solidario</th>
            <th scope="col">mep</th>
            <th scope="col">ccl</th>
            <th scope="col">ccb</th>
            <th scope="col">blue</th>
<!--            <th scope="col">Operar</th>-->
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
<!--            <td><a href="">Trading</a></td>-->
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
<!--            <th scope="col">Operar</th>-->
          </tr>
          </thead>
          <tbody>
          <tr>
            <th scope="row">Bitcoin</th>
            <td>{{ Btc.ask }}</td>
            <td>{{Btc.totalAsk}}</td>
            <td>{{Btc.bid}}</td>
            <td>{{Btc.totalBid}}</td>
            <td>{{Btc.time}}</td>
<!--            <td><a href="">Trading</a></td>-->
          </tr>
          <tr>
            <th scope="row">Usdc</th>
            <td>{{ Usdc.ask }}</td>
            <td>{{Usdc.totalAsk}}</td>
            <td>{{Usdc.bid}}</td>
            <td>{{Usdc.totalBid}}</td>
            <td>{{Usdc.time}}</td>
<!--            <td><a href="">Trading</a></td>-->
          </tr>
          <tr>
            <th scope="row">Etherium</th>
            <td>{{ Eth.ask }}</td>
            <td>{{Eth.totalAsk}}</td>
            <td>{{Eth.bid}}</td>
            <td>{{Eth.totalBid}}</td>
            <td>{{Eth.time}}</td>
<!--            <td><a href="">Trading</a></td>-->
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
    };
  },
  created() {
    debugger;
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
};
</script>

<style scoped>

</style>
