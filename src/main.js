import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import VueMasonry from "vue-masonry-css";
import VModal from "vue-js-modal";
Vue.config.productionTip = false;
Vue.use(VueMasonry);
Vue.use(VModal, { componentName: "Foo" });
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
