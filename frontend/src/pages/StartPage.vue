<template>
  <div class="hello">
    <h3>{{ fullName }}</h3>
    <h3>{{ message }}</h3>
    <br />
    <button @click="getSomeData" class="btn">Click me</button>
    <Test />
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
    return "Niklas " + "Håkansson";
  }

  //Methods
  async getSomeData() {
    let res = await fetch("/api/hello");
    res = await res.json();
    console.log(res);

    this.message = res.message;
  }

  created() {}

  mounted() {
    console.log(this.$M);
  }

  beforeDestroyed() {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
