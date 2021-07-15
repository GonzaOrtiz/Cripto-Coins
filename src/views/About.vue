<template>
  <div class="about">
    <h1>Alumno: Gonzalo Ortiz</h1>
  </div>
</template>

<script>
import BuyAndSellService from '../services/BuyAndSellService';

export default {
  name: 'Menu',
  data() {
    return {
      BuyAndSell: [],

    };
  },
  created() {
    BuyAndSellService.getApiBuyAndSell().then((result) => {
      console.log(result.data);
      this.BuyAndSell = result.data;
    });
  },
};
</script>

<style scoped>
h1 {
  font-weight: bold;
  color: white;
}
</style>
