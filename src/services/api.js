import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

import { API_BASE } from "@/config";

const ApiService = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = API_BASE;
  },

  setHeader() {
    Vue.axios.defaults.headers.common[
      "From"
    ] = `https://github.com/rodgeraraujo/pokedex`;
  },

  query(resource, params) {
    return Vue.axios.get(resource, params).catch(error => {
      throw new Error(`[ERROR] ApiService ${error}`);
    });
  },

  get(resource, slug = "") {
    return Vue.axios.get(`${resource}/${slug}`).catch(error => {
      throw new Error(`[ERROR] ApiService ${error}`);
    });
  }
};

export default ApiService;

export const PokemonService = {
  get() {
    return ApiService.get("pokemon");
  }
};
