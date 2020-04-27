<template>
  <div class="create-article">
    <h1 class="headline grey--text ma-0">Create a new article</h1>
    <v-form>
      <v-row class="ma-0">
        <Title />
        <SlugTitle />
        <ContentArea />
      </v-row>
      <v-row>
        <v-col cols="12" sm="6">
          <CategoryField />
        </v-col>
        <v-col cols="12" sm="6">
          <CreateAndPublish />
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import Title from "../components/createArticle/Title";
import SlugTitle from "../components/createArticle/SlugTitle";
import ContentArea from "../components/createArticle/ContentArea";
import CategoryField from "../components/search/CategoryField";
import CreateAndPublish from "../components/createArticle/CreateAndPublish";

@Component({
  components: {
    Title,
    SlugTitle,
    ContentArea,
    CategoryField,
    CreateAndPublish,
  },
})
export default class CreateArticle extends Vue {}
</script>

<style scoped lang="scss">
.create-article {
  margin-top: 1em;
  padding: 0 1.5em !important;
}
.article-options {
  padding: 0 !important;
}
</style>
