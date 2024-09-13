// router.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import WorksLentera from "../components/works_lentera.vue";
import WorksDadJokes from "../components/works_dadJokes.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/lentera",
    component: WorksLentera,
  },
  {
    path: "/dadJokes",
    component: WorksDadJokes,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
