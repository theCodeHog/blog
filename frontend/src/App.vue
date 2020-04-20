<template>
  <div id="app">
    <HeaderImage />
    <Header />
    <router-view class="container"/>
    <Footer />
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import Header from "./components/header/Header";
import HeaderImage from "./components/header/HeaderImage";
import Footer from "./components/Footer";

@Component({
  components: {
    Header,
    HeaderImage,
    Footer
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
body {
  background-color:rgb(253, 249, 228)
}
</style>
