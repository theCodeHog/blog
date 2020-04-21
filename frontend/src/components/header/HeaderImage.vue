<template>
  <div class="header row">
    <p class="center white-text bold flow-text">Javautvecklare '19</p>
    <SearchField />
    <CategoryField />
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

  p {
    margin: 0;
    padding: 1em;
    font-weight: bold;
    font-size: 2.5em;
  }
}
</style>
