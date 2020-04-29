<template>
  <v-select
    dense
    hide-details
    solo
    label="Choose Course"
    :items="courses"
    item-text="name"
    v-model="chosenCourse"
  >
  </v-select>
</template>

<script>
import { Vue, Component, Watch } from "vue-property-decorator";

@Component()
export default class CourseField extends Vue {
  chosenCourse = "";
  chosenCourses = [];

  get courses() {
    return this.$store.state.courseStore.courses;
  }

  @Watch("chosenCourse")
  onChosenCourseChange(newVal) {
    this.chosenCourses.push(newVal);
    this.$store.commit("articleStore/setArticle", {courses: this.chosenCourses});
  }

  created() {
    this.$store.dispatch("courseStore/getCourses");
  }
}
</script>

<style></style>
