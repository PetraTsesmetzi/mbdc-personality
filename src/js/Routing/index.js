//index.js
import Router from "./router";
import { routes } from "./routes";
import { NavLinks } from "../Components/Navigation/navlinks";
import { store } from "../Components/Common/store";
import { Navbar } from "../Components/Navigation/navbar";

export default class Index {
  constructor() {
    let path = window.location.pathname.substr(1);
    if (path === "") path = "home";
    console.log(path);
    let config = {
      routes: routes,
      store: store,
      path: path,
    };
    new NavLinks(config);
    new Router(config);
    new Navbar();
  }
}
