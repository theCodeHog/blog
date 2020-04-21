<template>
  <div class="article-page">
    <Article :article="article" />
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import Article from "../components/articles/Article";

@Component({
  components: {
    Article,
  },
})
export default class ArticlePage extends Vue {
  get article() {
    return this.$store.state.articles.filter(
      (article) => article.slug === this.$route.params.articleName
    )[0];
  }
}
</script>

<style scoped lang="scss"></style>
