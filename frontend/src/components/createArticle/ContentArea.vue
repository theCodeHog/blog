<template>
  <v-col cols="12">
    <v-textarea
      auto-grow
      hide-details
      solo
      label="Text"
      v-model="text"
    ></v-textarea>
  </v-col>
</template>

<script>
import { Vue, Component, Watch } from "vue-property-decorator";

@Component()
export default class ContentArea extends Vue {
  text = "";

  @Watch("text")
  onTextChange(newVal) {
    this.$store.commit("articleStore/setArticle", { content: newVal });
  }
}
</script>

<style scoped lang="scss"></style>
