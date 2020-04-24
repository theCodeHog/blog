<template>
  <div class="slug-title input-field col s12 m6">
    <input type="text" placeholder="this-is-the-url" v-model="slug" />
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import slugify from "slugify";

@Component()
export default class SlugTitle extends Vue {
  get slug() {
    slugify(this.$store.state.articleStore.article.title, {
      replacement: "-",
      lower: true,
    });
  }
}
</script>

<style scoped lang="scss"></style>
