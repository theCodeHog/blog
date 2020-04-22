<template>
  <div class="create-article">
    <form>
      <Title />
      <!-- <SlugTitle />
      <ContentArea /> -->
    </form>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import Title from "../components/createArticle/Title";
import SlugTitle from "../components/createArticle/SlugTitle";
import ContentArea from "../components/createArticle/ContentArea";

@Component({
  components: {
    Title,
    SlugTitle,
    ContentArea
  }
})
export default class CreateArticle extends Vue {}
</script>

<style scoped lang="scss"></style>
