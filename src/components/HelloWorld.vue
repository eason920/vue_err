<template>
  <div class="hello">
    <a href="#" @click.prevent="signout">登出</a>
    <a href="#" @click.prevent="login">登入</a>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    login(){
      this.$router.push('/login');
    },
    signout(){
      console.log('sign out');
      const api = process.env.API_PATH + 'logout';
      console.log('signout, ', api);
      const vm = this;
      vm.$http.post(api).then((res)=>{
        console.log(res);
        vm.$router.push('/login')
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
