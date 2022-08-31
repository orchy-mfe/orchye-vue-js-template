import { createApp } from "vue";
import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";
import "./style.css";
import App from "./App.vue";

let root;

const rootSelector = "#app";

const render = ({ container } = {}) => {
  root = createApp(App);
  root.mount(container ? container.querySelector(rootSelector) : rootSelector);
};

renderWithQiankun({
  mount(props) {
    render(props);
  },
  bootstrap() {},
  unmount() {
    root.unmount();
    root._container.innerHTML = "";
    root = null;
  },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({});
}
