import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import Buefy from 'buefy'
Vue.use(Buefy);

Vue.config.productionTip = false
import '@/styles/_index.scss';

new Vue({
  router,
  store: store.original,
  render: h => h(App)
}).$mount('#app')
