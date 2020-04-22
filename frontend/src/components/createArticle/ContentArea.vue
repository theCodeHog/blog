<template>
    <div class="content-area input-field col s12">
      <textarea
        id="textarea1"
        class="materialize-textarea"
        placeholder="Write the article here"
      ></textarea>
    </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

@Component()
export default class ContentArea extends Vue {
  mounted() {
    this.$M.textareaAutoResize(document.querySelector("#textarea1"));
  }
}
</script>

<style scoped lang="scss">
.content-area {
  border: 1px solid black !important;
  border-radius: 5px;
}
textarea {
  min-height: 50vh !important;
}
.input-field input:focus + label {
  color: black !important;
}
/* label underline focus color */
.row .input-field input:focus {
  border-bottom: 1px solid black !important;
  box-shadow: 0 1px 0 0 black !important;
}
</style>
