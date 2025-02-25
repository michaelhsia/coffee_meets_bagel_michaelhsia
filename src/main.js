import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/main.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import axios from "axios";
import VueAxios from "vue-axios";

import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

const app = createApp(App);

app.use(createPinia());
app.use(VueAxios, axios);
app.use(VueSweetalert2);
app.use(router);

app.mount("#app");
