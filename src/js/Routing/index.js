import Router from "./router";
import { routes } from "./routes";
import { NavLinks } from "../Components/Navigation/navlinks";
import { store } from "../Components/Common/store";
import { Navbar } from "../Components/Navigation/navbar";
import { Footer } from "../Components/footer";

/*
Index
intialise the Navlinks, Router and Navbar
*/
export default class Index {
  constructor() {
    //store the url
    let path = window.location.pathname.substr(1);
    if (path === "") path = "home";

    //create a config object with routes, store and the path
    let config = {
      routes: routes,
      store: store,
      path: path,
    };
    //create three Object NavLinks, Router and Navbar
    new NavLinks(config);
    new Router(config);
    new Navbar();
    new Footer();
  }
}
