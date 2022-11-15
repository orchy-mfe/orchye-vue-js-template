import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";

import OrchyMicroFrontend from "@orchy-mfe/spa-adapter";

export class VueMfe extends OrchyMicroFrontend {
  async mount(microFrontendProperties) {
    this.app = createApp(App);
    this.app.use(this.createAppRouter(microFrontendProperties));
    this.app.mount(this.getContainer());
  }

  createAppRouter(microFrontendProperties) {
    return createRouter({
      history: createWebHistory(microFrontendProperties?.basePath),
      routes: [],
    });
  }

  async unmount() {
    if (this.app) {
      this.app.unmount();
      this.app._container.innerHTML = "";
    }
    this.app = null;
  }
}

customElements.define("vue-mfe", VueMfe);
