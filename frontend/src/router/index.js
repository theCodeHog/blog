import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../pages/HomePage";
import ArticlePage from "../pages/ArticlePage";
import SortedArticlesPage from "../pages/SortedArticlesPage";
import CreateArticle from "../pages/CreateArticle";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage
  },
  {
    path: "/articles/:courseName",
    name: "SortedArticlesPage",
    component: SortedArticlesPage
  },
  {
    path: "/article/:articleName",
    name: "ArticlePage",
    component: ArticlePage
  },
  {
    path: "/create-article",
    name: "CreateArticle",
    component: CreateArticle
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
