export const articleStore = {
  namespaced: true,
  state: {
    article: {},
    articles: []
  },
  mutations: {
    setArticle(state, payload) {
      state.article = {
        ...state.article,
        ...payload,
      };
    },
  },
};
