<template>
<h1>Análisis de estado</h1>
  <div class="card mx-auto" style="width: 60rem;" v-if="bitcoin.length >0">
    <div class="card-body">
      <table class="table table-hover table-responsive">
        <thead>
        <tr>
          <th scope="col">Action</th>
          <th scope="col">CryptoMoneda</th>
          <th scope="col">Monto</th>
          <th scope="col">Ars</th>
          <th scope="col">Fecha</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="element in bitcoin" :key="element._id">
          <td>{{ element.action }}</td>
          <td>{{ element.crypto_code }}</td>
          <td>{{ element.crypto_amount }}</td>
          <td>{{ element.money}}</td>
          <td>{{ element.datetime}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
  {{bitcoinFilterComputed}}
</template>

<script>
import BuyAndSellService from '../services/BuyAndSellService';

export default {
  name: 'AnalisisDeEstado',
  data() {
    return {
      BuyAndSell: [],
      bitcoin: [],
    };
  },
  created() {
    BuyAndSellService.getApiBuyAndSell().then((result) => {
      console.log(result.data);
      this.BuyAndSell = result.data;
    });
  },
  methods: {
    bitcoinFilter() {
      this.bitcoin = this.BuyAndSell.filter((accion) => accion.crypto_code === 'Bitcoin');
      console.log(this.bitcoin);
    },
  },
  computed: {
    bitcoinFilterComputed() {
      return this.bitcoinFilter();
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
