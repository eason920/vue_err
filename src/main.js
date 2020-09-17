// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueAxios from 'vue-axios'
import Axios from 'axios'

import 'bootstrap'
import router from './router'

Vue.use(VueAxios, Axios);
Axios.defaults.withCredentials = true;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


router.beforeEach((to, from, next) => {
  if( to.meta.requireAuth ){
    console.log('%cthe to page need check', 'color: yellow');
    const api = process.env.API_PATH + 'api/user/check';
    // this.$http.post(api).then((req)=>{ // ERROR
    Axios.post(api).then((req)=>{
      if( req.data.success ){
        next();
      }else{
        next({
          path: '/log_err'
        })
      }
    })
  }else{
    next();
  }
})