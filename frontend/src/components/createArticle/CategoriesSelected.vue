<template>
  <div class="mt-2">
    <v-chip
      small
      outlined
      class="ma-1"
      v-for="(category, index) in chosenCategories"
      :key="index"
      @click="removeCategory(index)"
    >
      {{ category }}
      <v-icon right>mdi-delete-forever</v-icon>
    </v-chip>
  </div>
</template>

<script>
import { Vue, Component, Prop } from "vue-property-decorator";

@Component()
export default class CategoriesSelected extends Vue {
  @Prop()
  chosenCategories;

  removeCategory(index) {
    this.$emit("removeCategory", index);
  }
}
</script>

<style></style>
