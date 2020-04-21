<template>
  <div class="article">
    <h4>{{article.title}}</h4>
    <ArticleCategory :categories="article.categories" />
    <p>
      {{article.content}}
    </p>
  </div>
</template>

<script>
import { Vue, Component, Prop} from "vue-property-decorator";
import ArticleCategory from "./ArticleCategory"

@Component({
  components: {
    ArticleCategory
  }
})
export default class Article extends Vue {

@Prop()
article;

}
</script>

<style scoped lang="scss">

</style>