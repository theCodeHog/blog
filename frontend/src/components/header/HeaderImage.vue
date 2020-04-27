<template>
  <v-row class="header pb-0">
    <v-col cols="12">
      <p class="center white-text bold flow-text">Javautvecklare '19</p>
    </v-col>
    <v-col cols="4" offset="4">
      <SearchField />
      <!-- <CategoryField /> -->
    </v-col>
  </v-row>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import SearchField from "../search/SearchField";
import CategoryField from "../search/CategoryField";

@Component({
  components: {
    SearchField,
    CategoryField,
  },
})
export default class HeaderImage extends Vue {}
</script>

<style scoped lang="scss">
.header {
  background-image: url("../../assets/images/DummySchool.jpg");
  background-size: cover;
  background-position: center;
  margin: 0;

  p {
    font-weight: bold;
    font-size: 2.5em;
    margin: 0;
  }
}
</style>
