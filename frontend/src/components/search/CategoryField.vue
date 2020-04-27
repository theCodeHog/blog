<template>
  <v-col cols="12">
    <v-select
      dense
      hide-details
      solo
      label="Choose Category"
      :items="categories"
    >
    </v-select>
  </v-col>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

@Component()
export default class CategoryField extends Vue {
  elem;
  categories = ["Java", "JavaScirpt", "SQL", "Vue", "React"];

  mounted() {
    this.elem = document.querySelector("select");
    this.$M.FormSelect.init(this.elem);
  }
}
</script>

<style scoped lang="scss">
.input-field {
  border-radius: 0 5px 5px 0;
}
</style>
