import "./../../css/home.css";
import image from "../../img/banner_index.png";
export class Homebanner extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<div id="home_banner">
        <div id="home_banner_desc">
          <h1>WHO AM I?</h1>
          <h2>
            Take our Personality Test and get a “freakishly&nbsp;accurate”
            <br />
            description of who you are and why you do things the way
            you do.
          </h2>
          <a
            href="view/personality_test/personalitytest.html"
            class="button"
            >Take the Test</a
          >
        </div>
      </div>
      <div id="home_banner_img">
        <img src="${image}" alt="banner_index" />
      </div>`;
  }
}

customElements.define("homebanner-component", Homebanner);
