<template>
  <div class="article">
    <h1>{{article.title}}</h1>
    <p>
      {{article.content}}
    </p>
  </div>
</template>

<script>
import { Vue, Component, Prop} from "vue-property-decorator";

@Component()
export default class Article extends Vue {

@Prop()
article;
}
</script>

<style scoped lang="scss">

</style>