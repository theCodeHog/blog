<template>
  <div id="app">
    <HeaderImage />
    <div class="row">
      <AsideNav class="col l3 hide-on-med-and-down" />
      <router-view class="col s12 l6" />
      <PlaceHolder class="col l3 hide-on-med-and-down" />
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
body {
  background-color: rgb(253, 249, 228);
}
select {
  display: block !important;
}
</style>
