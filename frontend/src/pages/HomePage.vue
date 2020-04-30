<template>
  <div class="home-page">
    <ArticleObject
      v-for="article in articles"
      :key="article.id"
      :article="article"
    />
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import ArticleObject from "../components/articles/ArticleObject";

@Component({
  components: {
    ArticleObject,
  },
})
export default class HomePage extends Vue {
  //Computed
  get articles() {
      return this.$store.state.articleStore.articles;
  }

  //Methods
  async getSomeData() {
    let res = await fetch("/api/hello");
    res = await res.json();
    console.log(res);

    this.message = res.message;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home-page {
  margin: 2em 0;
  padding: 0 2em !important;
}
</style>
