<template>
<h1>Análisis de estado</h1>

  <detalle-analisis-de-estado v-if="montoBitcoin !== null"
                              cripto-name="Bitcoin"
                              :cripto-number="montoBitcoin">

  </detalle-analisis-de-estado>
  <br>
  <detalle-analisis-de-estado v-if="montoEtherium !== null"
                              cripto-name="Etherium"
                              :cripto-number="montoEtherium">

  </detalle-analisis-de-estado>
  <br>
  <detalle-analisis-de-estado v-if="montoUsdc !== null"
                              cripto-name="Usdc"
                              :cripto-number="montoUsdc">

  </detalle-analisis-de-estado>
  <h1>{{FilterComputed}}</h1>
</template>

<script>
import BuyAndSellService from '../services/BuyAndSellService';
import DetalleAnalisisDeEstado from '../components/DetalleAnalisisDeEstado.vue';

export default {
  name: 'AnalisisDeEstado',
  components: {
    DetalleAnalisisDeEstado,
  },
  data() {
    return {
      BuyAndSell: [],
      montoBitcoin: null,
      montoEtherium: null,
      montoUsdc: null,
    };
  },
  created() {
    BuyAndSellService.getApiBuyAndSell().then((result) => {
      console.log(result.data);
      this.BuyAndSell = result.data;
    });
  },
  methods: {
    Filter() {
      for (let i = 0; i < this.BuyAndSell.length; i += 1) {
        if (this.BuyAndSell[i].crypto_code === 'Bitcoin') {
          let sumar;
          if (this.BuyAndSell[i].action === 'purchase') {
            sumar = Number.parseFloat(this.BuyAndSell[i].crypto_amount);
            this.montoBitcoin += sumar;
          } else if (this.BuyAndSell[i].action === 'sale') {
            sumar = Number.parseFloat(this.BuyAndSell[i].crypto_amount);
            this.montoBitcoin -= sumar;
          }
        }
        if (this.BuyAndSell[i].crypto_code === 'Etherium') {
          let sumar;
          if (this.BuyAndSell[i].action === 'purchase') {
            sumar = Number.parseFloat(this.BuyAndSell[i].crypto_amount);
            this.montoEtherium += sumar;
          } else if (this.BuyAndSell[i].action === 'sale') {
            sumar = Number.parseFloat(this.BuyAndSell[i].crypto_amount);
            this.montoEtherium -= sumar;
          }
        }
        if (this.BuyAndSell[i].crypto_code === 'Usdc') {
          let sumar;
          if (this.BuyAndSell[i].action === 'purchase') {
            sumar = Number.parseFloat(this.BuyAndSell[i].crypto_amount);
            this.montoUsdc += sumar;
          } else if (this.BuyAndSell[i].action === 'sale') {
            sumar = Number.parseFloat(this.BuyAndSell[i].crypto_amount);
            this.montoUsdc -= sumar;
          }
        }
      }
      console.log(this.montoBitcoin);
      console.log(this.montoEtherium);
      console.log(this.montoUsdc);
    },
  },
  computed: {
    FilterComputed() {
      return this.Filter();
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

<!--export default {-->
<!--name: 'StateAnalysis.vue',-->
<!--data() {-->
<!--return {-->
<!--currencyBuyAndSell: [],-->
<!--amountBtc: null,-->
<!--amountEth: null,-->
<!--amountBch: null,-->
<!--amountUsdc: null,-->
<!--amountXrp: null,-->
<!--};-->
<!--},-->
<!--created() {-->
<!--ApiClient.getBuyAndSell().then((response) => {-->
<!--this.currencyBuyAndSell = response.data;-->
<!--})-->
<!--.catch((error) => {-->
<!--console.log(error);-->
<!--this.errored = true;-->
<!--});-->
<!--},-->
<!--computed: {-->
<!--list() {-->
<!--return this.listCurrencies();-->
<!--},-->
<!--},-->
<!--methods: {-->
<!--listCurrencies() {-->
<!--for (let i = 0; i < this.currencyBuyAndSell.length; i += 1) {-->
<!--if (this.currencyBuyAndSell[i].crypto_code === 'bitcoin') {-->
<!--let sum;-->
<!--if (this.currencyBuyAndSell[i].action === 'purchase') {-->
<!--sum = Number.parseFloat(this.currencyBuyAndSell[i].crypto_amount);-->
<!--this.amountBtc += sum;-->
<!--} else if (this.currencyBuyAndSell[i].action === 'sale') {-->
<!--sum = Number.parseFloat(this.currencyBuyAndSell[i].crypto_amount);-->
<!--this.amountBtc -= sum;-->
<!--}-->
<!--}-->
<!--if (this.currencyBuyAndSell[i].crypto_code === 'ethereum') {-->
<!--let sum;-->
<!--if (this.currencyBuyAndSell[i].action === 'purchase') {-->
<!--sum = Number.parseFloat(this.currencyBuyAndSell[i].crypto_amount);-->
<!--this.amountEth += sum;-->
<!--} else if (this.currencyBuyAndSell[i].action === 'sale') {-->
<!--sum = Number.parseFloat(this.currencyBuyAndSell[i].crypto_amount);-->
<!--this.amountEth -= sum;-->
<!--}-->
<!--}-->
<!--if (this.currencyBuyAndSell[i].crypto_code === 'bch') {-->
<!--let sum;-->
<!--if (this.currencyBuyAndSell[i].action === 'purchase') {-->
<!--sum = Number.parseFloat(this.currencyBuyAndSell[i].crypto_amount);-->
<!--this.amountBch += sum;-->
<!--} else if (this.currencyBuyAndSell[i].action === 'sale') {-->
<!--sum = Number.parseFloat(this.currencyBuyAndSell[i].crypto_amount);-->
<!--this.amountBch -= sum;-->
<!--}-->
<!--}-->
<!--if (this.currencyBuyAndSell[i].crypto_code === 'usdc') {-->
<!--let sum;-->
<!--if (this.currencyBuyAndSell[i].action === 'purchase') {-->
<!--sum = Number.parseFloat(this.currencyBuyAndSell[i].crypto_amount);-->
<!--this.amountUsdc += sum;-->
<!--} else if (this.currencyBuyAndSell[i].action === 'sale') {-->
<!--sum = Number.parseFloat(this.currencyBuyAndSell[i].crypto_amount);-->
<!--this.amountUsdc -= sum;-->
<!--}-->
<!--}-->
<!--if (this.currencyBuyAndSell[i].crypto_code === 'xrp') {-->
<!--let sum;-->
<!--if (this.currencyBuyAndSell[i].action === 'purchase') {-->
<!--sum = Number.parseFloat(this.currencyBuyAndSell[i].crypto_amount);-->
<!--this.amountXrp += sum;-->
<!--} else if (this.currencyBuyAndSell[i].action === 'sale') {-->
<!--sum = Number.parseFloat(this.currencyBuyAndSell[i].crypto_amount);-->
<!--this.amountXrp -= sum;-->
<!--}-->
<!--}-->
<!--}-->
<!--},-->
<!--},-->
<!--};-->
<!--</script>-->
