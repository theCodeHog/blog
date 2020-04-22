<template>
  <div class="article-header">
    <button class="btn " @click="backToHome">
      <i class="material-icons left">arrow_back</i>
      Back to Home
    </button>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

@Component()
export default class ArticleHeader extends Vue {

backToHome() {
  this.$router.push({name: "HomePage"})
}
}
</script>

<style scoped lang="scss">
  button {
    margin-top: 1em;
  }
</style>