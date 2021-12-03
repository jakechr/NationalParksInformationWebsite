import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import router from "./router";
import mockData from "../starter-code/hikes-data";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

let data = {
  hikes: mockData,
};

new Vue({
  router,
  data,
  render: (h) => h(App),
}).$mount("#app");
