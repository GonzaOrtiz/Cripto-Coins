<template>
<h1>Inversiones</h1>
  <div class="card mx-auto" style="width: 22rem;">
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
          <td>{{DifMoneyEthereum.toFixed(2)}}</td>
        </tr>
        <tr>
          <td>Usdc</td>
          <td>{{moneyUsdc.toFixed(2)}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
  <span>{{FilterComputed}}</span>
  <h1>saldo comprado bitcion {{saldoCompradoBitcoin}}</h1>
  <h1>saldo actual comprado bitcion {{saldoActualBitcoinMoney}}</h1>
  <h1> Resultado bit{{resultadoBitcoin}}</h1>
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
      BuyAndSell: [],
      UsdcSelected: [],
      DifmoneyBitcoin: 0,
      DifMoneyEthereum: 0,
      moneyBitcoin: 0,
      moneyEthereum: 0,
      moneyUsdc: 0,
      montoBitcoin: 0,
      montoUsdc: 0,
      montoEthereum: 0,
      moneyBitcoinComprado: 0,
      cantidadBitcoinComprado: 0,
      saldoCompradoBitcoin: 0,
      resultadoBitcoin: 0,
      totalBitcoin: 0,
      saldoActualBitcoinMoney: 0,
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
          }
        }
        if (this.BuyAndSell[i].crypto_code === 'Etherium') {
          let sumar;
          // let monto;
          if (this.BuyAndSell[i].action === 'purchase') {
            sumar = Number.parseFloat(this.BuyAndSell[i].money);
            this.DifMoneyEthereum -= sumar;
          } else if (this.BuyAndSell[i].action === 'sale') {
            sumar = Number.parseFloat(this.BuyAndSell[i].money);
            this.DifMoneyEthereum += sumar;
          }
        }
        if (this.BuyAndSell[i].crypto_code === 'Usdc') {
          let sumar;
          if (this.BuyAndSell[i].action === 'purchase') {
            sumar = Number.parseFloat(this.BuyAndSell[i].money);
            this.moneyUsdc -= sumar;
          } else if (this.BuyAndSell[i].action === 'sale') {
            sumar = Number.parseFloat(this.BuyAndSell[i].money);
            this.moneyUsdc += sumar;
          }
        }
      }
      // Calculos Bitcoin
      this.saldoCompradoBitcoin = this.cantidadBitcoinComprado * this.moneyBitcoinComprado;
      this.saldoActualBitcoinMoney = this.BitcoinSelected.totalBid * this.cantidadBitcoinComprado;
      this.resultadoBitcoin = this.saldoActualBitcoinMoney - this.saldoCompradoBitcoin;
      this.totalBitcoin = this.resultadoBitcoin + this.DifmoneyBitcoin;
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
