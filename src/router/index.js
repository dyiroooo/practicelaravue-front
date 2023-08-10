import Vue from "vue";
import VueRouter from "vue-router"; // Import VueRouter

import Jiro from "@/views/components/JiroComponent.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "jiro",
    component: Jiro,
  },
];

// Create a history mode router (if needed)
const router = new VueRouter({
  routes,
});

export default router;
