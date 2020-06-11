import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

import pkg from "../../package.json";

import { API_BASE } from "@/config";

const ApiService = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = API_BASE;
  },

  setHeader() {
    Vue.axios.defaults.headers.common["From"] = `${pkg.repository.url}`;
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

export const PokemonDescriptionService = {
  get(slug) {
    return ApiService.get("pokemon", slug);
  }
};
