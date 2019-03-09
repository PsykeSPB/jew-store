import Vue from 'vue';
import db from './plugins/db';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store/store';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';

Vue.config.productionTip = false;
Vue.prototype.$db = db;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
