<template>
  <v-col cols="12" md="6" class="py-0">
    <v-text-field
      dense
      hide-details
      solo
      append-icon="mdi-magnify"
      class="mb-1"
      color="black"
      label="Search"
    ></v-text-field>
  </v-col>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

@Component()
export default class SearchField extends Vue {}
</script>

<style scoped lang="scss">
.input-field {
  background-color: rgb(253, 249, 228);
  border-radius: 5px;
}
</style>
