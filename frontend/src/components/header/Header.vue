<template>
  <div>
    <nav class="red">
      <div class="nav-wrapper container">
        <a href="#" data-target="mobile-demo" class="sidenav-trigger"
          ><i class="material-icons">menu</i></a
        >
        <ul class="hide-on-med-and-down">
          <li v-for="(link, i) in links" :key="i">
            <router-link :to="link.url">{{ link.name }}</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <ul class="sidenav" id="mobile-demo">
      <!-- insert mobile links here too later -->
      <li v-for="(link, i) in links" :key="i">
        <router-link :to="link.url">{{ link.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

@Component()
export default class Header extends Vue {
  links = [
    { name: "HOME", url: "/" },
    { name: "Create Article", url: "/create" },
  ];
}
</script>

<style lang="scss" scoped></style>
