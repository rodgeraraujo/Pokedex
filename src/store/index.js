import Vue from "vue";
import Vuex from "vuex";

import pokemon from "@/store/modules/pokemon";
import species from "@/store/modules/species";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    pokemon,
    species
  }
});
