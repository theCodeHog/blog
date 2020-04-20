<template>
  <div class="top-image">
    <p class="center white-text bold flow-text">Javautvecklare '19</p>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

@Component()
export default class HeaderImage extends Vue {}
</script>

<style lang="scss" scoped>
.top-image {
  height: 20vh;
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
