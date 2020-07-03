import "./../../css/home.css";
import { store } from "./Common/store";
import image from "../../img/banner_index.png";
import { loadRoute } from "../Routing/actions";
/* 
DefaultComponent
the first site if you load the app, also the home site
*/
export class DefaultComponent extends HTMLElement {
  //implements the stor and the path for the button
  constructor() {
    super();
    this.store = store;
    this.path = "personalitytest";
  }
  //load the route for the personalitytest after pushing the button
  handleClick() {
    this.store.dispatch(loadRoute({ path: this.path }));
  }
  //subscrbes to the store
  //add an eventlister to the button
  //adds a css "on" class..this sets the hight of the content on auto
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
  //displays the default/home page
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
