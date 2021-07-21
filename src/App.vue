<template>
  <div id="nav">
    <router-link to="/">Inicio</router-link> |
    <router-link to="/menu" >Menu</router-link> |
    <router-link to="/operar">Operar</router-link> |
    <router-link to="/historial">Historial</router-link> |
    <router-link to="/analisisdeestado">Estado</router-link> |
    <router-link to="/about">Autor</router-link>
    <body >
    </body>
  </div>
  <router-view/>
</template>
<script>

export default {
  name: 'App',
  data() {
    return {
      valido: this.$store.state.accesoTotal,
    };
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: darkgoldenrod;
}

#nav a.router-link-exact-active {
  color: white;
}

body {
  background-color: #ffdd90;
  background-image: url('./assets/bitcoin.jpg');
  background-repeat: unset ;

}
</style>
