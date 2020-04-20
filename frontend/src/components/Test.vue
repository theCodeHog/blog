<template>
  <div class="testing">
    <h2>Testing importing components</h2>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

@Component()
export default class Test extends Vue {

}
</script>

<style lang="scss" scoped>
.testing {
  background-color: #bbb;
  h2 {
    color: green;
  }
}
</style>
