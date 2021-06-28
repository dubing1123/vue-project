import Vue from "vue";
import VueRouter from "vue-router";
import LogIn from "../views/login.vue";
import Map from "../views/map.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: LogIn },
  { path: "/login", component: LogIn },
  { path: "/map", component: Map },
];

const router = new VueRouter({
  routes,
});

export default router;
