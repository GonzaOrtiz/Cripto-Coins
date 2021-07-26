<template>
<h1>ProbandoArray</h1>
  <h1>{{$store.state.bitcoinStore}}</h1>
  <h1>{{$store.state.ethereumStore}}</h1>
  <h1>{{$store.state.usdcStore}}</h1>
  <h1>{{$store.state.dolarStore}}</h1>
</template>

<script>
export default {
  name: 'probandoArray',
};
</script>

<style scoped>
h1 {
  font-weight: bold;
  color: white;
}
</style>
