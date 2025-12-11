import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import AOS from "aos";
import "aos/dist/aos.css";
// import './style.css'

const app = createApp(App);
app.use(router);
app.mount("#app");

// Initialize AOS with proper settings
AOS.init({
  duration: 800,
  easing: "ease-in-out",
  once: false,
  offset: 100,
});

// Re-initialize AOS on route change
router.afterEach(() => {
  setTimeout(() => {
    AOS.refresh();
  }, 100);
});
