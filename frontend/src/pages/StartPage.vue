<template>

  <div class="home white">
    <form><input type="text" /></form>
    <select>
      <option value=""></option>
    </select>
  </div>

</template>

<script>
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import Test from "../components/Test";

@Component({
  components: {
    Test,
  },
})
export default class StartPage extends Vue {
  //Data
  name = "HelloWorld";
  message = "Wating on server";

  //Props
  @Prop()
  msg;

  //Watchers
  @Watch("message")
  onMessageChange(val) {
    console.log(val);
  }

  //Computed
  get fullName() {
    return "";
  }

  //Methods
  async getSomeData() {
    let res = await fetch("/api/hello");
    res = await res.json();
    console.log(res);

    this.message = res.message;
  }

  created() {}

  mounted() {}

  beforeDestroyed() {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home{
  padding: 0 2em;
  min-height: 75vh;
}
select{
  margin: 1em 0;
  display: block;
}
</style>
