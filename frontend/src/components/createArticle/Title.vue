<template>
  <div class="article-title input-field col s12 m6">
    <input type="text" placeholder="Title"/>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

@Component()
export default class Title extends Vue {}
</script>

<style scoped lang="scss"></style>
