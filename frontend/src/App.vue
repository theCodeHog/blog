<template>
  <v-app>
    <HeaderImage class="col s12" />
    <v-content>
      <v-row>
        <v-col cols="2" class="pl-0">
          <AsideNav class="hidden-md-and-down" />
        </v-col>
        <v-col cols="12" md="8">
          <router-view />
        </v-col>
        <v-col cols="2">
          <PlaceHolder class="hidden-md-and-down" />
        </v-col>
      </v-row>
    </v-content>
    <!-- <button @click="createArticle">Click Me</button> -->
    <Footer />
  </v-app>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import Header from "./components/header/Header";
import HeaderImage from "./components/header/HeaderImage";
import AsideNav from "./components/navigation/AsideNav";
import PlaceHolder from "./components/notifications/PlaceHolder";
import Footer from "./components/Footer";
import { uuid } from "./components/utilities/utils";
import SearchField from "./components/search/SearchField";
import CategoryField from "./components/search/CategoryField";

@Component({
  components: {
    Header,
    HeaderImage,
    AsideNav,
    PlaceHolder,
    Footer,
    SearchField,
    CategoryField,
  },
})
export default class App extends Vue {
  article = {
    id: uuid(),
    title: "Java Basics",
    slug: "java-basics",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam saepe sapiente provident distinctio perspiciatis atque ea cumque tenetur consequuntur beatae quam, et corporis delectus excepturi doloremque. Ad, repudiandae. Enim tempora asperiores aut. Illo, dolorem pariatur? Minima quam excepturi impedit aut iste sint odio accusamus. Quos voluptates voluptatem maiores temporibus facere.",
    // categories: ["Java", "Beginner"],
    timestamp: Date.now() + "",
    // educations: [{ name: "Java Developer" }],
    // courses: [{ name: "Basic Java" }, { name: "Object Oriented Programming" }],
  };

  async createArticle() {
    let res = await fetch("/rest/articles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.article),
    });
    res = await res.json();
    console.log(res);
  }

  // mounted() {
  //   console.log(this.$store.state.articleStore.article);
  // }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
body {
  background-color: rgb(253, 249, 228);
}
button {
  background-color: #597318 !important;
}
.v-navigation-drawer__border {
  width: 0 !important;
}
</style>
