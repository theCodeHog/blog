<template>
  <v-col cols="12" md="5">
    <v-text-field label="this-is-the-url" solo></v-text-field>
  </v-col>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
// import slugify from "slugify";

@Component()
export default class SlugTitle extends Vue {
  // get slug() {
  //   slugify(this.$store.state.articleStore.article.title, {
  //     replacement: "-",
  //     lower: true,
  //   });
  // }
}
</script>

<style scoped lang="scss"></style>
