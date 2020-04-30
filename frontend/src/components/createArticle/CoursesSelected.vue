<template>
  <div class="mt-2">
    <v-chip
      small
      outlined
      class="ma-1"
      v-for="(course, index) in chosenCourses"
      :key="index"
      @click="removeCourse(index)"  
    >
      {{ course }}
      <v-icon right>mdi-delete-forever</v-icon>
    </v-chip>
  </div>
</template>

<script>
import { Vue, Component, Prop } from "vue-property-decorator";

@Component()
export default class CoursesSelected extends Vue {
  @Prop()
  chosenCourses;

  removeCourse(index) {
    this.$emit("removeCourse", index);
  }
}
</script>

<style></style>
