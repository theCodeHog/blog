<template>
  <div class="article-title input-field col s12 m6">
    <input type="text" placeholder="Title" v-model="title" />
  </div>
</template>

<script>
import { Vue, Component, Watch } from "vue-property-decorator";

@Component()
export default class Title extends Vue {
  title = "";

  @Watch("title")
  onTitleChange(newVal) {
    this.$store.commit("articleStore/setArticle", { title: newVal })
    console.log(this.$store.state.articleStore.article);
  }
}
</script>

<style scoped lang="scss"></style>
