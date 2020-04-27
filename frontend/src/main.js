import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import vuetify from './plugins/vuetify';

Vue.prototype.$M = M;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount("#app");
