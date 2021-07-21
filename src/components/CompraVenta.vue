<template>
  <div id="nav">
    <h1>Comprar - Vender</h1>
    <div class="card mx-auto" style="width: 25rem;">
      <div class="card-body">
        <form @submit.prevent="btnSubmit">
          <div class="mb-3">
            <label class="form-label">Criptomoneda</label>
            <select class="form-control" v-model="Operacion.Criptomoneda">
              <option>Bitcoin</option>
              <option>Usdc</option>
              <option>Etherium</option>
            </select>
            <label class="form-label">Cantidad</label>
            <input type="number" class="form-control"  :class="claseCantidadcomputada"
                   v-model.number="Operacion.Cantidad"
                   step="0.00001" min="0.00001" >
            <label class="form-label">Movimiento</label>
            <select class="form-control" v-model="Operacion.Movimiento">
              <option>Comprar</option>
              <option>Vender</option>
            </select>
            <label class="form-label">$$Criptomoneda Unidad</label>
            <input type="" class="form-control"
                   disabled v-model="valorCriptoUnidad">
            <label class="form-label">$Monto ars  total</label>
            <input type="" class="form-control" disabled v-model="Operacion.CriptomonedaTotal">
      </div>
          <button type="submit" class="btn btn-primary">Aceptar</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import cryptoService from '../services/cryptoService';
import BuyAndSellService from '../services/BuyAndSellService';

export default {
  name: 'CompraVenta',
  data() {
    return {
      transaction: [],
      BitcoinSelected: [],
      EthSelected: [],
      UsdcSelected: [],
      valorCriptoUnidad: null,
      CantidadTotal: null,
      ActionEs: null,
      Operacion: {
        Login: this.$store.state.loginCorrecto,
        Movimiento: null,
        Criptomoneda: null,
        Cantidad: null,
        CriptomonedaTotal: null,
        Fecha: new Date(),
      },
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
  },
  computed: {
    claseCantidadcomputada() {
      let dato = '';
      if (this.Operacion.Cantidad === null) {
        dato = '';
      } else if (this.Operacion.Cantidad === '') {
        dato = 'is-invalid';
      } else if (this.Operacion.Cantidad !== '') {
        dato = 'is-valid';
      }
      return dato;
    },
  },
  methods: {
    btnSubmit() {
      this.validarSelects();
      if (this.Operacion.Movimiento === 'Comprar') this.ActionEs = 'purchase';
      if (this.Operacion.Movimiento === 'Vender') this.ActionEs = 'sale';
      this.transaction = [{
        user_id: this.Operacion.Login,
        action: this.ActionEs,
        crypto_code: this.Operacion.Criptomoneda,
        crypto_amount: this.Operacion.Cantidad,
        money: this.Operacion.CriptomonedaTotal,
        datetime: this.Operacion.Fecha,
      }];
      debugger;
      BuyAndSellService.postApiBuyAndSell(this.transaction)
        .then((response) => {
          console.log(response);
          if (response.status !== 201) {
            console.log('transacción MAL!');
          }
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
        });
      alert('Transacción Realizada');
    },
    validarSelects() {
      if (this.Operacion.Criptomoneda === 'Bitcoin') {
        if (this.Operacion.Movimiento === 'Comprar') {
          this.valorCriptoUnidad = this.BitcoinSelected.totalAsk;
        } else if (this.Operacion.Movimiento === 'Vender') {
          this.valorCriptoUnidad = this.BitcoinSelected.totalBid;
        }
      }
      if (this.Operacion.Criptomoneda === 'Etherium') {
        if (this.Operacion.Movimiento === 'Comprar') {
          this.valorCriptoUnidad = this.EthSelected.totalAsk;
        } else if (this.Operacion.Movimiento === 'Vender') {
          this.valorCriptoUnidad = this.EthSelected.totalBid;
        }
      }
      if (this.Operacion.Criptomoneda === 'Usdc') {
        this.valorCriptoUnidad = this.UsdcSelected.totalAsk;
      } else if (this.Operacion.Movimiento === 'Vender') {
        this.valorCriptoUnidad = this.UsdcSelected.totalBid;
      }
      this.Operacion.CriptomonedaTotal = (this.Operacion.Cantidad
        * this.valorCriptoUnidad).toFixed(2);
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
