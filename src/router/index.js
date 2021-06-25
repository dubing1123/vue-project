import Vue from "vue";
import VueRouter from "vue-router";
import LogIn from "../views/login.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: LogIn },
  { path: "/login", component: LogIn },
];

const router = new VueRouter({
  routes,
});

export default router;
