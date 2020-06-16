import Vue from "vue";
import App from "./App.vue";

import { createStore } from "./store";
import { createRouter } from "./routes";

import ApiService from "./services/api";

import titleMixin from "./util/titleMixin";

import "@styles/pokemon-types.css";
import "@styles/global.css";

ApiService.init();

Vue.mixin(titleMixin);

Vue.config.productionTip = false;

export function createApp() {
  const store = createStore();
  const router = createRouter();

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  });

  return { app, router, store };
}
