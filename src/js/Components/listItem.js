import { loadRoute } from "../Routing/actions";
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
  handleClick() {
    this.store.dispatch(loadRoute({ path: this.route.path }));
    this.btn.toggleMobileBtn();
  }
  connectedCallback() {
    this.store.subscribe(this.render.bind(this));
    this.addEventListener("click", this.handleClick);
    this.render();
  }

  render() {
    let linkBgColour;
    this.route.path === this.store.state.route.path
      ? (linkBgColour = "style=background:#4caf50")
      : (linkBgColour = "");
    this.innerHTML = `<li ${linkBgColour} class="nav_link">${this.route.text}</li>`;
  }
}
customElements.define("list-item", ListItem);
