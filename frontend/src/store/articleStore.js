export const articleStore = {
  namespaced: true,
  state: {
    article: {}
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