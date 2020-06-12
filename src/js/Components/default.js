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
    let content = document.getElementById("content");
    content.classList.add("on");
    this.render();
    this.store.subscribe(this.render.bind(this));
    let button = document.getElementById("test_btn");
    button.addEventListener("click", this.handleClick.bind(this));
  }
  disconnectedCallback() {
    let content = document.getElementById("content");
    content.classList.remove("on");
  }
  render() {
    this.innerHTML = `
   
    <section id="home_banner_container">
      <div id="home_banner_img"> 
        <div id="home_banner_desc">
          <h1>WHO AM I?</h1>
          <h2>
            Take our Personality Test and get a “freakishly&nbsp;accurate”
           
            description of who you are and why you do things the way
            you do.
          </h2>
          <button id="test_btn" class="button">Take the Test</button>
        </div>
     </div>
    </section>`;
  }
}

customElements.define("home-component", DefaultComponent);
