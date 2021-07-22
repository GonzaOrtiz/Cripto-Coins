<template>
  <div class="card mx-auto" style="width: 18rem;">
    <div class="card-body">
      <table class="table table-hover table-responsive">
        <thead>
        <tr>
          <th scope="col">Cripto Moneda</th>
          <th scope="col">Monto</th>
        </tr>
        </thead>
        <tbody>
        <tr >
          <td >{{ criptoName }}</td>
          <td style="color:#FF0000" v-if="criptoNumber < 0">{{ criptoNumber }} </td>
          <td style="color:#2ed016" v-if="criptoNumber > 0">{{ criptoNumber }} </td>
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
    criptoName: {
      type: String,
      required: true,
    },
    criptoNumber: {
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
