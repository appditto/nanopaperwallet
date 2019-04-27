import Vue from 'vue'
import App from './App.vue'
import { store } from './util/store'
import router from './router/index'
// Load all assets
import './assets/img/index.js'

let v = new Vue({
  el: '#app',
  store,
  router,  
  components: { App },
  template: '<App/>',
  render: h => h(App),
}).$mount('#app')