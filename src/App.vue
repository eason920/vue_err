<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>h1 from app.vue</h1>
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  created(){
    this.$http.get('https://randomuser.me/api/')
      .then((res)=>{
        console.log('res', res.data.results[0]);
      })
  }
}
</script>

<style>
h1{color: blue!important;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
