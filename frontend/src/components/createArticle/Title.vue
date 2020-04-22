<template>
  <div class="article-title input-field">
    <label for="">Title</label>
    <input type="text" />
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

@Component()
export default class Title extends Vue {}
</script>

<style scoped lang="scss"></style>
