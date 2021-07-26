<template>
<h1>Inversiones</h1>
  <div class="spinner-border text-warning" role="status" v-if="totalBitcoin === 0">
    <span class="sr-only"></span>
  </div>
  <div class="card mx-auto" style="width: 22rem;" v-if="totalBitcoin !== 0">
    <div class="card-body">
      <table class="table table-hover table-responsive">
        <thead>
        <tr>
          <th scope="col">Cripto Moneda</th>
          <th scope="col">Resultado</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Bitcoin</td>
          <td style="color:#FF0000" v-if="totalBitcoin < 0">{{totalBitcoin.toFixed(2)}}</td>
          <td style="color:#2ed016" v-if="totalBitcoin > 0">{{totalBitcoin.toFixed(2)}}</td>
          <td  v-if="totalBitcoin === 0">{{ totalBitcoin }} </td>
        </tr>
        <tr>
          <td>Ethereum</td>
          <td style="color:#FF0000" v-if="totalEthereum < 0">{{totalEthereum.toFixed(2)}}</td>
          <td style="color:#2ed016" v-if="totalEthereum > 0">{{totalEthereum.toFixed(2)}}</td>
          <td v-if="totalEthereum === 0">{{totalEthereum.toFixed(2)}}</td>
        </tr>
        <tr>
          <td>Usdc</td>
          <td style="color:#FF0000" v-if="totalUsdc < 0">{{totalUsdc.toFixed(2)}}</td>
          <td style="color:#2ed016" v-if="totalUsdc > 0">{{totalUsdc.toFixed(2)}}</td>
          <td v-if="totalUsdc === 0">{{totalUsdc.toFixed(2)}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
  <span>{{FilterComputed}}</span>
</template>

<script>
import BuyAndSellService from '../services/BuyAndSellService';

export default {
  name: 'Inversiones',
  data() {
    return {
      transaction: [],
      BuyAndSell: [],
      DifmoneyBitcoin: 0,
      DifMoneyEthereum: 0,
      moneyBitcoin: 0,
      moneyEthereum: 0,
      moneyUsdc: 0,
      moneyBitcoinComprado: 0,
      moneyEthereumComprado: 0,
      moneyUsdcomprado: 0,
      DifMoneyUsdc: 0,
      cantidadBitcoinComprado: 0,
      cantidadEthereumComprado: 0,
      cantidadUsdcComprado: 0,
      saldoCompradoBitcoin: 0,
      saldoCompradoEthereum: 0,
      saldoCompradoUsdc: 0,
      resultadoBitcoin: 0,
      resultadoEthereum: 0,
      resultadoUsdc: 0,
      totalBitcoin: 0,
      totalEthereum: 0,
      totalUsdc: 0,
      saldoActualBitcoinMoney: 0,
      saldoActualEthereumMoney: 0,
      saldoActualUsdcMoney: 0,
      cantidadUsdcVendido: 0,
      cantidadEthereumVendido: 0,
      cantidadBitcoinVendido: 0,
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
          let monto;
          if (this.BuyAndSell[i].action === 'purchase') {
            sumar = Number.parseFloat(this.BuyAndSell[i].money);
            this.DifmoneyBitcoin -= sumar;
            monto = Number.parseFloat(this.BuyAndSell[i].crypto_amount);
            this.cantidadBitcoinComprado += monto;
            this.moneyBitcoinComprado += sumar;
          } else if (this.BuyAndSell[i].action === 'sale') {
            sumar = Number.parseFloat(this.BuyAndSell[i].money);
            this.DifmoneyBitcoin += sumar;
            monto = Number.parseFloat(this.BuyAndSell[i].crypto_amount);
            this.cantidadBitcoinVendido += monto;
          }
        }
        if (this.BuyAndSell[i].crypto_code === 'Etherium') {
          let sumar;
          let monto;
          if (this.BuyAndSell[i].action === 'purchase') {
            sumar = Number.parseFloat(this.BuyAndSell[i].money);
            this.DifMoneyEthereum -= sumar;
            monto = Number.parseFloat(this.BuyAndSell[i].crypto_amount);
            this.cantidadEthereumComprado += monto;
            this.moneyEthereumComprado += sumar;
          } else if (this.BuyAndSell[i].action === 'sale') {
            sumar = Number.parseFloat(this.BuyAndSell[i].money);
            this.DifMoneyEthereum += sumar;
            monto = Number.parseFloat(this.BuyAndSell[i].crypto_amount);
            this.cantidadEthereumVendido += monto;
          }
        }
        if (this.BuyAndSell[i].crypto_code === 'Usdc') {
          let sumar;
          let monto;
          if (this.BuyAndSell[i].action === 'purchase') {
            sumar = Number.parseFloat(this.BuyAndSell[i].money);
            this.DifMoneyUsdc -= sumar;
            monto = Number.parseFloat(this.BuyAndSell[i].crypto_amount);
            this.cantidadUsdcComprado += monto;
            this.moneyUsdcomprado += sumar;
          } else if (this.BuyAndSell[i].action === 'sale') {
            sumar = Number.parseFloat(this.BuyAndSell[i].money);
            this.DifMoneyUsdc += sumar;
            monto = Number.parseFloat(this.BuyAndSell[i].crypto_amount);
            this.cantidadUsdcVendido += monto;
          }
        }
      }
      // Calculos BITCOIN
      if ((this.cantidadBitcoinVendido - this.cantidadBitcoinComprado) !== 0) {
        this.saldoCompradoBitcoin = this.cantidadBitcoinComprado * this.moneyBitcoinComprado;
        this.saldoActualBitcoinMoney = this.$store.state.bitcoinStore.totalBid
          * this.cantidadBitcoinComprado;
        this.resultadoBitcoin = this.saldoActualBitcoinMoney - this.saldoCompradoBitcoin;
        this.totalBitcoin = this.resultadoBitcoin + this.DifmoneyBitcoin;
      } else {
        this.totalBitcoin = this.DifmoneyBitcoin;
      }
      // Calculos ETHEREUM
      if ((this.cantidadEthereumVendido - this.cantidadEthereumComprado) !== 0) {
        this.saldoCompradoEthereum = this.cantidadEthereumComprado * this.moneyEthereumComprado;
        this.saldoActualEthereumMoney = this.$store.state.ethereumStore.totalBid
          * this.cantidadEthereumComprado;
        this.resultadoEthereum = this.saldoActualEthereumMoney - this.saldoCompradoEthereum;
        this.totalEthereum = this.resultadoEthereum + this.DifMoneyEthereum;
      } else {
        this.totalEthereum = this.DifMoneyEthereum;
      }
      // Calculos USDC
      if ((this.cantidadUsdcVendido - this.cantidadUsdcVendido) !== 0) {
        this.saldoCompradoUsdc = this.cantidadUsdcComprado * this.moneyUsdcomprado;
        this.saldoActualUsdcMoney = this.$store.state.usdcStore.totalBid
          * this.cantidadUsdcComprado;
        this.resultadoUsdc = this.saldoActualUsdcMoney - this.saldoCompradoUsdc;
        this.totalUsdc = this.resultadoUsdc + this.DifMoneyUsdc;
      } else {
        this.totalUsdc = this.DifMoneyUsdc;
      }
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
