import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    articles: [
      {
        id: Math.random(),
        title: "Java Basics",
        timestamp: new Date(),
      },
      {
        id: Math.random(),
        title: "Vue Basics",
        timestamp: new Date()
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
