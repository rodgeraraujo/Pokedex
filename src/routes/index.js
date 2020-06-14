import Vue from "vue";
import Router from "vue-router";

import Home from "@/views/Home.vue";
import Pokemon from "@/views/Pokemon.vue";
import NotFound404 from "@/views/404.vue";

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
      path: "/pokedex/:name",
      name: "Pokemon",
      component: Pokemon
    },
    {
      path: "/github",
      name: "github",
      beforeEnter() {
        location.href = "http://github.com/rodgeraraujo/pokedex";
      }
    },
    {
      path: "/404",
      name: "404",
      component: NotFound404
    },
    { path: "*", redirect: "/404" }
  ]
});

const scrollableElementId = "container";
const scrollPositions = Object.create(null);

router.beforeEach((to, from, next) => {
  let element = document.getElementById(scrollableElementId);
  if (element !== null) {
    scrollPositions[from.name] = element.scrollTop;
  }

  console.log(element);

  next();
});

window.addEventListener("popstate", () => {
  let currentRouteName = router.history.current.name;

  console.log(currentRouteName);

  let element = document.getElementById(scrollableElementId);
  if (element !== null && currentRouteName in scrollPositions) {
    setTimeout(
      () => (element.scrollTop = scrollPositions[currentRouteName]),
      50
    );
  }
});

export default router;
