<template>
  <v-col cols="12" md="5">
    <v-text-field
      dense
      hide-details
      solo
      label="this-is-the-url"
      :value="slug"
    ></v-text-field>
  </v-col>
</template>

<script>
import { Vue, Component, Watch } from "vue-property-decorator";
import slugify from "slugify";

@Component()
export default class SlugTitle extends Vue {
  get slug() {
    if (this.$store.state.articleStore.article.title) {
      return slugify(this.$store.state.articleStore.article.title, {
        replacement: "-",
        remove: /[*+~.()'"!:@]/g,
        lower: true,
      });
    } else {
      return "";
    }
  }

  @Watch("slug")
  onSlugChange(newVal) {
    this.$store.commit("articleStore/setArticle", { slug: newVal });
  }
}
</script>

<style scoped lang="scss"></style>
