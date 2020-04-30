<template>
  <v-col cols="12" md="6">
    <v-select
      dense
      hide-details
      multiple
      solo
      label="Choose Category"
      :items="categories"
      item-text="name"
      v-model="chosenCategories"
    >
    </v-select>
    <CategoriesSelected
      @removeCategory="removeCategory"
      :chosenCategories="chosenCategories"
    />
  </v-col>
</template>

<script>
import { Vue, Component, Watch } from "vue-property-decorator";
import CategoriesSelected from "./CategoriesSelected";

@Component({
  components: {
    CategoriesSelected,
  },
})
export default class CategoryField extends Vue {
  chosenCategories = [];

  get categories() {
    return this.$store.state.categoryStore.categories;
  }

  @Watch("chosenCategories")
  onValueChange(value) {
    this.$store.commit("articleStore/setArticle", {
      categories: value,
    });
  }

  removeCategory(index) {
    this.chosenCategories = this.chosenCategories.filter(
      (category, i) => i !== index
    );
  }

  created() {
    this.$store.dispatch("categoryStore/getCategories");
  }
}
</script>

<style scoped lang="scss"></style>
