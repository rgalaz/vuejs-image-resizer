import Vue from "vue";
import App from "./App.vue";
import Axios from "./plugins/axios";
import router from "./router";
import AuthPlugin from "./plugins/auth";
import HighlightJs from "./directives/highlight";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faLink, faUser, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import vuetify from "./plugins/vuetify";
import "@babel/polyfill";
import ImageUploader from "vue-image-upload-resize";
Vue.use(ImageUploader);

Vue.config.productionTip = false;

Vue.use(AuthPlugin);
Vue.use(Axios);
Vue.directive("highlightjs", HighlightJs);

library.add(faLink, faUser, faPowerOff);

Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
