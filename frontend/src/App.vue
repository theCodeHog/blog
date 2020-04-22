<template>
  <div id="app">
    <div class="row">
      <HeaderImage class="col s12"/>
      <AsideNav class="col l2 hide-on-med-and-down" />
      <router-view class="col s12 l8" />
      <PlaceHolder class="col l2 hide-on-med-and-down" />
    </div>
    <Footer />
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import Header from "./components/header/Header";
import HeaderImage from "./components/header/HeaderImage";
import AsideNav from "./components/navigation/AsideNav";
import PlaceHolder from "./components/notifications/PlaceHolder";
import Footer from "./components/Footer";

@Component({
  components: {
    Header,
    HeaderImage,
    AsideNav,
    PlaceHolder,
    Footer,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
body {
  background-color: rgb(253, 249, 228);
}
button {
  background-color: #597318 !important;
}
// .input-field input:focus + label {
//   color: #597318 !important;
// }
// /* label underline focus color */
// .row .input-field input:focus {
//   border-bottom: 1px solid #597318 !important;
//   box-shadow: 0 1px 0 0 #597318 !important;
// }
</style>
