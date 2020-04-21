<template>
  <div class="article-page">
    <ArticleHeader />
    <Article :article="article" />
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import ArticleHeader from "../components/articles/ArticleHeader"
import Article from "../components/articles/Article";

@Component({
  components: {
    ArticleHeader,
    Article
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
