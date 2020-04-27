<template>
  <v-col cols="12" md="7">
    <v-text-field label="Title" solo color="black"></v-text-field>
  </v-col>
</template>

<script>
import { Vue, Component, Watch } from "vue-property-decorator";

@Component()
export default class Title extends Vue {
  title = "";

  @Watch("title")
  onTitleChange(newVal) {
    this.$store.commit("articleStore/setArticle", { title: newVal });
    console.log(this.$store.state.articleStore.article);
  }
}
</script>

<style scoped lang="scss"></style>
