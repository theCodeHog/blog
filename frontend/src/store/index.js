import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    articles: [
      {
        id: Math.random(),
        title: "Java Basics",
        slug: "java-basics",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam saepe sapiente provident distinctio perspiciatis atque ea cumque tenetur consequuntur beatae quam, et corporis delectus excepturi doloremque. Ad, repudiandae. Enim tempora asperiores aut. Illo, dolorem pariatur? Minima quam excepturi impedit aut iste sint odio accusamus. Quos voluptates voluptatem maiores temporibus facere.",
        categories: ["Java", "Beginner"],
        timestamp: new Date()
      },
      {
        id: Math.random(),
        title: "Vue Basics",
        slug: "vue-basics",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae maxime necessitatibus autem fugiat officia? Sint debitis ea, minus sapiente totam delectus perspiciatis ex. Hic, laborum.",
        categories: ["JavaScript", "Vue", "Beginner"],
        timestamp: new Date()
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
