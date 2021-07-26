<template>
  <div class="hello">
    <div id="nav">
      <h1 v-if="bienvenido">Bienvenido Gonzalo</h1>
      <h1 v-if="!bienvenido">Ingresar</h1>
      <div class="card mx-auto" style="width: 18rem;" v-if="!bienvenido">
        <div class="card-body">
            <div class="mb-3">
              <input class="form-control"
                     :class="claseCantidadcomputada" aria-describedby="emailHelp"
                      v-model="login">
              <div id="emailHelp" class="form-text"></div>
            </div>
            <button type="submit" class="btn btn-primary"
                    v-on:click="comprobacionLogin">Aceptar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data() {
    return {
      login: null,
      bienvenido: false,
    };
  },
  computed: {
    claseCantidadcomputada() {
      let dato = '';
      if (this.login === null) {
        dato = '';
      } else if (this.login === '') {
        dato = 'is-invalid';
      } else if (this.login !== '') {
        dato = 'is-valid';
      }
      return dato;
    },
  },
  methods: {
    comprobacionLogin() {
      if (this.login === this.$store.state.loginCorrecto) {
        this.$store.commit('LOGIN_MODIFICAR', true);
        this.bienvenido = true;
      }
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
h1 {
  font-weight: bold;
  color: white;
}
</style>
<style scoped>
h1 {
  font-weight: bold;
  color: white;
}
</style>
