<template>
    <v-select
    :items="categories"
    label="Choose Category"
    solo
    >
    </v-select>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

@Component()
export default class CategoryField extends Vue {
  elem;
  categories = [
    "Java",
    "JavaScirpt",
    "SQL",
    "Vue",
    "React",
  ];

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
