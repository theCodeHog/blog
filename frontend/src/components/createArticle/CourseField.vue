<template>
  <v-col cols="12" md="6">
    <v-select
      dense
      hide-details
      multiple
      solo
      label="Choose Course"
      :items="courses"
      item-text="name"
      v-model="chosenCourses"
    >
    </v-select>
    <CoursesSelected
      @removeCourse="removeCourse"
      :chosenCourses="chosenCourses"
    />
  </v-col>
</template>

<script>
import { Vue, Component, Watch } from "vue-property-decorator";
import CoursesSelected from "./CoursesSelected";

@Component({
  components: {
    CoursesSelected,
  },
})
export default class CourseField extends Vue {
  chosenCourses = [];

  get courses() {
    return this.$store.state.courseStore.courses;
  }

  @Watch("chosenCourses")
  onValueChange(value) {
    this.$store.commit("articleStore/setArticle", {
      courses: value,
    });
  }

  removeCourse(index) {
    this.chosenCourses = this.chosenCourses.filter((course, i) => i !== index);
  }
}
</script>

<style></style>
