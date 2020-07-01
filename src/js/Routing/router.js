import { loadRoute } from "./actions";
import { setDynamicRoutes } from "./routes";
/* 
Router
handles the routing between the nav links and the 
nested routes like personalitytype or the testresult
implements the functionality of the back and forward button of the browser
*/
export default class Router {
  //sets the route and routerOutlet attributes
  //subscribes to the store
  // dispatched the first route if you load the page for the first time
  constructor(config) {
    this.routes = config.routes;
    this.routerOutlet = document.getElementById("content");
    config.store.subscribe(this.render.bind(this));
    config.store.dispatch(loadRoute({ path: config.path }));
    this.handleBackButton(config.store);
  }
  //handles the backbutton of the browser
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
    if (previousState.route.path != state.route.path) {
      let page = state.route.path;
      let back = state.route.back;
      if (page.includes("_")) setDynamicRoutes(page.slice(page.indexOf("_") + 1));
      let route = this.routes.find((route) => route.path === page);
      if (typeof route === "undefined") {
        page = "pagenotfound";
        route = this.routes.find((route) => route.path === page);
      }

      while (this.routerOutlet.firstChild) {
        this.routerOutlet.removeChild(this.routerOutlet.firstChild);
      }
      if (!back) {
        history.pushState({ page }, null, `/${page}`);
      }
      this.routerOutlet.appendChild(new route.component());
    }
  }
}
