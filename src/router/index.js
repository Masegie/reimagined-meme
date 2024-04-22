// router.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import WorksLentera from "../components/works_lentera.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/lentera",
    component: WorksLentera,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
