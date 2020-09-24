import Vue from 'vue'
import App from './App.vue'
import i18n from "./plugins/i18n";
import router from "./router";
import VueMeta from "vue-meta";
import Vue2Filters from 'vue2-filters'
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
/* FontAwesome Config */
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText,
} from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/pro-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/pro-regular-svg-icons'
import { fad } from '@fortawesome/pro-duotone-svg-icons'
import { fal } from '@fortawesome/pro-light-svg-icons'
import checkView from 'vue-check-view'
Vue.use(checkView)
library.add(fas)
library.add(fab)
library.add(far)
library.add(fad)
library.add(fal)

// Register the component globally
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(Vue2Filters)

Vue.use(VueMeta, {
  refreshOnceOnNavigation: true,
});

router.beforeEach((to, from, next) => {
  // i18n language setup
  let language = to.params.lang;
  if (!language) {
    language = "fr";
  }
  i18n.locale = language;
  next();
});

new Vue({
  i18n,
  router,
  render: h => h(App),
}).$mount('#app')
