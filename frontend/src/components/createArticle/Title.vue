<template>
  <v-col cols="12" md="7">
    <v-text-field
      dense
      hide-details
      solo
      color="black"
      label="Title"
      v-model="title"
    ></v-text-field>
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
  }
}
</script>

<style scoped lang="scss"></style>
