import "./../../css/home.css";
import { store } from "./Common/store";
import image from "../../img/banner_index.png";
import { loadRoute } from "../Routing/actions";

export class DefaultComponent extends HTMLElement {
  constructor() {
    super();
    this.store = store;
    this.path = "personalitytest";
  }

  handleClick() {
    this.store.dispatch(loadRoute({ path: this.path }));
  }
  connectedCallback() {
    this.render();
    this.store.subscribe(this.render.bind(this));
    let button = document.getElementById("test_btn");
    this.addEventListener("click", this.handleClick);
  }

  render() {
    this.innerHTML = `<section id="home_banner_container"><div id="home_banner">
        <div id="home_banner_desc">
          <h1>WHO AM I?</h1>
          <h2>
            Take our Personality Test and get a “freakishly&nbsp;accurate”
            <br />
            description of who you are and why you do things the way
            you do.
          </h2>
          <button id="test_btn" class="button">Take the Test</button>
        </div>
      </div>
      <div id="home_banner_img">
        <img src="${image}" alt="banner_index" />
      </div>
      </section>`;
  }
}

customElements.define("home-component", DefaultComponent);
