import { createApp } from "vue";
import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";

let app;

const rootSelector = "#app";

const createAppRouter = (props) =>
  createRouter({
    history: createWebHistory(props.baseUrl),
    routes: [],
  });

const render = (props = {}) => {
  app = createApp(App);
  app.use(createAppRouter(props));
  app.mount(props.container?.querySelector(rootSelector) || rootSelector);
};

renderWithQiankun({
  mount(props) {
    render(props);
  },
  bootstrap() {},
  unmount() {
    app.unmount();
    app._container.innerHTML = "";
    app = null;
  },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({});
}
