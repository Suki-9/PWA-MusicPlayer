// css ---------------------------------------///
import "./Style/main.css";

// ts module ---------------------------------///
import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";
import VITE_env from "./plugins/VITE_env";


createApp(App).use(router).use(VITE_env).mount("#app");
