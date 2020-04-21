<template>
  <div class="category-field col s12 m3 push-m3">
    <select name="" id="" class="dropdown white">
      <option value="" v-for="(category, i) in categories" :key="i">{{
        category.name
      }}</option>
    </select>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

@Component()
export default class CategoryField extends Vue {
  categories = [
    { name: "Choose Category" },
    { name: "Java" },
    { name: "JavaScirpt" },
    { name: "SQL" },
    { name: "Vue" },
    { name: "React" },
  ];
}
</script>

<style scoped lang="scss">
  .dropdown {
    border-radius: 5px;
    margin: 0 0 8px 0;
  }
</style>
