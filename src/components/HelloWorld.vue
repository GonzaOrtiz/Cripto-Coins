<template>
  <div class="hello">
    <div id="nav">
      <div class="card mx-auto" style="width: 18rem;">
        <div class="card-body">
          <form>
            <div class="mb-3">
              <label class="form-label">INGRESAR LOGIN</label>
              <input class="form-control"
                     :class="claseCantidadcomputada" aria-describedby="emailHelp"
                      v-model="login">
              <div id="emailHelp" class="form-text"></div>
            </div>
            <button type="submit" class="btn btn-primary"
                    v-on:click="comprobacionLogin">Aceptar</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      login: null,
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
        alert('Login correcto bitch');
        this.$store.state.accesoTotal = true;
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
</style>
