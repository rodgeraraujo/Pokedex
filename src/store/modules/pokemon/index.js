import { PokemonService, PokemonDescriptionService } from "@/services/api";

import { FETCH_POKEMON, FETCH_POKEMON_DESCRIPTION } from "@/store/type/actions";
import { SET_POKEMON, SET_POKEMON_DESCRIPTION } from "@/store/type/mutations";

const state = {
  pokemon: [],
  isLoading: true,
  pokemonCount: 0,
  pokemonDescription: {}
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
  },
  pokemonDescription(state) {
    return state.pokemonDescription;
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
  },
  [FETCH_POKEMON_DESCRIPTION]({ commit }, slug) {
    return PokemonDescriptionService.get(slug)
      .then(({ data }) => {
        commit(SET_POKEMON_DESCRIPTION, {
          pokemonDescription: data
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
  },
  [SET_POKEMON_DESCRIPTION](state, { pokemonDescription }) {
    state.pokemonDescription = pokemonDescription;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
