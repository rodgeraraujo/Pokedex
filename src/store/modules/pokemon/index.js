import { PokemonService } from "@/services/api";

import { FETCH_POKEMON } from "@/store/type/actions";
import { SET_POKEMON } from "@/store/type/mutations";

const state = {
  pokemon: [],
  isLoading: true,
  pokemonCount: 0
};

const getters = {
  pokemonCount(state) {
    return state.pokemonCount;
  },
  pokemon(state) {
    return state.pokemon;
  },
  isLoading(state) {
    return state.isLoading;
  }
};

const actions = {
  [FETCH_POKEMON]({ commit }) {
    return PokemonService.get()
      .then(({ data }) => {
        commit(SET_POKEMON, {
          pokemon: data.results,
          pokemonCount: data.count
        });
      })
      .catch(error => {
        throw new Error(error);
      });
  }
};

const mutations = {
  [SET_POKEMON](state, { pokemon, pokemonCount }) {
    state.pokemon = pokemon;
    state.pokemonCount = pokemonCount;
    state.isLoading = false;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
