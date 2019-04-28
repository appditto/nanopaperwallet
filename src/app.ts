import Vue from 'vue'
import App from './App.vue'
import { store } from './util/store'
import router from './router/index'
// Load all assets
import './assets/img/index.js'
import mainCss from './assets/css/main.scss'
//@ts-ignore
import VueHtmlToPaper from 'vue-html-to-paper';

const options = {
  name: '_blank',
  specs: [
    'fullscreen=yes',
    'titlebar=yes',
    'scrollbars=yes'
  ],
  styles: [
    mainCss
  ]
}

Vue.use(VueHtmlToPaper, options);

let v = new Vue({
  el: '#app',
  store,
  router,  
  components: { App },
  template: '<App/>',
  render: h => h(App),
}).$mount('#app')