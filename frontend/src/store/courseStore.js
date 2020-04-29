export const courseStore = {
  namespaced: true,
  state: {
    courses: []
  },
  mutations: {
    setCourses(state, payload) {
      state.courses = payload;
    }
  },
  actions: {
    async getCourses({ commit }) {
      let res = await fetch("/rest/courses");
      res = await res.json();
      commit("setCourses", res);
    }
  }
};
