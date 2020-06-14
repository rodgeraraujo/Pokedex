import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./routes";

import ApiService from "./services/api";

import titleMixin from "./util/titleMixin";

import "@styles/pokemon-types.css";
import "@styles/global.css";

ApiService.init();

Vue.mixin(titleMixin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
