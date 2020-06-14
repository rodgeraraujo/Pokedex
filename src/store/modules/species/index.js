import { PokemonSpeciesService } from "@/services/api";

import { FETCH_POKEMON_SPECIES } from "@/store/type/actions";
import { SET_POKEMON_SPECIES } from "@/store/type/mutations";

const state = {
  pokemonSpecie: {}
};

const getters = {
  pokemonSpecie(state) {
    return state.pokemonSpecie;
  }
};

const actions = {
  [FETCH_POKEMON_SPECIES]({ commit }, slug) {
    return PokemonSpeciesService.get(slug)
      .then(({ data }) => {
        commit(SET_POKEMON_SPECIES, {
          pokemonSpecie: data
        });
      })
      .catch(error => {
        throw new Error(error);
      });
  }
};

const mutations = {
  [SET_POKEMON_SPECIES](state, { pokemonSpecie }) {
    state.pokemonSpecie = pokemonSpecie;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
