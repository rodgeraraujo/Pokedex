import Vue from "vue";
import Router from "vue-router";

import Home from "@/views/Home.vue";
// import PokeView from "@/views/PokeView.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    }
    // {
    //   path: "/pokemon/:name",
    //   name: "PokeView",
    //   component: PokeView
    // }
  ]
});

export default router;
