import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/style/bootstrap-grid.min.css";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

Vue.use(Toast, {
  position: "bottom-center",
  pauseOnFocusLoss: false,
  pauseOnHover: false,
  hideProgressBar: true,
  timeout: 1500
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
