import Vue from "vue";
import Router from "vue-router";
import Album from "./views/Album.vue";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/album/:album",
      name: "album",
      component: Album,
    },
    {
      path: "/",
      name: "home",
      component: Home,
    },
  ],
});