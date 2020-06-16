import { PokemonService, PokemonDescriptionService } from "@/services/api";

import {
  FETCH_POKEMON,
  FETCH_POKEMON_DESCRIPTION,
  FETCH_POKEMON_QUERY
} from "@/store/type/actions";
import {
  SET_POKEMON,
  SET_POKEMON_DESCRIPTION,
  SET_POKEMON_QUERY
} from "@/store/type/mutations";

const state = {
  pokemonList: [],
  isLoading: true,
  isPokemon: false,
  pokemonCount: 0,
  pokemonDescription: {}
};

const getters = {
  pokemonCount(state) {
    return state.pokemonCount;
  },
  pokemonList(state) {
    return state.pokemon;
  },
  isLoading(state) {
    return state.isLoading;
  },
  pokemonDescription(state) {
    return state.pokemonDescription;
  },
  isPokemon(state) {
    return state.isPokemon;
  }
};

const actions = {
  [FETCH_POKEMON]({ commit }) {
    return PokemonService.get()
      .then(({ data }) => {
        commit(SET_POKEMON, {
          pokemonList: data.results,
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
  },
  [FETCH_POKEMON_QUERY]({ commit }, params) {
    return PokemonService.query(params.offset, params.limit)
      .then(({ data }) => {
        commit(SET_POKEMON_QUERY, {
          pokemonList: data.results
        });
      })
      .catch(error => {
        throw new Error(error);
      });
  }
};

const mutations = {
  [SET_POKEMON](state, { pokemonList, pokemonCount }) {
    state.pokemonList = pokemonList;
    state.pokemonCount = pokemonCount;
    state.isLoading = false;
  },
  [SET_POKEMON_DESCRIPTION](state, { pokemonDescription }) {
    state.pokemonDescription = pokemonDescription;
    state.isPokemon = true;
  },
  [SET_POKEMON_QUERY](state, { pokemonList }) {
    state.pokemonList.push(...pokemonList);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
