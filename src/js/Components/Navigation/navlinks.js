import "./../../../css/nav.css";
import { ListItem } from "./listItem";
import { BurgerBtn } from "./burger";

/* 
NavLinks
creates all navigation links withe the routetitle of the routes-object
*/
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
    //creating listites with route-title store and a Burgerbutton
    Object.values(this.routes).map((route) => {
      if (route.flag) {
        let link = new ListItem(route.title, this.store, this.btn);
        nav.appendChild(link);
      }
    });
  }
}
