<template>
  <v-select
    dense
    hide-details
    solo
    label="Choose Category"
    :items="categories"
    item-text="name"
    v-model="chosenCategory"
  >
  </v-select>
</template>

<script>
import { Vue, Component, Watch } from "vue-property-decorator";

@Component()
export default class CategoryField extends Vue {
  chosenCategory = "";
  chosenCategories = [];

  get categories() {
    return this.$store.state.categoryStore.categories;
  }

  @Watch("chosenCategory")
  onValueChange(newVal) {
    this.chosenCategories.push(newVal);
    this.$store.commit("articleStore/setArticle", {
      categories: this.chosenCategories,
    });
  }

  created() {
    this.$store.dispatch("categoryStore/getCategories");
  }
}
</script>

<style scoped lang="scss"></style>
