<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <!-- <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-light">Light</button>
    <button type="button" class="btn btn-dark">Dark</button>
    <button type="button" class="btn btn-link">Link</button> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    //eason_ru
    //es
    //es2
    const API = process.env.API_PATH + process.env.ACT_PATH + '/products';
    // ^ https://vue-course-api.hexschool.io/api/es/products
    console.log(API);
    this.$http.get(API).then((res)=>{
      console.log(res);
    });
  }
}
</script>

<style lang='sass'>
  // @import './assets/all'
  @import '~bootstrap/scss/functions'
  @import './assets/helper/variables'
  @import '~bootstrap/scss/bootstrap'
</style>
