import Vue from 'vue'
import App from './App'
import router from './routers'
import store from './vuex/store'
const debug = process.env.NODE_ENV !== 'production';
new Vue({
  el: '#app',
  router,
  store,
  debug,
  render: h => h(App)
})
