//Router.js
import { loadRoute } from "./actions";

export default class Router {
  constructor(config) {
    this.routes = config.routes;
    this.routerOutlet = document.getElementById("content");
    /* this.routerOutlet = document.createElement("section");
    content.appendChild(this.routerOutlet); */
    config.store.subscribe(this.render.bind(this));
    config.store.dispatch(loadRoute({ path: config.path }));
    this.handleBackButton(config.store);
  }
  handleBackButton(store) {
    window.onpopstate = (event) => {
      let content = "";
      if (event.state) {
        content = event.state.page;
        store.dispatch(loadRoute({ path: content, back: true }));
      }
    };
  }

  render(previousState, state) {
    console.log(state.route);
    let includesPath = Object.keys(this.routes).includes(state.route.path);
    if (!includesPath) state.route.path = "pagenotfound";

    if (previousState.route.path != state.route.path) {
      let page = state.route.path;
      let back = state.route.back;
      while (this.routerOutlet.firstChild) {
        this.routerOutlet.removeChild(this.routerOutlet.firstChild);
      }
      if (!back) {
        history.pushState({ page }, null, `/${page}`);
      }

      this.routerOutlet.appendChild(new this.routes[state.route.path]());
    }
  }
}
