import Vue from "vue";
import App from "./App.vue";
import { initRouter } from "./router";

// import {sync} from "vuex-router-sync";

export function initVue() {
  const { router } = initRouter();
  // sync(store,router);
  const app = new Vue({
    router,
    render: h => h(App)
  });
  return { app, router, App };
  // return {app,store,App};
}