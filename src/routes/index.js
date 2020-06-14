import Vue from "vue";
import Router from "vue-router";

import Home from "@/views/Home.vue";
import Pokemon from "@/views/Pokemon.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/pokemon/:name",
      name: "Pokemon",
      component: Pokemon
    },
    {
      path: "/github",
      name: "github",
      beforeEnter() {
        location.href = "http://github.com/rodgeraraujo/pokedex";
      }
    }
  ]
});

export default router;
