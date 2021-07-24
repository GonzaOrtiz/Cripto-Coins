<template>
<h1>Análisis del estado actual</h1>
  <detalle-analisis-de-estado v-if="montoBitcoin !== null"
                              cripto-name-bitcoin="Bitcoin"
                              :cripto-total-bitcoin="(BitcoinSelected.totalBid * montoBitcoin)*-1"
                              :cripto-number-bitcoin="montoBitcoin*-1"
                              cripto-name-eth="Etherium"
                              :cripto-total-eth="(EthSelected.totalBid * montoEtherium)*-1"
                              :cripto-number-eth="montoEtherium*-1"
                              cripto-name-usdc="Usdc"
                              :cripto-number-usdc="montoUsdc*-1"
                              :cripto-total-usdc="(UsdcSelected.totalBid * montoUsdc)*-1">
  </detalle-analisis-de-estado>
  <span>{{FilterComputed}}</span>
</template>

<script>
import BuyAndSellService from '../services/BuyAndSellService';
import DetalleAnalisisDeEstado from '../components/DetalleAnalisisDeEstado.vue';
import cryptoService from '../services/cryptoService';

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
      BitcoinSelected: null,
      EthSelected: null,
      UsdcSelected: null,

    };
  },
  created() {
    BuyAndSellService.getApiBuyAndSell().then((result) => {
      console.log(result.data);
      this.BuyAndSell = result.data;
    });
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
  },
  methods: {
    Filter() {
      for (let i = 0; i < this.BuyAndSell.length; i += 1) {
        if (this.BuyAndSell[i].crypto_code === 'Bitcoin') {
          let sumar;
          if (this.BuyAndSell[i].action === 'purchase') {
            sumar = Number.parseFloat(this.BuyAndSell[i].crypto_amount);
            this.montoBitcoin -= sumar;
          } else if (this.BuyAndSell[i].action === 'sale') {
            sumar = Number.parseFloat(this.BuyAndSell[i].crypto_amount);
            this.montoBitcoin += sumar;
          }
        }
        if (this.BuyAndSell[i].crypto_code === 'Etherium') {
          let sumar;
          if (this.BuyAndSell[i].action === 'purchase') {
            sumar = Number.parseFloat(this.BuyAndSell[i].crypto_amount);
            this.montoEtherium -= sumar;
          } else if (this.BuyAndSell[i].action === 'sale') {
            sumar = Number.parseFloat(this.BuyAndSell[i].crypto_amount);
            this.montoEtherium += sumar;
          }
        }
        if (this.BuyAndSell[i].crypto_code === 'Usdc') {
          let sumar;
          if (this.BuyAndSell[i].action === 'purchase') {
            sumar = Number.parseFloat(this.BuyAndSell[i].crypto_amount);
            this.montoUsdc -= sumar;
          } else if (this.BuyAndSell[i].action === 'sale') {
            sumar = Number.parseFloat(this.BuyAndSell[i].crypto_amount);
            this.montoUsdc += sumar;
          }
        }
      }
      // console.log(this.montoBitcoin);
      // this.montoArsBtc = parseFloat(this.montoBitcoin * this.BitcoinSelected.totalBid);
      console.log(this.montoArsBtc);
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
