import Vue from "vue";
import Vuex from "vuex";
import {articleStore} from "./articleStore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    articles: [
      {
        id: Math.random(),
        title: "Java Basics",
        slug: "java-basics",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam saepe sapiente provident distinctio perspiciatis atque ea cumque tenetur consequuntur beatae quam, et corporis delectus excepturi doloremque. Ad, repudiandae. Enim tempora asperiores aut. Illo, dolorem pariatur? Minima quam excepturi impedit aut iste sint odio accusamus. Quos voluptates voluptatem maiores temporibus facere.",
        categories: ["Java", "Beginner"],
        timestamp: new Date(),
        educations: [{ name: "Java Developer" }],
        courses: [
          { name: "Basic Java" },
          { name: "Object Oriented Programming" },
        ],
      },
      {
        id: Math.random(),
        title: "Vue Basics",
        slug: "vue-basics",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae maxime necessitatibus autem fugiat officia? Sint debitis ea, minus sapiente totam delectus perspiciatis ex. Hic, laborum.",
        categories: ["JavaScript", "Vue", "Beginner"],
        timestamp: new Date(),
        educations: [{ name: "Java Developer" }],
        courses: [{ name: "Frontend" }],
      },
      {
        id: Math.random(),
        title: "Vue Routing",
        slug: "vue-routing",
        content:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae repudiandae praesentium tempore aut aliquam rerum? Assumenda exercitationem, non consequuntur quasi quibusdam illum at recusandae officiis quis deserunt, sapiente earum vel adipisci et quia eligendi. Dignissimos inventore quis, ipsum maxime quidem debitis ipsam, aliquid animi doloremque omnis laborum. Harum amet, eligendi numquam excepturi itaque doloremque similique et fugiat voluptatibus praesentium dolor eveniet nihil. Eveniet mollitia eum temporibus, fugiat blanditiis, aperiam totam vitae necessitatibus cupiditate minima dolorem omnis voluptatum tempora est reprehenderit ut! Vel in consequuntur veritatis unde minima, totam neque ratione, rerum, reiciendis esse quis mollitia! Atque laudantium, rem vel consectetur et ad eveniet harum nam voluptatum veritatis cumque veniam cum reprehenderit voluptatem ipsa. Voluptatem debitis ipsam velit repellendus aliquam veritatis ad numquam consequatur molestias. Eligendi minus adipisci nihil quo explicabo alias, aliquid est illo ex ea consectetur impedit nostrum perferendis, beatae tempore vel sit corrupti aspernatur qui pariatur temporibus et, eum possimus non? Accusantium deleniti voluptatem esse incidunt nesciunt aspernatur, nam magnam fuga voluptates perferendis. In quae fugiat aut hic minima! Quisquam vero qui consequuntur ducimus, beatae fugiat commodi soluta maxime. Fugit repellendus ratione ipsam minus esse ducimus dolor officiis molestiae impedit quisquam quibusdam corrupti nostrum consequuntur quae culpa qui, consectetur perferendis magnam iure recusandae! Ut eligendi sunt qui aut eius in, aspernatur laudantium mollitia nihil dignissimos? Modi minima soluta tenetur est at ad pariatur possimus quo laborum distinctio? Hic, aliquam rerum ullam expedita unde, pariatur et non ratione repudiandae perferendis enim officia consequuntur quae a qui mollitia fugiat! Vero quidem, quia molestias ad quisquam provident assumenda quod repellat soluta alias consequuntur nesciunt ducimus unde praesentium nostrum, dolorem accusamus blanditiis cum mollitia non dolorum consequatur autem! Et obcaecati sint temporibus assumenda. Accusantium at tempora asperiores libero nam alias, temporibus corrupti vitae, sapiente, officia dolore deleniti provident eaque eveniet assumenda vel!",
        categories: ["JavaScript", "Vue", "Intermediate"],
        timestamp: new Date(),
        educations: [{ name: "Java Developer" }],
        courses: [{ name: "Frontend" }],
      },
    ],

    sortedArticles: null,

    article: null,

    education: {
      name: "Java Developer",
      courses: [{ name: "Basic Java" }, { name: "Frontend" }],
    },
  },
  mutations: {
    setSortedArticles(state, data) {
      state.sortedArticles = data;
    },
  },
  actions: {},
  modules: {
    articleStore
  },
});
