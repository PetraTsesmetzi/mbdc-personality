/* 
List Items-
Every list-items will be subscribed at the store, get's a event listener
after the link has been clicked the new route path willl be set in the store state
*/
import { loadRoute } from "../../Routing/actions";
export class ListItem extends HTMLElement {
  constructor(route, store, btn) {
    super();
    this.route = {
      text: route,
      path: route,
    };
    this.store = store;
    this.btn = btn;
  }
  //after a click on a link the dispatch method from store will be called
  //the burger-button will be toggled
  handleClick() {
    this.store.dispatch(loadRoute({ path: this.route.path }));
    this.btn.toggleMobileBtn();
  }
  //the link gets subscribt at the store
  //adds an eventlister on the links
  connectedCallback() {
    this.store.subscribe(this.render.bind(this));
    this.addEventListener("click", this.handleClick);
    this.render();
  }
  //sets the backgroundColor of the links after their were pressed
  render() {
    let linkBgColour;
    this.route.path === this.store.state.route.path
      ? (linkBgColour = "style=background:#4caf50")
      : (linkBgColour = "");
    this.innerHTML = `<li ${linkBgColour} class="nav_link">${this.route.text}</li>`;
  }
}
customElements.define("list-item", ListItem);
