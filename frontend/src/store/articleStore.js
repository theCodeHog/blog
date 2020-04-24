export const articleStore = {
  namespaced: true,
  state: {
    article: null
  },
  mutations: {
    setArticle(state, payload) {
      state.article = {
        ...state.article,
        ...payload
      }
    }
  }
}