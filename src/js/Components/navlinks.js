import { ListItem } from "./listItem";
import { BurgerBtn } from "./burger";

export class NavLinks {
  constructor(config) {
    this.routes = config.routes;
    this.store = config.store;
    let navcontent = document.getElementById("navigation_content");
    let nav = document.createElement("ul");
    nav.setAttribute("id", "nav_links");
    navcontent.insertBefore(nav, navcontent.lastElementChild);
    this.btn = new BurgerBtn(nav);
    this.render(nav);
  }
  render(nav) {
    Object.keys(this.routes).map((route) => {
      if (route != "" && route != "pagenotfound") {
        let link = new ListItem(route, this.store, this.btn);
        nav.appendChild(link);
      }
    });
  }
}
