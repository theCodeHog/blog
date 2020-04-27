<template>
  <div class="sorted-article-page">
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
export default class SortedArticlesPage extends Vue {
  get articles() {
    let sortedArticlesByCourse = this.$store.state.articles.filter(
      (article) => {
        return article.courses.some((course) => {
          return course.name === this.$route.params.courseName;
        });
      }
    );
    return sortedArticlesByCourse;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.sorted-article-page {
  margin: 2em 0;
  padding: 0 2em !important;
}
</style>
