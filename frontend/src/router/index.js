import Vue from "vue";
import VueRouter from "vue-router";HomePage
import HomePage from "../pages/HomePage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
