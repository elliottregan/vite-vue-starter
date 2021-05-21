/* eslint-disable no-param-reassign */
import { createStore } from 'vuex';
import { fetchPokemon } from '@/services/httpSvc'

export default createStore({
  state: {
    pokemon: null,
  },
  mutations: {
    setPokemon(state, pokemon) {
      state.pokemon = pokemon;
    },
  },
  getters: {
    getPokemonName({ pokemon }) {
      return pokemon?.name
    }
  },
  actions: {
    async fetchPokemon({ commit }) {
      commit('setPokemon', await fetchPokemon(1));
    },
  },
});
