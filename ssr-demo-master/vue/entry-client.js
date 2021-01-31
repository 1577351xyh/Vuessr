// const createApp = require("./main.js");
// let {app,router} = createApp({});

// router.onReady(() => {
//     app.$mount("#app")
// });

import {initVue} from "./main";

const {app,store,router}=initVue();

router.onReady(()=>{
  app.$mount("#app");
});