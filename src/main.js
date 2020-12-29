import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  el: '#app',
  vuetify,
  render: h => h(App)
})