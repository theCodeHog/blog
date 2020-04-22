<template>
  <div class="slug-title input-field col s12 m6">
    <input type="text" placeholder="this-is-the-url"/>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

@Component()
export default class SlugTitle extends Vue {}
</script>

<style scoped lang="scss"></style>
