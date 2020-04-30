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
          <RightPanel class="hidden-md-and-down" />
        </v-col>
      </v-row>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import Header from "./components/header/Header";
import HeaderImage from "./components/header/HeaderImage";
import AsideNav from "./components/navigation/AsideNav";
import RightPanel from "./components/right-panel/RightPanel";
import Footer from "./components/Footer";
import SearchField from "./components/search/SearchField";
import CategoryField from "./components/createArticle/CategoryField";

@Component({
  components: {
    Header,
    HeaderImage,
    AsideNav,
    RightPanel,
    Footer,
    SearchField,
    CategoryField,
  },
})
export default class App extends Vue {
  async createArticle() {
    let res = await fetch("/rest/articles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.article),
    });
    res = await res.json();
    console.log(res);
  }

  created() {
    this.$store.dispatch("articleStore/getArticles");
    this.$store.dispatch("courseStore/getCourses");
  }
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
