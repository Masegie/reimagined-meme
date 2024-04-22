// main.js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./style.css"; // Import Tailwind CSS styles

const app = createApp(App);
app.use(router);
app.mount("#app");
