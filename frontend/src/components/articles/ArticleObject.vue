<template>
  <div class="article-object">
    <h6>{{ article.timestamp }}</h6>
    <h5 @click="goToArticle(article.slug)">{{ article.title }}</h5>
  </div>
</template>

<script>
import { Vue, Component, Prop } from "vue-property-decorator";

@Component()
export default class ArticleObject extends Vue {
  @Prop(Object)
  article;

  goToArticle(slug) {
    this.$router.push(`/article/${slug}`)
  }
}
</script>

<style scoped lang="scss">
.article-object {
  margin-bottom: 1em;

  h6 {
    margin: 0;
  }
  h5 {
    font-size: 2em !important;
    margin: 0;
  }
  h5:hover{
    cursor: pointer;
    text-decoration: underline;
  }
}
</style>
