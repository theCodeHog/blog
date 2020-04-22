<template>
  <div class="create-publish col s6">
    <button class="btn col s6">Create</button>
    <button class="btn col s6">Publish</button>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

@Component()
export default class CreateAndPublish extends Vue {}
</script>

<style scoped lang="scss">
.create-publish {
  padding: 0 !important;
}
</style>
