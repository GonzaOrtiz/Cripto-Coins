<template>
  <div id="nav">
    <h1>Comprar - Vender</h1>
    <div class="card mx-auto" style="width: 25rem;">
      <div class="card-body">
        <form>
          <div class="mb-3">
            <label class="form-label">Criptomoneda</label>
            <select class="form-control" v-model="Operacion.Criptomoneda">
              <option>Dolar</option>
              <option>Bitcoin</option>
              <option>Usdc</option>
              <option>Etherium</option>
            </select>
            <label for="" class="form-label">Cantidad</label>
            <input type="number" class="form-control"  :class="claseCantidadcomputada"
                   v-model.number="Operacion.Cantidad"
                   step="0.00001" min="0.00001" >
            <label for="" class="form-label">Monto</label>
            <input type="" class="form-control" disabled v-model="Operacion.Monto">
            <label class="form-label">Movimiento</label>
            <select class="form-control" v-model="Operacion.Movimiento">
              <option>Comprar</option>
              <option>Vender</option>
            </select>
          </div>
          <button type="submit" class="btn btn-primary">Aceptar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CompraVenta',
  data() {
    return {
      Operacion: {
        Criptomoneda: null,
        Cantidad: null,
        Monto: null,
        Movimiento: null,
      },
    };
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
};
</script>

<style scoped>
h1 {
  font-weight: bold;
  color: white;
}
</style>
