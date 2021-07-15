<template>
  <div class="about">
    <h1>Historial de Movimientos</h1>
  </div>
  <div class="spinner-border text-warning" role="status" v-if="BuyAndSell.length === 0">
    <span class="sr-only"></span>
  </div>
  <div class="card mx-auto" style="width: 60rem;" v-if="BuyAndSell.length !== 0">
    <div class="card-body">
      <table class="table table-hover table-responsive">
        <thead>
        <tr>
          <th scope="col">Usuario</th>
          <th scope="col">Action</th>
          <th scope="col">CryptoMoneda</th>
          <th scope="col">Monto</th>
          <th scope="col">Ars</th>
          <th scope="col">Fecha</th>
          <!--            <th scope="col">Operar</th>-->
        </tr>
        </thead>
        <tbody>
        <tr v-for="element in BuyAndSell" :key="element._id">
          <td>{{ element.user_id }}</td>
          <td>{{ element.action }}</td>
          <td>{{ element.crypto_code }}</td>
          <td>{{ element.crypto_amount }}</td>
          <td>{{ element.money}}</td>
          <td>{{ element.datetime}}</td>
          <!--            <td><a href="">Trading</a></td>-->
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import BuyAndSellService from '../services/BuyAndSellService';

export default {
  name: 'Menu',
  data() {
    return {
      BuyAndSell: [],

    };
  },
  created() {
    BuyAndSellService.getApiBuyAndSell().then((result) => {
      console.log(result.data);
      this.BuyAndSell = result.data;
    });
  },
};
</script>

<style scoped>
h1 {
  font-weight: bold;
  color: white;
}
</style>
