export const categoryStore = {
  namespaced: true,
  state: {
    categories: [],
  },
  mutations: {
    setCategories(state, payload) {
      state.categories = payload;
    },
  },
  actions: {
    async getCategories({ commit }) {
      let res = await fetch("/rest/categories");
      res = await res.json();
      commit("setCategories", res);
    },
  },
};
