import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

// import Buefy from 'buefy'
// Vue.use(Buefy);

import { Navbar, Button, Slider, Modal, Field, Input } from 'buefy';
Vue.use(Navbar);
Vue.use(Button);
Vue.use(Slider);
Vue.use(Modal);
Vue.use(Field);
Vue.use(Input);

Vue.config.productionTip = false
import '@/styles/_index.scss';

new Vue({
  store: store.original,
  router,
  render: h => h(App)
}).$mount('#app')
