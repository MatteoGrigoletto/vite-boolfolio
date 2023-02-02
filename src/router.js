import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./components/pages/HomePage.vue";
import Description from "./components/pages/Description.vue";
import Project from "./components/pages/Project.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "homepage",
      component: HomePage,
    },
    {
      path: "/info",
      name: "Description",
      component: Description,
    },
    {
      path: "/projects/:slug",
      name: "Project",
      component: Project,
    },
  ],
});
export default router;
