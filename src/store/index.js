import Vue from "vue";
import Vuex from "vuex";
import cards from "./modules/cards";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isGameStarted: false,
    results: []
  },
  getters: {
    getGameStatus: state => state.isGameStarted,
    getResults: state => state.results
  },
  mutations: {
    SET_GAME_STATUS: (state, payload) => state.isGameStarted = payload,
    PUSH_GAME_RESULT :(state, payload) => state.results.push(payload)
  },
  actions: {},
  modules: { cards }
});
