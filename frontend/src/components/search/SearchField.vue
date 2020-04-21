<template>
  <div class="searchField col s12 m3 push-m3">
    <input type="text" placeholder="Search" class="search-field white" />
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

@Component()
export default class SearchField extends Vue {}
</script>

<style scoped lang="scss">
 .search-field {
   border-radius: 5px !important;
 }
</style>
