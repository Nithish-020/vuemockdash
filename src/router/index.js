import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Ipo from "../views/Ipo.vue";
import Sgb from "../views/Sgb.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dash Board",
    component: Home,
  },
  {
    path: "/ipo",
    name: "Ipo",
    component: Ipo,
  },
  {
    path: "/sgb",
    name: "Sgb",
    component: Sgb,
  },
  {
    path: "/corporateBond",
    name: "CorporateBond",
    component: Sgb,
  },
  {
    path: "/mutalFunds",
    name: "Mutal Fund",
    component: Sgb,
  },
  {
    path: "/gsec",
    name: "G-Sec",
    component: Sgb,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
