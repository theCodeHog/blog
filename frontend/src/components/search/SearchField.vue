<template>
  <div class="input-field col s12 m6 push-m3">
    <input type="text" placeholder="Search" />
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

@Component()
export default class SearchField extends Vue {}
</script>

<style scoped lang="scss">
.input-field {
  background-color: rgb(253, 249, 228);
  border-radius: 5px;
}
</style>
