// router.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import WorksLentera from "../components/works_lentera.vue";
import WorksDadJokes from "../components/works_dadJokes.vue";
import WorksFigmaVariable from "../components/works_FigmaVariable.vue";

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
    path: "/lenteraMVP",
    component: WorksLentera,
  },
  {
    path: "/FigmaVariable",
    component: WorksFigmaVariable,
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
