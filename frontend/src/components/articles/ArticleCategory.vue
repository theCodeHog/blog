<template>
  <div class="categories">
    <span v-for="(category, i) in categories" :key="i" class="category">{{
      category
    }}</span>
  </div>
</template>

<script>
import { Vue, Component, Prop } from "vue-property-decorator";

@Component()
export default class ArticleCategory extends Vue {
  @Prop()
  categories;
}
</script>

<style scoped land="scss">
.category {
  border: 1px solid #597318;
  border-radius: 5px;
  color: #597318;
  margin: 0 0.5em 0 0;
  padding: 0 0.3em;
}
</style>
