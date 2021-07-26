<template>
<h1>Cripto-Valores</h1>
  <div class="spinner-border text-warning" role="status"
       v-if="$store.state.dolarStore.length === 0">
    <span class="sr-only"></span>
  </div>
  <div id="nav" v-if="$store.state.dolarStore.length !== 0">
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
            <td>{{ $store.state.dolarStore.oficial }}</td>
            <td>{{$store.state.dolarStore.solidario}}</td>
            <td>{{$store.state.dolarStore.mep}}</td>
            <td>{{$store.state.dolarStore.ccl}}</td>
            <td>{{$store.state.dolarStore.ccb}}</td>
            <td>{{$store.state.dolarStore.blue}}</td>
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
            <td>{{ $store.state.bitcoinStore.ask.toFixed(2) }}</td>
            <td>{{$store.state.bitcoinStore.totalAsk.toFixed(2)}}</td>
            <td>{{$store.state.bitcoinStore.bid.toFixed(2)}}</td>
            <td>{{$store.state.bitcoinStore.totalBid.toFixed(2)}}</td>
            <td>{{fechaHora($store.state.bitcoinStore.time)}}</td>
          </tr>
          <tr>
            <th scope="row">Ethereum</th>
            <td>{{ $store.state.ethereumStore.ask.toFixed(2) }}</td>
            <td>{{$store.state.ethereumStore.totalAsk.toFixed(2)}}</td>
            <td>{{$store.state.ethereumStore.bid.toFixed(2)}}</td>
            <td>{{$store.state.ethereumStore.totalBid.toFixed(2)}}</td>
            <td>{{fechaHora($store.state.ethereumStore.time)}}</td>
          </tr>
          <tr>
            <th scope="row">Usdc</th>
            <td>{{ $store.state.usdcStore.ask.toFixed(2) }}</td>
            <td>{{$store.state.usdcStore.totalAsk.toFixed(2)}}</td>
            <td>{{$store.state.usdcStore.bid.toFixed(2)}}</td>
            <td>{{$store.state.usdcStore.totalBid.toFixed(2)}}</td>
            <td>{{fechaHora($store.state.usdcStore.time)}}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Menu',
  data() {
    return {
      fecha: null,
    };
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
