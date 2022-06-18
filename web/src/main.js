import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import normalize from "normalize.css";
import global from "@/assets/_global.scss";

Vue.config.productionTip = false;

Vue.use(normalize);
Vue.use(global);
new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
