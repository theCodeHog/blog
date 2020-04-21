<template>
  <div class="home-page">
    <ArticleObject
      v-for="article in articles"
      :key="article.id"
      :article="article"
    >
    </ArticleObject>
  </div>
</template>

<script>
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import ArticleObject from "../components/articles/ArticleObject";

@Component({
  components: {
    ArticleObject
  },
})
export default class HomePage extends Vue {
  //Data
  name = "HelloWorld";
  message = "Wating on server";

  //Props
  @Prop()
  msg;

  //Watchers
  @Watch("message")
  onMessageChange(val) {
    console.log(val);
  }

  //Computed
  get articles() {
    return this.$store.state.articles;
  }

  //Methods
  async getSomeData() {
    let res = await fetch("/api/hello");
    res = await res.json();
    console.log(res);

    this.message = res.message;
  }

  created() {}

  mounted() {}

  beforeDestroyed() {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
