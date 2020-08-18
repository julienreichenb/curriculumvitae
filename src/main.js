import Vue from 'vue'
import App from './App.vue'
import i18n from "./plugins/i18n/i18n";
import VueMeta from "vue-meta";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.use(VueMeta, {
  refreshOnceOnNavigation: true,
});

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')
