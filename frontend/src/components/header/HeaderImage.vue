<template>
  <div class="header">
    <p class="center white-text bold flow-text">Javautvecklare '19</p>
      <div class="col s12 m8 offset-m2">
        <SearchField />
        <!-- <CategoryField /> -->
      </div>
  </div>
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
