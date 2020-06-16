import Vue from "vue";
import Router from "vue-router";

import HomeView from "@/views/HomeView.vue";
import PokemonView from "@/views/PokemonView.vue";
import NotFound404View from "@/views/404View.vue";

Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: "history",
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: "/", name: "home", component: HomeView },
      { path: "/pokedex/:name", name: "Pokemon", component: PokemonView },
      {
        path: "/github",
        name: "github",
        beforeEnter() {
          location.href = "http://github.com/rodgeraraujo/pokedex";
        }
      },
      { path: "/404", name: "404", component: NotFound404View },
      { path: "*", redirect: "/404" }
    ]
  });
}
