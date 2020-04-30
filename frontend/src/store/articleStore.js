export const articleStore = {
  namespaced: true,

  state: {
    article: {},
    articles: [],
  },

  mutations: {
    setArticle(state, payload) {
      state.article = {
        ...state.article,
        ...payload,
      };
    },

    setArticles(state, payload) {
      state.articles = payload;
    },
  },

  actions: {
    async getArticles({ commit }) {
      let res = await fetch("/rest/articles");
      res = await res.json();
      commit("setArticles", res);
    },
  },
};
