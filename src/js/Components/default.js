import { Homebanner } from "./homebanner";

export class DefaultComponent {
  constructor() {
    let content = document.getElementById("content");
    let section = document.createElement("section");
    section.setAttribute("id", "home_banner_container");
    content.appendChild(section);
    this.render(section);
  }
  render(section) {
    let banner = new Homebanner();
    section.appendChild(banner);
  }
  /* connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<div style="height:100px; background-color:gold">
          <span>I am the home</span>
          </div>`;
  } */
}

/* customElements.define("default-component", DefaultComponent); */
