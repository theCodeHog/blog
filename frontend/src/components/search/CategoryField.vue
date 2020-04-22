<template>
  <div class="input-field col s6 white">
    <select>
      <option disabled selected>Choose Category</option>
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
  elem;
  categories = [
    { name: "Java" },
    { name: "JavaScirpt" },
    { name: "SQL" },
    { name: "Vue" },
    { name: "React" },
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
