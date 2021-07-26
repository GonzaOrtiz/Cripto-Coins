<template>
  <h1>Detalle</h1>
  <div class="card mx-auto" style="width: 60rem;" >
      <div class="card-body">
        <table class="table table-hover table-responsive">
          <thead>
          <tr>
            <th scope="col">Action</th>
            <th scope="col">CryptoMoneda</th>
            <th scope="col">Monto</th>
            <th scope="col">Ars</th>
            <th scope="col">Fecha</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>{{ detalle.action }}</td>
            <td>{{ detalle.crypto_code }}</td>
            <td>{{ detalle.crypto_amount }}</td>
            <td>{{ detalle.money}}</td>
            <td>{{ detalle.datetime}}</td>
          </tr>
          </tbody>
        </table>
      </div>
  </div>
</template>

<script>
export default {
  name: 'DetalleHistorial',
  props: {
    detalle: {
      type: Array,
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
