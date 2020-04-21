<template>
  <div class="left-panel">
    <h4>Navigation</h4>
    <h5 @click="backToHome">Start</h5>
    <h5 v-for="(course, i) in courses" :key="i" @click="sortArticlesByCourse">{{ course.name }}</h5>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

@Component()
export default class AsideNav extends Vue {
  backToHome() {
    this.$router.push({ name: "HomePage" });
  }

  sortArticlesByCourse(){
    
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
