import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

import vuelidateErrorExtractor from "vuelidate-error-extractor";
Vue.use(vuelidateErrorExtractor);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
