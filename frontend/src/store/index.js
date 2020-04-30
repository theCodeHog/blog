import Vue from "vue";
import Vuex from "vuex";
import {articleStore} from "./articleStore";
import {courseStore} from "./courseStore";
import {categoryStore} from "./categoryStore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sortedArticles: []
  },
  mutations: {
    setSortedArticles(state, data) {
      state.sortedArticles = data;
    },
  },
  actions: {},
  modules: {
    articleStore,
    courseStore,
    categoryStore,
  },
});
