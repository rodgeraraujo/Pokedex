import Vue from "vue";
import Router from "vue-router";

import Home from "@/views/Home.vue";
import Pokemon from "@/views/Pokemon.vue";
import NotFound404 from "@/views/404.vue";

Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: "history",
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: "/", name: "home", component: Home },
      { path: "/pokedex/:name", name: "Pokemon", component: Pokemon },
      {
        path: "/github",
        name: "github",
        beforeEnter() {
          location.href = "http://github.com/rodgeraraujo/pokedex";
        }
      },
      { path: "/404", name: "404", component: NotFound404 },
      { path: "*", redirect: "/404" }
    ]
  });
}
