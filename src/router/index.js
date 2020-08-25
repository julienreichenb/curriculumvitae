import Vue from "vue";
import VueRouter from "vue-router";
import i18n from "../plugins/i18n";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: `/${i18n.locale}`,
  },
  {
    path: "/:lang",
    component: {
      render(c) {
        return c("router-view");
      },
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
