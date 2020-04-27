<template>
  <v-card flat tile min-height="100vh">
    <v-navigation-drawer absolute permanent>
      <v-list dense nav class="pa-0">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Navigation</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item link to="/" @click="backToHome">
          <v-list-item-content>
            <v-list-item-title>Start</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          link
          v-for="course in courses"
          :key="course.name"
          :to="`/articles/${course.name}`"
        >
          <v-list-item-content>
            <v-list-item-title>{{ course.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item link to="/create-article">
          <v-list-item-content>
            <v-list-item-title>Create Article</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

@Component()
export default class AsideNav extends Vue {
  path = null;

  backToHome() {
    this.$route.path === "/"
      ? this.$store.commit("setSortedArticles", null)
      : this.$router.push("/");
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
