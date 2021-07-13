<template>
  <div class="hello">
    <div id="nav">
      <div class="card mx-auto" style="width: 18rem;">
        <div class="card-body">
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">INGRESAR LOGIN</label>
              <input type="email" class="form-control"
                     id="exampleInputEmail1" aria-describedby="emailHelp">
              <div id="emailHelp" class="form-text"></div>
            </div>
            <button type="submit" class="btn btn-primary">Aceptar</button>
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
