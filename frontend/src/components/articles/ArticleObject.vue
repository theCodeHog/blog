<template>
  <div class="article-object">
    <h6>{{ articleDate }}</h6>
    <h5 @click="goToArticle(article.slug)">{{ article.title }}</h5>
    <ArticleCategory :categories="article.categories" />
  </div>
</template>

<script>
import { Vue, Component, Prop } from "vue-property-decorator";
import ArticleCategory from "./ArticleCategory";

@Component({
  components: {
    ArticleCategory,
  },
})
export default class ArticleObject extends Vue {
  @Prop(Object)
  article;

  get articleDate() {
    return new Date(+this.article.timestamp).toLocaleString().slice(0, -3);
  }

  goToArticle(slug) {
    this.$router.push(`/article/${slug}`);
  }
}
</script>

<style scoped lang="scss">
.article-object {
  border-radius: 5px;
  margin-bottom: 1em;
  padding: 1em;

  h6 {
    margin: 0;
  }
  h5 {
    font-size: 2em !important;
    margin: 0 0 0.2em 0;
  }
  h5:hover {
    cursor: pointer;
    text-decoration: underline;
  }
}
.article-object:hover {
  background-color: rgba(89, 115, 24, 0.05);
}
</style>
