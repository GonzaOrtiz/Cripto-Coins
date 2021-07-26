<template>
  <div class="about">
  </div>
<!--  ********DataTableHistorialDeMovimientos*********-->
  <div v-if="HistorialView">
  <h1 >Historial de Movimientos</h1>
    <div class="spinner-border text-warning" role="status" v-if="BuyAndSell.length === 0">
      <span class="sr-only"></span>
    </div>
  <div class="card mx-auto" style="width: 60rem;"
       v-if="BuyAndSell.length !== 0 && HistorialView">
    <div class="card-body">
      <table class="table table-hover table-responsive">
        <thead>
        <tr>
          <th scope="col">Action</th>
          <th scope="col">CryptoMoneda</th>
          <th scope="col">Monto</th>
          <th scope="col">Ars</th>
          <th scope="col">Fecha</th>
          <th scope="col">Detalle/Editar/Eliminar</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="element in BuyAndSell" :key="element._id">
          <td>{{ element.action }}</td>
          <td>{{ element.crypto_code }}</td>
          <td>{{ element.crypto_amount }}</td>
          <td>{{ element.money}}</td>
          <td>{{ element.datetime}}</td>
          <td><button class="btn btn-primary" @click="detallePorId(element._id)">Detalle</button>
            <button class="btn btn-success"
                    @click="buscarParaEditarPorId(element._id)">Editar</button>
            <button class="btn btn-danger"
                    @click="eliminarPorId(element._id)">Eliminar</button></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
  </div>
  <!--  ********DetalleDeMovimientos*********-->
  <detalle-historial v-if="DetailView" :detalle="Detail"></detalle-historial>
  <!--  ********EditarMovimientos*********-->
<div v-if="EditView">
  <h1>Editar</h1>
  <div class="card mx-auto" style="width: 25rem;">
    <div class="card-body">
      <form @submit.prevent="btnSubmit">
        <div class="mb-3">
          <label class="form-label">Criptomoneda</label>
          <select class="form-control" v-model="Edit.crypto_code">
            <option>Bitcoin</option>
            <option>Usdc</option>
            <option>Etherium</option>
          </select>
          <label class="form-label">Cantidad</label>
          <input type="number" class="form-control"  :class="claseCantidadcomputada"
                 v-model.number="Edit.crypto_amount"
                 step="0.00001" min="0.00001" >
          <label class="form-label">Movimiento</label>
          <select class="form-control" v-model="Edit.action">
            <option>purchase</option>
            <option>sale</option>
          </select>
          <label class="form-label">$Monto ars  total</label>
          <input type="" class="form-control" disabled v-model="Edit.money">
          <label class="form-label">Fecha</label>
          <input type="" class="form-control" disabled v-model="Edit.datetime">
        </div>
        <button type="submit" class="btn btn-primary">Aceptar</button>
      </form>
    </div>
  </div>
</div>
</template>

<script>
import BuyAndSellService from '../services/BuyAndSellService';
import DetalleHistorial from '../components/DetalleHistorial.vue';

export default {
  name: 'Menu',
  components: {
    DetalleHistorial,
  },
  data() {
    return {
      fecha: null,
      BuyAndSell: [],
      EditId: null,
      Edit: [],
      Detail: [],
      HistorialView: true,
      EditView: false,
      DetailView: false,
    };
  },
  created() {
    BuyAndSellService.getApiBuyAndSell().then((result) => {
      console.log(result.data);
      this.BuyAndSell = result.data;
    });
  },
  methods: {
    detallePorId(id) {
      console.log(id);
      BuyAndSellService.getApiBuyAndSellById(id).then((result) => {
        this.Detail = result.data;
        console.log(this.Detail);
        this.HistorialView = false;
        this.EditView = false;
        this.DetailView = true;
      });
    },
    eliminarPorId(id) {
      BuyAndSellService.deleteApiBuyAndSell(id).then((result) => {
        console.log(result);
      });
      alert('Eliminado Correctamente');
    },
    buscarParaEditarPorId(id) {
      console.log(id);
      BuyAndSellService.getApiBuyAndSellById(id).then((result) => {
        this.Edit = result.data;
        console.log(this.Edit);
        this.EditId = id;
        this.HistorialView = false;
        this.EditView = true;
        this.DetailView = false;
      });
    },
    btnSubmit() {
      this.EditarPatch();
    },
    EditarPatch() {
      // debugger;
      BuyAndSellService.editApiBuyAndSell(this.EditId, this.Edit)
        .then((response) => {
          console.log(response);
          if (response.status !== 201) {
            console.log('transacción Bien!');
            alert('Editado correctamente');
          }
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
        });
    },
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
