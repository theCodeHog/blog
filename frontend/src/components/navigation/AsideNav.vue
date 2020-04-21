<template>
  <div class="left-panel">
    <h4>Navigation</h4>
    <hr />
    <h5 @click="backToHome">Start</h5>
    <h5
      v-for="(course, i) in courses"
      :key="i"
      @click="sortArticlesByCourse(course.name)"
    >
      {{ course.name }}
    </h5>
    <hr />
    <h5 @click="goToCreateArticle">Create Article</h5>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

@Component()
export default class AsideNav extends Vue {
  backToHome() {
    this.$route.path === "/"
      ? this.$store.commit("setSortedArticles", null)
      : this.$router.push("/");
  }

  sortArticlesByCourse(courseName) {
    let sortedArticlesByCourse = this.$store.state.articles.filter(
      (article) => {
        return article.courses.some((course) => {
          return course.name === courseName;
        });
      }
    );

    this.$store.commit("setSortedArticles", sortedArticlesByCourse);
  }

  goToCreateArticle() {
    this.$router.push("/create-article");
  }

  get courses() {
    return this.$store.state.education.courses;
  }
}
</script>

<style scoped lang="scss">
h5 {
  cursor: pointer;
}

h5:hover {
  color: #597318;
}
</style>
