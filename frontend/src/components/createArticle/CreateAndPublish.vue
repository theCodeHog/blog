<template>
  <div class="create-publish col s6">
    <v-btn rounded dark @click="createArticle">Create</v-btn>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import { uuid } from "../utilities/utils";

@Component()
export default class CreateAndPublish extends Vue {
  async createArticle() {
    this.$store.commit("articleStore/setArticle", { id: uuid() });
    this.$store.commit("articleStore/setArticle", {
      timestamp: Date.now() + "",
    });

    let res = await fetch("/rest/articles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.$store.state.articleStore.article),
    });
    res = await res.json();
    console.log(res);
  }
}
</script>

<style scoped lang="scss">
.create-publish {
  padding: 0 !important;
}
</style>
