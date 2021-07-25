<template>
  <div class="card mx-auto" style="width: 22rem;">
    <div class="card-body">
      <table class="table table-hover table-responsive">
        <thead>
        <tr>
          <th scope="col">Cripto Moneda</th>
          <th scope="col">Cantidad</th>
          <th scope="col">Total</th>
        </tr>
        </thead>
        <tbody>
        <tr >
          <td >{{ criptoNameBitcoin }}</td>
          <td style="color:#FF0000" v-if="criptoNumberBitcoin < 0">
            {{ criptoNumberBitcoin.toFixed(2) }} </td>
          <td  v-if="criptoNumberBitcoin === 0">{{ criptoNumberBitcoin.toFixed(2) }} </td>
          <td style="color:#2ed016" v-if="criptoNumberBitcoin > 0">
            {{ criptoNumberBitcoin.toFixed(2) }} </td>
          <td >${{ criptoTotalBitcoin.toFixed(2) }}</td>
        </tr>
        <tr >
          <td >{{ criptoNameEth }}</td>
          <td style="color:#FF0000" v-if="criptoNumberEth < 0">{{criptoNumberEth.toFixed(2) }} </td>
          <td  v-if="criptoNumberEth === 0">{{ criptoNumberEth.toFixed(2) }} </td>
          <td style="color:#2ed016" v-if="criptoNumberEth > 0">
            {{ criptoNumberEth.toFixed(2) }} </td>
          <td >${{ criptoTotalEth.toFixed(2) }}</td>
        </tr>
        <tr >
          <td >{{ criptoNameUsdc }}</td>
          <td style="color:#FF0000" v-if="criptoNumberUsdc < 0">
            {{ criptoNumberUsdc.toFixed(2) }} </td>
          <td  v-if="criptoNumberUsdc === 0">{{ criptoNumberUsdc.toFixed(2) }} </td>
          <td style="color:#2ed016" v-if="criptoNumberUsdc > 0">
            {{ criptoNumberUsdc.toFixed(2)}} </td>
          <td >${{ criptoTotalUsdc.toFixed(2) }}</td>
        </tr>
        <tr >
          <td >TOTAL</td>
          <td style="color:#FF0000" v-if="criptoNumberEth < 0"> </td>
          <td style="color:#2ed016" v-if="criptoNumberEth > 0"> </td>
          <td v-if="criptoNumberEth === 0"> </td>
          <td >${{ (criptoTotalBitcoin + criptoTotalEth + criptoTotalUsdc).toFixed(2) }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetalleAnalisisDeEstado',
  props: {
    criptoNameBitcoin: {
      type: String,
      required: true,
    },
    criptoNumberBitcoin: {
      type: Number,
      required: true,
    },
    criptoTotalBitcoin: {
      type: Number,
      required: true,
    },
    criptoNameEth: {
      type: String,
      required: true,
    },
    criptoNumberEth: {
      type: Number,
      required: true,
    },
    criptoTotalEth: {
      type: Number,
      required: true,
    },
    criptoNameUsdc: {
      type: String,
      required: true,
    },
    criptoNumberUsdc: {
      type: Number,
      required: true,
    },
    criptoTotalUsdc: {
      type: Number,
      required: true,
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
