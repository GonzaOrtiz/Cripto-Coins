<template>
<h1>Inversiones</h1>
  <div class="card mx-auto" style="width: 22rem;">
    <div class="card-body">
      <table class="table table-hover table-responsive">
        <thead>
        <tr>
          <th scope="col">Cripto Moneda</th>
          <th scope="col">Estado</th>
          <th scope="col">Balance</th>
        </tr>
        </thead>
        <tbody>
        <tr >
          <td >Bitcoin</td>
          <td >{{moneyBitcoin}}</td>
          <td >-</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import cryptoService from '../services/cryptoService';
import BuyAndSellService from '../services/BuyAndSellService';

export default {
  name: 'Inversiones',
  data() {
    return {
      transaction: [],
      BitcoinSelected: [],
      EthSelected: [],
      UsdcSelected: [],
      moneyBitcoin: 0,
    };
  },
  created() {
    cryptoService.getApiBtc().then((result) => {
      console.log(result.data);
      this.BitcoinSelected = result.data;
    });
    cryptoService.getApiEth().then((result) => {
      console.log(result.data);
      this.EthSelected = result.data;
    });
    cryptoService.getApiUsdc().then((result) => {
      console.log(result.data);
      this.UsdcSelected = result.data;
    });
    BuyAndSellService.getApiBuyAndSell().then((result) => {
      console.log(result.data);
      this.BuyAndSell = result.data;
    });
  },
  methods: {
    analisisDeInversiones() {
      for (let i = 0; this.BitcoinSelected.length; i += 1) {
        if (this.BuyAndSell[i].crypto_code === 'Bitcoin') {
          let sumar;
          if (this.BuyAndSell[i].action === 'purchase') {
            sumar = Number.parseFloat(this.BuyAndSell[i].money);
            this.montoBitcoin -= sumar;
          } else if (this.BuyAndSell[i].action === 'sale') {
            sumar = Number.parseFloat(this.BuyAndSell[i].money);
            this.montoBitcoin += sumar;
          }
        }
      }
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
